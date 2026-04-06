"""Build a dev-stage copy of the HardHits site under `site/dev/`.

Usage:
    python python/build_dev_stage.py

The stable pages in `site/` remain untouched. This script copies each HTML
page into `site/dev/`, rewrites asset/data paths for the nested folder, and
adds a visible DEV banner so changes can be tested safely.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE_DIR = ROOT / "site"
DEV_DIR = SITE_DIR / "dev"

DEV_STYLE = """
<style id="dev-stage-style">
  .dev-stage-banner {
    background: linear-gradient(90deg, #7c3aed, #2563eb);
    color: white;
    padding: 10px 16px;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
  }
  .dev-stage-banner code {
    background: rgba(255,255,255,0.16);
    border-radius: 6px;
    padding: 2px 6px;
    color: #fff;
  }
</style>
""".strip()

DEV_BANNER = (
    '<div class="dev-stage-banner">DEV STAGE · Test changes safely here. '
    'Stable pages remain in <code>/site</code>.</div>'
)

REPLACEMENTS = {
    '../assets/site-nav.css': '../../assets/site-nav.css',
    '../assets/site-nav.js': '../../assets/site-nav-dev.js',
    '../data/': '../../data/',
}


def transform_html(contents: str) -> str:
    for old, new in REPLACEMENTS.items():
        contents = contents.replace(old, new)

    if 'id="dev-stage-style"' not in contents and '</head>' in contents:
        contents = contents.replace('</head>', f'\n{DEV_STYLE}\n</head>')

    if 'class="dev-stage-banner"' not in contents:
        body_match = re.search(r'<body([^>]*)>', contents, flags=re.IGNORECASE)
        if body_match:
            insert_at = body_match.end()
            contents = contents[:insert_at] + '\n' + DEV_BANNER + '\n' + contents[insert_at:]

    return contents


def build_index_html(page_names: list[str]) -> str:
    links = '\n'.join(
        f'        <a class="card" href="{name}"><h2>{name.replace(".html", "")}</h2><p>Open the dev copy of {name}.</p></a>'
        for name in page_names
    )

    return f"""<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>HardHits | Dev Stage</title>
  <link rel=\"stylesheet\" href=\"../../assets/site-nav.css\">
  <style>
    body {{ margin: 0; background: #0b0f19; color: #e2e8f0; font-family: 'Segoe UI', sans-serif; }}
    .dev-stage-banner {{ background: linear-gradient(90deg, #7c3aed, #2563eb); color: white; padding: 10px 16px; text-align: center; font-size: 0.85rem; font-weight: 800; }}
    .container {{ max-width: 1100px; margin: 40px auto; padding: 0 20px 40px; }}
    .grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }}
    .card {{ display:block; text-decoration:none; color:inherit; background:#111827; border:1px solid #1e293b; border-radius:14px; padding:18px; }}
    .card:hover {{ border-color:#38bdf8; transform: translateY(-2px); }}
    h1 {{ margin: 0 0 8px; font-size: 2rem; }}
    p {{ color: #94a3b8; }}
    .card h2 {{ margin: 0 0 6px; font-size: 1rem; color:#38bdf8; }}
    .card p {{ margin: 0; font-size: 0.88rem; }}
  </style>
</head>
<body data-nav=\"home\">
  <div class=\"dev-stage-banner\">DEV STAGE · Safe sandbox copy of the site. Stable pages remain in <code>/site</code>.</div>
  <div class=\"container\">
    <h1>HardHits Dev Stage</h1>
    <p>Use these pages for testing and iteration while keeping the main site stable.</p>
    <div class=\"grid\">
{links}
    </div>
  </div>
  <script src=\"../../assets/site-nav-dev.js\" defer></script>
</body>
</html>
"""


def build_dev_stage() -> None:
    DEV_DIR.mkdir(parents=True, exist_ok=True)

    page_names: list[str] = []
    for html_file in sorted(SITE_DIR.glob('*.html')):
        target = DEV_DIR / html_file.name
        target.write_text(transform_html(html_file.read_text(encoding='utf-8')), encoding='utf-8')
        page_names.append(html_file.name)

    (DEV_DIR / 'index.html').write_text(build_index_html(page_names), encoding='utf-8')

    print(f'✅ Built dev stage with {len(page_names)} page copies at {DEV_DIR}')
    print('Pages: ' + ', '.join(page_names))


if __name__ == '__main__':
    build_dev_stage()
