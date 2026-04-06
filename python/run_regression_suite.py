"""Run the HardHits regression checks as a single command.

Usage:
    python python/run_regression_suite.py
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEST_SCRIPTS = [
    ROOT / "python" / "regression_data_checks.py",
    ROOT / "python" / "regression_site_checks.py",
]


def main() -> int:
    failures = 0
    for script in TEST_SCRIPTS:
        print(f"\n=== Running {script.name} ===")
        result = subprocess.run([sys.executable, str(script)], cwd=str(ROOT))
        if result.returncode != 0:
            failures += 1

    if failures:
        print(f"\n❌ Regression suite finished with {failures} failing script(s).")
        return 1

    print("\n✅ Regression suite passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
