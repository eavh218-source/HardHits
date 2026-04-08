import argparse
import json
import re
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import pandas as pd
import pybaseball as pb
import statsapi

from get_mlb_weather import get_weather_score_for_game
from load_to_sqlserver import get_sql_sync_blocker, sync_to_sql_from_environment
from paths import DATA_DIR
from system_settings import load_system_settings

# Unified HR model configuration from CALCULATION_LOGIC.md
PARK_FACTORS = {
    'Reds': 1.28, 'Dodgers': 1.21, 'Phillies': 1.16,
    'Yankees': 1.12, 'Rockies': 1.11, 'Athletics': 1.09,
    'Mariners': 0.82, 'Padres': 0.94, 'Giants': 0.83
}

TEAM_MAP = {
    'Arizona Diamondbacks': 'ARI', 'Atlanta Braves': 'ATL', 'Baltimore Orioles': 'BAL',
    'Boston Red Sox': 'BOS', 'Chicago Cubs': 'CHC', 'Chicago White Sox': 'CHW',
    'Cincinnati Reds': 'CIN', 'Cleveland Guardians': 'CLE', 'Colorado Rockies': 'COL',
    'Detroit Tigers': 'DET', 'Houston Astros': 'HOU', 'Kansas City Royals': 'KCR',
    'Los Angeles Angels': 'LAA', 'Los Angeles Dodgers': 'LAD', 'Miami Marlins': 'MIA',
    'Milwaukee Brewers': 'MIL', 'Minnesota Twins': 'MIN', 'New York Mets': 'NYM',
    'New York Yankees': 'NYY', 'Oakland Athletics': 'OAK', 'Athletics': 'ATH',
    'Philadelphia Phillies': 'PHI', 'Pittsburgh Pirates': 'PIT', 'San Diego Padres': 'SDP',
    'San Francisco Giants': 'SFG', 'Seattle Mariners': 'SEA', 'St. Louis Cardinals': 'STL',
    'Tampa Bay Rays': 'TBR', 'Texas Rangers': 'TEX', 'Toronto Blue Jays': 'TOR',
    'Washington Nationals': 'WSH'
}

EXPECTED_PA = {1: 4.5, 2: 4.5, 3: 4.0, 4: 4.0, 5: 4.0, 6: 3.5, 7: 3.5, 8: 3.5, 9: 3.5}

PLAYER_INFO_CACHE = {}
PITCHER_CONTEXT_CACHE = {}
LINEUP_EXCLUSIONS_KEY = '__excluded_players__'
LINEUP_EXCLUDED_IDS_KEY = '__excluded_player_ids__'
LINEUP_META_KEYS = {LINEUP_EXCLUSIONS_KEY, LINEUP_EXCLUDED_IDS_KEY}


def has_lineup_entries(lineup_context):
    return any(key not in LINEUP_META_KEYS for key in lineup_context)


def clamp(value, low=0.0, high=100.0):
    return max(low, min(high, value))


def safe_float(value, default=0.0):
    try:
        if value in (None, ''):
            return default
        return float(str(value).replace('%', '').strip())
    except Exception:
        return default


def calculate_barrels(df):
    """Statcast barrel: EV >= 98 MPH and LA between 26–30 degrees."""
    if df.empty:
        return 0.0
    barrels = df[(df['launch_speed'] >= 98) & (df['launch_angle'].between(26, 30))]
    return (len(barrels) / len(df)) * 100 if len(df) > 0 else 0.0


def normalize_name(name):
    return str(name or '').strip().lower()


def signal_label(value, hot_threshold, cold_threshold):
    if value > hot_threshold:
        return 'Heating Up'
    if value < cold_threshold:
        return 'Cooling Off'
    return 'Stable'


def get_team_abbr(team_name):
    team_name = str(team_name or '').strip()
    if not team_name:
        return 'TBD'
    return TEAM_MAP.get(team_name, team_name[:3].upper())


