"""Run from repo root: python MasterController.py"""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PY = ROOT / "python"


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
        print(f"❌ Error running {script_name}: {e}\n")
        return False
    except Exception as e:
        print(f"⚠️ Unexpected error: {e}\n")
        return False


if __name__ == "__main__":
    print("⚾ MLB Data Update Initialized ⚾\n")

    scripts_to_run = ["hardHits.py", "get_starters.py", "BvP.py", "TodaysHomers.py"]
    successful_runs = []

    for script in scripts_to_run:
        if run_script(script):
            successful_runs.append(script)

    print("---------------------------------------")
    if len(successful_runs) == len(scripts_to_run):
        print("✅ All dashboards are now up to date.")
    else:
        failed_count = len(scripts_to_run) - len(successful_runs)
        print(f"⚠️ Update Incomplete: {failed_count} script(s) failed. Check errors above.")
    print("---------------------------------------")
