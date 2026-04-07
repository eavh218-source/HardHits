import json
import re
import argparse
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import pandas as pd
import pybaseball as pb
import statsapi

from get_mlb_weather import get_weather_score_for_game
from hrbi_live import live_hrbi_probability
from paths import DATA_DIR

PARK_HITS_FACTORS = {
    "Boston Red Sox": 1.07,
    "Chicago Cubs": 1.06,
    "Cincinnati Reds": 1.08,
    "Colorado Rockies": 1.12,
    "Kansas City Royals": 1.05,
    "Los Angeles Dodgers": 1.06,
    "New York Yankees": 1.04,
    "Philadelphia Phillies": 1.06,
    "San Diego Padres": 0.95,
    "San Francisco Giants": 0.92,
    "Seattle Mariners": 0.94,
    "Tampa Bay Rays": 0.97,
}

TEAM_MAP = {
    "Arizona Diamondbacks": "ARI",
    "Atlanta Braves": "ATL",
    "Baltimore Orioles": "BAL",
    "Boston Red Sox": "BOS",
    "Chicago Cubs": "CHC",
    "Chicago White Sox": "CHW",
    "Cincinnati Reds": "CIN",
    "Cleveland Guardians": "CLE",
    "Colorado Rockies": "COL",
    "Detroit Tigers": "DET",
    "Houston Astros": "HOU",
    "Kansas City Royals": "KCR",
    "Los Angeles Angels": "LAA",
    "Los Angeles Dodgers": "LAD",
    "Miami Marlins": "MIA",
    "Milwaukee Brewers": "MIL",
    "Minnesota Twins": "MIN",
    "New York Mets": "NYM",
    "New York Yankees": "NYY",
    "Oakland Athletics": "OAK",
    "Philadelphia Phillies": "PHI",
    "Pittsburgh Pirates": "PIT",
    "San Diego Padres": "SDP",
    "San Francisco Giants": "SFG",
    "Seattle Mariners": "SEA",
    "St. Louis Cardinals": "STL",
    "Tampa Bay Rays": "TBR",
    "Texas Rangers": "TEX",
    "Toronto Blue Jays": "TOR",
    "Washington Nationals": "WSH",
}

LINEUP_RUN_SCORE = {1: 100, 2: 95, 3: 85, 4: 80, 5: 76, 6: 68, 7: 62, 8: 54, 9: 48}
LINEUP_RBI_SCORE = {1: 74, 2: 78, 3: 100, 4: 100, 5: 100, 6: 82, 7: 80, 8: 64, 9: 60}
EXPECTED_PA = {1: 4.6, 2: 4.5, 3: 4.2, 4: 4.1, 5: 4.0, 6: 3.8, 7: 3.7, 8: 3.5, 9: 3.4}

PITCHER_ID_CACHE = {}
PROFILE_CACHE = {}


def clamp(value, low=0.0, high=100.0):
    return max(low, min(high, value))


def safe_float(value, default=0.0):
    try:
        return float(value)
    except Exception:
        return default


def normalize_name(name):
    return str(name or "").strip().lower()


def format_avg_display(value):
    if value is None:
        return "N/A"
    formatted = f"{value:.3f}"
    return formatted[1:] if formatted.startswith("0") else formatted


def get_pitcher_id(pitcher_name):
    if not pitcher_name or pitcher_name == "TBD":
        return None

    if pitcher_name in PITCHER_ID_CACHE:
        return PITCHER_ID_CACHE[pitcher_name]

    try:
        lookup = statsapi.lookup_player(pitcher_name)
        pitcher_id = lookup[0]["id"] if lookup else None
    except Exception:
        pitcher_id = None

    PITCHER_ID_CACHE[pitcher_name] = pitcher_id
    return pitcher_id


def get_team_abbr(team_name):
    team_name = str(team_name or "").strip()
    if not team_name:
        return "TBD"
    return TEAM_MAP.get(team_name, team_name[:3].upper())


def load_starting_lineups(target_date=None):
    candidate_paths = []
    if target_date:
        candidate_paths.extend([
            DATA_DIR / f"starting_lineups_{target_date}.js",
            DATA_DIR / f"starting_lineups_{target_date}.json",
        ])
    candidate_paths.extend([
        DATA_DIR / "starting_lineups.json",
        DATA_DIR / "starting_lineups.js",
    ])

    for lineup_path in candidate_paths:
        if not lineup_path.exists():
            continue

        try:
            content = lineup_path.read_text(encoding="utf-8")
            if lineup_path.suffix.lower() == ".json":
                return json.loads(content)

            match = re.search(r"const startingLineups = (\[.*\]);", content, re.S)
            if match:
                return json.loads(match.group(1))
        except Exception as exc:
            print(f"Warning: failed to load {lineup_path.name}: {exc}")

    return []


