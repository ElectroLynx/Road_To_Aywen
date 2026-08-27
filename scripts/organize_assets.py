#!/usr/bin/env python3
"""Organize assets for the GDevelop project.

Usage:
  python3 scripts/organize_assets.py       # dry-run, prints proposed mapping
  python3 scripts/organize_assets.py --apply   # perform moves and patch JSON files

This script:
 - Reads `Road to Aywen.json` to get the canonical resource list
 - Suggests a new layout under `assets/` using `snake_case`
 - Produces `scripts/asset_mapping.json` with old->new mapping
 - With `--apply` will backup `assets/` to `assets_backup_YYYYmmdd_HHMMSS/`, move files,
   and update `Road to Aywen.json` and JSON files in `layouts/`.

WARNING: review the mapping file before running with `--apply`.
"""

import argparse
import json
import shutil
import unicodedata
from pathlib import Path
from datetime import datetime
import re


PROJECT_ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = PROJECT_ROOT / "assets"
ROAD_JSON = PROJECT_ROOT / "Road to Aywen.json"
LAYOUTS_DIR = PROJECT_ROOT / "layouts"
MAPPING_OUTPUT = PROJECT_ROOT / "scripts" / "asset_mapping.json"

# Preserve these subfolders (user preference)
PRESERVE_FOLDERS = {"Trool_Aywen", "Miniatures"}


def slugify(name: str) -> str:
    # Normalize unicode, replace spaces and unsafe chars with underscore
    name = unicodedata.normalize("NFKD", name)
    name = name.encode("ascii", "ignore").decode("ascii")
    name = name.strip().lower()
    # replace non-alphanum with underscore
    name = re.sub(r"[^a-z0-9.]+", "_", name)
    # collapse multiple underscores
    name = re.sub(r"_+", "_", name)
    return name


def classify_by_ext(path: Path) -> str:
    ext = path.suffix.lower()
    if ext in {".png", ".jpg", ".jpeg", ".webp", ".gif"}:
        return "images"
    if ext in {".mp3", ".ogg", ".wav"}:
        return "audio"
    if ext in {".mp4", ".webm", ".mov"}:
        return "video"
    if ext in {".ttf", ".otf"}:
        return "fonts"
    if ext in {".fnt"}:
        return "bitmap-fonts"
    if ext in {".piskel"}:
        return "piskel"
    return "other"


def propose_new_path(old: str) -> str:
    p = Path(old)
    parts = p.parts
    # If already under assets, drop the leading 'assets' for construction
    if parts and parts[0] == "assets":
        parts = parts[1:]

    # preserve top-level preserve folders
    if parts and parts[0] in PRESERVE_FOLDERS:
        sub = Path("assets") / parts[0]
        # slugify remaining name
        rest = Path(*parts[1:]) if len(parts) > 1 else Path(p.name)
        newname = slugify(rest.name)
        return str((sub / newname).as_posix())

    ext_class = classify_by_ext(Path(old))
    filename = slugify(Path(old).name)

    if ext_class == "images":
        # try to categorize ui vs sprites vs miniatures by path or filename heuristics
        if any(k in old.lower() for k in ["button", "gear", "audioon", "audiooff", "slider", "small_red", "affiche"]):
            sub = "images/ui"
        elif "miniatures" in old.lower() or "minia" in old.lower():
            sub = "images/miniatures"
        elif any(k in old.lower() for k in ["root_", "platform", "newpanel", "sprite"]):
            sub = "images/sprites"
        elif "gemini" in old.lower() or "generated" in old.lower():
            sub = "images/generated"
        else:
            sub = "images"
    elif ext_class == "audio":
        sub = "audio"
    elif ext_class == "video":
        sub = "video"
    elif ext_class == "fonts":
        sub = "fonts"
    elif ext_class == "bitmap-fonts":
        sub = "bitmap-fonts"
    elif ext_class == "piskel":
        sub = "piskel"
    else:
        sub = "other"

    return str((Path("assets") / sub / filename).as_posix())


def load_resources_from_roadjson() -> list:
    with ROAD_JSON.open("r", encoding="utf-8") as f:
        data = json.load(f)
    return data.get("resources", {}).get("resources", [])


def build_mapping() -> dict:
    resources = load_resources_from_roadjson()
    mapping = {}
    for r in resources:
        old = r.get("file")
        if not old:
            continue
        new = propose_new_path(old)
        mapping[old] = new
    return mapping


def write_mapping(mapping: dict):
    MAPPING_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with MAPPING_OUTPUT.open("w", encoding="utf-8") as f:
        json.dump({"generated_at": datetime.utcnow().isoformat(), "mapping": mapping}, f, indent=2, ensure_ascii=False)
    print(f"Wrote mapping to {MAPPING_OUTPUT}")


def backup_assets(backup_dir: Path):
    print(f"Backing up assets/ to {backup_dir}")
    shutil.copytree(ASSETS_DIR, backup_dir)


def apply_mapping(mapping: dict):
    # backup
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_dir = PROJECT_ROOT / f"assets_backup_{ts}"
    backup_assets(backup_dir)

    # move files according to mapping
    for old, new in mapping.items():
        old_path = PROJECT_ROOT / old
        new_path = PROJECT_ROOT / new
        if not old_path.exists():
            print(f"Skipping missing file: {old}")
            continue
        new_path.parent.mkdir(parents=True, exist_ok=True)
        print(f"Moving: {old} -> {new}")
        shutil.move(str(old_path), str(new_path))

    # patch Road to Aywen.json
    with ROAD_JSON.open("r", encoding="utf-8") as f:
        data = json.load(f)
    changed = False
    for r in data.get("resources", {}).get("resources", []):
        old = r.get("file")
        if old in mapping:
            r["file"] = mapping[old]
            changed = True
    if changed:
        with ROAD_JSON.open("w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Patched {ROAD_JSON}")

    # Patch layouts JSON files
    print("Patching layout files under layouts/ ...")
    for layout in LAYOUTS_DIR.glob("**/*.json"):
        text = layout.read_text(encoding="utf-8")
        new_text = text
        for old, new in mapping.items():
            # JSON files may reference backslashes or forward slashes; replace both
            new_text = new_text.replace(old.replace('/', '\\'), new)
            new_text = new_text.replace(old, new)
        if new_text != text:
            layout.write_text(new_text, encoding="utf-8")
            print(f"Patched {layout}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="Apply the mapping (move files and patch JSON)")
    args = parser.parse_args()

    mapping = build_mapping()
    write_mapping(mapping)

    # Dry-run summary
    print("Proposed moves (dry-run):")
    for old, new in mapping.items():
        print(f"  {old} -> {new}")

    if args.apply:
        confirm = input("Apply changes? This will move files and patch JSON files. Type YES to confirm: ")
        if confirm == "YES":
            apply_mapping(mapping)
            print("Apply complete.")
        else:
            print("Aborted by user.")


if __name__ == "__main__":
    main()
