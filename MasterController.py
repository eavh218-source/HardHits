import subprocess
import sys

def run_script(script_name):
    print(f"--- Starting: {script_name} ---")
    try:
        # Runs the script and displays output in real-time
        subprocess.run([sys.executable, script_name], check=True)
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
        success = run_script(script)
        if success:
            successful_runs.append(script)

    print("---------------------------------------")
    if len(successful_runs) == len(scripts_to_run):
        print("✅ All dashboards are now up to date.")
    else:
        failed_count = len(scripts_to_run) - len(successful_runs)
        print(f"⚠️ Update Incomplete: {failed_count} script(s) failed. Check errors above.")
    print("---------------------------------------")