def build_lineup_context(target_date):
    games = load_starting_lineups(target_date)
    context = {}

    for game in games:
        if str(game.get("date")) != target_date:
            continue

        for side in ("away", "home"):
            team_name = game.get(f"{side}_team", "")
            lineup = game.get(f"{side}_lineup", []) or []
            for entry in lineup:
                player_name = normalize_name(entry.get("name"))
                slot = int(entry.get("slot") or 9)
                context[player_name] = {
                    "slot": slot,
                    "expected_pa": EXPECTED_PA.get(slot, 3.5),
                    "run_slot_score": LINEUP_RUN_SCORE.get(slot, 55),
                    "rbi_slot_score": LINEUP_RBI_SCORE.get(slot, 62),
                    "team": team_name,
                }

    return context


def extract_statcast_windows(player_id, reference_date=None):
    try:
        if reference_date:
            reference_dt = datetime.strptime(str(reference_date), "%Y-%m-%d")
        else:
            reference_dt = datetime.now()

        end_date = reference_dt.strftime("%Y-%m-%d")
        start_date = (reference_dt - timedelta(days=30)).strftime("%Y-%m-%d")
        df = pb.statcast_batter(start_date, end_date, player_id)

        if df.empty:
            fallback_end = reference_dt.strftime("%Y-%m-%d")
            fallback_start = (reference_dt - timedelta(days=30)).strftime("%Y-%m-%d")
            df = pb.statcast_batter(fallback_start, fallback_end, player_id)
            if df.empty:
                return None

        df = df.dropna(subset=["launch_speed", "launch_angle"])
        if df.empty:
            return None

        df["game_date"] = pd.to_datetime(df["game_date"])
        last_7 = df[df["game_date"] >= (reference_dt - timedelta(days=7))]

        line_drives = df[df["bb_type"] == "line_drive"]
        ld_rate = len(line_drives) / len(df) * 100
        hard_hit_rate = (df["launch_speed"] >= 95).mean() * 100

        avg_ev_30 = safe_float(df["launch_speed"].mean(), 88.0)
        avg_ev_7 = safe_float(last_7["launch_speed"].mean(), avg_ev_30)
        avg_launch_angle_30 = safe_float(df["launch_angle"].mean(), 12.0)
        avg_launch_angle_7 = safe_float(last_7["launch_angle"].mean(), avg_launch_angle_30)
        ev_trend = avg_ev_7 - avg_ev_30

        ld_ev = safe_float(line_drives["launch_speed"].mean(), avg_ev_30)

        def babip_proxy(window_df):
            if window_df.empty:
                return 0.285
            bip_events = window_df[window_df["events"].isin(["single", "double", "triple", "field_out", "force_out", "double_play", "field_error"])]
            if bip_events.empty:
                return 0.285
            hits = bip_events["events"].isin(["single", "double", "triple"]).sum()
            return hits / len(bip_events)

        babip_30 = babip_proxy(df)
        babip_7 = babip_proxy(last_7) if not last_7.empty else babip_30
        babip_trend = babip_7 - babip_30

        return {
            "ld_rate": ld_rate,
            "hard_hit_rate": hard_hit_rate,
            "avg_ev_30": avg_ev_30,
            "avg_ev_7": avg_ev_7,
            "avg_launch_angle_30": avg_launch_angle_30,
            "avg_launch_angle_7": avg_launch_angle_7,
            "ld_ev": ld_ev,
            "ev_trend": ev_trend,
            "babip_30": babip_30,
            "babip_7": babip_7,
            "babip_trend": babip_trend,
        }
    except Exception:
        return None