def load_bvp_data():
    bvp_path = DATA_DIR / 'bvp_data.js'
    if not bvp_path.exists():
        return []

    try:
        content = bvp_path.read_text(encoding='utf-8')
        match = re.search(r'const bvpData = (\[.*\]);', content, re.S)
        if not match:
            return []
        return json.loads(match.group(1))
    except Exception as exc:
        print(f"Warning: failed to load BvP data: {exc}")
        return []


def load_starting_lineups():
    json_path = DATA_DIR / 'starting_lineups.json'
    if json_path.exists():
        try:
            return json.loads(json_path.read_text(encoding='utf-8'))
        except Exception as exc:
            print(f"Warning: failed to load starting_lineups.json: {exc}")

    js_path = DATA_DIR / 'starting_lineups.js'
    if not js_path.exists():
        return []

    try:
        content = js_path.read_text(encoding='utf-8')
        match = re.search(r'const startingLineups = (\[.*\]);', content, re.S)
        if not match:
            return []
        return json.loads(match.group(1))
    except Exception as exc:
        print(f"Warning: failed to parse starting lineups: {exc}")
        return []


def load_manual_injured_list():
    try:
        settings = load_system_settings()
        raw_names = ((settings.get('playerExclusions') or {}).get('injured_list') or [])
    except Exception as exc:
        print(f"Warning: failed to load manual injured list from settings: {exc}")
        return set()

    excluded_names = set()
    for name in raw_names:
        normalized = normalize_name(name)
        if normalized:
            excluded_names.add(normalized)
    return excluded_names


def build_lineup_context(target_date):
    context = {
        LINEUP_EXCLUSIONS_KEY: {},
        LINEUP_EXCLUDED_IDS_KEY: set(),
    }

    for player_name in load_manual_injured_list():
        context[LINEUP_EXCLUSIONS_KEY][player_name] = {
            'status': 'Manual injured list',
            'status_code': 'SETTINGS',
        }

    for game in load_starting_lineups():
        if str(game.get('date')) != target_date:
            continue

        for side in ('away', 'home'):
            lineup = game.get(f'{side}_lineup', []) or []
            for entry in lineup:
                player_name = normalize_name(entry.get('name'))
                slot = int(entry.get('slot') or 9)
                context[player_name] = {
                    'slot': slot,
                    'expected_pa': EXPECTED_PA.get(slot, 3.5),
                    'status': 'Confirmed Starter',
                }

            for distinction in game.get(f'{side}_distinctions', []) or []:
                if not distinction.get('exclude_from_models'):
                    continue
                player_name = normalize_name(distinction.get('name'))
                if not player_name:
                    continue
                context[LINEUP_EXCLUSIONS_KEY][player_name] = {
                    'status': distinction.get('status') or 'Unavailable',
                    'status_code': distinction.get('status_code') or '',
                }
                if distinction.get('player_id') is not None:
                    context[LINEUP_EXCLUDED_IDS_KEY].add(distinction.get('player_id'))

    return context


def get_player_bat_side(player_id):
    if player_id in PLAYER_INFO_CACHE:
        return PLAYER_INFO_CACHE[player_id]

    bat_side = 'S'
    try:
        data = statsapi.get('people', {'personIds': player_id}) or {}
        person = data.get('people', [{}])[0]
        bat_side = person.get('batSide', {}).get('code', 'S') or 'S'
    except Exception:
        bat_side = 'S'

    PLAYER_INFO_CACHE[player_id] = bat_side
    return bat_side


def calculate_bvp_score(hitter_name, pitcher_name, bvp_data):
    if not hitter_name or not pitcher_name or pitcher_name == 'TBD' or not bvp_data:
        return 50.0, 0.0, ''

    matches = [
        row for row in bvp_data
        if normalize_name(row.get('batter_name')) == normalize_name(hitter_name)
        and normalize_name(row.get('pitcher_name')) == normalize_name(pitcher_name)
    ]

    if not matches:
        return 50.0, 0.0, ''

    sample = len(matches)
    hr_count = sum(1 for row in matches if 'home run' in str(row.get('events', '')).lower())
    hard_hit_count = sum(1 for row in matches if safe_float(row.get('launch_speed'), 0.0) >= 100.0)
    avg_ev = sum(safe_float(row.get('launch_speed'), 0.0) for row in matches) / sample

    hr_rate = hr_count / sample
    hard_hit_rate = hard_hit_count / sample
    ev_score = clamp(((avg_ev - 90.0) / 15.0) * 100.0)
    h2h_score = clamp((hr_rate * 100.0 * 0.55) + (hard_hit_rate * 100.0 * 0.25) + (ev_score * 0.20))

    boost = round(((h2h_score - 50.0) / 50.0) * 0.6, 2)
    summary = f"{sample} BvP events · {hr_count} HR · {hard_hit_count} hard-hit vs {pitcher_name}"
    return h2h_score, boost, summary


