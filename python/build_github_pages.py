"""Build a GitHub Pages-ready static bundle for the stable HardHits site.

Usage:
    python python/build_github_pages.py

This copies the stable public site assets into `pages-dist/`, writes a root
redirect to `site/HardHits.html`, and adds `.nojekyll` so GitHub Pages serves
the bundle as-is.
"""

from __future__ import annotations

import os
import shutil
from pathlib import Path

from refresh_historical_index import write_historical_index

ROOT = Path(__file__).resolve().parent.parent
SITE_DIR = ROOT / "site"
ASSETS_DIR = ROOT / "assets"
DATA_DIR = ROOT / "data"
OUTPUT_DIR = ROOT / "pages-dist"

REDIRECT_HTML = """<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>HardHits</title>
  <meta http-equiv=\"refresh\" content=\"0; url=./site/HardHits.html\">
  <script>
    window.location.replace('./site/HardHits.html');
  </script>
</head>
<body>
  <p>Redirecting to <a href=\"./site/HardHits.html\">HardHits</a>...</p>
</body>
</html>
"""


def reset_output_dir() -> None:
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def copy_site() -> None:
    target_dir = OUTPUT_DIR / "site"
    target_dir.mkdir(parents=True, exist_ok=True)

    for item in SITE_DIR.iterdir():
        if item.name == "dev":
            continue
        destination = target_dir / item.name
        if item.is_dir():
            shutil.copytree(item, destination, dirs_exist_ok=True)
        else:
            shutil.copy2(item, destination)


def copy_static_dir(source: Path, name: str) -> None:
    destination = OUTPUT_DIR / name
    shutil.copytree(source, destination, dirs_exist_ok=True)

    if name == "assets":
        dev_nav = destination / "site-nav-dev.js"
        if dev_nav.exists():
            dev_nav.unlink()


def write_root_files() -> None:
    (OUTPUT_DIR / "index.html").write_text(REDIRECT_HTML, encoding="utf-8")
    (OUTPUT_DIR / "404.html").write_text(REDIRECT_HTML, encoding="utf-8")
    (OUTPUT_DIR / ".nojekyll").write_text("", encoding="utf-8")

    cname = os.getenv("HARDHITS_PAGES_CNAME", "").strip()
    if cname:
        (OUTPUT_DIR / "CNAME").write_text(cname + "\n", encoding="utf-8")


def main() -> int:
    write_historical_index()
    reset_output_dir()
    copy_site()
    copy_static_dir(ASSETS_DIR, "assets")
    copy_static_dir(DATA_DIR, "data")
    write_root_files()

    print(f"[OK] Stable GitHub Pages bundle created at: {OUTPUT_DIR}")
    print("[OK] Entry point: pages-dist/index.html -> site/HardHits.html")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
