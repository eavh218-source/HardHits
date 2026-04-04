"""Generate a small public-facing status artifact for the stable HardHits site.

Usage:
    python python/site_status.py
    python python/site_status.py --job-name mastercontroller --success true --detail "All dashboards updated"
"""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = REPO_ROOT / "data"

STATUS_JSON = DATA_DIR / "status.json"
STATUS_JS = DATA_DIR / "status.js"

DEFAULT_JOBS: dict[str, dict[str, Any]] = {
    "mastercontroller": {
        "label": "Full dashboard refresh",
        "success": None,
        "detail": "Pending first run",
        "last_run_utc": None,
        "log_file": "logs/mastercontroller_job.log",
    },
    "hr_engine_job": {
        "label": "Live HR + lineups refresh",
        "success": None,
        "detail": "Pending first run",
        "last_run_utc": None,
        "log_file": "logs/hr_engine_job.log",
    },
}


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def parse_success(raw: str | None) -> bool | None:
    if raw is None:
        return None

    normalized = raw.strip().lower()
    if normalized in {"1", "true", "yes", "y", "ok", "success"}:
        return True
    if normalized in {"0", "false", "no", "n", "fail", "failed"}:
        return False
    raise ValueError(f"Unsupported success value: {raw}")


def read_existing_status() -> dict[str, Any]:
    if STATUS_JSON.exists():
        try:
            return json.loads(STATUS_JSON.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {}


def merge_jobs(existing_jobs: dict[str, Any] | None) -> dict[str, dict[str, Any]]:
    merged = {name: payload.copy() for name, payload in DEFAULT_JOBS.items()}
    for name, payload in (existing_jobs or {}).items():
        if isinstance(payload, dict):
            merged.setdefault(name, {}).update(payload)
    return merged


def build_status(job_name: str | None, success: bool | None, detail: str | None) -> dict[str, Any]:
    existing = read_existing_status()
    jobs = merge_jobs(existing.get("jobs"))

    if job_name:
        jobs.setdefault(job_name, {
            "label": job_name.replace("_", " ").title(),
            "log_file": None,
        })
        jobs[job_name]["last_run_utc"] = utc_now_iso()
        if success is not None:
            jobs[job_name]["success"] = success
        if detail:
            jobs[job_name]["detail"] = detail

    overall_status = "healthy"
    if any(job.get("success") is False for job in jobs.values()):
        overall_status = "degraded"

    return {
        "site": "stable",
        "repo_root": str(REPO_ROOT),
        "homepage": "site/HardHits.html",
        "generated_at_utc": utc_now_iso(),
        "status": overall_status,
        "jobs": jobs,
    }


def write_status_files(status: dict[str, Any]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    STATUS_JSON.write_text(json.dumps(status, indent=2), encoding="utf-8")
    STATUS_JS.write_text(
        "const siteStatus = " + json.dumps(status, indent=2) + ";\nwindow.siteStatus = siteStatus;\n",
        encoding="utf-8",
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Write public-facing HardHits site status files.")
    parser.add_argument("--job-name", help="Optional job key to update, e.g. mastercontroller or hr_engine_job.")
    parser.add_argument("--success", help="Optional job success flag: true/false.")
    parser.add_argument("--detail", help="Optional human-readable status detail.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    status = build_status(
        job_name=args.job_name,
        success=parse_success(args.success),
        detail=args.detail,
    )
    write_status_files(status)
    print(f"[OK] Wrote site status to {STATUS_JSON} and {STATUS_JS}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