def get_advanced_hitter_metrics(player_id, reference_date=None):
    try:
        if isinstance(reference_date, datetime):
            reference_dt = reference_date
        elif reference_date:
            reference_dt = datetime.strptime(str(reference_date), '%Y-%m-%d')
        else:
            reference_dt = datetime.now()

        end_date = reference_dt.strftime('%Y-%m-%d')
        start_date = (reference_dt - timedelta(days=30)).strftime('%Y-%m-%d')
        df = pb.statcast_batter(start_date, end_date, player_id)

        if df.empty:
            df = pb.statcast_batter('2025-09-01', '2025-10-01', player_id)
            if df.empty:
                return None

        df = df.dropna(subset=['launch_speed', 'launch_angle'])
        if df.empty:
            return None

        df['game_date'] = pd.to_datetime(df['game_date'])
        last_7 = df[df['game_date'] >= (reference_dt - timedelta(days=7))]
        fb_df = df[df['bb_type'].isin(['fly_ball', 'line_drive'])]

        barrel_pct = calculate_barrels(df)
        max_ev = safe_float(df['launch_speed'].max(), 0.0)
        avg_30 = safe_float(df['launch_speed'].mean(), 88.0)
        avg_7 = safe_float(last_7['launch_speed'].mean(), avg_30) if not last_7.empty else avg_30
        ev_trend = avg_7 - avg_30
        fb_ev = safe_float(fb_df['launch_speed'].mean(), 85.0) if not fb_df.empty else 85.0

        return {
            'barrel_pct': round(barrel_pct, 2),
            'max_ev': round(max_ev, 1),
            'fb_ev': round(fb_ev, 1),
            'ev_trend': round(ev_trend, 2),
            'power_score': clamp((barrel_pct / 15.0) * 100.0),
            'form_score': clamp(((fb_ev - 88.0) / 12.0) * 100.0),
            'trend_score': clamp((ev_trend / 5.0) * 100.0),
            'max_ev_pct': clamp((max_ev / 110.0) * 100.0),
            'fb_ev_pct': clamp((fb_ev / 100.0) * 100.0),
            'bat_side': get_player_bat_side(player_id),
            'has_recent': not last_7.empty,
        }
    except Exception:
        return None


