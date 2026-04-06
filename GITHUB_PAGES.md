# HardHits GitHub Pages deployment

This repo now includes a GitHub Pages deployment scaffold in the **dev** copy.

## What it does

- `python/build_github_pages.py` builds a publishable bundle into `pages-dist/`
- `.github/workflows/deploy-pages.yml` uploads that bundle to GitHub Pages
- The deployed root URL redirects to `site/HardHits.html`
- `assets/` and `data/` are copied alongside `site/` so existing relative paths keep working

## Repeatable stable publish

For the stable repo, use either of these from the repo root:

```bat
run_build_pages.bat
```

or:

```bat
python python/publish_github_pages.py
```

That one step will:

1. rebuild `pages-dist/`
2. sync the local `gh-pages` checkout at `.pages-publish-stable-refresh/`
3. commit the updated site bundle
4. push it live to `origin/gh-pages`

If you only want to rebuild the bundle without publishing, run:

```bat
python python/publish_github_pages.py --build-only
```

## GitHub setup

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Run the **Deploy HardHits to GitHub Pages** workflow, or push to `main` / `master`.
4. GitHub will provide the hosted URL.

## Optional custom domain

Set the environment variable `HARDHITS_PAGES_CNAME` before the build if you want the bundle to include a `CNAME` file.

## Notes

- The stable live site is now easiest to refresh by publishing the `gh-pages` bundle directly with `run_build_pages.bat`.
- This is the recommended direction for a more stable public site than the temporary tunnel.
- Per workflow rules, this implementation starts in `HardHits-dev` first and can be promoted later if approved.