def compute_last_5_summary(game_log_splits, reference_date=None):
    if not game_log_splits:
        return {"avg": None, "hits": 0, "at_bats": 0}

    filtered_logs = []
    if reference_date:
        try:
            reference_dt = datetime.strptime(str(reference_date), "%Y-%m-%d").date()
        except Exception:
            reference_dt = None
    else:
        reference_dt = None

    for split in game_log_splits:
        split_date = split.get("date") or split.get("game", {}).get("gameDate")
        if reference_dt and split_date:
            try:
                if datetime.strptime(str(split_date)[:10], "%Y-%m-%d").date() > reference_dt:
                    continue
            except Exception:
                pass
        filtered_logs.append(split)

    recent = filtered_logs[:5]
    total_hits = sum(int(safe_float(split.get("stat", {}).get("hits"), 0)) for split in recent)
    total_ab = sum(int(safe_float(split.get("stat", {}).get("atBats"), 0)) for split in recent)
    avg = round(total_hits / total_ab, 3) if total_ab > 0 else None
    return {"avg": avg, "hits": total_hits, "at_bats": total_ab}


def get_hitting_profile(player_id, pitcher_id=None, reference_date=None):
    reference_key = str(reference_date or "current")
    cache_key = (player_id, pitcher_id, reference_key)
    if cache_key in PROFILE_CACHE:
        return PROFILE_CACHE[cache_key]

    default_profile = {
        "avg": 0.245,
        "avg_display": format_avg_display(0.245),
        "last_5_avg": None,
        "last_5_avg_display": "N/A",
        "last_5_hits": 0,
        "last_5_ab": 0,
        "vs_starter_avg": None,
        "vs_starter_avg_display": "N/A",
        "vs_starter_hits": 0,
        "vs_starter_ab": 0,
        "vs_starter_hr": 0,
        "vs_starter_rbi": 0,
        "obp": 0.315,
        "sprint_speed_score": 50,
        "risp_proxy": 50,
        "team_obp_score": 50,
    }

    try:
        if reference_date:
            try:
                reference_dt = datetime.strptime(str(reference_date), "%Y-%m-%d")
            except Exception:
                reference_dt = datetime.now()
        else:
            reference_dt = datetime.now()

        season = str(reference_dt.year)
        type_list = "season,gameLog,vsPlayer" if pitcher_id else "season,gameLog"
        hydrate = f"stats(group=[hitting],type=[{type_list}],season={season}"
        if pitcher_id:
            hydrate += f",opposingPlayerId={pitcher_id}"
        hydrate += ")"

        data = statsapi.get("people", {"personIds": player_id, "hydrate": hydrate}) or {}
        person = data.get("people", [{}])[0]
        stat_blocks = person.get("stats", [])

        season_stats = {}
        game_logs = []
        vs_total_stats = {}

        for block in stat_blocks:
            display_name = block.get("type", {}).get("displayName", "")
            splits = block.get("splits", []) or []
            if display_name == "season" and splits:
                season_stats = splits[0].get("stat", {})
            elif display_name == "gameLog" and splits:
                game_logs = splits
            elif display_name == "vsPlayerTotal" and splits:
                vs_total_stats = splits[0].get("stat", {})

        avg = round(safe_float(season_stats.get("avg"), 0.245), 3)
        obp = safe_float(season_stats.get("obp"), 0.315)
        steals = safe_float(season_stats.get("stolenBases"), 5)
        games = max(safe_float(season_stats.get("gamesPlayed"), 1), 1)

        sprint_speed_score = clamp((steals / games) * 340)
        risp_proxy = clamp((avg - 0.200) / 0.140 * 100)
        team_obp_score = clamp((obp - 0.280) / 0.090 * 100)

        last_5_summary = compute_last_5_summary(game_logs, reference_date=reference_date)
        last_5_avg = last_5_summary["avg"]
        last_5_hits = last_5_summary["hits"]
        last_5_ab = last_5_summary["at_bats"]

        vs_starter_ab = int(safe_float(vs_total_stats.get("atBats"), 0)) if vs_total_stats else 0
        vs_starter_hits = int(safe_float(vs_total_stats.get("hits"), 0)) if vs_total_stats else 0
        vs_starter_hr = int(safe_float(vs_total_stats.get("homeRuns"), 0)) if vs_total_stats else 0
        vs_starter_rbi = int(safe_float(vs_total_stats.get("rbi"), 0)) if vs_total_stats else 0
        vs_starter_avg = round(safe_float(vs_total_stats.get("avg"), 0.0), 3) if vs_starter_ab > 0 else None

        if vs_starter_ab > 0:
            vs_starter_avg_display = f"{format_avg_display(vs_starter_avg)} ({vs_starter_hits} H / {vs_starter_ab} AB"
            if vs_starter_hr > 0:
                vs_starter_avg_display += f", {vs_starter_hr} HR"
            vs_starter_avg_display += ")"
        else:
            vs_starter_avg_display = "N/A"

        profile = {
            "avg": avg,
            "avg_display": format_avg_display(avg),
            "last_5_avg": last_5_avg,
            "last_5_avg_display": format_avg_display(last_5_avg),
            "last_5_hits": last_5_hits,
            "last_5_ab": last_5_ab,
            "vs_starter_avg": vs_starter_avg,
            "vs_starter_avg_display": vs_starter_avg_display,
            "vs_starter_hits": vs_starter_hits,
            "vs_starter_ab": vs_starter_ab,
            "vs_starter_hr": vs_starter_hr,
            "vs_starter_rbi": vs_starter_rbi,
            "obp": obp,
            "sprint_speed_score": sprint_speed_score,
            "risp_proxy": risp_proxy,
            "team_obp_score": team_obp_score,
        }
        PROFILE_CACHE[cache_key] = profile
        return profile
    except Exception:
        PROFILE_CACHE[cache_key] = default_profile
        return default_profile