def get_pitcher_matchup_data(pitcher_name):
    default = {
        'pitcher_hand': 'R',
        'pitcher_hr_score': 50.0,
        'fb_rate_score': 50.0,
        'context_score': 50.0,
        'hr9': 1.0,
        'fb_rate_allowed': 35.0,
    }

    if not pitcher_name or pitcher_name == 'TBD':
        return default

    if pitcher_name in PITCHER_CONTEXT_CACHE:
        return PITCHER_CONTEXT_CACHE[pitcher_name]

    context = dict(default)

    try:
        lookup = statsapi.lookup_player(pitcher_name)
        if not lookup:
            PITCHER_CONTEXT_CACHE[pitcher_name] = context
            return context

        pitcher_id = lookup[0]['id']
        pdata = statsapi.player_stat_data(pitcher_id, group='pitching', type='season') or {}
        pstats = pdata.get('stats', [{}])[0]

        person_data = statsapi.get('people', {'personIds': pitcher_id}) or {}
        person = person_data.get('people', [{}])[0]
        pitch_hand = person.get('pitchHand', {}).get('code', 'R') or 'R'

        innings = max(safe_float(pstats.get('inningsPitched'), 0.0), 1.0)
        home_runs = safe_float(pstats.get('homeRuns'), 0.0)
        hr9 = safe_float(pstats.get('homeRunsPer9Inn'), (home_runs / innings) * 9.0)

        air_outs = safe_float(pstats.get('airOuts'), 0.0)
        ground_outs = safe_float(pstats.get('groundOuts'), 0.0)
        fb_rate_allowed = (air_outs / max(air_outs + ground_outs, 1.0)) * 100.0

        whip = safe_float(pstats.get('whip'), 1.25)
        baa = safe_float(pstats.get('avg'), 0.245)
        games_started = safe_float(pstats.get('gamesStarted'), 0.0)
        games_pitched = max(safe_float(pstats.get('gamesPlayed'), games_started or 1.0), 1.0)
        is_starter = games_started >= max(1.0, games_pitched * 0.4)

        hr9_score = clamp(((hr9 - 0.6) / 1.2) * 100.0)
        fb_rate_score = clamp(((fb_rate_allowed - 25.0) / 20.0) * 100.0)
        baa_score = clamp(((baa - 0.210) / 0.110) * 100.0)
        whip_score = clamp(((whip - 1.00) / 0.45) * 100.0)
        pitcher_hr_score = clamp((hr9_score * 0.60) + (baa_score * 0.25) + (whip_score * 0.15))
        context_score = 58.0 if is_starter else 50.0

        context = {
            'pitcher_hand': pitch_hand,
            'pitcher_hr_score': pitcher_hr_score,
            'fb_rate_score': fb_rate_score,
            'context_score': context_score,
            'hr9': round(hr9, 2),
            'fb_rate_allowed': round(fb_rate_allowed, 1),
        }
    except Exception:
        context = dict(default)

    PITCHER_CONTEXT_CACHE[pitcher_name] = context
    return context


def get_platoon_score(batter_side, pitcher_hand):
    batter_side = str(batter_side or 'S').upper()
    pitcher_hand = str(pitcher_hand or 'R').upper()

    if batter_side == 'S':
        return 58.0
    if batter_side != pitcher_hand:
        return 62.0
    return 42.0


def get_weather_score(target_date, park_factor, home_team=None, away_team=None):
    return get_weather_score_for_game(
        target_date,
        park_factor=park_factor,
        home_team=home_team,
        away_team=away_team,
    )


