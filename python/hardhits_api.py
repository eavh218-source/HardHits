"""Local FastAPI backend for HardHits using SQL Server.

This makes the project dynamic outside of GitHub Pages by exposing JSON API
endpoints backed by the `HardHits` SQL Server database.

Run locally:
    python python/hardhits_api.py
or:
    python -m uvicorn hardhits_api:app --app-dir python --host 127.0.0.1 --port 8000
"""

from __future__ import annotations

import math
import os
from collections import defaultdict
from datetime import date, datetime
from typing import Any

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

SQL_SERVER = os.getenv("HARDHITS_SQL_SERVER", "localhost\\SQLEXPRESS")
SQL_DATABASE = os.getenv("HARDHITS_SQL_DATABASE", "HardHits")
SQL_DRIVER = os.getenv("HARDHITS_SQL_DRIVER", "ODBC Driver 18 for SQL Server")
SQL_USERNAME = os.getenv("HARDHITS_SQL_USERNAME", "")
SQL_PASSWORD = os.getenv("HARDHITS_SQL_PASSWORD", "")
SQL_TRUSTED = os.getenv("HARDHITS_SQL_TRUSTED_CONNECTION", "1").strip().lower() in {"1", "true", "yes", "on"}
API_HOST = os.getenv("HARDHITS_API_HOST", "127.0.0.1")
API_PORT = int(os.getenv("HARDHITS_API_PORT", "8000"))

app = FastAPI(
    title="HardHits API",
    version="1.0.0",
    description="SQL Server-backed API for HardHits predictions, results, and lineup data.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def require_pyodbc():
    try:
        import pyodbc  # type: ignore
    except ImportError as exc:  # pragma: no cover - environment dependent
        raise HTTPException(
            status_code=500,
            detail="pyodbc is not installed in the active Python environment.",
        ) from exc
    return pyodbc


def build_connection_string() -> str:
    parts = [f"DRIVER={{{SQL_DRIVER}}}", f"SERVER={SQL_SERVER}", f"DATABASE={SQL_DATABASE}"]
    if SQL_TRUSTED or (not SQL_USERNAME and not SQL_PASSWORD):
        parts.append("Trusted_Connection=yes")
    else:
        parts.append(f"UID={SQL_USERNAME}")
        parts.append(f"PWD={SQL_PASSWORD}")
    parts.append("TrustServerCertificate=yes")
    return ";".join(parts)


def query_rows(sql: str, params: tuple[Any, ...] = ()) -> list[dict[str, Any]]:
    pyodbc = require_pyodbc()
    try:
        conn = pyodbc.connect(build_connection_string())
        try:
            cursor = conn.cursor()
            cursor.execute(sql, params)
            if cursor.description is None:
                return []
            columns = [col[0] for col in cursor.description]
            return [dict(zip(columns, row)) for row in cursor.fetchall()]
        finally:
            conn.close()
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"SQL query failed: {exc}") from exc


def one_value(sql: str, params: tuple[Any, ...] = ()) -> Any:
    rows = query_rows(sql, params)
    if not rows:
        return None
    first = rows[0]
    return next(iter(first.values())) if first else None


def date_to_str(value: Any) -> str | None:
    if value is None:
        return None
    if isinstance(value, datetime):
        return value.date().isoformat()
    if isinstance(value, date):
        return value.isoformat()
    return str(value)


def safe_float(value: Any) -> float | None:
    try:
        if value in (None, ""):
            return None
        parsed = float(value)
        return parsed if math.isfinite(parsed) else None
    except Exception:
        return None


def safe_int(value: Any) -> int | None:
    try:
        if value in (None, ""):
            return None
        return int(float(value))
    except Exception:
        return None


def choose_date(preferred: str | None, table: str, column: str) -> str:
    if preferred:
        return preferred
    latest = one_value(f"SELECT MAX({column}) AS latest_date FROM dbo.{table}")
    if latest is None:
        raise HTTPException(status_code=404, detail=f"No data available in {table}.")
    return date_to_str(latest) or ""


