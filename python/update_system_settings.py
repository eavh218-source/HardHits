"""Update the HardHits stable system settings JSON/JS files.

Usage examples:
    python python/update_system_settings.py --master-interval 60 --hr-interval 30
    python python/update_system_settings.py --master-task-name "HardHits Master" --hr-task-name "HardHits HR Job"
    python python/update_system_settings.py --injured-list "Player One|Player Two|Player Three"
"""

from __future__ import annotations

import argparse
import re

from system_settings import load_system_settings, save_system_settings


def parse_name_list(raw_value: str | None) -> list[str]:
    if raw_value is None:
        return []

    cleaned: list[str] = []
    seen: set[str] = set()
    for item in re.split(r"[\n\r,;|]+", raw_value):
        name = " ".join(str(item).strip().split())
        key = name.casefold()
        if not name or key in seen:
            continue
        seen.add(key)
        cleaned.append(name)
    return cleaned


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Update HardHits stable system settings.")
    parser.add_argument("--master-interval", type=int, help="Minutes between full MasterController refresh runs.")
    parser.add_argument("--hr-interval", type=int, help="Minutes between HR engine refresh runs.")
    parser.add_argument("--master-task-name", help="Optional Windows Task Scheduler task name for MasterController.")
    parser.add_argument("--hr-task-name", help="Optional Windows Task Scheduler task name for hr_engine_job.")
    parser.add_argument(
        "--injured-list",
        help="Optional newline/comma/pipe separated player names to exclude from HR and HRR+ model outputs.",
    )
    parser.add_argument(
        "--clear-injured-list",
        action="store_true",
        help="Clear the saved manual injured list exclusions.",
    )
    return parser.parse_args()


def require_positive(name: str, value: int | None) -> None:
    if value is not None and value <= 0:
        raise SystemExit(f"{name} must be greater than 0.")


def main() -> int:
    args = parse_args()
    require_positive("master-interval", args.master_interval)
    require_positive("hr-interval", args.hr_interval)

    if args.clear_injured_list and args.injured_list is not None:
        raise SystemExit("Use either --injured-list or --clear-injured-list, not both.")

    settings = load_system_settings()

    if args.master_interval is not None:
        settings["jobIntervals"]["mastercontroller_minutes"] = args.master_interval
    if args.hr_interval is not None:
        settings["jobIntervals"]["hr_engine_job_minutes"] = args.hr_interval
    if args.master_task_name is not None:
        settings["taskScheduler"]["mastercontroller_task_name"] = args.master_task_name
    if args.hr_task_name is not None:
        settings["taskScheduler"]["hr_engine_job_task_name"] = args.hr_task_name

    settings.setdefault("playerExclusions", {})
    if args.clear_injured_list:
        settings["playerExclusions"]["injured_list"] = []
    elif args.injured_list is not None:
        settings["playerExclusions"]["injured_list"] = parse_name_list(args.injured_list)

    saved = save_system_settings(settings)
    master_minutes = saved["jobIntervals"]["mastercontroller_minutes"]
    hr_minutes = saved["jobIntervals"]["hr_engine_job_minutes"]
    master_task = saved["taskScheduler"].get("mastercontroller_task_name", "")
    hr_task = saved["taskScheduler"].get("hr_engine_job_task_name", "")
    injured_list = saved.get("playerExclusions", {}).get("injured_list", [])

    print("[OK] Updated stable system settings")
    print(f"  - MasterController interval: {master_minutes} minutes")
    print(f"  - HR engine job interval:   {hr_minutes} minutes")
    print(f"  - Injured list exclusions:  {len(injured_list)} player(s)")
    if injured_list:
        print(f"    {', '.join(injured_list)}")
    print("\nLoop run commands:")
    print(f"  python MasterController.py --loop --interval {master_minutes}")
    print(f"  python python/hr_engine_job.py --loop --interval {hr_minutes}")

    if master_task or hr_task:
        print("\nOptional Windows Task Scheduler sync commands:")
        if master_task:
            print(f'  schtasks /Change /TN "{master_task}" /RI {master_minutes}')
        if hr_task:
            print(f'  schtasks /Change /TN "{hr_task}" /RI {hr_minutes}')

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
