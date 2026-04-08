"""Fetch starting lineups for MLB matchups starting 3.5 hours before first pitch.

The refresh keeps polling during the pregame window and after first pitch so late
lineup changes can still be detected on subsequent runs.

Usage:
    python python/get_starting_lineups.py

Exports:
    data/starting_lineups.json
    data/starting_lineups.js
    data/starting_lineups_YYYY-MM-DD.js
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from zoneinfo import ZoneInfo

import requests

from paths import DATA_DIR

EASTERN = ZoneInfo("America/New_York")
SCHEDULE_URL = "https://statsapi.mlb.com/api/v1/schedule?sportId=1&date={date}"
LIVE_FEED_URL = "https://statsapi.mlb.com/api/v1.1/game/{game_pk}/feed/live"
ROSTER_URL = "https://statsapi.mlb.com/api/v1/teams/{team_id}/roster?rosterType=40Man&date={date}"
LINEUP_WATCH_WINDOW_MINUTES = 210  # 3.5 hours before first pitch
ACTIVE_STATUS_CODES = {"A"}
UNAVAILABLE_STATUS_KEYWORDS = (
    "injured",
    "bereavement",
    "paternity",
    "restricted",
    "suspended",
    "inactive",
    "day-to-day",
    "doubtful",
    "medical",
    "rehab",
)
TEAM_MAP = {
    "Arizona Diamondbacks": "ARI", "Atlanta Braves": "ATL", "Baltimore Orioles": "BAL",
    "Boston Red Sox": "BOS", "Chicago Cubs": "CHC", "Chicago White Sox": "CHW",
    "Cincinnati Reds": "CIN", "Cleveland Guardians": "CLE", "Colorado Rockies": "COL",
    "Detroit Tigers": "DET", "Houston Astros": "HOU", "Kansas City Royals": "KCR",
    "Los Angeles Angels": "LAA", "Los Angeles Dodgers": "LAD", "Miami Marlins": "MIA",
    "Milwaukee Brewers": "MIL", "Minnesota Twins": "MIN", "New York Mets": "NYM",
    "New York Yankees": "NYY", "Oakland Athletics": "OAK", "Philadelphia Phillies": "PHI",
    "Pittsburgh Pirates": "PIT", "San Diego Padres": "SDP", "San Francisco Giants": "SFG",
    "Seattle Mariners": "SEA", "St. Louis Cardinals": "STL", "Tampa Bay Rays": "TBR",
    "Texas Rangers": "TEX", "Toronto Blue Jays": "TOR", "Washington Nationals": "WSH"
}


def now_et() -> datetime:
    return datetime.now(EASTERN)


def format_et(dt: datetime | None) -> str:
    if not dt:
        return "TBD"
    return dt.strftime("%I:%M %p ET").lstrip("0")


def parse_game_time(raw_value: str | None) -> datetime | None:
    if not raw_value:
        return None

    normalized = raw_value.replace("Z", "+00:00")
    game_dt = datetime.fromisoformat(normalized)
    if game_dt.tzinfo is None:
        game_dt = game_dt.replace(tzinfo=timezone.utc)
    return game_dt.astimezone(EASTERN)


def get_team_abbr(team_name: str) -> str:
    return TEAM_MAP.get(team_name, team_name[:3].upper() if team_name else "TBD")


def is_unavailable_status(status_code: str | None, status_description: str | None) -> bool:
    code = str(status_code or "").strip().upper()
    description = str(status_description or "").strip().lower()

    if not code or code in ACTIVE_STATUS_CODES:
        return False

    if code.startswith("D"):
        return True

    return any(keyword in description for keyword in UNAVAILABLE_STATUS_KEYWORDS)


def fetch_team_distinctions(team_id: int | None, team_name: str, target_date: str) -> tuple[list[dict], list[dict]]:
    if not team_id:
        return [], []

    try:
        response = requests.get(ROSTER_URL.format(team_id=team_id, date=target_date), timeout=30)
        response.raise_for_status()
        roster = response.json().get("roster", []) or []
    except Exception as exc:
        print(f"   ⚠️ Failed to fetch roster distinctions for {team_name}: {exc}")
        return [], []

    distinctions = []
    unavailable = []

    for player in roster:
        status = player.get("status", {}) or {}
        status_code = str(status.get("code") or "").strip()
        status_description = str(status.get("description") or "").strip()
        if not status_code or status_code in ACTIVE_STATUS_CODES:
            continue

        person = player.get("person", {}) or {}
        position = player.get("position", {}) or {}
        injury_related = is_unavailable_status(status_code, status_description)
        entry = {
            "name": person.get("fullName", "Unknown"),
            "player_id": person.get("id"),
            "position": position.get("abbreviation", ""),
            "status_code": status_code,
            "status": status_description or "Unavailable",
            "injury_related": injury_related,
            "exclude_from_models": injury_related,
        }
        distinctions.append(entry)
        if injury_related:
            unavailable.append(entry)

    distinctions.sort(key=lambda item: (not item.get("injury_related"), item.get("name") or ""))
    unavailable.sort(key=lambda item: item.get("name") or "")
    return distinctions, unavailable


def extract_lineup(team_boxscore: dict) -> list[dict]:
    players = team_boxscore.get("players", {})
    batting_order = team_boxscore.get("battingOrder", []) or []
    lineup = []

    for idx, player_id in enumerate(batting_order, start=1):
        player = players.get(f"ID{player_id}", {})
        person = player.get("person", {})
        position = player.get("position", {})
        order_token = str(player.get("battingOrder", ""))

        slot = idx
        if order_token:
            try:
                slot = int(order_token[0])
            except ValueError:
                slot = idx

        lineup.append({
            "slot": slot,
            "name": person.get("fullName", "Unknown"),
            "position": position.get("abbreviation", ""),
            "jersey": player.get("jerseyNumber", ""),
            "player_id": person.get("id"),
        })

    return lineup


def should_fetch_lineup(game_time_et: datetime | None, abstract_state: str, now: datetime) -> tuple[bool, str, int | None]:
    if game_time_et is None:
        return False, "missing game time", None

    minutes_to_first_pitch = int((game_time_et - now).total_seconds() // 60)

    if abstract_state != "Preview":
        return True, f"game is {abstract_state.lower()} — still checking for lineup changes", minutes_to_first_pitch

    if minutes_to_first_pitch < 0:
        return True, "scheduled first pitch has passed — still checking for lineup changes", minutes_to_first_pitch

    if minutes_to_first_pitch <= LINEUP_WATCH_WINDOW_MINUTES:
        hours_to_first_pitch = round(minutes_to_first_pitch / 60, 1)
        return True, f"within lineup watch window ({hours_to_first_pitch} hours to first pitch)", minutes_to_first_pitch

    return False, f"too early ({minutes_to_first_pitch} minutes to first pitch; watch starts 210 minutes before game time)", minutes_to_first_pitch


def fetch_lineups_for_today() -> list[dict]:
    current_time = now_et()
    today = current_time.strftime("%Y-%m-%d")
    print(f"📋 Checking starting lineups for {today} at {format_et(current_time)}")

    response = requests.get(SCHEDULE_URL.format(date=today), timeout=30)
    response.raise_for_status()
    schedule = response.json()

    games = schedule.get("dates", [{}])[0].get("games", []) if schedule.get("dates") else []
    results = []

    for game in games:
        game_pk = game.get("gamePk")
        teams = game.get("teams", {})
        away = teams.get("away", {}).get("team", {})
        home = teams.get("home", {}).get("team", {})
        away_name = away.get("name", "Away")
        home_name = home.get("name", "Home")
        away_team_id = away.get("id")
        home_team_id = home.get("id")
        away_abbr = get_team_abbr(away_name)
        home_abbr = get_team_abbr(home_name)

        game_time = parse_game_time(game.get("gameDate"))
        abstract_state = game.get("status", {}).get("abstractGameState", "Unknown")
        detailed_state = game.get("status", {}).get("detailedState", "Unknown")
        eligible, reason, minutes_to_first_pitch = should_fetch_lineup(game_time, abstract_state, current_time)

        away_distinctions, away_injuries = fetch_team_distinctions(away_team_id, away_name, today)
        home_distinctions, home_injuries = fetch_team_distinctions(home_team_id, home_name, today)

        entry = {
            "date": today,
            "game_pk": game_pk,
            "matchup": f"{away_abbr} @ {home_abbr}",
            "away_team": away_name,
            "home_team": home_name,
            "away_team_id": away_team_id,
            "home_team_id": home_team_id,
            "game_time_et": format_et(game_time),
            "status": detailed_state,
            "eligible": eligible,
            "reason": reason,
            "minutes_to_first_pitch": minutes_to_first_pitch,
            "away_lineup": [],
            "home_lineup": [],
            "away_distinctions": away_distinctions,
            "home_distinctions": home_distinctions,
            "away_injuries": away_injuries,
            "home_injuries": home_injuries,
        }

        if not eligible:
            print(f"⏳ {entry['matchup']} — skipped ({reason})")
            results.append(entry)
            continue

        print(f"🔎 {entry['matchup']} — fetching lineup ({reason})")

        try:
            live_response = requests.get(LIVE_FEED_URL.format(game_pk=game_pk), timeout=30)
            live_response.raise_for_status()
            live_data = live_response.json()
            teams_box = live_data.get("liveData", {}).get("boxscore", {}).get("teams", {})

            away_lineup = extract_lineup(teams_box.get("away", {}))
            home_lineup = extract_lineup(teams_box.get("home", {}))

            entry["away_lineup"] = away_lineup
            entry["home_lineup"] = home_lineup

            if away_lineup or home_lineup:
                print(
                    f"   ✅ Lineups found: {away_abbr} ({len(away_lineup)}) vs {home_abbr} ({len(home_lineup)})"
                )
            else:
                print("   ⏱️ Lineups not posted yet")

            distinction_count = len(away_distinctions) + len(home_distinctions)
            unavailable_count = len(away_injuries) + len(home_injuries)
            if distinction_count:
                print(
                    f"   🏥 Distinctions tracked: {distinction_count} total · {unavailable_count} injury/unavailable"
                )
        except Exception as exc:
            entry["reason"] = f"fetch failed: {exc}"
            print(f"   ❌ Failed to fetch lineup: {exc}")

        results.append(entry)

    return results


def save_outputs(lineups: list[dict]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    current_time = now_et()
    today = current_time.strftime("%Y-%m-%d")
    date_key = today.replace("-", "_")
    completed_time = format_et(current_time)

    json_path = DATA_DIR / "starting_lineups.json"
    js_path = DATA_DIR / "starting_lineups.js"
    dated_js_path = DATA_DIR / f"starting_lineups_{today}.js"

    with open(json_path, "w", encoding="utf-8") as fh:
        json.dump(lineups, fh, indent=2)

    with open(js_path, "w", encoding="utf-8") as fh:
        fh.write(f"const lineupUpdateDate = '{today}';\n")
        fh.write(f"const lineupLastCompleted = '{completed_time}';\n")
        fh.write(f"const startingLineups = {json.dumps(lineups, indent=2)};")

    with open(dated_js_path, "w", encoding="utf-8") as fh:
        fh.write(f"window.lineupUpdateDate_{date_key} = '{today}';\n")
        fh.write(f"window.lineupLastCompleted_{date_key} = '{completed_time}';\n")
        fh.write(f"window.startingLineups_{date_key} = {json.dumps(lineups, indent=2)};")

    eligible_games = sum(1 for g in lineups if g.get("eligible"))
    posted_games = sum(1 for g in lineups if g.get("away_lineup") or g.get("home_lineup"))

    print("\n✅ Starting lineup export complete")
    print(f"Saved: {json_path.name}, {js_path.name}, and {dated_js_path.name}")
    print(f"Eligible games checked: {eligible_games}")
    print(f"Games with posted lineups: {posted_games}")


def main() -> None:
    lineups = fetch_lineups_for_today()
    save_outputs(lineups)


if __name__ == "__main__":
    main()