def normalize_hr_prediction(row: dict[str, Any]) -> dict[str, Any]:
    max_ev = safe_float(row.get("max_ev"))
    fb_ev = safe_float(row.get("fb_ev"))
    return {
        "date": date_to_str(row.get("model_date")),
        "name": row.get("player_name"),
        "team": row.get("team_code"),
        "probability": safe_float(row.get("probability")),
        "opp_pitcher": row.get("opp_pitcher"),
        "max_ev": max_ev,
        "fb_ev": fb_ev,
        "barrel_pct": safe_float(row.get("barrel_pct")),
        "ev_trend_label": row.get("ev_trend_label"),
        "ev_trend_val": safe_float(row.get("ev_trend_val")),
        "lineup_slot": row.get("lineup_slot"),
        "expected_pa": safe_float(row.get("expected_pa")),
        "lineup_status": row.get("lineup_status"),
        "breakdown": {
            "Power": safe_int(row.get("power_score")),
            "Form": safe_int(row.get("form_score")),
            "Trend": safe_int(row.get("trend_score")),
            "Park": safe_int(row.get("park_score")),
            "Pitcher": safe_int(row.get("pitcher_score")),
            "Platoon": safe_int(row.get("platoon_score")),
            "History": safe_int(row.get("history_score")),
            "Weather": safe_int(row.get("weather_score")),
        },
        "source_file": row.get("source_file"),
        "imported_at_utc": row.get("imported_at_utc").isoformat() if row.get("imported_at_utc") else None,
    }


def normalize_hr_result(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": date_to_str(row.get("result_date")),
        "name": row.get("player_name"),
        "team": row.get("team_name"),
        "pitcher": row.get("pitcher_name"),
        "pitcher_team": row.get("pitcher_team"),
        "ev": safe_float(row.get("exit_velocity")),
        "launch_angle": safe_float(row.get("launch_angle")),
        "dist": safe_float(row.get("distance_ft")),
        "status": row.get("result_status"),
        "source_file": row.get("source_file"),
    }


def normalize_hrbi_prediction(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": date_to_str(row.get("model_date")),
        "name": row.get("player_name"),
        "team": row.get("team_code"),
        "probability": safe_float(row.get("probability")),
        "confidence_band": row.get("confidence_band"),
        "opp_pitcher": row.get("opp_pitcher"),
        "lineup_slot": row.get("lineup_slot"),
        "expected_pa": safe_float(row.get("expected_pa")),
        "season_avg_display": row.get("season_avg") or "N/A",
        "last_5_avg_display": row.get("last_5_avg") or "N/A",
        "avg_ev": safe_float(row.get("avg_ev")),
        "avg_launch_angle": safe_float(row.get("avg_launch_angle")),
        "recent_avg_ev": safe_float(row.get("recent_avg_ev")),
        "recent_launch_angle": safe_float(row.get("recent_launch_angle")),
        "target": row.get("target_label"),
        "breakdown": {
            "Contact": safe_int(row.get("contact_score")),
            "Form": safe_int(row.get("form_score")),
            "Pitcher": safe_int(row.get("pitcher_score")),
            "RBI": safe_int(row.get("rbi_score")),
            "Runs": safe_int(row.get("runs_score")),
            "Park": safe_int(row.get("park_score")),
        },
        "source_file": row.get("source_file"),
        "imported_at_utc": row.get("imported_at_utc").isoformat() if row.get("imported_at_utc") else None,
    }


def normalize_hrbi_result(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": date_to_str(row.get("result_date")),
        "name": row.get("player_name"),
        "team": row.get("team_code"),
        "probability": safe_float(row.get("probability")),
        "confidence_band": row.get("confidence_band"),
        "lineup_slot": row.get("lineup_slot"),
        "expected_pa": safe_float(row.get("expected_pa")),
        "actual_hits": safe_int(row.get("actual_hits")),
        "actual_runs": safe_int(row.get("actual_runs")),
        "actual_rbi": safe_int(row.get("actual_rbi")),
        "actual_total": safe_int(row.get("actual_total")),
        "classification": row.get("classification"),
        "source_file": row.get("source_file"),
    }


