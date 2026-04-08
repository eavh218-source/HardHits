"""Load HardHits generated data into SQL Server.

Usage examples:
    python python/load_to_sqlserver.py --dry-run
    python python/load_to_sqlserver.py --server YOURSERVER --database HardHits --trusted-connection
    python python/load_to_sqlserver.py --server YOURSERVER --database HardHits --username sa --password ******

Notes:
- `--dry-run` parses the local data files and prints row counts without connecting.
- Actual SQL Server writes require `pyodbc` to be installed in the active Python environment.
- Apply `sql/hardhits_schema.sql` before the first import.
"""

from __future__ import annotations

import argparse
import json
import math
import os
import re
from pathlib import Path
from typing import Any, Iterable

from paths import DATA_DIR, REPO_ROOT

DATE_FILE_RE = re.compile(r"_(\d{4}-\d{2}-\d{2})\.js$")


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


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def parse_named_assignment(text: str, name: str) -> Any:
    patterns = [
        rf"const\s+{re.escape(name)}\s*=\s*(.*?);",
        rf"window\.{re.escape(name)}\s*=\s*(.*?);",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.S)
        if match:
            return json.loads(match.group(1))
    raise ValueError(f"Could not find assignment for {name}")


def extract_date_from_filename(path: Path) -> str | None:
    match = DATE_FILE_RE.search(path.name)
    return match.group(1) if match else None


def collect_hr_model_rows() -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for path in sorted(DATA_DIR.glob("hr_model_*.js")):
        date_str = extract_date_from_filename(path)
        if not date_str:
            continue
        key = date_str.replace("-", "_")
        data = parse_named_assignment(read_text(path), f"hrModelData_{key}")
        for item in data:
            breakdown = item.get("breakdown", {}) or {}
            rows.append({
                "model_date": item.get("date") or date_str,
                "player_name": item.get("name"),
                "team_code": item.get("team") or "UNK",
                "probability": safe_float(item.get("probability")),
                "opp_pitcher": item.get("opp_pitcher") or item.get("opp_pitcher_full"),
                "max_ev": safe_float(item.get("max_ev")),
                "fb_ev": safe_float(item.get("fb_ev")),
                "barrel_pct": safe_float(item.get("barrel_pct")),
                "ev_trend_label": item.get("ev_trend_label"),
                "ev_trend_val": safe_float(item.get("ev_trend_val")),
                "lineup_slot": str(item.get("lineup_slot")) if item.get("lineup_slot") is not None else None,
                "expected_pa": safe_float(item.get("expected_pa")),
                "lineup_status": item.get("lineup_status"),
                "power_score": safe_int(breakdown.get("Power")),
                "form_score": safe_int(breakdown.get("Form")),
                "trend_score": safe_int(breakdown.get("Trend")),
                "park_score": safe_int(breakdown.get("Park")),
                "pitcher_score": safe_int(breakdown.get("Pitcher")),
                "platoon_score": safe_int(breakdown.get("Platoon")),
                "history_score": safe_int(breakdown.get("History")),
                "weather_score": safe_int(breakdown.get("Weather")),
                "source_file": path.name,
            })
    return rows


def collect_hr_results_rows() -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for path in sorted(DATA_DIR.glob("hr_results_*.js")):
        date_str = extract_date_from_filename(path)
        if not date_str:
            continue
        key = date_str.replace("-", "_")
        data = parse_named_assignment(read_text(path), f"hrResultsData_{key}")
        for item in data:
            rows.append({
                "result_date": item.get("date") or date_str,
                "player_name": item.get("name") or item.get("batter"),
                "team_name": item.get("team") or item.get("batter_team"),
                "pitcher_name": item.get("pitcher"),
                "pitcher_team": item.get("pitcher_team"),
                "exit_velocity": safe_float(item.get("exit_velo") or item.get("ev")),
                "launch_angle": safe_float(item.get("launch_angle")),
                "distance_ft": safe_float(item.get("distance") or item.get("dist")),
                "result_status": item.get("status"),
                "source_file": path.name,
            })
    return rows


