#!/usr/bin/env python3
"""Audit layout JSON files and print asset-like strings that still do not resolve to a real manifest asset.

This is meant to find the last remaining broken paths after the automatic fix.

Usage:
  python3 scripts/audit_layout_paths.py --all
  python3 scripts/audit_layout_paths.py layouts/menu.json
"""

import argparse
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
ROAD_JSON = PROJECT_ROOT / 'Road to Aywen.json'
LAYOUTS_DIR = PROJECT_ROOT / 'layouts'
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
    return p.strip()


def load_manifest_paths():
    with ROAD_JSON.open('r', encoding='utf-8') as f:
        data = json.load(f)

    paths = set()
    for item in data.get('resources', {}).get('resources', []):
        if not isinstance(item, dict):
            continue
        file_path = item.get('file')
        if isinstance(file_path, str):
            cleaned = normalize(file_path)
            if cleaned and not any(part in IGNORE_SEGMENTS for part in Path(cleaned).parts):
                paths.add(cleaned)
                paths.add(Path(cleaned).name)
                paths.add(Path(cleaned).stem)
                paths.add(re.sub(r'[^a-z0-9]+', '', Path(cleaned).name.lower()))
                paths.add(re.sub(r'[^a-z0-9]+', '', Path(cleaned).stem.lower()))
    return paths


def looks_like_asset(value: str) -> bool:
    if not isinstance(value, str):
        return False
    v = normalize(value)
    if not v:
        return False
    if any(part in IGNORE_SEGMENTS for part in Path(v).parts):
        return False
    if v.startswith('assets/') or '/assets/' in v or v.startswith('assets'):
        return True
    if '.' in v and any(ext in v.lower() for ext in ['.png', '.jpg', '.jpeg', '.gif', '.mp3', '.ogg', '.wav', '.mp4', '.webm', '.mov', '.ttf', '.fnt']):
        return True
    return False


def gather_strings(obj, out):
    if isinstance(obj, dict):
        for key, value in obj.items():
            if isinstance(value, str):
                if looks_like_asset(value):
                    out.append((key, value))
            gather_strings(value, out)
    elif isinstance(obj, list):
        for item in obj:
            gather_strings(item, out)


def canonicalize(value, manifest_paths):
    v = normalize(value)
    if v in manifest_paths:
        return True
    if Path(v).name in manifest_paths:
        return True
    if Path(v).stem in manifest_paths:
        return True
    if re.sub(r'[^a-z0-9]+', '', Path(v).name.lower()) in manifest_paths:
        return True
    if re.sub(r'[^a-z0-9]+', '', Path(v).stem.lower()) in manifest_paths:
        return True
    return False


def main():
    parser = argparse.ArgumentParser(description='Audit unresolved asset-like strings in layouts.')
    parser.add_argument('path', nargs='?', default=None)
    parser.add_argument('--all', action='store_true')
    args = parser.parse_args()

    manifest_paths = load_manifest_paths()

    if args.all or args.path is None:
        targets = sorted(LAYOUTS_DIR.glob('*.json'))
    else:
        p = Path(args.path)
        targets = [p] if p.is_file() else sorted(p.glob('*.json'))

    if not targets:
        print('No layout JSON found.')
        return 1

    found = False
    for target in targets:
        with target.open('r', encoding='utf-8') as f:
            data = json.load(f)
        strings = []
        gather_strings(data, strings)

        unresolved = []
        for key, value in strings:
            if not canonicalize(value, manifest_paths):
                unresolved.append((key, value))

        if unresolved:
            found = True
            print(f'\n[{target.name}] unresolved asset-like strings ({len(unresolved)}):')
            for key, value in unresolved:
                print(f'  {key}: {value}')

    if not found:
        print('No unresolved asset-like strings found in the target layouts.')

    return 0


if __name__ == '__main__':
    raise SystemExit(main())