def build_lineups(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    games: dict[tuple[str, str], dict[str, Any]] = {}
    for row in rows:
        lineup_date = date_to_str(row.get("lineup_date")) or ""
        matchup = str(row.get("matchup") or "")
        key = (lineup_date, matchup)
        game = games.setdefault(
            key,
            {
                "date": lineup_date,
                "matchup": matchup,
                "away_team": None,
                "home_team": None,
                "game_time_et": row.get("game_time_et"),
                "status": row.get("game_status"),
                "away_lineup": [],
                "home_lineup": [],
            },
        )

        player = {
            "slot": safe_int(row.get("lineup_slot")),
            "name": row.get("player_name"),
            "position": row.get("position_code"),
        }

        if row.get("team_side") == "away":
            game["away_team"] = row.get("team_name")
            game["away_lineup"].append(player)
        else:
            game["home_team"] = row.get("team_name")
            game["home_lineup"].append(player)

    items = list(games.values())
    for item in items:
        item["away_lineup"].sort(key=lambda p: (p.get("slot") or 99, p.get("name") or ""))
        item["home_lineup"].sort(key=lambda p: (p.get("slot") or 99, p.get("name") or ""))
    return sorted(items, key=lambda item: (item.get("date") or "", item.get("matchup") or ""))


@app.get("/")
def root() -> dict[str, Any]:
    return {
        "name": "HardHits API",
        "docs": "/docs",
        "health": "/api/health",
        "server": SQL_SERVER,
        "database": SQL_DATABASE,
    }


@app.get("/api/health")
def api_health() -> dict[str, Any]:
    current_time = one_value("SELECT SYSUTCDATETIME() AS now_utc")
    hr_count = one_value("SELECT COUNT(*) AS row_count FROM dbo.hr_model_predictions") or 0
    return {
        "status": "ok",
        "database": SQL_DATABASE,
        "server": SQL_SERVER,
        "trusted_connection": SQL_TRUSTED,
        "utc_time": current_time.isoformat() if hasattr(current_time, "isoformat") else current_time,
        "hr_model_prediction_rows": hr_count,
    }


@app.get("/api/meta")
def api_meta() -> dict[str, Any]:
    return {
        "latest_hr_prediction_date": choose_date(None, "hr_model_predictions", "model_date"),
        "latest_hr_results_date": choose_date(None, "hr_results", "result_date"),
        "latest_hrbi_prediction_date": choose_date(None, "hrbi_model_predictions", "model_date"),
        "latest_hrbi_results_date": choose_date(None, "hrbi_results", "result_date"),
        "latest_lineup_date": choose_date(None, "starting_lineup_players", "lineup_date"),
    }


@app.get("/api/hr/dates")
def hr_dates() -> dict[str, Any]:
    rows = query_rows(
        "SELECT DISTINCT model_date AS available_date FROM dbo.hr_model_predictions ORDER BY model_date DESC"
    )
    return {"dates": [date_to_str(row.get("available_date")) for row in rows if row.get("available_date") is not None]}


@app.get("/api/hr/predictions")
def hr_predictions(
    date: str | None = Query(default=None, description="Prediction date (YYYY-MM-DD)"),
    team: str | None = Query(default=None, description="Optional team filter"),
    limit: int = Query(default=250, ge=1, le=500),
) -> dict[str, Any]:
    target_date = choose_date(date, "hr_model_predictions", "model_date")
    sql = f"SELECT TOP {limit} * FROM dbo.hr_model_predictions WHERE model_date = ?"
    params: list[Any] = [target_date]
    if team:
        sql += " AND team_code = ?"
        params.append(team.upper())
    sql += " ORDER BY probability DESC, player_name"
    rows = query_rows(sql, tuple(params))
    return {"date": target_date, "count": len(rows), "items": [normalize_hr_prediction(row) for row in rows]}


@app.get("/api/hr/results")
def hr_results(
    date: str | None = Query(default=None, description="Results date (YYYY-MM-DD)"),
) -> dict[str, Any]:
    target_date = choose_date(date, "hr_results", "result_date")
    rows = query_rows(
        "SELECT * FROM dbo.hr_results WHERE result_date = ? ORDER BY player_name",
        (target_date,),
    )
    return {"date": target_date, "count": len(rows), "items": [normalize_hr_result(row) for row in rows]}


@app.get("/api/hr/live")
def hr_live() -> dict[str, Any]:
    target_date = choose_date(None, "live_home_runs", "update_date")
    rows = query_rows(
        "SELECT * FROM dbo.live_home_runs WHERE update_date = ? ORDER BY player_name",
        (target_date,),
    )
    return {"date": target_date, "count": len(rows), "items": [normalize_hr_result(row) for row in rows]}


@app.get("/api/hrbi/dates")
def hrbi_dates() -> dict[str, Any]:
    rows = query_rows(
        "SELECT DISTINCT model_date AS available_date FROM dbo.hrbi_model_predictions ORDER BY model_date DESC"
    )
    return {"dates": [date_to_str(row.get("available_date")) for row in rows if row.get("available_date") is not None]}


@app.get("/api/hrbi/predictions")
def hrbi_predictions(
    date: str | None = Query(default=None, description="Prediction date (YYYY-MM-DD)"),
    team: str | None = Query(default=None, description="Optional team filter"),
    limit: int = Query(default=250, ge=1, le=500),
) -> dict[str, Any]:
    target_date = choose_date(date, "hrbi_model_predictions", "model_date")
    sql = f"SELECT TOP {limit} * FROM dbo.hrbi_model_predictions WHERE model_date = ?"
    params: list[Any] = [target_date]
    if team:
        sql += " AND team_code = ?"
        params.append(team.upper())
    sql += " ORDER BY probability DESC, player_name"
    rows = query_rows(sql, tuple(params))
    return {"date": target_date, "count": len(rows), "items": [normalize_hrbi_prediction(row) for row in rows]}


@app.get("/api/hrbi/results")
def hrbi_results(
    date: str | None = Query(default=None, description="Results date (YYYY-MM-DD)"),
) -> dict[str, Any]:
    target_date = choose_date(date, "hrbi_results", "result_date")
    rows = query_rows(
        "SELECT * FROM dbo.hrbi_results WHERE result_date = ? ORDER BY probability DESC, player_name",
        (target_date,),
    )
    return {"date": target_date, "count": len(rows), "items": [normalize_hrbi_result(row) for row in rows]}


@app.get("/api/hrbi/summary")
def hrbi_summary(
    date: str | None = Query(default=None, description="Summary date (YYYY-MM-DD)"),
) -> dict[str, Any]:
    target_date = choose_date(date, "hrbi_results_summary", "result_date")
    rows = query_rows(
        "SELECT * FROM dbo.hrbi_results_summary WHERE result_date = ?",
        (target_date,),
    )
    if not rows:
        raise HTTPException(status_code=404, detail=f"No HRR+ summary found for {target_date}")
    row = rows[0]
    return {
        "date": date_to_str(row.get("result_date")),
        "wins": safe_int(row.get("wins")),
        "losses": safe_int(row.get("losses")),
        "outliers": safe_int(row.get("outliers")),
        "precision": safe_float(row.get("precision")),
        "recall": safe_float(row.get("recall")),
        "f1_score": safe_float(row.get("f1_score")),
        "source_file": row.get("source_file"),
    }


@app.get("/api/lineups")
def lineups(
    date: str | None = Query(default=None, description="Lineup date (YYYY-MM-DD)"),
) -> dict[str, Any]:
    target_date = choose_date(date, "starting_lineup_players", "lineup_date")
    rows = query_rows(
        "SELECT * FROM dbo.starting_lineup_players WHERE lineup_date = ? ORDER BY matchup, team_side, lineup_slot, player_name",
        (target_date,),
    )
    return {"date": target_date, "count": len(rows), "games": build_lineups(rows)}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host=API_HOST, port=API_PORT)