def collect_hrbi_model_rows() -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for path in sorted(DATA_DIR.glob("hrbi_model_*.js")):
        date_str = extract_date_from_filename(path)
        if not date_str:
            continue
        key = date_str.replace("-", "_")
        data = parse_named_assignment(read_text(path), f"hrbiModelData_{key}")
        for item in data:
            breakdown = item.get("breakdown", {}) or {}
            rows.append({
                "model_date": item.get("date") or date_str,
                "player_name": item.get("name"),
                "team_code": item.get("team") or "UNK",
                "probability": safe_float(item.get("probability")),
                "confidence_band": item.get("confidence_band"),
                "opp_pitcher": item.get("opp_pitcher"),
                "lineup_slot": str(item.get("lineup_slot")) if item.get("lineup_slot") is not None else None,
                "expected_pa": safe_float(item.get("expected_pa")),
                "season_avg": item.get("season_avg_display"),
                "last_5_avg": item.get("last_5_avg_display"),
                "avg_ev": safe_float(item.get("avg_ev")),
                "avg_launch_angle": safe_float(item.get("avg_launch_angle")),
                "recent_avg_ev": safe_float(item.get("recent_avg_ev")),
                "recent_launch_angle": safe_float(item.get("recent_launch_angle")),
                "target_label": item.get("target"),
                "contact_score": safe_int(breakdown.get("Contact")),
                "form_score": safe_int(breakdown.get("Form")),
                "pitcher_score": safe_int(breakdown.get("Pitcher")),
                "rbi_score": safe_int(breakdown.get("RBI")),
                "runs_score": safe_int(breakdown.get("Runs")),
                "park_score": safe_int(breakdown.get("Park")),
                "weather_score": safe_int(breakdown.get("Weather")),
                "source_file": path.name,
            })
    return rows


def collect_hrbi_results_rows() -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    rows: list[dict[str, Any]] = []
    summaries: list[dict[str, Any]] = []
    for path in sorted(DATA_DIR.glob("hrbi_results_*.js")):
        date_str = extract_date_from_filename(path)
        if not date_str:
            continue
        key = date_str.replace("-", "_")
        text = read_text(path)
        data = parse_named_assignment(text, f"hrbiResultsData_{key}")
        summary = parse_named_assignment(text, f"hrbiResultsSummary_{key}")
        summaries.append({
            "result_date": summary.get("date") or date_str,
            "wins": safe_int(summary.get("wins")),
            "losses": safe_int(summary.get("losses")),
            "outliers": safe_int(summary.get("outliers")),
            "precision": safe_float(summary.get("precision")),
            "recall": safe_float(summary.get("recall")),
            "f1_score": safe_float(summary.get("f1_score")),
            "source_file": path.name,
        })
        for item in data:
            rows.append({
                "result_date": item.get("date") or date_str,
                "player_name": item.get("name"),
                "team_code": item.get("team") or "UNK",
                "probability": safe_float(item.get("probability")),
                "confidence_band": item.get("confidence_band"),
                "lineup_slot": str(item.get("lineup_slot")) if item.get("lineup_slot") is not None else None,
                "expected_pa": safe_float(item.get("expected_pa")),
                "actual_hits": safe_int(item.get("actual_hits")),
                "actual_runs": safe_int(item.get("actual_runs")),
                "actual_rbi": safe_int(item.get("actual_rbi")),
                "actual_total": safe_int(item.get("actual_total")),
                "classification": item.get("classification"),
                "source_file": path.name,
            })
    return rows, summaries


def collect_live_home_runs() -> list[dict[str, Any]]:
    path = DATA_DIR / "todays_hrs.js"
    text = read_text(path)
    update_date = re.search(r"const\s+hrUpdateDate\s*=\s*'([^']+)'", text)
    data = parse_named_assignment(text, "todaysHRData")
    result_date = update_date.group(1) if update_date else None
    rows: list[dict[str, Any]] = []
    for item in data:
        rows.append({
            "update_date": item.get("date") or result_date,
            "player_name": item.get("name") or item.get("batter"),
            "team_name": item.get("team") or item.get("batter_team"),
            "pitcher_name": item.get("pitcher"),
            "pitcher_team": item.get("pitcher_team"),
            "exit_velocity": safe_float(item.get("exit_velo") or item.get("ev")),
            "launch_angle": safe_float(item.get("launch_angle")),
            "distance_ft": safe_float(item.get("distance") or item.get("dist")),
            "result_status": item.get("status"),
            "source_file": path.name,
        })
    return rows


