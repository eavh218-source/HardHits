"""Export SQL-backed HardHits data into static JS files for GitHub Pages.

GitHub Pages cannot connect to a local SQL Server instance at runtime because it
only serves static files. This script bridges that gap by reading the current
HardHits SQL Server tables and emitting the same page-facing JavaScript data
artifacts that the public site already expects.

Usage examples:
    python python/export_sql_to_static.py --server localhost\\SQLEXPRESS --database HardHits --trusted-connection
    python python/export_sql_to_static.py --output-dir pages-dist/data

Environment variables also work:
    HARDHITS_SQL_SERVER
    HARDHITS_SQL_DATABASE
    HARDHITS_SQL_DRIVER
    HARDHITS_SQL_USERNAME
    HARDHITS_SQL_PASSWORD
    HARDHITS_SQL_TRUSTED_CONNECTION=1
"""

from __future__ import annotations

import argparse
import json
import math
import os
from collections import defaultdict
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo

from paths import DATA_DIR

EASTERN = ZoneInfo("America/New_York")


def require_pyodbc():
    try:
        import pyodbc  # type: ignore
    except ImportError as exc:  # pragma: no cover - environment dependent
        raise SystemExit(
            "pyodbc is required for SQL-backed static exports. Install it with `pip install pyodbc`."
        ) from exc
    return pyodbc


def env_truthy(name: str) -> bool:
    return os.getenv(name, "").strip().lower() in {"1", "true", "yes", "on"}


def safe_float(value: Any, default: float | None = None) -> float | None:
    try:
        if value in (None, ""):
            return default
        parsed = float(value)
        if not math.isfinite(parsed):
            return default
        return parsed
    except Exception:
        return default


def safe_int(value: Any, default: int | None = None) -> int | None:
    try:
        if value in (None, ""):
            return default
        return int(float(value))
    except Exception:
        return default


def build_connection_string(args: argparse.Namespace) -> str:
    driver = args.driver or os.getenv("HARDHITS_SQL_DRIVER", "ODBC Driver 18 for SQL Server")
    server = args.server or os.getenv("HARDHITS_SQL_SERVER", "")
    database = args.database or os.getenv("HARDHITS_SQL_DATABASE", "")
    username = args.username or os.getenv("HARDHITS_SQL_USERNAME", "")
    password = args.password or os.getenv("HARDHITS_SQL_PASSWORD", "")
    trusted = bool(args.trusted_connection or env_truthy("HARDHITS_SQL_TRUSTED_CONNECTION"))

    if not server or not database:
        raise SystemExit("SQL Server and database are required for SQL-backed static exports.")

    parts = [f"DRIVER={{{driver}}}", f"SERVER={server}", f"DATABASE={database}"]
    if trusted or (not username and not password):
        parts.append("Trusted_Connection=yes")
    else:
        parts.append(f"UID={username}")
        parts.append(f"PWD={password}")
    parts.append("TrustServerCertificate=yes")
    return ";".join(parts)


def fetch_rows(cursor, sql: str, params: tuple[Any, ...] = ()) -> list[dict[str, Any]]:
    cursor.execute(sql, params)
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]


def to_date_str(value: Any) -> str | None:
    if value is None:
        return None
    if isinstance(value, datetime):
        return value.date().isoformat()
    if isinstance(value, date):
        return value.isoformat()
    return str(value)


def to_et_label(value: Any) -> str:
    if isinstance(value, datetime):
        dt = value.replace(tzinfo=timezone.utc) if value.tzinfo is None else value.astimezone(timezone.utc)
    else:
        dt = datetime.now(timezone.utc)
    et = dt.astimezone(EASTERN)
    return et.strftime("%I:%M %p ET").lstrip("0")


def clamp_percent(value: Any, max_reference: float) -> int:
    parsed = safe_float(value)
    if parsed is None or max_reference <= 0:
        return 0
    return max(0, min(100, round(parsed / max_reference * 100)))


def park_label(park_score: Any) -> str:
    score = safe_int(park_score, 50) or 50
    if score >= 65:
        return "Launch Pad"
    if score <= 35:
        return "Pitcher Park"
    return "Neutral"


def trend_label(value: Any) -> str:
    parsed = safe_float(value, 0.0) or 0.0
    if parsed >= 2:
        return "Heating Up"
    if parsed <= -2:
        return "Cooling Off"
    return "Stable"


