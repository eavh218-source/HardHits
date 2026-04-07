"""Scheduled runner for live HR results, starting lineups, weather, and SQL sync.

Recommended for Windows Task Scheduler:
    python python/hr_engine_job.py

This runs the live home run refresh, the starting lineup refresh, the daily
weather refresh, and the SQL Server sync once and exits cleanly, which is
ideal for a job configured
to repeat every 15 minutes.

Optional continuous mode:
    python python/hr_engine_job.py --loop --interval 15
"""

from __future__ import annotations

import argparse
import logging
import os
import subprocess
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path

from system_settings import load_system_settings

ROOT = Path(__file__).resolve().parent.parent
LOG_DIR = ROOT / "logs"
DEFAULT_LOG_FILE = LOG_DIR / "hr_engine_job.log"
RESULTS_SCRIPT = ROOT / "python" / "TodaysHomers.py"
LINEUPS_SCRIPT = ROOT / "python" / "get_starting_lineups.py"
WEATHER_SCRIPT = ROOT / "python" / "get_mlb_weather.py"
STATUS_SCRIPT = ROOT / "python" / "site_status.py"
SQL_LOAD_SCRIPT = ROOT / "python" / "load_to_sqlserver.py"


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


def build_sql_sync_command() -> list[str] | None:
    if os.getenv("HARDHITS_SQL_SYNC", "1").strip().lower() in {"0", "false", "no", "off"}:
        return None

    server = os.getenv("HARDHITS_SQL_SERVER", "localhost\\SQLEXPRESS").strip()
    database = os.getenv("HARDHITS_SQL_DATABASE", "HardHits").strip()
    driver = os.getenv("HARDHITS_SQL_DRIVER", "ODBC Driver 18 for SQL Server").strip()
    username = os.getenv("HARDHITS_SQL_USERNAME", "").strip()
    password = os.getenv("HARDHITS_SQL_PASSWORD", "")
    trusted = os.getenv("HARDHITS_SQL_TRUSTED_CONNECTION", "1").strip().lower() in {"1", "true", "yes", "on"}

    if not server or not database:
        return None

    command = [
        sys.executable,
        str(SQL_LOAD_SCRIPT),
        "--server",
        server,
        "--database",
        database,
        "--driver",
        driver,
        "--tables",
        "hr_model_predictions",
        "hr_results",
        "hrbi_model_predictions",
        "hrbi_results",
        "hrbi_results_summary",
        "live_home_runs",
        "starting_lineup_players",
        "game_weather",
    ]
    if trusted or (not username and not password):
        command.append("--trusted-connection")
    else:
        command.extend(["--username", username, "--password", password])
    return command


def sync_live_data_to_sql(skip_sql_sync: bool = False) -> None:
    if skip_sql_sync:
        logging.info("Skipping SQL sync because --skip-sql-sync was provided")
        return

    command = build_sql_sync_command()
    if not command:
        logging.info("SQL sync is disabled or not configured; skipping database refresh")
        return

    logging.info("Starting SQL data sync for predictions, results, and live tables")
    subprocess.run(command, check=True, cwd=str(ROOT))
    logging.info("SQL data sync completed successfully")


def run_once(skip_sql_sync: bool = False) -> bool:
    """Run the live HR results, lineup refresh, and SQL sync one time and report success/failure."""
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

        logging.info("Starting weather refresh")
        subprocess.run(
            [sys.executable, str(WEATHER_SCRIPT)],
            check=True,
            cwd=str(ROOT),
        )
        logging.info("Weather refresh completed successfully")

        sync_live_data_to_sql(skip_sql_sync=skip_sql_sync)
        update_site_status(True, "Live HR results, starting lineups, weather, and SQL refresh completed successfully.")
        return True
    except Exception:
        logging.exception("Scheduled refresh failed")
        update_site_status(False, "Live HR, lineup, weather, or SQL refresh failed. Check hr_engine_job.log for details.")
        return False


def run_forever(interval_minutes: int, skip_sql_sync: bool = False) -> None:
    """Keep running the HR results, lineups refresh, and SQL sync on a fixed interval."""
    logging.info("Continuous mode enabled for HR results + lineups + SQL sync; interval=%s minutes", interval_minutes)

    while True:
        started_at = datetime.now()
        run_once(skip_sql_sync=skip_sql_sync)

        next_run = started_at + timedelta(minutes=interval_minutes)
        sleep_seconds = max((next_run - datetime.now()).total_seconds(), 0)
        logging.info("Next run scheduled for %s", next_run.strftime("%Y-%m-%d %I:%M:%S %p"))
        time.sleep(sleep_seconds)


def get_default_interval() -> int:
    settings = load_system_settings()
    return int(settings.get("jobIntervals", {}).get("hr_engine_job_minutes", 30))


def parse_args() -> argparse.Namespace:
    default_interval = get_default_interval()
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
        default=default_interval,
        help=f"Minutes between runs when using --loop (default from system settings: {default_interval}).",
    )
    parser.add_argument(
        "--log-file",
        default=str(DEFAULT_LOG_FILE),
        help=f"Path to the log file (default: {DEFAULT_LOG_FILE}).",
    )
    parser.add_argument(
        "--skip-sql-sync",
        action="store_true",
        help="Skip the SQL Server live-data refresh step for this run.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    setup_logging(Path(args.log_file))

    if args.interval <= 0:
        logging.error("Interval must be greater than 0 minutes.")
        return 1

    if args.loop:
        run_forever(args.interval, skip_sql_sync=args.skip_sql_sync)
        return 0

    return 0 if run_once(skip_sql_sync=args.skip_sql_sync) else 1


if __name__ == "__main__":
    raise SystemExit(main())