def get_pitcher_contact_score(pitcher_name):
    if not pitcher_name or pitcher_name == "TBD":
        return 50

    try:
        lookup = statsapi.lookup_player(pitcher_name)
        if not lookup:
            return 50
        pitcher_id = lookup[0]["id"]
        pdata = statsapi.player_stat_data(pitcher_id, group="pitching", type="season")
        pstats = pdata.get("stats", [{}])[0]

        whip = safe_float(pstats.get("whip"), 1.25)
        k9 = safe_float(pstats.get("strikeoutsPer9Inn"), 8.0)
        baa = safe_float(pstats.get("avg"), 0.245)

        whip_score = clamp((whip - 1.00) / 0.45 * 100)
        contact_allowed = clamp((baa - 0.210) / 0.110 * 100)
        k9_inverse = clamp((10.5 - k9) / 4.5 * 100)

        return clamp((whip_score * 0.35) + (contact_allowed * 0.35) + (k9_inverse * 0.30))
    except Exception:
        return 50


def signal_label(value, hot_threshold, cold_threshold):
    if value > hot_threshold:
        return "Heating Up"
    if value < cold_threshold:
        return "Cooling Off"
    return "Stable"


def build_player_row(game, side, roster_player, lineup_context):
    name = roster_player["person"]["fullName"]
    player_id = roster_player["person"]["id"]
    if roster_player["position"].get("code") == "1":
        return None

    opp_pitcher = game.get("home_probable_pitcher" if side == "away" else "away_probable_pitcher") or "TBD"
    opp_pitcher_id = get_pitcher_id(opp_pitcher)

    statcast = extract_statcast_windows(player_id, reference_date=game.get("game_date"))
    if not statcast:
        return None

    profile = get_hitting_profile(player_id, pitcher_id=opp_pitcher_id, reference_date=game.get("game_date"))
    park_factor = PARK_HITS_FACTORS.get(game.get("home_name"), 1.00)

    context = lineup_context.get(normalize_name(name), {
        "slot": 9,
        "expected_pa": 3.5,
        "run_slot_score": 55,
        "rbi_slot_score": 62,
    })

    contact_score = clamp((statcast["ld_rate"] - 15.0) / 15.0 * 100.0)
    form_score = clamp((statcast["ld_ev"] - 85.0) / 15.0 * 100.0)
    ev_trend_score = clamp((statcast["ev_trend"] + 2.0) / 4.0 * 100.0)
    babip_trend_score = clamp((statcast["babip_trend"] + 0.020) / 0.040 * 100.0)

    runs_score = (
        context["run_slot_score"] * 0.50
        + profile["sprint_speed_score"] * 0.30
        + profile["team_obp_score"] * 0.20
    )

    rbi_opportunity_score = (
        context["rbi_slot_score"] * 0.40
        + profile["team_obp_score"] * 0.35
        + profile["risp_proxy"] * 0.25
    )

    pitcher_contact_score = get_pitcher_contact_score(opp_pitcher)
    weather_score = get_weather_score_for_game(
        game.get("game_date"),
        park_factor=park_factor,
        home_team=game.get("home_name"),
        away_team=game.get("away_name"),
    )

    park_hits_score = clamp(((park_factor - 0.85) / 0.30) * 100)

    score_100 = (
        contact_score * 0.20
        + form_score * 0.15
        + ev_trend_score * 0.08
        + babip_trend_score * 0.07
        + pitcher_contact_score * 0.15
        + rbi_opportunity_score * 0.10
        + runs_score * 0.08
        + park_hits_score * 0.06
        + 50.0 * 0.05
        + weather_score * 0.04
        + 50.0 * 0.02
    )

    final_prob = (score_100 / 4.0) * (context["expected_pa"] / 4.0)
    final_prob = round(clamp(final_prob, 0.0, 25.0), 1)

    if final_prob >= 8.0:
        confidence_band = "High Confidence"
    elif final_prob >= 5.0:
        confidence_band = "Standard"
    elif final_prob >= 3.0:
        confidence_band = "Watchlist"
    else:
        confidence_band = "Not Modeled"

    live_preview = live_hrbi_probability(
        base_probability=final_prob,
        current_h=0,
        current_r=0,
        current_rbi=0,
        innings_remaining=9.0,
        run_diff=0,
        runners_on=0,
        pitcher_contact_delta=0.0,
    )

    return {
        "date": game.get("game_date"),
        "name": name,
        "team": get_team_abbr(game.get(f"{side}_name")),
        "probability": final_prob,
        "target": "H+R+RBI >= 3",
        "confidence_band": confidence_band,
        "lineup_slot": context["slot"],
        "expected_pa": round(context["expected_pa"], 1),
        "season_avg": profile["avg"],
        "season_avg_display": profile["avg_display"],
        "last_5_avg": profile["last_5_avg"],
        "last_5_avg_display": profile["last_5_avg_display"],
        "last_5_hits": profile["last_5_hits"],
        "last_5_ab": profile["last_5_ab"],
        "vs_starter_avg": profile["vs_starter_avg"],
        "vs_starter_avg_display": profile["vs_starter_avg_display"],
        "vs_starter_hits": profile["vs_starter_hits"],
        "vs_starter_ab": profile["vs_starter_ab"],
        "vs_starter_hr": profile["vs_starter_hr"],
        "vs_starter_rbi": profile["vs_starter_rbi"],
        "opp_pitcher": opp_pitcher,
        "avg_ev": round(statcast["avg_ev_30"], 1),
        "recent_avg_ev": round(statcast["avg_ev_7"], 1),
        "avg_launch_angle": round(statcast["avg_launch_angle_30"], 1),
        "recent_launch_angle": round(statcast["avg_launch_angle_7"], 1),
        "ev_trend_val": round(statcast["ev_trend"], 2),
        "ev_trend_label": signal_label(statcast["ev_trend"], 2.0, -2.0),
        "babip_trend_val": round(statcast["babip_trend"], 3),
        "babip_trend_label": signal_label(statcast["babip_trend"], 0.020, -0.020),
        "ld_rate": round(statcast["ld_rate"], 1),
        "ld_ev": round(statcast["ld_ev"], 1),
        "hard_hit_rate": round(statcast["hard_hit_rate"], 1),
        "live_preview": live_preview,
        "breakdown": {
            "Contact": int(round(contact_score)),
            "Form": int(round(form_score)),
            "Pitcher": int(round(pitcher_contact_score)),
            "RBI": int(round(rbi_opportunity_score)),
            "Runs": int(round(runs_score)),
            "Park": int(round(park_hits_score)),
            "Weather": int(round(weather_score)),
        },
    }


