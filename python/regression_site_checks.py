"""Offline regression checks for page wiring and navigation.

Usage:
    python python/regression_site_checks.py
"""

from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE_DIR = ROOT / "site"
ASSETS_DIR = ROOT / "assets"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


class RegressionSiteChecks(unittest.TestCase):
    def test_core_pages_exist(self):
        required = [
            SITE_DIR / "HardHits.html",
            SITE_DIR / "DailyHomers.html",
            SITE_DIR / "HRProbability_Combined.html",
            SITE_DIR / "StartingLineups.html",
            SITE_DIR / "BvP.html",
        ]
        missing = [path.name for path in required if not path.exists()]
        self.assertEqual(missing, [], f"Missing pages: {missing}")

    def test_probability_page_uses_expected_data_files(self):
        text = read_text(SITE_DIR / "HRProbability_Combined.html")
        self.assertIn("../data/hr_model_data.js", text)
        self.assertIn("../data/hr_model_tomorrow.js", text)
        self.assertIn('data-nav="hr"', text)

    def test_daily_homers_page_uses_live_feed(self):
        text = read_text(SITE_DIR / "DailyHomers.html")
        self.assertIn("../data/todays_hrs.js", text)
        self.assertIn('data-nav="daily"', text)

    def test_lineups_page_uses_starting_lineups_data(self):
        text = read_text(SITE_DIR / "StartingLineups.html")
        self.assertIn("../data/starting_lineups.js", text)
        self.assertIn('data-nav="lineups"', text)
        self.assertIn("Starting Lineups", text)

    def test_site_nav_includes_lineups(self):
        text = read_text(ASSETS_DIR / "site-nav.js")
        self.assertIn("StartingLineups.html", text)
        self.assertIn("Lineups", text)

    def test_dev_stage_exists(self):
        self.assertTrue((SITE_DIR / "dev" / "index.html").exists())
        self.assertTrue((SITE_DIR / "dev" / "HRProbability_Combined.html").exists())


if __name__ == "__main__":
    result = unittest.TextTestRunner(verbosity=2).run(
        unittest.defaultTestLoader.loadTestsFromTestCase(RegressionSiteChecks)
    )
    sys.exit(0 if result.wasSuccessful() else 1)
