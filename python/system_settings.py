"""Helpers for loading and saving HardHits system settings."""

from __future__ import annotations

import json
from copy import deepcopy
from datetime import datetime, timezone
from typing import Any

from paths import DATA_DIR

SYSTEM_SETTINGS_JSON = DATA_DIR / "system_settings.json"
SYSTEM_SETTINGS_JS = DATA_DIR / "system_settings.js"

DEFAULT_SETTINGS: dict[str, Any] = {
    "environment": "stable",
    "updated_at_utc": None,
    "jobIntervals": {
        "mastercontroller_minutes": 60,
        "hr_engine_job_minutes": 15,
    },
    "taskScheduler": {
        "mastercontroller_task_name": "",
        "hr_engine_job_task_name": "",
    },
    "playerExclusions": {
        "injured_list": [],
    },
}


def _deep_merge(base: dict[str, Any], incoming: dict[str, Any]) -> dict[str, Any]:
    merged = deepcopy(base)
    for key, value in incoming.items():
        if isinstance(value, dict) and isinstance(merged.get(key), dict):
            merged[key] = _deep_merge(merged[key], value)
        else:
            merged[key] = value
    return merged


def load_system_settings() -> dict[str, Any]:
    if SYSTEM_SETTINGS_JSON.exists():
        try:
            payload = json.loads(SYSTEM_SETTINGS_JSON.read_text(encoding="utf-8"))
            if isinstance(payload, dict):
                return _deep_merge(DEFAULT_SETTINGS, payload)
        except Exception:
            pass
    return deepcopy(DEFAULT_SETTINGS)


def save_system_settings(settings: dict[str, Any]) -> dict[str, Any]:
    merged = _deep_merge(DEFAULT_SETTINGS, settings)
    merged["updated_at_utc"] = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    SYSTEM_SETTINGS_JSON.write_text(json.dumps(merged, indent=2), encoding="utf-8")
    SYSTEM_SETTINGS_JS.write_text(
        "const systemSettings = " + json.dumps(merged, indent=2) + ";\nwindow.systemSettings = systemSettings;\n",
        encoding="utf-8",
    )
    return merged


def sync_system_settings_files() -> dict[str, Any]:
    settings = load_system_settings()
    return save_system_settings(settings)