def generate_probability_payload(target_date, max_games=None):
    games = statsapi.schedule(date=target_date)
    if max_games is not None and max_games > 0:
        games = games[:max_games]
    lineup_context = build_lineup_context(target_date)
    payload = []

    for game in games:
        print(f"Analyzing: {game['away_name']} @ {game['home_name']}")
        game["game_date"] = target_date

        for side in ("away", "home"):
            team_id = game[f"{side}_id"]
            try:
                roster_response = statsapi.get("team_roster", {"teamId": team_id}) or {}
                roster = roster_response.get("roster", [])
            except Exception:
                continue

            for player in roster:
                row = build_player_row(game, side, player, lineup_context)
                if row is not None:
                    payload.append(row)

    return sorted(payload, key=lambda x: x["probability"], reverse=True)


def save_probability_payload(
    payload,
    target_date,
    default_filename=None,
    default_var_name=None,
    default_date_var_name=None,
    default_time_var_name=None,
    run_time_label='',
):
    date_key = target_date.replace("-", "_")
    dated_output = DATA_DIR / f"hrbi_model_{target_date}.js"

    dated_lines = [
        f"window.hrbiModelUpdateDate_{date_key} = '{target_date}';",
        f"window.hrbiModelLastRunTime_{date_key} = '{run_time_label}';",
        f"window.hrbiModelData_{date_key} = {json.dumps(payload, indent=2)};",
    ]
    dated_output.write_text("\n".join(dated_lines), encoding="utf-8")

    if default_filename and default_var_name:
        default_lines = []
        if default_date_var_name:
            default_lines.append(f"const {default_date_var_name} = '{target_date}';")
        if default_time_var_name:
            default_lines.append(f"const {default_time_var_name} = '{run_time_label}';")
        default_lines.append(f"const {default_var_name} = {json.dumps(payload, indent=2)};")
        (DATA_DIR / default_filename).write_text("\n".join(default_lines), encoding="utf-8")

    return dated_output


