"""Run from repo root: python MasterController.py"""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PY = ROOT / "python"
STATUS_SCRIPT = PY / "site_status.py"


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


if __name__ == "__main__":
    print("MLB Data Update Initialized\n")

    scripts_to_run = [
        # 1. Build daily matchup context first (starting points)
        "get_starters.py",
        # 2. Pitcher-vs-batter analysis for situational insight
        "BvP.py",
        # 3. Hard hit dashboard details (101+ MPH events)
        "hardHits.py",
        # 4. Today's model predictions run
        "hr_engine.py",
        # 4b. Stable HRR+ model predictions
        "hrbi_engine.py",
        # 5. Actual HR results validator for today
        "hr_validator.py",
        # 6. Daily home run feed, in case UI needs immediate game updates
        "TodaysHomers.py",
        # 7. Sync project tracker JSON -> JS for the projects page
        "update_projects.py",
    ]
    successful_runs = []

    for script in scripts_to_run:
        if run_script(script):
            successful_runs.append(script)

    print("---------------------------------------")
    if len(successful_runs) == len(scripts_to_run):
        detail = "All stable dashboard refresh scripts completed successfully."
        print("[OK] All dashboards are now up to date.")
        write_site_status(True, detail)
    else:
        failed_count = len(scripts_to_run) - len(successful_runs)
        detail = f"{failed_count} stable refresh script(s) failed. Check logs for details."
        print(f"[WARN] Update Incomplete: {failed_count} script(s) failed. Check errors above.")
        write_site_status(False, detail)
    print("---------------------------------------")
