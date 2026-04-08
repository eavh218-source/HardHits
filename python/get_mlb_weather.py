"""Fetch and normalize daily MLB weather context from Covers.

Usage:
    python python/get_mlb_weather.py

Exports:
    data/mlb_weather.json
    data/mlb_weather.js
    data/mlb_weather_YYYY-MM-DD.js

The model engines can also import `get_weather_score_for_game()` from this module
for a cached, file-backed weather signal with a built-in seasonal fallback.
"""

from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

try:
    import requests
except Exception:  # pragma: no cover - environment dependent
    requests = None

try:
    from bs4 import BeautifulSoup
except Exception:  # pragma: no cover - environment dependent
    BeautifulSoup = None

from paths import DATA_DIR

EASTERN = ZoneInfo("America/New_York")
COVERS_WEATHER_URL = "https://www.covers.com/sport/mlb/weather"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

ABBR_TO_TEAM = {
    "ARI": "Arizona Diamondbacks",
    "ATL": "Atlanta Braves",
    "BAL": "Baltimore Orioles",
    "BOS": "Boston Red Sox",
    "CHC": "Chicago Cubs",
    "CHW": "Chicago White Sox",
    "CIN": "Cincinnati Reds",
    "CLE": "Cleveland Guardians",
    "COL": "Colorado Rockies",
    "DET": "Detroit Tigers",
    "HOU": "Houston Astros",
    "KCR": "Kansas City Royals",
    "LAA": "Los Angeles Angels",
    "LAD": "Los Angeles Dodgers",
    "MIA": "Miami Marlins",
    "MIL": "Milwaukee Brewers",
    "MIN": "Minnesota Twins",
    "NYM": "New York Mets",
    "NYY": "New York Yankees",
    "ATH": "Athletics",
    "PHI": "Philadelphia Phillies",
    "PIT": "Pittsburgh Pirates",
    "SDP": "San Diego Padres",
    "SFG": "San Francisco Giants",
    "SEA": "Seattle Mariners",
    "STL": "St. Louis Cardinals",
    "TBR": "Tampa Bay Rays",
    "TEX": "Texas Rangers",
    "TOR": "Toronto Blue Jays",
    "WSH": "Washington Nationals",
}

ABBR_ALIASES = {
    "AZ": "ARI",
    "KC": "KCR",
    "OAK": "ATH",
    "SD": "SDP",
    "SF": "SFG",
    "TB": "TBR",
    "WSN": "WSH",
}

TEAM_TO_ABBR = {team: abbr for abbr, team in ABBR_TO_TEAM.items()}
TEAM_TO_ABBR.update({
    "Oakland Athletics": "ATH",
    "Athletics": "ATH",
})

INDOOR_OR_RETRACTABLE_VENUES = {
    "american family field",
    "chase field",
    "globelife field",
    "globe life field",
    "loanDepot park".lower(),
    "minute maid park",
    "rogers centre",
    "t-mobile park",
    "tropicana field",
}

COMPASS_TO_DEGREES = {
    "N": 0.0,
    "NNE": 22.5,
    "NE": 45.0,
    "ENE": 67.5,
    "E": 90.0,
    "ESE": 112.5,
    "SE": 135.0,
    "SSE": 157.5,
    "S": 180.0,
    "SSW": 202.5,
    "SW": 225.0,
    "WSW": 247.5,
    "W": 270.0,
    "WNW": 292.5,
    "NW": 315.0,
    "NNW": 337.5,
}

BALLPARK_CF_DIRECTIONS = {
    "American Family Field": "NNE",
    "Angel Stadium": "N",
    "Busch Stadium": "NE",
    "Citi Field": "NNE",
    "Citizens Bank Park": "NNE",
    "Comerica Park": "NE",
    "Coors Field": "NNE",
    "Daikin Park": "NNE",
    "Fenway Park": "ENE",
    "Globe Life Field": "NNE",
    "Great American Ball Park": "NNE",
    "Kauffman Stadium": "NNE",
    "Nationals Park": "N",
    "Oracle Park": "NE",
    "Oriole Park at Camden Yards": "NNE",
    "PNC Park": "NNE",
    "Petco Park": "N",
    "Progressive Field": "N",
    "Rate Field": "NNE",
    "Rogers Centre": "NNE",
    "Sutter Health Park": "NNE",
    "T-Mobile Park": "NNE",
    "Target Field": "NNE",
    "Tropicana Field": "NNE",
    "Truist Park": "NNE",
    "UNIQLO Field at Dodger Stadium": "NNE",
    "Wrigley Field": "NE",
    "Yankee Stadium": "NNE",
    "loanDepot park": "N",
}

BALLPARK_ALIASES = {
    "Guaranteed Rate Field": "Rate Field",
    "Minute Maid Park": "Daikin Park",
    "Dodger Stadium": "UNIQLO Field at Dodger Stadium",
}