def parse_avg_value(value: Any) -> float | None:
    if value in (None, "", "N/A"):
        return None
    if isinstance(value, (int, float)):
        parsed = float(value)
        return parsed if math.isfinite(parsed) else None
    text = str(value).strip()
    if not text or text.upper() == "N/A":
        return None
    if text.startswith("."):
        text = "0" + text
    try:
        parsed = float(text)
        return parsed if math.isfinite(parsed) else None
    except Exception:
        return None


def avg_display(value: Any) -> str:
    parsed = parse_avg_value(value)
    if parsed is None:
        return "N/A"
    return f"{parsed:.3f}".lstrip("0")


def normalize_slot(value: Any, default: Any = "TBD") -> Any:
    if value in (None, "", "TBD"):
        return default
    parsed_int = safe_int(value)
    return parsed_int if parsed_int is not None else str(value)


def stringify(value: Any, default: str = "") -> str:
    if value is None:
        return default
    return str(value)


def serialize_assignment(name: str, value: Any, *, window: bool = False) -> str:
    lhs = f"window.{name}" if window else f"const {name}"
    if isinstance(value, str):
        payload = json.dumps(value, ensure_ascii=False)
    else:
        payload = json.dumps(value, indent=2, ensure_ascii=False)
    return f"{lhs} = {payload};"


