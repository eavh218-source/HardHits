# HardHits — project tasks

Update this file as you go. Check boxes with `x` when done: `- [x]`.

## Layout (repo root)

| Folder | Purpose |
|--------|---------|
| `site/` | HTML dashboards (open in browser or via static server) |
| `data/` | Generated `.js` / `.json` consumed by the site |
| `assets/` | Shared `site-nav.css`, `site-nav.js` |
| `python/` | Data pipeline scripts; shared `paths.py` → `data/` |

Run pipelines from the **repo root** (e.g. `python MasterController.py`, `python python/hr_engine.py`).

## In progress

- [ ] _(none — move items here when you start them)_

## Backlog

- [ ] _(add tasks below)_

## Done

- [x] Git initial commit and cleanup of duplicate `copy` files / folders
- [x] Consolidate HR engines: daily + historical scripts under `python/`
- [x] Unified site navigation (`assets/site-nav.css`, `assets/site-nav.js`)
- [x] Folder layout: `site/`, `data/`, `assets/`, `python/`