def clamp(value: float, low: float = 0.0, high: float = 100.0) -> float:
    return max(low, min(high, value))


def safe_float(value, default=None):
    try:
        if value in (None, ""):
            return default
        return float(str(value).replace("%", "").replace("°", "").replace("�", "").strip())
    except Exception:
        return default


def now_et() -> datetime:
    return datetime.now(EASTERN)


def format_et(dt: datetime | None) -> str:
    if not dt:
        return "TBD"
    return dt.strftime("%I:%M %p ET").lstrip("0")


def normalize_abbr(value: str | None) -> str | None:
    if not value:
        return None
    cleaned = str(value).strip().upper()
    return ABBR_ALIASES.get(cleaned, cleaned)


def team_to_abbr(team_name: str | None) -> str | None:
    if not team_name:
        return None
    cleaned = str(team_name).strip()
    return TEAM_TO_ABBR.get(cleaned) or normalize_abbr(cleaned[:3])


def parse_date_label(label: str | None) -> str | None:
    raw = str(label or "").strip()
    if not raw:
        return None
    for fmt in ("%B %d, %Y", "%b %d, %Y"):
        try:
            return datetime.strptime(raw, fmt).date().isoformat()
        except ValueError:
            continue
    return None


def quality_score(entry: dict) -> int:
    keys = ["venue", "wind_mph", "temperature_f", "humidity_pct", "precip_pct", "game_time_et"]
    return sum(1 for key in keys if entry.get(key) not in (None, ""))


def normalize_venue_name(venue: str | None) -> str:
    cleaned = str(venue or "").strip()
    return BALLPARK_ALIASES.get(cleaned, cleaned)


def describe_wind_outlook(venue: str | None, wind_direction: str | None) -> tuple[str | None, str | None]:
    venue_key = normalize_venue_name(venue)
    center_field_direction = BALLPARK_CF_DIRECTIONS.get(venue_key)
    direction_key = str(wind_direction or "").strip().upper()

    if not center_field_direction or direction_key not in COMPASS_TO_DEGREES:
        return center_field_direction, None

    cf_degrees = COMPASS_TO_DEGREES.get(center_field_direction)
    wind_degrees = COMPASS_TO_DEGREES.get(direction_key)
    if cf_degrees is None or wind_degrees is None:
        return center_field_direction, None

    delta = ((wind_degrees - cf_degrees + 180.0) % 360.0) - 180.0
    abs_delta = abs(delta)

    if abs_delta <= 22.5:
        outlook = "Out to CF"
    elif abs_delta >= 157.5:
        outlook = "In from CF to home plate"
    elif abs_delta <= 67.5:
        outlook = "Quartering out to RF" if delta > 0 else "Quartering out to LF"
    elif abs_delta <= 112.5:
        outlook = "Left to right across the field" if delta > 0 else "Right to left across the field"
    else:
        outlook = "Quartering in from LF" if delta > 0 else "Quartering in from RF"

    return center_field_direction, outlook


def fallback_weather_score(target_date, park_factor: float = 1.0) -> float:
    try:
        month = int(str(target_date).split("-")[1])
    except Exception:
        month = now_et().month

    if month in (6, 7, 8):
        score = 58.0
    elif month in (4, 5, 9):
        score = 52.0
    else:
        score = 46.0

    if park_factor > 1.10:
        score += 4.0
    elif park_factor < 0.90:
        score -= 4.0

    return clamp(score)


def compute_weather_score(entry: dict | None, park_factor: float = 1.0) -> float:
    if not entry:
        return fallback_weather_score(None, park_factor)

    venue = str(entry.get("venue") or "").strip().lower()
    temp_f = safe_float(entry.get("temperature_f"))
    wind_mph = safe_float(entry.get("wind_mph"), 0.0) or 0.0
    humidity_pct = safe_float(entry.get("humidity_pct"))
    precip_pct = safe_float(entry.get("precip_pct"))

    score = 50.0

    if temp_f is not None:
        if 72 <= temp_f <= 88:
            score += 9.0
        elif 65 <= temp_f < 72 or 88 < temp_f <= 94:
            score += 5.0
        elif 55 <= temp_f < 65:
            score += 1.0
        elif 45 <= temp_f < 55:
            score -= 4.0
        elif temp_f < 45:
            score -= 8.0
        elif temp_f > 94:
            score -= 2.0

    if humidity_pct is not None:
        if humidity_pct >= 70:
            score += 3.0
        elif humidity_pct >= 55:
            score += 1.0
        elif humidity_pct <= 30:
            score -= 2.0

    wind_adjustment = 0.0
    if wind_mph >= 18:
        wind_adjustment = 4.0
    elif wind_mph >= 12:
        wind_adjustment = 2.0
    elif wind_mph <= 4:
        wind_adjustment = -1.0

    if venue in INDOOR_OR_RETRACTABLE_VENUES:
        wind_adjustment *= 0.25

    score += wind_adjustment

    if precip_pct is not None:
        if precip_pct >= 70:
            score -= 8.0
        elif precip_pct >= 40:
            score -= 5.0
        elif precip_pct >= 20:
            score -= 2.0

    if park_factor > 1.10:
        score += 4.0
    elif park_factor < 0.90:
        score -= 4.0

    return round(clamp(score, 30.0, 72.0), 1)