def run_hrbi_model(max_games=None, target_date=None):
    print("--- H+R+RBI Probability Engine (stable) ---")
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    now_et = datetime.now(ZoneInfo('America/New_York'))
    run_time_label = now_et.strftime('%I:%M %p ET').lstrip('0')
    today = now_et.strftime("%Y-%m-%d")
    tomorrow = (now_et + timedelta(days=1)).strftime("%Y-%m-%d")
    smoke_mode = bool(max_games)

    if target_date:
        print(f"Building H+R+RBI historical predictions for {target_date}")
        payload = generate_probability_payload(target_date, max_games=max_games)

        if target_date == today:
            output = save_probability_payload(
                payload,
                target_date,
                None if smoke_mode else "hrbi_model_data.js",
                None if smoke_mode else "hrbiModelData",
                "hrbiModelUpdateDate" if not smoke_mode else None,
                "hrbiModelLastRunTime" if not smoke_mode else None,
                run_time_label,
            )
            print(("Saved smoke-test file: " if smoke_mode else "Saved latest today file and ") + output.name)
        elif target_date == tomorrow:
            output = save_probability_payload(
                payload,
                target_date,
                None if smoke_mode else "hrbi_model_tomorrow.js",
                None if smoke_mode else "hrbiModelTomorrowData",
                "hrbiModelTomorrowUpdateDate" if not smoke_mode else None,
                "hrbiModelTomorrowLastRunTime" if not smoke_mode else None,
                run_time_label,
            )
            print(("Saved smoke-test file: " if smoke_mode else "Saved latest tomorrow file and ") + output.name)
        else:
            output = save_probability_payload(payload, target_date, run_time_label=run_time_label)
            print(f"Saved historical file: {output.name}")

        print(f"Success: {len(payload)} players scored for {target_date}.")
        return

    print(f"Building today's H+R+RBI predictions for {today}")
    today_payload = generate_probability_payload(today, max_games=max_games)
    today_output = save_probability_payload(
        today_payload,
        today,
        None if smoke_mode else "hrbi_model_data.js",
        None if smoke_mode else "hrbiModelData",
        "hrbiModelUpdateDate" if not smoke_mode else None,
        "hrbiModelLastRunTime" if not smoke_mode else None,
        run_time_label,
    )

    print(f"Building tomorrow's H+R+RBI predictions for {tomorrow}")
    tomorrow_payload = generate_probability_payload(tomorrow, max_games=max_games)
    tomorrow_output = save_probability_payload(
        tomorrow_payload,
        tomorrow,
        None if smoke_mode else "hrbi_model_tomorrow.js",
        None if smoke_mode else "hrbiModelTomorrowData",
        "hrbiModelTomorrowUpdateDate" if not smoke_mode else None,
        "hrbiModelTomorrowLastRunTime" if not smoke_mode else None,
        run_time_label,
    )

    print(
        f"Success: {len(today_payload)} players scored for today and "
        f"{len(tomorrow_payload)} for tomorrow."
    )
    if smoke_mode:
        print(
            f"Smoke test mode: wrote limited dated files {today_output.name} and {tomorrow_output.name} without overwriting the live site bundles."
        )
    else:
        print(
            "Saved: hrbi_model_data.js, "
            f"{today_output.name}, hrbi_model_tomorrow.js, and {tomorrow_output.name}"
        )


def parse_args():
    parser = argparse.ArgumentParser(description="Generate stable H+R+RBI probability outputs.")
    parser.add_argument(
        "--date",
        default="",
        help="Optional target date in YYYY-MM-DD format for generating a single historical file.",
    )
    parser.add_argument(
        "--max-games",
        type=int,
        default=0,
        help="Optional smoke-test limit for number of games per date (0 means all games).",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    run_hrbi_model(max_games=args.max_games or None, target_date=args.date or None)
