#!/usr/bin/env python3
"""Fix asset references inside GDevelop layout JSON files.

This script reads the project manifest and updates values found in layout fields like:
- image
- texture
- file

It uses the current resource `file` and `name` as the source of truth.

Examples:
  python3 scripts/fix_layout_paths.py layouts/menu.json
  python3 scripts/fix_layout_paths.py --all
  python3 scripts/fix_layout_paths.py --all --apply
"""

import argparse
import json
import re
import shutil
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
ROAD_JSON = PROJECT_ROOT / "Road to Aywen.json"
LAYOUTS_DIR = PROJECT_ROOT / "layouts"
IGNORE_SEGMENTS = {'.build', 'build'}


def normalize(path: str) -> str:
    if not isinstance(path, str):
        return path

    p = path.replace('\\', '/')
    p = re.sub(r'/+', '/', p)
    if p.startswith('./'):
        p = p[2:]
    if p.startswith('build/app/'):
        p = p.split('/')[-1]
    if p.startswith('.build/'):
        p = p.split('/')[-1]
    if 'assets/assets/' in p:
        p = p.replace('assets/assets/', 'assets/')
    while 'assets/assets/' in p:
        p = p.replace('assets/assets/', 'assets/')
    while 'assets/assets' in p:
        p = p.replace('assets/assets', 'assets')
    if p.startswith('assets') and p.count('assets/') > 1:
        parts = [part for part in p.split('/') if part]
        cleaned = []
        for part in parts:
            if part == 'assets' and cleaned and cleaned[-1] == 'assets':
                continue
            cleaned.append(part)
        p = '/'.join(cleaned)
    return p.strip()


def alias_variants(value: str):
    values = set()
    if not value:
        return values

    v = normalize(value)
    values.add(v)
    values.add(v.lower())
    values.add(v.strip('/'))

    base = Path(v).name
    stem = Path(v).stem
    if base:
        values.add(base)
        values.add(base.lower())
        values.add(stem)
        values.add(stem.lower())

    if v.startswith('assets/'):
        short = v[len('assets/') :]
        values.add(short)
        values.add(short.lower())
        values.add(Path(short).name)
        values.add(Path(short).stem)

    # normalize accents and punctuation to compare "Déconnage.ogg" with "deconnage.ogg"
    def strip_accents(s):
        import unicodedata
        return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

    for label in [base, stem, v, v.strip('/')]:
        if not label:
            continue
        plain = strip_accents(label).lower()
        plain = plain.replace(' ', '_').replace('-', '_')
        values.add(plain)
        values.add(re.sub(r'[^a-z0-9_]+', '', plain))
        values.add(re.sub(r'[^a-z0-9]+', '', plain))

    compact = re.sub(r'[^a-z0-9]+', '', (Path(v).name or v).lower())
    if compact:
        values.add(compact)

    stem_compact = re.sub(r'[^a-z0-9]+', '', (Path(v).stem or v).lower())
    if stem_compact:
        values.add(stem_compact)

    return {x for x in values if x}


def load_manifest_resources():
    if not ROAD_JSON.exists():
        raise FileNotFoundError(f"Manifest not found: {ROAD_JSON}")

    with ROAD_JSON.open('r', encoding='utf-8') as f:
        data = json.load(f)

    resources = data.get('resources', {}).get('resources', [])
    lookup = {}
    for item in resources:
        if not isinstance(item, dict):
            continue

        for raw in [item.get('file'), item.get('name')]:
            if not isinstance(raw, str):
                continue
            canonical = normalize(raw)
            if not canonical:
                continue
            if any(part in IGNORE_SEGMENTS for part in Path(canonical).parts):
                continue
            for alias in alias_variants(canonical):
                lookup[alias] = canonical

    # hashed bare names as last resort
    for item in resources:
        if not isinstance(item, dict):
            continue
        file_path = item.get('file')
        if not isinstance(file_path, str):
            continue
        canonical = normalize(file_path)
        if any(part in IGNORE_SEGMENTS for part in Path(canonical).parts):
            continue
        basename = Path(canonical).name
        stem = Path(canonical).stem
        lookup[basename] = canonical
        lookup[basename.lower()] = canonical
        lookup[stem] = canonical
        lookup[stem.lower()] = canonical
        lookup[re.sub(r'[^a-z0-9]+', '', basename.lower())] = canonical
        lookup[re.sub(r'[^a-z0-9]+', '', stem.lower())] = canonical
        lookup[re.sub(r'[^a-z0-9_]+', '', stem.lower().replace('-', '_').replace(' ', '_'))] = canonical

    return lookup