def parse_team_abbrs(brick) -> tuple[str | None, str | None]:
    mobile = brick.select_one(".covers-CoversWeather-TeamsMobile")
    if mobile:
        text = " ".join(mobile.stripped_strings)
        match = re.search(r"\b([A-Z]{2,3})\b(?:\s+[+-]\d+(?:\.\d+)?)?\s*@\s*\b([A-Z]{2,3})\b", text)
        if match:
            return normalize_abbr(match.group(1)), normalize_abbr(match.group(2))
    return None, None


def extract_entries_from_html(html: str) -> list[dict]:
    if BeautifulSoup is None:  # pragma: no cover - environment dependent
        raise RuntimeError("beautifulsoup4 is required to parse Covers weather HTML.")

    soup = BeautifulSoup(html, "html.parser")
    current_date = None
    deduped: dict[tuple[str | None, str | None, str | None, str | None], dict] = {}

    for node in soup.select(".covers-CoversWeather-dateHeader, .covers-CoversWeather-brick"):
        classes = set(node.get("class") or [])
        if "covers-CoversWeather-dateHeader" in classes:
            current_date = parse_date_label(node.get_text(" ", strip=True))
            continue

        if "covers-CoversWeather-brick" not in classes:
            continue

        text = node.get_text(" | ", strip=True)
        if "Humidity:" not in text or "P.O.P.:" not in text:
            continue

        away_abbr, home_abbr = parse_team_abbrs(node)
        venue_node = node.select_one(".covers-coversweatherPage-fieldName")
        wind_detail = node.select_one(".covers-coversweatherPage-fieldBrickDetails")
        time_node = node.select_one(".covers-CoversWeatherPage-time")
        left_logo = node.select_one(".covers-CoversWeather-teamLogoLeft")
        right_logo = node.select_one(".covers-CoversWeather-teamLogoRight")
        field_image = node.select_one(".covers-coversweather-fieldIcon")
        weather_image = node.select_one(".covers-CoversWeatherPage-weatherImg")
        wind_icon = node.select_one(".covers-coversweather-windDirectionIcon")

        wind_src = str(wind_icon.get("src") or "") if wind_icon else ""
        wind_direction = None
        direction_match = re.search(r"/([a-z]+)\.png", wind_src.lower())
        if direction_match:
            wind_direction = direction_match.group(1).upper()

        temp_match = re.search(r"(-?\d+(?:\.\d+)?)\s*[°�]?F", text, re.I)
        humidity_match = re.search(r"Humidity:\s*([\d.]+)\s*%", text, re.I)
        precip_match = re.search(r"P\.O\.P\.:\s*([\d.]+)\s*%", text, re.I)
        wind_match = re.search(r"Wind:\s*([\d.]+)\s*mph", wind_detail.get_text(" ", strip=True) if wind_detail else text, re.I)

        entry = {
            "date": current_date,
            "game_time_et": time_node.get_text(" ", strip=True) if time_node else None,
            "away_abbr": away_abbr,
            "home_abbr": home_abbr,
            "away_team": ABBR_TO_TEAM.get(away_abbr or ""),
            "home_team": ABBR_TO_TEAM.get(home_abbr or ""),
            "away_display": left_logo.get("alt") if left_logo else None,
            "home_display": right_logo.get("alt") if right_logo else None,
            "away_logo_url": left_logo.get("src") if left_logo else None,
            "home_logo_url": right_logo.get("src") if right_logo else None,
            "field_image_url": field_image.get("src") if field_image else None,
            "weather_icon_url": weather_image.get("src") if weather_image else None,
            "venue": venue_node.get_text(" ", strip=True) if venue_node else None,
            "wind_mph": safe_float(wind_match.group(1)) if wind_match else None,
            "wind_direction": wind_direction,
            "temperature_f": safe_float(temp_match.group(1)) if temp_match else None,
            "humidity_pct": safe_float(humidity_match.group(1)) if humidity_match else None,
            "precip_pct": safe_float(precip_match.group(1)) if precip_match else None,
            "source": "covers",
            "source_url": COVERS_WEATHER_URL,
        }
        center_field_direction, wind_outlook = describe_wind_outlook(entry.get("venue"), wind_direction)
        entry["center_field_direction"] = center_field_direction
        entry["wind_outlook"] = wind_outlook
        entry["weather_score"] = compute_weather_score(entry)

        key = (entry.get("date"), entry.get("away_abbr"), entry.get("home_abbr"), entry.get("game_time_et"))
        previous = deduped.get(key)
        if previous is None or quality_score(entry) > quality_score(previous):
            deduped[key] = entry

    rows = list(deduped.values())
    rows.sort(key=lambda item: (item.get("date") or "", item.get("game_time_et") or "", item.get("home_abbr") or ""))
    return rows