def build_probability_row(game, side, roster_player, lineup_context, bvp_data, target_date, reference_date=None):
    if roster_player['position'].get('code') == '1':
        return None

    name = roster_player['person']['fullName']
    player_id = roster_player['person']['id']
    excluded_players = lineup_context.get(LINEUP_EXCLUSIONS_KEY, {})
    excluded_ids = lineup_context.get(LINEUP_EXCLUDED_IDS_KEY, set())
    if player_id in excluded_ids or normalize_name(name) in excluded_players:
        return None

    roster_status = roster_player.get('status', {}) or {}
    roster_status_code = str(roster_status.get('code') or '').strip().upper()
    if roster_status_code and roster_status_code != 'A':
        return None

    stats = get_advanced_hitter_metrics(player_id, reference_date=reference_date)
    if not stats or stats['max_ev'] <= 104:
        return None

    park_factor_value = 1.0
    for team_name, factor in PARK_FACTORS.items():
        if team_name in game['home_name']:
            park_factor_value = factor
            break

    lineup_known = has_lineup_entries(lineup_context)
    lineup_default = {
        'slot': 'TBD',
        'expected_pa': 1.0 if lineup_known else 3.5,
        'status': 'Bench / Pinch Hit Risk' if lineup_known else 'Lineup Pending',
    }
    lineup_info = lineup_context.get(normalize_name(name), lineup_default)

    opp_pitcher = game.get('home_probable_pitcher' if side == 'away' else 'away_probable_pitcher') or 'TBD'
    pitcher_context = get_pitcher_matchup_data(opp_pitcher)
    platoon_score = get_platoon_score(stats['bat_side'], pitcher_context['pitcher_hand'])
    h2h_score, bvp_boost, bvp_summary = calculate_bvp_score(name, opp_pitcher, bvp_data)
    park_score = clamp(((park_factor_value - 0.8) / 0.5) * 100.0)
    weather_score = get_weather_score(
        target_date,
        park_factor_value,
        home_team=game.get('home_name'),
        away_team=game.get('away_name'),
    )

    score_100 = (
        stats['power_score'] * 0.20
        + stats['form_score'] * 0.15
        + stats['trend_score'] * 0.10
        + pitcher_context['pitcher_hr_score'] * 0.13
        + pitcher_context['context_score'] * 0.05
        + pitcher_context['fb_rate_score'] * 0.06
        + park_score * 0.06
        + platoon_score * 0.05
        + h2h_score * 0.03
        + weather_score * 0.02
    )

    final_prob = (score_100 / 4.5) * (safe_float(lineup_info['expected_pa'], 3.5) / 4.0)
    final_prob = round(min(max(final_prob, 0.0), 14.0), 1)

    return {
        'date': target_date,
        'name': name,
        'team': get_team_abbr(game.get(f'{side}_name')),
        'probability': final_prob,
        'breakdown': {
            'Power': int(round(stats['power_score'])),
            'Form': int(round(stats['form_score'])),
            'Trend': int(round(stats['trend_score'])),
            'Park': int(round(park_score)),
            'Pitcher': int(round(pitcher_context['pitcher_hr_score'])),
            'Platoon': int(round(platoon_score)),
            'History': int(round(h2h_score)),
            'Weather': int(round(weather_score)),
        },
        'ev_trend_val': round(stats['ev_trend'], 2),
        'ev_trend_label': signal_label(stats['ev_trend'], 2.0, -2.0),
        'max_ev': round(stats['max_ev'], 1),
        'max_ev_pct': int(round(stats['max_ev_pct'])),
        'fb_ev': round(stats['fb_ev'], 1),
        'fb_ev_pct': int(round(stats['fb_ev_pct'])),
        'barrel_pct': round(stats['barrel_pct'], 1),
        'lineup_slot': lineup_info['slot'],
        'expected_pa': round(safe_float(lineup_info['expected_pa'], 3.5), 1),
        'lineup_status': lineup_info['status'],
        'opp_pitcher': opp_pitcher,
        'opp_pitcher_full': opp_pitcher,
        'pitcher_hr_risk': round(pitcher_context['pitcher_hr_score'], 1),
        'pitcher_hr9': pitcher_context['hr9'],
        'pitcher_fb_rate': pitcher_context['fb_rate_allowed'],
        'starter_context': round(pitcher_context['context_score'], 1),
        'platoon_advantage': round(platoon_score, 1),
        'weather_boost': round(weather_score, 1),
        'park_factor': 'Launch Pad' if park_factor_value > 1.1 else ('Suppressive' if park_factor_value < 0.9 else 'Neutral'),
        'bvp_boost': bvp_boost,
        'h2h_score': round(h2h_score, 1),
        'bvp_summary': bvp_summary,
    }


def generate_probability_payload(target_date, bvp_data, max_games=None, reference_date=None):
    games = statsapi.schedule(date=target_date)
    if max_games is not None and max_games > 0:
        games = games[:max_games]

    if isinstance(reference_date, datetime):
        reference_dt = reference_date
    elif reference_date:
        reference_dt = datetime.strptime(str(reference_date), '%Y-%m-%d')
    else:
        reference_dt = datetime.strptime(str(target_date), '%Y-%m-%d') if isinstance(target_date, str) else datetime.now()

    lineup_context = build_lineup_context(target_date)
    payload = []

    for game in games:
        print(f"Analyzing: {game['away_name']} @ {game['home_name']}")

        for side in ('away', 'home'):
            team_id = game[f'{side}_id']
            try:
                roster_response = statsapi.get('team_roster', {'teamId': team_id}) or {}
                roster = roster_response.get('roster', [])
            except Exception:
                continue

            for player in roster:
                print(f"  Checking {player['person']['fullName']}...", end='\r')
                row = build_probability_row(game, side, player, lineup_context, bvp_data, target_date, reference_date=reference_dt)
                if row is not None:
                    payload.append(row)

    return sorted(payload, key=lambda x: x['probability'], reverse=True)


