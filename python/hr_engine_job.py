"""Scheduled runner for live HR results and starting lineups.

Recommended for Windows Task Scheduler:
    python python/hr_engine_job.py

This runs the live home run refresh and the starting lineup refresh once
and exits cleanly, which is ideal for a job configured to repeat every
30 minutes.

Optional continuous mode:
    python python/hr_engine_job.py --loop --interval 30
"""

from __future__ import annotations

import argparse
import logging
import subprocess
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOG_DIR = ROOT / "logs"
DEFAULT_LOG_FILE = LOG_DIR / "hr_engine_job.log"
RESULTS_SCRIPT = ROOT / "python" / "TodaysHomers.py"
LINEUPS_SCRIPT = ROOT / "python" / "get_starting_lineups.py"
STATUS_SCRIPT = ROOT / "python" / "site_status.py"


def setup_logging(log_file: Path) -> None:
    """Configure console + file logging."""
    log_file.parent.mkdir(parents=True, exist_ok=True)

    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s | %(levelname)s | %(message)s",
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler(log_file, encoding="utf-8"),
        ],
        force=True,
    )


def update_site_status(success: bool, detail: str) -> None:
    try:
        subprocess.run(
            [
                sys.executable,
                str(STATUS_SCRIPT),
                "--job-name",
                "hr_engine_job",
                "--success",
                "true" if success else "false",
                "--detail",
                detail,
            ],
            check=False,
            cwd=str(ROOT),
        )
    except Exception:
        logging.exception("Could not update public site status")


def run_once() -> bool:
    """Run the live HR results and lineup refresh one time and report success/failure."""
    logging.info("Starting HR results refresh")
    try:
        subprocess.run(
            [sys.executable, str(RESULTS_SCRIPT)],
            check=True,
            cwd=str(ROOT),
        )
        logging.info("HR results refresh completed successfully")

        logging.info("Starting starting-lineups refresh")
        subprocess.run(
            [sys.executable, str(LINEUPS_SCRIPT)],
            check=True,
            cwd=str(ROOT),
        )
        logging.info("Starting-lineups refresh completed successfully")
        update_site_status(True, "Live HR results and starting lineups refreshed successfully.")
        return True
    except Exception:
        logging.exception("Scheduled refresh failed")
        update_site_status(False, "Live HR or lineup refresh failed. Check hr_engine_job.log for details.")
        return False


def run_forever(interval_minutes: int) -> None:
    """Keep running the HR results and lineups refresh on a fixed interval."""
    logging.info("Continuous mode enabled for HR results + lineups; interval=%s minutes", interval_minutes)

    while True:
        started_at = datetime.now()
        run_once()

        next_run = started_at + timedelta(minutes=interval_minutes)
        sleep_seconds = max((next_run - datetime.now()).total_seconds(), 0)
        logging.info("Next run scheduled for %s", next_run.strftime("%Y-%m-%d %I:%M:%S %p"))
        time.sleep(sleep_seconds)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run the HardHits live HR results and lineup updaters once or on a repeating interval."
    )
    parser.add_argument(
        "--loop",
        action="store_true",
        help="Keep the process alive and rerun the engine every interval minutes.",
    )
    parser.add_argument(
        "--interval",
        type=int,
        default=30,
        help="Minutes between runs when using --loop (default: 30).",
    )
    parser.add_argument(
        "--log-file",
        default=str(DEFAULT_LOG_FILE),
        help=f"Path to the log file (default: {DEFAULT_LOG_FILE}).",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    setup_logging(Path(args.log_file))

    if args.interval <= 0:
        logging.error("Interval must be greater than 0 minutes.")
        return 1

    if args.loop:
        run_forever(args.interval)
        return 0

    return 0 if run_once() else 1


if __name__ == "__main__":
    raise SystemExit(main())