def collect_starting_lineup_rows() -> list[dict[str, Any]]:
    path = DATA_DIR / "starting_lineups.js"
    data = parse_named_assignment(read_text(path), "startingLineups")
    rows: list[dict[str, Any]] = []
    for game in data:
        for side_key, team_key in (("away_lineup", "away_team"), ("home_lineup", "home_team")):
            for player in game.get(side_key, []) or []:
                rows.append({
                    "lineup_date": game.get("date"),
                    "matchup": game.get("matchup"),
                    "team_side": side_key.split("_")[0],
                    "team_name": game.get(team_key),
                    "player_name": player.get("name"),
                    "lineup_slot": safe_int(player.get("slot")),
                    "position_code": player.get("position") or player.get("pos"),
                    "game_status": game.get("status"),
                    "game_time_et": game.get("game_time_et"),
                    "source_file": path.name,
                })
    return rows


def collect_game_weather_rows() -> list[dict[str, Any]]:
    path = DATA_DIR / "mlb_weather.js"
    if not path.exists():
        return []

    data = parse_named_assignment(read_text(path), "mlbWeatherData")
    rows: list[dict[str, Any]] = []
    for item in data:
        rows.append({
            "weather_date": item.get("date"),
            "game_time_et": item.get("game_time_et"),
            "away_abbr": item.get("away_abbr"),
            "home_abbr": item.get("home_abbr"),
            "away_team": item.get("away_team") or item.get("away_display"),
            "home_team": item.get("home_team") or item.get("home_display"),
            "venue": item.get("venue"),
            "wind_mph": safe_float(item.get("wind_mph")),
            "wind_direction": item.get("wind_direction"),
            "temperature_f": safe_float(item.get("temperature_f")),
            "humidity_pct": safe_float(item.get("humidity_pct")),
            "precip_pct": safe_float(item.get("precip_pct")),
            "weather_score": safe_int(item.get("weather_score")),
            "source_name": item.get("source") or "covers",
            "source_url": item.get("source_url"),
            "source_file": path.name,
        })
    return rows


def collect_bvp_rows() -> list[dict[str, Any]]:
    path = DATA_DIR / "bvp_data.js"
    data = parse_named_assignment(read_text(path), "bvpData")
    rows: list[dict[str, Any]] = []
    for item in data:
        rows.append({
            "event_date": item.get("date") or item.get("game_date"),
            "pitcher_name": item.get("pitcher_name"),
            "batter_name": item.get("batter_name"),
            "event_result": item.get("events"),
            "launch_speed": safe_float(item.get("launch_speed")),
            "launch_angle": safe_float(item.get("launch_angle")),
            "distance_ft": safe_float(item.get("distance")),
            "source_file": path.name,
        })
    return rows


DATASET_ORDER = [
    "hr_model_predictions",
    "hr_results",
    "hrbi_model_predictions",
    "hrbi_results",
    "hrbi_results_summary",
    "live_home_runs",
    "starting_lineup_players",
    "game_weather",
    "bvp_events",
]


def is_sql_sync_enabled() -> bool:
    return os.getenv("HARDHITS_SQL_SYNC", "1").strip().lower() not in {"0", "false", "no", "off"}


def get_sql_sync_blocker() -> str | None:
    if not is_sql_sync_enabled():
        return "HARDHITS_SQL_SYNC is disabled (set HARDHITS_SQL_SYNC=1 to enable SQL writes)."

    server = os.getenv("HARDHITS_SQL_SERVER", "localhost\\SQLEXPRESS").strip()
    database = os.getenv("HARDHITS_SQL_DATABASE", "HardHits").strip()
    if not server or not database:
        return "Missing SQL connection settings: HARDHITS_SQL_SERVER and HARDHITS_SQL_DATABASE are required."
    return None