def save_probability_payload(
    payload,
    target_date,
    default_filename=None,
    default_var_name=None,
    default_date_var_name=None,
    default_time_var_name=None,
    run_time_label='',
):
    date_key = target_date.replace('-', '_')
    dated_output = DATA_DIR / f"hr_model_{target_date}.js"

    dated_lines = [
        f"window.hrModelUpdateDate_{date_key} = '{target_date}';",
        f"window.hrModelLastRunTime_{date_key} = '{run_time_label}';",
        f"window.hrModelData_{date_key} = {json.dumps(payload, indent=2)};",
    ]
    dated_output.write_text("\n".join(dated_lines), encoding='utf-8')

    if default_filename and default_var_name:
        default_lines = []
        if default_date_var_name:
            default_lines.append(f"const {default_date_var_name} = '{target_date}';")
        if default_time_var_name:
            default_lines.append(f"const {default_time_var_name} = '{run_time_label}';")
        default_lines.append(f"const {default_var_name} = {json.dumps(payload, indent=2)};")
        (DATA_DIR / default_filename).write_text("\n".join(default_lines), encoding='utf-8')

    return dated_output


def sync_predictions_to_sql() -> None:
    synced = sync_to_sql_from_environment(["hr_model_predictions"])
    if not synced:
        blocker = get_sql_sync_blocker() or "Unknown SQL sync configuration problem."
        raise RuntimeError(f"Cannot sync hr_model_predictions to SQL: {blocker}")
    print("[OK] SQL sync completed for hr_model_predictions")


def run_probability_model(max_games=None):
    print('--- ⚾ HR Probability Engine (Unified) ---')
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    now_et = datetime.now(ZoneInfo('America/New_York'))
    run_time_label = now_et.strftime('%I:%M %p ET').lstrip('0')
    today = now_et.strftime('%Y-%m-%d')
    tomorrow = (now_et + timedelta(days=1)).strftime('%Y-%m-%d')
    smoke_mode = bool(max_games)
    bvp_data = load_bvp_data()

    if bvp_data:
        print(f"Loaded {len(bvp_data)} BvP records for matchup-aware history")

    print(f"\nBuilding today's predictions for {today}")
    today_payload = generate_probability_payload(today, bvp_data, max_games=max_games)
    today_output = save_probability_payload(
        today_payload,
        today,
        None if smoke_mode else 'hr_model_data.js',
        None if smoke_mode else 'hrModelData',
        'hrModelUpdateDate' if not smoke_mode else None,
        'hrModelLastRunTime' if not smoke_mode else None,
        run_time_label,
    )

    print(f"\nBuilding tomorrow's predictions for {tomorrow}")
    tomorrow_payload = generate_probability_payload(tomorrow, bvp_data, max_games=max_games)
    tomorrow_output = save_probability_payload(
        tomorrow_payload,
        tomorrow,
        None if smoke_mode else 'hr_model_tomorrow.js',
        None if smoke_mode else 'hrModelTomorrowData',
        'hrModelTomorrowUpdateDate' if not smoke_mode else None,
        'hrModelTomorrowLastRunTime' if not smoke_mode else None,
        run_time_label,
    )

    print(f"\n✅ Success! {len(today_payload)} threats updated for today and {len(tomorrow_payload)} for tomorrow.")
    if smoke_mode:
        print(f"Smoke test mode: wrote limited dated files {today_output.name} and {tomorrow_output.name} without overwriting the live site bundles.")
    else:
        print(f"Saved: hr_model_data.js, {today_output.name}, hr_model_tomorrow.js, and {tomorrow_output.name}")
        sync_predictions_to_sql()


def parse_args():
    parser = argparse.ArgumentParser(description='Generate unified HR probability outputs.')
    parser.add_argument(
        '--max-games',
        type=int,
        default=0,
        help='Optional smoke-test limit for the number of games per date (0 means all games).',
    )
    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()
    run_probability_model(max_games=args.max_games or None)
