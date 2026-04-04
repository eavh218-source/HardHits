# HardHits GitHub Pages deployment

This repo now includes a GitHub Pages deployment scaffold in the **dev** copy.

## What it does

- `python/build_github_pages.py` builds a publishable bundle into `pages-dist/`
- `.github/workflows/deploy-pages.yml` uploads that bundle to GitHub Pages
- The deployed root URL redirects to `site/HardHits.html`
- `assets/` and `data/` are copied alongside `site/` so existing relative paths keep working

## Local preview

Run from the repo root:

```bat
python python/build_github_pages.py
```

Then publish the `pages-dist/` contents with any static server or let the GitHub Actions workflow deploy it.

## GitHub setup

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Run the **Deploy HardHits to GitHub Pages** workflow, or push to `main` / `master`.
4. GitHub will provide the hosted URL.

## Optional custom domain

Set the environment variable `HARDHITS_PAGES_CNAME` before the build if you want the bundle to include a `CNAME` file.

## Notes

- This is the recommended direction for a more stable public site than the temporary tunnel.
- Per workflow rules, this implementation starts in `HardHits-dev` first and can be promoted later if approved.