def build_env_sql_args(selected_tables: Iterable[str] | None = None, dry_run: bool = False) -> argparse.Namespace | None:
    blocker = get_sql_sync_blocker()
    if blocker:
        return None

    server = os.getenv("HARDHITS_SQL_SERVER", "localhost\\SQLEXPRESS").strip()
    database = os.getenv("HARDHITS_SQL_DATABASE", "HardHits").strip()
    driver = os.getenv("HARDHITS_SQL_DRIVER", "ODBC Driver 18 for SQL Server").strip() or "ODBC Driver 18 for SQL Server"
    username = os.getenv("HARDHITS_SQL_USERNAME", "").strip()
    password = os.getenv("HARDHITS_SQL_PASSWORD", "")
    trusted = os.getenv("HARDHITS_SQL_TRUSTED_CONNECTION", "1").strip().lower() in {"1", "true", "yes", "on"}

    return argparse.Namespace(
        dry_run=dry_run,
        server=server,
        database=database,
        username=username,
        password=password,
        driver=driver,
        trusted_connection=trusted or (not username and not password),
        tables=list(selected_tables or DATASET_ORDER),
    )


def sync_to_sql_from_environment(selected_tables: Iterable[str] | None = None, dry_run: bool = False) -> bool:
    args = build_env_sql_args(selected_tables=selected_tables, dry_run=dry_run)
    if args is None:
        return False

    selected = args.tables or DATASET_ORDER
    datasets = collect_all_datasets(selected)
    if dry_run:
        print_dry_run_summary(datasets, selected)
        return True

    load_to_sql_server(args, datasets, selected)
    return True


def collect_all_datasets(selected_tables: Iterable[str] | None = None) -> dict[str, list[dict[str, Any]]]:
    requested = set(selected_tables or DATASET_ORDER)
    datasets: dict[str, list[dict[str, Any]]] = {name: [] for name in DATASET_ORDER}

    if "hr_model_predictions" in requested:
        datasets["hr_model_predictions"] = collect_hr_model_rows()
    if "hr_results" in requested:
        datasets["hr_results"] = collect_hr_results_rows()
    if "hrbi_model_predictions" in requested:
        datasets["hrbi_model_predictions"] = collect_hrbi_model_rows()
    if "hrbi_results" in requested or "hrbi_results_summary" in requested:
        hrbi_results, hrbi_summary = collect_hrbi_results_rows()
        if "hrbi_results" in requested:
            datasets["hrbi_results"] = hrbi_results
        if "hrbi_results_summary" in requested:
            datasets["hrbi_results_summary"] = hrbi_summary
    if "live_home_runs" in requested:
        datasets["live_home_runs"] = collect_live_home_runs()
    if "starting_lineup_players" in requested:
        datasets["starting_lineup_players"] = collect_starting_lineup_rows()
    if "game_weather" in requested:
        datasets["game_weather"] = collect_game_weather_rows()
    if "bvp_events" in requested:
        datasets["bvp_events"] = collect_bvp_rows()

    return datasets


def print_dry_run_summary(datasets: dict[str, list[dict[str, Any]]], selected_tables: Iterable[str] | None = None) -> None:
    print("=== HardHits SQL Server dry run ===")
    for name in selected_tables or DATASET_ORDER:
        rows = datasets.get(name, [])
        print(f"{name}: {len(rows)} rows")


def require_pyodbc():
    try:
        import pyodbc  # type: ignore
    except ImportError as exc:  # pragma: no cover - environment dependent
        raise SystemExit(
            "pyodbc is required for live SQL Server loads. Install it with `pip install pyodbc`."
        ) from exc
    return pyodbc


def build_connection_string(args: argparse.Namespace) -> str:
    driver = args.driver or os.getenv("HARDHITS_SQL_DRIVER", "ODBC Driver 17 for SQL Server")
    server = args.server or os.getenv("HARDHITS_SQL_SERVER", "")
    database = args.database or os.getenv("HARDHITS_SQL_DATABASE", "")
    username = args.username or os.getenv("HARDHITS_SQL_USERNAME", "")
    password = args.password or os.getenv("HARDHITS_SQL_PASSWORD", "")

    if not server or not database:
        raise SystemExit("SQL Server and database are required unless you use --dry-run.")

    parts = [f"DRIVER={{{driver}}}", f"SERVER={server}", f"DATABASE={database}"]
    if args.trusted_connection or (not username and not password):
        parts.append("Trusted_Connection=yes")
    else:
        parts.append(f"UID={username}")
        parts.append(f"PWD={password}")
    parts.append("TrustServerCertificate=yes")
    return ";".join(parts)


