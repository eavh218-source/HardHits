"""Run from repo root: python MasterController.py"""
from __future__ import annotations

import argparse
import importlib
import subprocess
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PY = ROOT / "python"
STATUS_SCRIPT = PY / "site_status.py"

if str(PY) not in sys.path:
    sys.path.insert(0, str(PY))

load_system_settings = importlib.import_module("system_settings").load_system_settings


def run_script(script_name: str) -> bool:
    print(f"--- Starting: {script_name} ---")
    try:
        subprocess.run(
            [sys.executable, str(PY / script_name)],
            check=True,
            cwd=str(ROOT),
        )
        print(f"--- Finished: {script_name} successfully ---\n")
        return True
    except subprocess.CalledProcessError as e:
        print(f"[ERROR] Error running {script_name}: {e}\n")
        return False
    except Exception as e:
        print(f"[WARN] Unexpected error: {e}\n")
        return False


def write_site_status(success: bool, detail: str) -> None:
    try:
        subprocess.run(
            [
                sys.executable,
                str(STATUS_SCRIPT),
                "--job-name",
                "mastercontroller",
                "--success",
                "true" if success else "false",
                "--detail",
                detail,
            ],
            check=False,
            cwd=str(ROOT),
        )
    except Exception as e:
        print(f"[WARN] Could not update site status: {e}")


def get_default_interval() -> int:
    settings = load_system_settings()
    return int(settings.get("jobIntervals", {}).get("mastercontroller_minutes", 60))


def parse_args() -> argparse.Namespace:
    default_interval = get_default_interval()
    parser = argparse.ArgumentParser(description="Run the HardHits full refresh once or continuously.")
    parser.add_argument(
        "--loop",
        action="store_true",
        help="Keep the process alive and rerun the full refresh every interval minutes.",
    )
    parser.add_argument(
        "--interval",
        type=int,
        default=default_interval,
        help=f"Minutes between loop runs (default from system settings: {default_interval}).",
    )
    return parser.parse_args()


def run_update_cycle() -> bool:
    print("MLB Data Update Initialized\n")

    scripts_to_run = [
        # 1. Build daily matchup context first (starting points)
        "get_starters.py",
        # 1b. Pull daily weather context for the slate
        "get_mlb_weather.py",
        # 2. Pitcher-vs-batter analysis for situational insight
        "BvP.py",
        # 3. Hard hit dashboard details (101+ MPH events)
        "hardHits.py",
        # 4. Today's model predictions run
        "hr_engine.py",
        # 4b. H+R+RBI model predictions
        "hrbi_engine.py",
        # 4c. Evaluate yesterday's H+R+RBI model against final box scores
        "hrbi_results_evaluator.py",
        # 5. Actual HR results validator for today
        "hr_validator.py",
        # 6. Daily home run feed, in case UI needs immediate game updates
        "TodaysHomers.py",
        # 7. Sync project tracker JSON -> JS for the projects page
        "update_projects.py",
        # 8. Sync stable system settings JSON -> JS for admin/scheduler tooling
        "update_system_settings.py",
        # 9. Write the latest generated data into SQL Server
        "load_to_sqlserver.py",
        # 10. Run lightweight regression checks after the refresh completes
        "run_regression_suite.py",
    ]
    successful_runs = []

    for script in scripts_to_run:
        if run_script(script):
            successful_runs.append(script)

    print("---------------------------------------")
    all_ok = len(successful_runs) == len(scripts_to_run)
    if all_ok:
        detail = "All stable dashboard refresh, SQL sync, and regression scripts completed successfully."
        print("[OK] All dashboards are now up to date.")
        write_site_status(True, detail)
    else:
        failed_count = len(scripts_to_run) - len(successful_runs)
        detail = f"{failed_count} stable refresh script(s) failed. Check logs for details."
        print(f"[WARN] Update Incomplete: {failed_count} script(s) failed. Check errors above.")
        write_site_status(False, detail)
    print("---------------------------------------")
    return all_ok


def run_forever(interval_minutes: int) -> None:
    print(f"[INFO] Continuous mode enabled; interval={interval_minutes} minutes\n")
    while True:
        started_at = datetime.now()
        run_update_cycle()
        next_run = started_at + timedelta(minutes=interval_minutes)
        sleep_seconds = max((next_run - datetime.now()).total_seconds(), 0)
        print(f"[INFO] Next full refresh scheduled for {next_run.strftime('%Y-%m-%d %I:%M:%S %p')}")
        time.sleep(sleep_seconds)


if __name__ == "__main__":
    args = parse_args()
    if args.interval <= 0:
        raise SystemExit("Interval must be greater than 0 minutes.")

    if args.loop:
        run_forever(args.interval)
    else:
        raise SystemExit(0 if run_update_cycle() else 1)