def looks_like_asset_path(value: str) -> bool:
    if not isinstance(value, str):
        return False
    v = normalize(value)
    if not v:
        return False
    if any(part in IGNORE_SEGMENTS for part in Path(v).parts):
        return False
    if v.startswith('assets/') or v.startswith('./assets/'):
        return True
    if '/assets/' in v or v.startswith('assets'):
        return True
    if '.' in v and ('png' in v.lower() or 'jpg' in v.lower() or 'jpeg' in v.lower() or 'gif' in v.lower() or 'mp3' in v.lower() or 'ogg' in v.lower() or 'mp4' in v.lower() or 'webm' in v.lower() or 'wav' in v.lower() or 'ttf' in v.lower() or 'fnt' in v.lower()):
        return True
    return False


def fix_value(value, lookup):
    if not isinstance(value, str):
        return value

    v = normalize(value)
    if not v:
        return value
    if any(part in IGNORE_SEGMENTS for part in Path(v).parts):
        return value

    # direct match first
    if v in lookup:
        return lookup[v]
    if v.startswith('assets/') and 'assets/assets/' in v:
        v = v.replace('assets/assets/', 'assets/')
        if v in lookup:
            return lookup[v]

    # alias matches second
    for candidate in alias_variants(v):
        if candidate in lookup:
            return lookup[candidate]

    basename = Path(v).name
    stem = Path(v).stem
    if basename in lookup:
        return lookup[basename]
    if stem in lookup:
        return lookup[stem]
    if re.sub(r'[^a-z0-9]+', '', basename.lower()) in lookup:
        return lookup[re.sub(r'[^a-z0-9]+', '', basename.lower())]
    if re.sub(r'[^a-z0-9]+', '', stem.lower()) in lookup:
        return lookup[re.sub(r'[^a-z0-9]+', '', stem.lower())]

    # last resort: normalize separator only, never invent new path.
    if '\\' in value or '//' in value:
        return normalize(value)

    return value


def walk(obj, lookup, stats):
    if isinstance(obj, dict):
        for key, value in list(obj.items()):
            if isinstance(value, str):
                if looks_like_asset_path(value):
                    fixed = fix_value(value, lookup)
                    if fixed != value:
                        stats['changed'] += 1
                        obj[key] = fixed
                        stats['entries'].append((key, value, fixed))
                else:
                    # Some GDevelop keys do not literally say "image" or "texture",
                    # but still carry a resource path (videoResource, sound paths, etc.).
                    # We keep traversing nested structures to catch those recursively.
                    walk(value, lookup, stats)
            else:
                walk(value, lookup, stats)
    elif isinstance(obj, list):
        for item in obj:
            walk(item, lookup, stats)


def fix_file(path: Path, lookup, apply: bool):
    with path.open('r', encoding='utf-8') as f:
        data = json.load(f)

    stats = {'changed': 0, 'entries': []}
    walk(data, lookup, stats)

    if stats['changed'] == 0:
        print(f'No changes needed in {path.name}')
        return False

    print(f'{path.name}: {stats["changed"]} path(s) to update')
    for key, old, new in stats['entries'][:10]:
        print(f'  {key}: {old} -> {new}')

    if apply:
        tmp = path.with_suffix(path.suffix + '.bak')
        shutil.copy2(path, tmp)
        with path.open('w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f'  Applied and backed up to {tmp.name}')

    return True


def main():
    parser = argparse.ArgumentParser(description='Fix image/texture paths inside GDevelop layout JSON files.')
    parser.add_argument('path', nargs='?', default=None, help='A specific layout JSON file or a folder.')
    parser.add_argument('--all', action='store_true', help='Process all JSON files in layouts/')
    parser.add_argument('--apply', action='store_true', help='Write fixes to disk and create a .bak backup.')
    args = parser.parse_args()

    lookup = load_manifest_resources()

    targets = []
    if args.all or args.path is None:
        targets = sorted(LAYOUTS_DIR.glob('*.json'))
    elif args.path:
        p = Path(args.path)
        if p.is_dir():
            targets = sorted(p.glob('*.json'))
        else:
            targets = [p]

    if not targets:
        print('No layout JSON files found.')
        return 1

    changed_any = False
    for path in targets:
        if path.exists() and path.suffix.lower() == '.json':
            if fix_file(path, lookup, args.apply):
                changed_any = True

    if not changed_any:
        print('Everything already looks consistent.')

    return 0


if __name__ == '__main__':
    raise SystemExit(main())
