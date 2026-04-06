"""Offline regression checks for generated HardHits data artifacts.

Usage:
    python python/regression_data_checks.py
"""

from __future__ import annotations

import json
import re
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def extract_json_assignment(text: str, name: str):
    patterns = [
        rf"const\s+{re.escape(name)}\s*=\s*(.*?);",
        rf"window\.{re.escape(name)}\s*=\s*(.*?);",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.S)
        if match:
            return json.loads(match.group(1))
    raise AssertionError(f"Could not find JSON assignment for {name}")


def extract_string_assignment(text: str, name: str) -> str:
    patterns = [
        rf"const\s+{re.escape(name)}\s*=\s*'([^']*)';",
        rf'const\s+{re.escape(name)}\s*=\s*"([^"]*)";',
        rf"window\.{re.escape(name)}\s*=\s*'([^']*)';",
        rf'window\.{re.escape(name)}\s*=\s*"([^"]*)";',
    ]
    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(1)
    raise AssertionError(f"Could not find string assignment for {name}")


class RegressionDataChecks(unittest.TestCase):
    def test_required_output_files_exist(self):
        required = [
            DATA_DIR / "hr_model_data.js",
            DATA_DIR / "hr_model_tomorrow.js",
            DATA_DIR / "hr_results_data.js",
            DATA_DIR / "todays_hrs.js",
            DATA_DIR / "starting_lineups.js",
            DATA_DIR / "bvp_data.js",
            DATA_DIR / "projects_data.js",
        ]
        missing = [str(path.name) for path in required if not path.exists()]
        self.assertEqual(missing, [], f"Missing generated files: {missing}")

    def test_hr_model_data_shape(self):
        text = read_text(DATA_DIR / "hr_model_data.js")
        data = extract_json_assignment(text, "hrModelData")
        self.assertIsInstance(data, list)
        self.assertGreater(len(data), 0)

        sample = data[0]
        for key in ["date", "name", "team", "probability", "breakdown", "opp_pitcher"]:
            self.assertIn(key, sample)

        self.assertIsInstance(sample["breakdown"], dict)
        self.assertGreaterEqual(float(sample["probability"]), 0)
        self.assertLessEqual(float(sample["probability"]), 14.0)

    def test_todays_home_run_feed_shape(self):
        text = read_text(DATA_DIR / "todays_hrs.js")
        update_date = extract_string_assignment(text, "hrUpdateDate")
        last_completed = extract_string_assignment(text, "hrLastCompleted")
        data = extract_json_assignment(text, "todaysHRData")

        self.assertRegex(update_date, r"\d{4}-\d{2}-\d{2}")
        self.assertTrue(last_completed)
        self.assertIsInstance(data, list)
        if data:
            sample = data[0]
            for key in ["name", "team", "pitcher", "ev", "dist"]:
                self.assertIn(key, sample)

    def test_starting_lineups_shape(self):
        text = read_text(DATA_DIR / "starting_lineups.js")
        update_date = extract_string_assignment(text, "lineupUpdateDate")
        last_completed = extract_string_assignment(text, "lineupLastCompleted")
        data = extract_json_assignment(text, "startingLineups")

        self.assertRegex(update_date, r"\d{4}-\d{2}-\d{2}")
        self.assertTrue(last_completed)
        self.assertIsInstance(data, list)
        self.assertGreater(len(data), 0)

        sample = data[0]
        for key in ["matchup", "game_time_et", "status", "away_lineup", "home_lineup"]:
            self.assertIn(key, sample)
        self.assertIsInstance(sample["away_lineup"], list)
        self.assertIsInstance(sample["home_lineup"], list)

    def test_bvp_data_shape(self):
        text = read_text(DATA_DIR / "bvp_data.js")
        matchups = extract_json_assignment(text, "dailyMatchups")
        hits = extract_json_assignment(text, "bvpData")
        self.assertIsInstance(matchups, list)
        self.assertIsInstance(hits, list)
        self.assertGreater(len(matchups), 0)
        if hits:
            sample = hits[0]
            for key in ["pitcher_name", "batter_name", "launch_speed", "distance"]:
                self.assertIn(key, sample)

    def test_projects_data_shape(self):
        text = read_text(DATA_DIR / "projects_data.js")
        data = extract_json_assignment(text, "projectData")
        self.assertIsInstance(data, list)
        self.assertGreater(len(data), 0)
        sample = data[0]
        for key in ["title", "description", "status"]:
            self.assertIn(key, sample)


if __name__ == "__main__":
    result = unittest.TextTestRunner(verbosity=2).run(
        unittest.defaultTestLoader.loadTestsFromTestCase(RegressionDataChecks)
    )
    sys.exit(0 if result.wasSuccessful() else 1)
