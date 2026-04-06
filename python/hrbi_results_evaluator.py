"""Evaluate H+R+RBI model predictions against actual game box scores."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timedelta

import statsapi

from paths import DATA_DIR


def safe_float(value, default=0.0):
    try:
        return float(value)
    except Exception:
        return default


def normalize_name(name: str):
    return str(name or "").strip().lower()


def load_hrbi_model_for_date(target_date: str):
    path = DATA_DIR / f"hrbi_model_{target_date}.js"
    if not path.exists():
        return None

    text = path.read_text(encoding="utf-8")
    marker = "="
    if marker not in text:
        return None

    json_blob = text.split("=", 1)[1].strip().rstrip(";")
    try:
        return json.loads(json_blob)
    except Exception:
        return None


def get_boxscore_totals_for_date(target_date: str):
    games = statsapi.schedule(date=target_date)
    totals = {}

    for game in games:
        game_pk = game.get("game_id") or game.get("game_pk") or game.get("gameId") or game.get("gamePk")
        if not game_pk:
            continue

        status = str(game.get("status", "")).lower()
        if "final" not in status:
            continue

        try:
            box = statsapi.boxscore_data(game_pk)
        except Exception:
            continue

        for side in ("away", "home"):
            team_info = box.get(side, {})
            players = team_info.get("players", {})
            player_rows = players.values() if isinstance(players, dict) else players

            for p in player_rows:
                if not isinstance(p, dict):
                    continue

                person = p.get("person", {}) or {}
                name = person.get("fullName")
                if not name:
                    continue

                stats = p.get("stats", {}).get("batting", {}) or {}
                h = int(safe_float(stats.get("hits"), 0))
                r = int(safe_float(stats.get("runs"), 0))
                rbi = int(safe_float(stats.get("rbi"), 0))

                totals[normalize_name(name)] = {
                    "hits": h,
                    "runs": r,
                    "rbi": rbi,
                    "total": h + r + rbi,
                }

    return totals


def classify_player(probability: float, total_contrib: int):
    if probability >= 5.0 and total_contrib >= 3:
        return "Win"
    if probability >= 5.0 and total_contrib < 3:
        return "Loss"
    if probability < 5.0 and total_contrib >= 3:
        return "Outlier"
    return "NotFlagged"


def evaluate_date(target_date: str):
    model_rows = load_hrbi_model_for_date(target_date)
    if model_rows is None:
        raise RuntimeError(f"Missing model file for {target_date}: data/hrbi_model_{target_date}.js")

    actual_totals = get_boxscore_totals_for_date(target_date)
    evaluated = []

    wins = losses = outliers = 0

    for row in model_rows:
        name = row.get("name", "")
        prob = safe_float(row.get("probability"), 0.0)
        actual = actual_totals.get(normalize_name(name), {"hits": 0, "runs": 0, "rbi": 0, "total": 0})
        cls = classify_player(prob, actual["total"])

        if cls == "Win":
            wins += 1
        elif cls == "Loss":
            losses += 1
        elif cls == "Outlier":
            outliers += 1

        evaluated.append({
            "date": target_date,
            "name": name,
            "team": row.get("team"),
            "probability": round(prob, 2),
            "confidence_band": row.get("confidence_band"),
            "lineup_slot": row.get("lineup_slot"),
            "expected_pa": row.get("expected_pa"),
            "actual_hits": actual["hits"],
            "actual_runs": actual["runs"],
            "actual_rbi": actual["rbi"],
            "actual_total": actual["total"],
            "classification": cls,
        })

    precision = wins / (wins + losses) if (wins + losses) else 0.0
    recall = wins / (wins + outliers) if (wins + outliers) else 0.0
    f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) else 0.0

    summary = {
        "date": target_date,
        "wins": wins,
        "losses": losses,
        "outliers": outliers,
        "precision": round(precision, 4),
        "recall": round(recall, 4),
        "f1_score": round(f1, 4),
    }

    return evaluated, summary


def save_outputs(target_date: str, evaluated_rows, summary):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    key = target_date.replace("-", "_")

    dated_path = DATA_DIR / f"hrbi_results_{target_date}.js"
    latest_path = DATA_DIR / "hrbi_results_data.js"

    dated_path.write_text(
        "\n".join([
            f"window.hrbiResultsData_{key} = {json.dumps(evaluated_rows, indent=2)};",
            f"window.hrbiResultsSummary_{key} = {json.dumps(summary, indent=2)};",
        ]),
        encoding="utf-8",
    )

    latest_path.write_text(
        "\n".join([
            f"const hrbiResultsData = {json.dumps(evaluated_rows, indent=2)};",
            f"const hrbiResultsSummary = {json.dumps(summary, indent=2)};",
        ]),
        encoding="utf-8",
    )


def parse_args():
    parser = argparse.ArgumentParser(description="Evaluate H+R+RBI predictions against actual box scores.")
    parser.add_argument(
        "--date",
        default=(datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d"),
        help="Target date in YYYY-MM-DD format (default: yesterday).",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    rows, summary_data = evaluate_date(args.date)
    save_outputs(args.date, rows, summary_data)
    print(f"Saved H+R+RBI results for {args.date}: {len(rows)} modeled players")
    print(
        "Summary: "
        f"wins={summary_data['wins']} losses={summary_data['losses']} outliers={summary_data['outliers']} "
        f"precision={summary_data['precision']} recall={summary_data['recall']} f1={summary_data['f1_score']}"
    )
