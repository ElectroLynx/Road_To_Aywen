#!/usr/bin/env python3
import argparse
import json
import shutil
import datetime
from pathlib import Path


def walk_and_fix(obj, path_stack, changes):
    if isinstance(obj, dict):
        for k, v in obj.items():
            walk_and_fix(v, path_stack + [k], changes)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk_and_fix(v, path_stack + [f'[{i}]'], changes)
    elif isinstance(obj, str):
        s = obj
        new = s.replace('\\', '/')
        if new.startswith('build/app/'):
            new = new.split('/')[-1]
        # If file field points to build/app, map to assets/<basename>
        # The caller can decide whether to apply further rules.
        if new != s:
            changes.append(('/'.join(path_stack), s, new))
            return new
    return obj


def fix_recursive(obj, changes):
    if isinstance(obj, dict):
        for k in list(obj.keys()):
            v = obj[k]
            if isinstance(v, str):
                new = v.replace('\\', '/')
                if new.startswith('build/app/'):
                    new = new.split('/')[-1]
                if new != v:
                    changes.append((k, v, new))
                    obj[k] = new
                    # If we just changed a resource's file path, also update its `name` to match `file`.
                    # This avoids editor confusion where `name` keeps an old path.
                    if k == 'file':
                        old_name = obj.get('name')
                        if old_name != new:
                            changes.append(('name', old_name, new))
                            obj['name'] = new
            else:
                fix_recursive(v, changes)
    elif isinstance(obj, list):
        for i in range(len(obj)):
            v = obj[i]
            if isinstance(v, str):
                new = v.replace('\\', '/')
                if new.startswith('build/app/'):
                    new = new.split('/')[-1]
                if new != v:
                    changes.append((f'[{i}]', v, new))
                    obj[i] = new
            else:
                fix_recursive(v, changes)


def main():
    p = argparse.ArgumentParser(description='Normalize paths in a GDevelop JSON manifest')
    p.add_argument('manifest', help='Path to the Road to Aywen.json file')
    p.add_argument('--apply', action='store_true', help='Write changes (creates backup)')
    args = p.parse_args()

    manifest_path = Path(args.manifest)
    if not manifest_path.exists():
        print('Manifest not found:', manifest_path)
        return

    data = json.loads(manifest_path.read_text(encoding='utf-8'))
    changes = []
    fix_recursive(data, changes)

    if not changes:
        print('No path issues detected.')
        return

    print('Detected changes:')
    for item in changes:
        print('-', item[0], ' :', item[1], '->', item[2])

    if args.apply:
        stamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
        backup = manifest_path.parent / f"{manifest_path.name}.backup.{stamp}"
        shutil.copy2(manifest_path, backup)
        manifest_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
        print('Applied changes and created backup at', backup)
    else:
        print('\nRun with --apply to write changes and create a backup.')


if __name__ == '__main__':
    main()