def fetch_mlb_weather() -> list[dict]:
    if requests is None:  # pragma: no cover - environment dependent
        raise RuntimeError("requests is required to fetch Covers weather data.")

    response = requests.get(
        COVERS_WEATHER_URL,
        timeout=30,
        headers={"User-Agent": USER_AGENT},
    )
    response.raise_for_status()
    rows = extract_entries_from_html(response.text)
    if not rows:
        raise RuntimeError("No MLB weather entries were parsed from the Covers page.")
    return rows


def save_outputs(rows: list[dict]) -> list[Path]:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    completed = now_et()
    completed_label = format_et(completed)
    update_date = completed.date().isoformat()

    json_path = DATA_DIR / "mlb_weather.json"
    js_path = DATA_DIR / "mlb_weather.js"

    json_path.write_text(json.dumps(rows, indent=2), encoding="utf-8")
    js_path.write_text(
        "\n".join([
            f"const weatherUpdateDate = '{update_date}';",
            f"const weatherLastCompleted = '{completed_label}';",
            f"const mlbWeatherData = {json.dumps(rows, indent=2)};",
        ]),
        encoding="utf-8",
    )

    written = [json_path, js_path]
    grouped: dict[str, list[dict]] = defaultdict(list)
    for row in rows:
        grouped[str(row.get("date") or update_date)].append(row)

    for date_str, entries in grouped.items():
        key = date_str.replace("-", "_")
        dated_path = DATA_DIR / f"mlb_weather_{date_str}.js"
        dated_path.write_text(
            "\n".join([
                f"window.weatherUpdateDate_{key} = '{date_str}';",
                f"window.weatherLastCompleted_{key} = '{completed_label}';",
                f"window.mlbWeatherData_{key} = {json.dumps(entries, indent=2)};",
            ]),
            encoding="utf-8",
        )
        written.append(dated_path)

    return written


def load_saved_weather() -> list[dict]:
    json_path = DATA_DIR / "mlb_weather.json"
    if json_path.exists():
        try:
            return json.loads(json_path.read_text(encoding="utf-8"))
        except Exception:
            pass

    js_path = DATA_DIR / "mlb_weather.js"
    if js_path.exists():
        try:
            text = js_path.read_text(encoding="utf-8")
            match = re.search(r"const\s+mlbWeatherData\s*=\s*(\[.*\]);", text, re.S)
            if match:
                return json.loads(match.group(1))
        except Exception:
            pass

    return []


def get_weather_entry(target_date, home_team: str | None = None, away_team: str | None = None, weather_rows: list[dict] | None = None) -> dict | None:
    date_str = str(target_date or "")[:10]
    rows = [row for row in (weather_rows or load_saved_weather()) if str(row.get("date") or "")[:10] == date_str]
    if not rows:
        return None

    home_abbr = team_to_abbr(home_team)
    away_abbr = team_to_abbr(away_team)

    if home_abbr and away_abbr:
        for row in rows:
            if row.get("home_abbr") == home_abbr and row.get("away_abbr") == away_abbr:
                return row

    if home_abbr:
        for row in rows:
            if row.get("home_abbr") == home_abbr:
                return row

    return rows[0]


def get_weather_score_for_game(target_date, park_factor: float = 1.0, home_team: str | None = None, away_team: str | None = None) -> float:
    entry = get_weather_entry(target_date, home_team=home_team, away_team=away_team)
    if entry:
        return compute_weather_score(entry, park_factor=park_factor)
    return fallback_weather_score(target_date, park_factor)


def main() -> int:
    parser = argparse.ArgumentParser(description="Fetch and save daily MLB weather from Covers.")
    parser.parse_args()

    try:
        rows = fetch_mlb_weather()
        written = save_outputs(rows)
        distinct_dates = sorted({str(row.get("date")) for row in rows if row.get("date")})
        print(f"✅ Weather export complete: {len(rows)} games across {len(distinct_dates)} dates")
        print("Saved: " + ", ".join(path.name for path in written))
        return 0
    except Exception as exc:
        cached_rows = load_saved_weather()
        if cached_rows:
            print(f"[WARN] Weather refresh failed, keeping existing cached weather file: {exc}")
            return 0
        print(f"[ERROR] Weather refresh failed: {exc}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