def delete_and_insert(cursor, table: str, date_column: str, rows: list[dict[str, Any]]) -> None:
    if not rows:
        return

    distinct_dates = sorted({row[date_column] for row in rows if row.get(date_column)})
    if distinct_dates:
        placeholders = ", ".join("?" for _ in distinct_dates)
        cursor.execute(f"DELETE FROM dbo.{table} WHERE {date_column} IN ({placeholders})", distinct_dates)

    columns = list(rows[0].keys())
    col_sql = ", ".join(columns)
    placeholders = ", ".join("?" for _ in columns)
    values = [tuple(row.get(col) for col in columns) for row in rows]
    cursor.executemany(f"INSERT INTO dbo.{table} ({col_sql}) VALUES ({placeholders})", values)


def load_to_sql_server(
    args: argparse.Namespace,
    datasets: dict[str, list[dict[str, Any]]],
    selected_tables: Iterable[str] | None = None,
) -> None:
    requested = set(selected_tables or DATASET_ORDER)
    pyodbc = require_pyodbc()
    conn = pyodbc.connect(build_connection_string(args))
    try:
        cursor = conn.cursor()

        if "hr_model_predictions" in requested:
            delete_and_insert(cursor, "hr_model_predictions", "model_date", datasets["hr_model_predictions"])
        if "hr_results" in requested:
            delete_and_insert(cursor, "hr_results", "result_date", datasets["hr_results"])
        if "hrbi_model_predictions" in requested:
            delete_and_insert(cursor, "hrbi_model_predictions", "model_date", datasets["hrbi_model_predictions"])
        if "hrbi_results" in requested:
            delete_and_insert(cursor, "hrbi_results", "result_date", datasets["hrbi_results"])
        if "hrbi_results_summary" in requested:
            delete_and_insert(cursor, "hrbi_results_summary", "result_date", datasets["hrbi_results_summary"])
        if "live_home_runs" in requested:
            delete_and_insert(cursor, "live_home_runs", "update_date", datasets["live_home_runs"])
        if "starting_lineup_players" in requested:
            delete_and_insert(cursor, "starting_lineup_players", "lineup_date", datasets["starting_lineup_players"])
        if "game_weather" in requested:
            delete_and_insert(cursor, "game_weather", "weather_date", datasets["game_weather"])

        if "bvp_events" in requested:
            cursor.execute("TRUNCATE TABLE dbo.bvp_events")
            bvp_rows = datasets["bvp_events"]
            if bvp_rows:
                columns = list(bvp_rows[0].keys())
                col_sql = ", ".join(columns)
                placeholders = ", ".join("?" for _ in columns)
                values = [tuple(row.get(col) for col in columns) for row in bvp_rows]
                cursor.executemany(f"INSERT INTO dbo.bvp_events ({col_sql}) VALUES ({placeholders})", values)

        conn.commit()
    finally:
        conn.close()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Load HardHits generated data into SQL Server.")
    parser.add_argument("--dry-run", action="store_true", help="Parse all supported data files and print row counts without connecting.")
    parser.add_argument("--server", default="", help="SQL Server host or host\\instance.")
    parser.add_argument("--database", default="", help="Target database name.")
    parser.add_argument("--username", default="", help="SQL login username (omit for trusted connection).")
    parser.add_argument("--password", default="", help="SQL login password.")
    parser.add_argument("--driver", default="", help="ODBC driver name. Defaults to ODBC Driver 17 for SQL Server.")
    parser.add_argument("--trusted-connection", action="store_true", help="Use Windows authentication.")
    parser.add_argument(
        "--tables",
        nargs="+",
        choices=DATASET_ORDER,
        help="Optional subset of dataset tables to load. Defaults to all supported tables.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    selected_tables = args.tables or DATASET_ORDER
    datasets = collect_all_datasets(selected_tables)
    print_dry_run_summary(datasets, selected_tables)

    if args.dry_run:
        print("Dry run completed successfully.")
        return 0

    load_to_sql_server(args, datasets, selected_tables)
    print(f"Loaded HardHits datasets into SQL Server from {REPO_ROOT}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
