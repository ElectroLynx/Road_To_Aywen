Organize assets script

Usage

- Dry-run (prints proposed mapping):

```bash
python3 scripts/organize_assets.py
```

- Apply changes (will move files, create a backup, and patch JSON):

```bash
python3 scripts/organize_assets.py --apply
```

Notes
- The script writes `scripts/asset_mapping.json` containing the proposed old->new mapping.
- It will backup the `assets/` directory before applying moves.
- It updates `Road to Aywen.json` and JSON files under `layouts/` to use the new paths.
- The script does not modify `build/app/` — rebuild the project in GDevelop after changes.

Review the mapping file before running with `--apply`.


# Tout ce qui se trouve dans le dossier scripts à été généré par IA par soucis de praticité.
Sinon dans l'éditeur tu peux pas rename clairement et modifier les chemins des assets.