#!/usr/bin/env python3
"""Set each resource's `name` to its `file` path in a GDevelop manifest.

Usage:
  python3 scripts/set_name_to_file.py Road\ to\ Aywen.json
  python3 scripts/set_name_to_file.py Road\ to\ Aywen.json --apply

Creates a timestamped backup when --apply is used.
"""
import argparse
import json
import shutil
import datetime
from pathlib import Path


def normalize_path(s: str) -> str:
    return s.replace('\\', '/')


def run(manifest_path: Path, do_apply: bool):
    if not manifest_path.exists():
        print('Manifest not found:', manifest_path)
        return 1

    data = json.loads(manifest_path.read_text(encoding='utf-8'))
    resources = data.get('resources', {}).get('resources', [])
    changes = []

    for i, r in enumerate(resources):
        file_val = r.get('file')
        if not isinstance(file_val, str):
            continue
        file_norm = normalize_path(file_val)
        # If the file refers to build/app/... keep basename only (like other scripts do)
        if file_norm.startswith('build/app/'):
            file_norm = file_norm.split('/')[-1]

        old_name = r.get('name')
        if old_name != file_norm:
            changes.append((i, old_name, file_norm))
            r['name'] = file_norm

    if not changes:
        print('No name changes required.')
        return 0

    print('Planned changes (resource index, old -> new):')
    for idx, old, new in changes:
        print(f'- [{idx}] {old} -> {new}')

    if do_apply:
        stamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
        backup = manifest_path.parent / f"{manifest_path.name}.backup.{stamp}"
        shutil.copy2(manifest_path, backup)
        manifest_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
        print('Applied changes and created backup at', backup)
    else:
        print('\nRun with --apply to write changes and create a backup.')

    return 0


def main():
    p = argparse.ArgumentParser(description='Set resource name to file in a GDevelop manifest')
    p.add_argument('manifest', help='Path to the Road to Aywen.json file')
    p.add_argument('--apply', action='store_true', help='Write changes (creates backup)')
    args = p.parse_args()

    manifest_path = Path(args.manifest)
    return run(manifest_path, args.apply)


if __name__ == '__main__':
    raise SystemExit(main())