def write_js_file(path: Path, assignments: list[tuple[str, Any, bool]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [f"// Exported from HardHits SQL Server for GitHub Pages ({stamp})", ""]
    for name, value, is_window in assignments:
        lines.append(serialize_assignment(name, value, window=is_window))
    lines.append("")
    path.write_text("\n".join(lines), encoding="utf-8")


def latest_imported_at(rows: list[dict[str, Any]]) -> datetime | None:
    values: list[datetime] = []
    for row in rows:
        value = row.get("imported_at_utc")
        if isinstance(value, datetime):
            values.append(value)
    return max(values) if values else None


def normalize_hr_model_row(row: dict[str, Any]) -> dict[str, Any]:
    max_ev = safe_float(row.get("max_ev"))
    fb_ev = safe_float(row.get("fb_ev"))
    barrel_pct = safe_float(row.get("barrel_pct"))
    ev_trend_val = safe_float(row.get("ev_trend_val"), 0.0)
    return {
        "date": to_date_str(row.get("model_date")),
        "name": stringify(row.get("player_name")),
        "team": stringify(row.get("team_code"), "UNK"),
        "probability": safe_float(row.get("probability"), 0.0),
        "breakdown": {
            "Power": safe_int(row.get("power_score"), 0),
            "Form": safe_int(row.get("form_score"), 0),
            "Trend": safe_int(row.get("trend_score"), 0),
            "Park": safe_int(row.get("park_score"), 50),
            "Pitcher": safe_int(row.get("pitcher_score"), 0),
            "Platoon": safe_int(row.get("platoon_score"), 50),
            "History": safe_int(row.get("history_score"), 50),
            "Weather": safe_int(row.get("weather_score"), 50),
        },
        "ev_trend_val": ev_trend_val,
        "ev_trend_label": stringify(row.get("ev_trend_label"), trend_label(ev_trend_val)),
        "max_ev": max_ev,
        "max_ev_pct": clamp_percent(max_ev, 110.0),
        "fb_ev": fb_ev,
        "fb_ev_pct": clamp_percent(fb_ev, 100.0),
        "barrel_pct": barrel_pct,
        "lineup_slot": normalize_slot(row.get("lineup_slot"), "TBD"),
        "expected_pa": safe_float(row.get("expected_pa"), 3.5),
        "lineup_status": stringify(row.get("lineup_status"), "Lineup Pending"),
        "opp_pitcher": stringify(row.get("opp_pitcher"), "TBD"),
        "opp_pitcher_full": stringify(row.get("opp_pitcher"), "TBD"),
        "pitcher_hr_risk": round((safe_int(row.get("pitcher_score"), 0) or 0) / 3.0, 1),
        "pitcher_hr9": 0.0,
        "pitcher_fb_rate": 0.0,
        "starter_context": 50.0,
        "platoon_advantage": float(safe_int(row.get("platoon_score"), 50) or 50),
        "weather_boost": float(safe_int(row.get("weather_score"), 50) or 50),
        "park_factor": park_label(row.get("park_score")),
        "bvp_boost": 0.0,
        "h2h_score": float(safe_int(row.get("history_score"), 50) or 50),
        "bvp_summary": "",
    }


def normalize_hr_result_row(row: dict[str, Any]) -> dict[str, Any]:
    ev = safe_float(row.get("exit_velocity"))
    dist = safe_float(row.get("distance_ft"))
    return {
        "date": to_date_str(row.get("result_date")),
        "batter": stringify(row.get("player_name")),
        "name": stringify(row.get("player_name")),
        "batter_team": stringify(row.get("team_name")),
        "team": stringify(row.get("team_name")),
        "pitcher": stringify(row.get("pitcher_name")),
        "pitcher_team": stringify(row.get("pitcher_team")),
        "exit_velo": ev,
        "ev": ev,
        "launch_angle": safe_float(row.get("launch_angle")),
        "distance": dist,
        "dist": dist,
        "status": stringify(row.get("result_status"), "HOME RUN"),
    }


def normalize_hrbi_model_row(row: dict[str, Any]) -> dict[str, Any]:
    avg_ev = safe_float(row.get("avg_ev"))
    recent_avg_ev = safe_float(row.get("recent_avg_ev"))
    avg_la = safe_float(row.get("avg_launch_angle"))
    recent_la = safe_float(row.get("recent_launch_angle"))
    ev_delta = None
    if avg_ev is not None and recent_avg_ev is not None:
        ev_delta = round(recent_avg_ev - avg_ev, 2)

    season_display = avg_display(row.get("season_avg"))
    last_5_display = avg_display(row.get("last_5_avg"))

    return {
        "date": to_date_str(row.get("model_date")),
        "name": stringify(row.get("player_name")),
        "team": stringify(row.get("team_code"), "UNK"),
        "probability": safe_float(row.get("probability"), 0.0),
        "target": stringify(row.get("target_label"), "H+R+RBI >= 3"),
        "confidence_band": stringify(row.get("confidence_band"), "Watchlist"),
        "lineup_slot": normalize_slot(row.get("lineup_slot"), 9),
        "expected_pa": safe_float(row.get("expected_pa"), 3.5),
        "season_avg": parse_avg_value(row.get("season_avg")),
        "season_avg_display": season_display,
        "last_5_avg": parse_avg_value(row.get("last_5_avg")),
        "last_5_avg_display": last_5_display,
        "last_5_hits": 0,
        "last_5_ab": 0,
        "vs_starter_avg": None,
        "vs_starter_avg_display": "N/A",
        "vs_starter_hits": 0,
        "vs_starter_ab": 0,
        "vs_starter_hr": 0,
        "vs_starter_rbi": 0,
        "opp_pitcher": stringify(row.get("opp_pitcher"), "TBD"),
        "avg_ev": avg_ev,
        "recent_avg_ev": recent_avg_ev,
        "avg_launch_angle": avg_la,
        "recent_launch_angle": recent_la,
        "ev_trend_val": ev_delta,
        "ev_trend_label": trend_label(ev_delta),
        "babip_trend_val": 0.0,
        "babip_trend_label": "Stable",
        "ld_rate": None,
        "ld_ev": None,
        "hard_hit_rate": None,
        "live_preview": {
            "live_probability": round((safe_float(row.get("probability"), 0.0) or 0.0) * 1.03, 2),
            "status": "SQL_SYNCED",
            "current_total": 0,
        },
        "breakdown": {
            "Contact": safe_int(row.get("contact_score"), 0),
            "Form": safe_int(row.get("form_score"), 0),
            "Pitcher": safe_int(row.get("pitcher_score"), 0),
            "RBI": safe_int(row.get("rbi_score"), 0),
            "Runs": safe_int(row.get("runs_score"), 0),
            "Park": safe_int(row.get("park_score"), 50),
        },
    }


def normalize_hrbi_result_row(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": to_date_str(row.get("result_date")),
        "name": stringify(row.get("player_name")),
        "team": stringify(row.get("team_code"), "UNK"),
        "probability": safe_float(row.get("probability"), 0.0),
        "confidence_band": stringify(row.get("confidence_band"), "Tracked"),
        "lineup_slot": normalize_slot(row.get("lineup_slot"), 9),
        "expected_pa": safe_float(row.get("expected_pa"), 3.5),
        "actual_hits": safe_int(row.get("actual_hits"), 0),
        "actual_runs": safe_int(row.get("actual_runs"), 0),
        "actual_rbi": safe_int(row.get("actual_rbi"), 0),
        "actual_total": safe_int(row.get("actual_total"), 0),
        "classification": stringify(row.get("classification"), "Tracked"),
    }


def normalize_hrbi_summary_row(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": to_date_str(row.get("result_date")),
        "wins": safe_int(row.get("wins"), 0),
        "losses": safe_int(row.get("losses"), 0),
        "outliers": safe_int(row.get("outliers"), 0),
        "precision": safe_float(row.get("precision"), 0.0),
        "recall": safe_float(row.get("recall"), 0.0),
        "f1_score": safe_float(row.get("f1_score"), 0.0),
    }


def normalize_live_hr_row(row: dict[str, Any]) -> dict[str, Any]:
    ev = safe_float(row.get("exit_velocity"))
    dist = safe_float(row.get("distance_ft"))
    return {
        "date": to_date_str(row.get("update_date")),
        "batter": stringify(row.get("player_name")),
        "name": stringify(row.get("player_name")),
        "batter_team": stringify(row.get("team_name")),
        "team": stringify(row.get("team_name")),
        "pitcher": stringify(row.get("pitcher_name")),
        "pitcher_team": stringify(row.get("pitcher_team")),
        "exit_velo": ev,
        "ev": ev,
        "launch_angle": safe_float(row.get("launch_angle")),
        "distance": dist,
        "dist": dist,
        "status": stringify(row.get("result_status"), "HOME RUN"),
    }


def build_starting_lineups(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    grouped: dict[tuple[str, str], dict[str, Any]] = {}
    for row in rows:
        lineup_date = to_date_str(row.get("lineup_date")) or ""
        matchup = stringify(row.get("matchup"), "")
        key = (lineup_date, matchup)
        game = grouped.setdefault(
            key,
            {
                "date": lineup_date,
                "game_pk": None,
                "matchup": matchup,
                "away_team": None,
                "home_team": None,
                "game_time_et": stringify(row.get("game_time_et"), "TBD"),
                "status": stringify(row.get("game_status"), "Scheduled"),
                "eligible": True,
                "reason": stringify(row.get("game_status"), "lineup imported from SQL"),
                "minutes_to_first_pitch": None,
                "away_lineup": [],
                "home_lineup": [],
            },
        )

        player = {
            "slot": safe_int(row.get("lineup_slot")),
            "name": stringify(row.get("player_name")),
            "position": stringify(row.get("position_code")),
        }

        if row.get("team_side") == "away":
            game["away_team"] = stringify(row.get("team_name"))
            game["away_lineup"].append(player)
        else:
            game["home_team"] = stringify(row.get("team_name"))
            game["home_lineup"].append(player)

    def sort_key(game: dict[str, Any]) -> tuple[str, str]:
        return (game.get("date") or "", game.get("matchup") or "")

    games = list(grouped.values())
    for game in games:
        game["away_lineup"].sort(key=lambda p: (safe_int(p.get("slot"), 99) or 99, p.get("name") or ""))
        game["home_lineup"].sort(key=lambda p: (safe_int(p.get("slot"), 99) or 99, p.get("name") or ""))
    return sorted(games, key=sort_key)


def write_historical_index_file(path: Path, dates: list[str]) -> None:
    content = "// Historical Results Index\n// Load specific model/results files as needed\n\n"
    content += f"const historicalDates = {json.dumps(dates, indent=2)};\n\n"
    content += """
function loadHistoricalData(dateStr) {
    return new Promise((resolve, reject) => {
        if (!dateStr) {
            reject(new Error('Missing historical date.'));
            return;
        }

        const key = dateStr.replace(/-/g, '_');
        let modelLoaded = Boolean(window[`hrModelData_${key}`]);
        let resultsLoaded = Boolean(window[`hrResultsData_${key}`]);

        function finalize() {
            if (modelLoaded && resultsLoaded) {
                resolve();
            }
        }

        if (modelLoaded && resultsLoaded) {
            resolve();
            return;
        }

        if (!modelLoaded) {
            const modelScript = document.createElement('script');
            modelScript.src = `../data/hr_model_${dateStr}.js`;
            modelScript.onload = () => {
                modelLoaded = true;
                finalize();
            };
            modelScript.onerror = () => reject(new Error(`Failed to load model data for ${dateStr}`));
            document.head.appendChild(modelScript);
        }

        if (!resultsLoaded) {
            const resultsScript = document.createElement('script');
            resultsScript.src = `../data/hr_results_${dateStr}.js`;
            resultsScript.onload = () => {
                resultsLoaded = true;
                finalize();
            };
            resultsScript.onerror = () => reject(new Error(`Failed to load results data for ${dateStr}`));
            document.head.appendChild(resultsScript);
        }

        setTimeout(() => {
            if (!modelLoaded || !resultsLoaded) {
                reject(new Error(`Timeout loading historical data for ${dateStr}`));
            }
        }, 10000);
    });
}
""".strip() + "\n"
    path.write_text(content, encoding="utf-8")


def write_hrbi_index_file(path: Path, dates: list[str]) -> None:
    content = "// H+R+RBI Historical Results Index\n// Load specific H+R+RBI model/results files as needed\n\n"
    content += f"const hrbiHistoricalDates = {json.dumps(dates, indent=2)};\n\n"
    content += """
function loadHrbiHistoricalData(dateStr) {
    return new Promise((resolve, reject) => {
        if (!dateStr) {
            reject(new Error('Missing H+R+RBI date.'));
            return;
        }

        const key = dateStr.replace(/-/g, '_');
        let modelLoaded = Boolean(window[`hrbiModelData_${key}`]);
        let resultsLoaded = Boolean(window[`hrbiResultsData_${key}`] && window[`hrbiResultsSummary_${key}`]);

        function finalize() {
            if (modelLoaded && resultsLoaded) {
                resolve();
            }
        }

        if (modelLoaded && resultsLoaded) {
            resolve();
            return;
        }

        if (!modelLoaded) {
            const modelScript = document.createElement('script');
            modelScript.src = `../data/hrbi_model_${dateStr}.js`;
            modelScript.onload = () => {
                modelLoaded = true;
                finalize();
            };
            modelScript.onerror = () => reject(new Error(`Failed to load H+R+RBI model for ${dateStr}`));
            document.head.appendChild(modelScript);
        }

        if (!resultsLoaded) {
            const resultsScript = document.createElement('script');
            resultsScript.src = `../data/hrbi_results_${dateStr}.js`;
            resultsScript.onload = () => {
                resultsLoaded = true;
                finalize();
            };
            resultsScript.onerror = () => reject(new Error(`Failed to load H+R+RBI results for ${dateStr}`));
            document.head.appendChild(resultsScript);
        }

        setTimeout(() => {
            if (!modelLoaded || !resultsLoaded) {
                reject(new Error(`Timeout loading H+R+RBI historical data for ${dateStr}`));
            }
        }, 10000);
    });
}
""".strip() + "\n"
    path.write_text(content, encoding="utf-8")


def pick_best_date(dates: list[str], preferred: str) -> str | None:
    if not dates:
        return None
    if preferred in dates:
        return preferred
    before = [d for d in dates if d <= preferred]
    if before:
        return before[-1]
    return dates[-1]


def export_site_data_from_sql(args: argparse.Namespace) -> list[Path]:
    pyodbc = require_pyodbc()
    output_dir = Path(args.output_dir or DATA_DIR)
    output_dir.mkdir(parents=True, exist_ok=True)

    conn = pyodbc.connect(build_connection_string(args))
    try:
        cursor = conn.cursor()

        hr_model_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.hr_model_predictions ORDER BY model_date, probability DESC, player_name"
        )
        hr_result_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.hr_results ORDER BY result_date, player_name"
        )
        hrbi_model_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.hrbi_model_predictions ORDER BY model_date, probability DESC, player_name"
        )
        hrbi_result_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.hrbi_results ORDER BY result_date, probability DESC, player_name"
        )
        hrbi_summary_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.hrbi_results_summary ORDER BY result_date"
        )
        live_hr_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.live_home_runs ORDER BY update_date, player_name"
        )
        lineup_rows = fetch_rows(
            cursor,
            "SELECT * FROM dbo.starting_lineup_players ORDER BY lineup_date, matchup, team_side, lineup_slot, player_name"
        )
    finally:
        conn.close()

    hr_model_by_date: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in hr_model_rows:
        hr_model_by_date[to_date_str(row.get("model_date")) or ""].append(normalize_hr_model_row(row))

    hr_results_by_date: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in hr_result_rows:
        hr_results_by_date[to_date_str(row.get("result_date")) or ""].append(normalize_hr_result_row(row))

    hrbi_model_by_date: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in hrbi_model_rows:
        hrbi_model_by_date[to_date_str(row.get("model_date")) or ""].append(normalize_hrbi_model_row(row))

    hrbi_results_by_date: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in hrbi_result_rows:
        hrbi_results_by_date[to_date_str(row.get("result_date")) or ""].append(normalize_hrbi_result_row(row))

    hrbi_summary_by_date = {
        to_date_str(row.get("result_date")) or "": normalize_hrbi_summary_row(row)
        for row in hrbi_summary_rows
    }

    live_by_date: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in live_hr_rows:
        live_by_date[to_date_str(row.get("update_date")) or ""].append(normalize_live_hr_row(row))

    lineups = build_starting_lineups(lineup_rows)

    written: list[Path] = []

    today_et = datetime.now(EASTERN).date()
    today_str = today_et.isoformat()
    tomorrow_str = (today_et + timedelta(days=1)).isoformat()

    hr_model_dates = sorted([d for d in hr_model_by_date if d])
    hr_result_dates = sorted([d for d in hr_results_by_date if d])
    hrbi_model_dates = sorted([d for d in hrbi_model_by_date if d])
    hrbi_result_dates = sorted([d for d in hrbi_results_by_date if d])
    live_dates = sorted([d for d in live_by_date if d])
    lineup_dates = sorted([str(game.get("date")) for game in lineups if game.get("date")])

    today_model_date = pick_best_date(hr_model_dates, today_str)
    tomorrow_model_date = pick_best_date(hr_model_dates, tomorrow_str)
    latest_hr_results_date = hr_result_dates[-1] if hr_result_dates else None
    latest_hrbi_model_date = pick_best_date(hrbi_model_dates, today_str)
    latest_hrbi_results_date = hrbi_result_dates[-1] if hrbi_result_dates else None
    latest_live_date = live_dates[-1] if live_dates else None
    latest_lineup_date = lineup_dates[-1] if lineup_dates else None

    if today_model_date:
        today_source_rows = [row for row in hr_model_rows if to_date_str(row.get("model_date")) == today_model_date]
        write_js_file(
            output_dir / "hr_model_data.js",
            [
                ("hrModelUpdateDate", today_model_date, False),
                ("hrModelLastRunTime", to_et_label(latest_imported_at(today_source_rows)), False),
                ("hrModelData", hr_model_by_date[today_model_date], False),
            ],
        )
        written.append(output_dir / "hr_model_data.js")

    if tomorrow_model_date:
        tomorrow_source_rows = [row for row in hr_model_rows if to_date_str(row.get("model_date")) == tomorrow_model_date]
        write_js_file(
            output_dir / "hr_model_tomorrow.js",
            [
                ("hrModelTomorrowUpdateDate", tomorrow_model_date, False),
                ("hrModelTomorrowLastRunTime", to_et_label(latest_imported_at(tomorrow_source_rows)), False),
                ("hrModelTomorrowData", hr_model_by_date[tomorrow_model_date], False),
            ],
        )
        written.append(output_dir / "hr_model_tomorrow.js")

    if latest_hr_results_date:
        write_js_file(
            output_dir / "hr_results_data.js",
            [("hrResultsData", hr_results_by_date[latest_hr_results_date], True)],
        )
        written.append(output_dir / "hr_results_data.js")

    if latest_hrbi_model_date:
        hrbi_source_rows = [row for row in hrbi_model_rows if to_date_str(row.get("model_date")) == latest_hrbi_model_date]
        write_js_file(
            output_dir / "hrbi_model_data.js",
            [
                ("hrbiModelUpdateDate", latest_hrbi_model_date, False),
                ("hrbiModelLastRunTime", to_et_label(latest_imported_at(hrbi_source_rows)), False),
                ("hrbiModelData", hrbi_model_by_date[latest_hrbi_model_date], False),
            ],
        )
        written.append(output_dir / "hrbi_model_data.js")

    if latest_hrbi_results_date:
        write_js_file(
            output_dir / "hrbi_results_data.js",
            [
                ("hrbiResultsData", hrbi_results_by_date[latest_hrbi_results_date], False),
                ("hrbiResultsSummary", hrbi_summary_by_date.get(latest_hrbi_results_date, {"date": latest_hrbi_results_date}), False),
            ],
        )
        written.append(output_dir / "hrbi_results_data.js")

    if latest_live_date:
        latest_live_rows = [row for row in live_hr_rows if to_date_str(row.get("update_date")) == latest_live_date]
        write_js_file(
            output_dir / "todays_hrs.js",
            [
                ("hrUpdateDate", latest_live_date, False),
                ("hrLastCompleted", to_et_label(latest_imported_at(latest_live_rows)), False),
                ("todaysHRData", live_by_date[latest_live_date], False),
            ],
        )
        written.append(output_dir / "todays_hrs.js")

    if latest_lineup_date:
        latest_lineups = [game for game in lineups if game.get("date") == latest_lineup_date]
        lineup_source_rows = [row for row in lineup_rows if to_date_str(row.get("lineup_date")) == latest_lineup_date]
        write_js_file(
            output_dir / "starting_lineups.js",
            [
                ("lineupUpdateDate", latest_lineup_date, False),
                ("lineupLastCompleted", to_et_label(latest_imported_at(lineup_source_rows)), False),
                ("startingLineups", latest_lineups, False),
            ],
        )
        written.append(output_dir / "starting_lineups.js")

    for date_str, rows in hr_model_by_date.items():
        key = date_str.replace("-", "_")
        source_rows = [row for row in hr_model_rows if to_date_str(row.get("model_date")) == date_str]
        path = output_dir / f"hr_model_{date_str}.js"
        write_js_file(
            path,
            [
                (f"hrModelUpdateDate_{key}", date_str, True),
                (f"hrModelLastRunTime_{key}", to_et_label(latest_imported_at(source_rows)), True),
                (f"hrModelData_{key}", rows, True),
            ],
        )
        written.append(path)

    for date_str, rows in hr_results_by_date.items():
        key = date_str.replace("-", "_")
        path = output_dir / f"hr_results_{date_str}.js"
        write_js_file(path, [(f"hrResultsData_{key}", rows, True)])
        written.append(path)

    for date_str, rows in hrbi_model_by_date.items():
        key = date_str.replace("-", "_")
        path = output_dir / f"hrbi_model_{date_str}.js"
        write_js_file(path, [(f"hrbiModelData_{key}", rows, True)])
        written.append(path)

    for date_str, rows in hrbi_results_by_date.items():
        key = date_str.replace("-", "_")
        path = output_dir / f"hrbi_results_{date_str}.js"
        write_js_file(
            path,
            [
                (f"hrbiResultsData_{key}", rows, True),
                (f"hrbiResultsSummary_{key}", hrbi_summary_by_date.get(date_str, {"date": date_str}), True),
            ],
        )
        written.append(path)

    historical_dates = sorted(set(hr_model_dates).intersection(hr_result_dates), reverse=True)
    hrbi_historical_dates = sorted(set(hrbi_model_dates).intersection(hrbi_result_dates), reverse=True)

    write_historical_index_file(output_dir / "historical_index.js", historical_dates)
    written.append(output_dir / "historical_index.js")

    write_hrbi_index_file(output_dir / "hrbi_results_index.js", hrbi_historical_dates)
    written.append(output_dir / "hrbi_results_index.js")

    return written


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Export SQL-backed HardHits data into static JS files.")
    parser.add_argument("--server", default="", help="SQL Server host or host\\instance.")
    parser.add_argument("--database", default="", help="Target database name.")
    parser.add_argument("--username", default="", help="SQL login username (omit for trusted connection).")
    parser.add_argument("--password", default="", help="SQL login password.")
    parser.add_argument("--driver", default="", help="ODBC driver name. Defaults to ODBC Driver 18 for SQL Server.")
    parser.add_argument("--trusted-connection", action="store_true", help="Use Windows authentication.")
    parser.add_argument("--output-dir", default=str(DATA_DIR), help="Directory where the page-facing JS files should be written.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    written = export_site_data_from_sql(args)
    print(f"[OK] Exported {len(written)} SQL-backed static files into {Path(args.output_dir).resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
