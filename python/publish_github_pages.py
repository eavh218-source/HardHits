"""Build and publish the stable HardHits site to the live `gh-pages` branch.

Usage:
    python python/publish_github_pages.py
    python python/publish_github_pages.py --message "Publish stable site refresh"
    python python/publish_github_pages.py --build-only

This script:
1. rebuilds `pages-dist/` from the stable repo,
2. syncs the bundle into the local `gh-pages` checkout at `.pages-publish-stable-refresh/`,
3. commits any site changes, and
4. pushes them to `origin/gh-pages`.
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path

from build_github_pages import main as build_pages_main

ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT / "pages-dist"
PAGES_REPO = ROOT / ".pages-publish-stable-refresh"
PAGES_BRANCH = "gh-pages"


def run_git(args: list[str], cwd: Path, capture_output: bool = False) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *args],
        cwd=str(cwd),
        check=True,
        text=True,
        capture_output=capture_output,
    )


def get_origin_url() -> str:
    result = run_git(["remote", "get-url", "origin"], ROOT, capture_output=True)
    return result.stdout.strip()


def ensure_pages_checkout() -> None:
    git_dir = PAGES_REPO / ".git"
    if not git_dir.exists():
        origin_url = get_origin_url()
        print(f"[INFO] Cloning {PAGES_BRANCH} into {PAGES_REPO}...")
        subprocess.run(
            ["git", "clone", "--branch", PAGES_BRANCH, "--single-branch", origin_url, str(PAGES_REPO)],
            cwd=str(ROOT),
            check=True,
            text=True,
        )

    run_git(["fetch", "origin"], PAGES_REPO)
    run_git(["checkout", PAGES_BRANCH], PAGES_REPO)
    run_git(["reset", "--hard", f"origin/{PAGES_BRANCH}"], PAGES_REPO)
    run_git(["clean", "-fd"], PAGES_REPO)


def reset_publish_dir() -> None:
    for item in PAGES_REPO.iterdir():
        if item.name == ".git":
            continue
        if item.is_dir():
            shutil.rmtree(item)
        else:
            item.unlink()


def copy_bundle() -> None:
    if not OUTPUT_DIR.exists():
        raise FileNotFoundError(f"Build output not found: {OUTPUT_DIR}")

    reset_publish_dir()

    for item in OUTPUT_DIR.iterdir():
        destination = PAGES_REPO / item.name
        if item.is_dir():
            shutil.copytree(item, destination, dirs_exist_ok=True)
        else:
            shutil.copy2(item, destination)


def has_changes() -> bool:
    result = run_git(["status", "--porcelain"], PAGES_REPO, capture_output=True)
    return bool(result.stdout.strip())


def default_commit_message() -> str:
    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    return f"Publish stable site refresh ({stamp})"


def publish(message: str, build_only: bool) -> int:
    print("[STEP] Building stable GitHub Pages bundle...")
    build_pages_main()

    if build_only:
        print("[OK] Build-only run completed. No publish performed.")
        return 0

    print(f"[STEP] Preparing local {PAGES_BRANCH} checkout...")
    ensure_pages_checkout()

    print("[STEP] Syncing pages-dist into the live publish branch...")
    copy_bundle()

    if not has_changes():
        print("[OK] No live-site changes to publish.")
        return 0

    print("[STEP] Committing publish bundle...")
    run_git(["add", "-A"], PAGES_REPO)
    run_git(["commit", "-m", message], PAGES_REPO)

    print(f"[STEP] Pushing to origin/{PAGES_BRANCH}...")
    run_git(["push", "origin", PAGES_BRANCH], PAGES_REPO)

    print(f"[OK] Live site published from {PAGES_REPO} to origin/{PAGES_BRANCH}.")
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Build and publish the stable HardHits GitHub Pages site.")
    parser.add_argument("--message", default=default_commit_message(), help="Commit message for the gh-pages publish commit.")
    parser.add_argument("--build-only", action="store_true", help="Only rebuild `pages-dist/` without publishing to gh-pages.")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    raise SystemExit(publish(message=args.message, build_only=args.build_only))
