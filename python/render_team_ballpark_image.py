"""Render a slate image showing MLB teams and ballparks from Covers data.

Usage:
    python python/render_team_ballpark_image.py
    python python/render_team_ballpark_image.py --date 2026-04-07

Outputs:
    assets/generated/mlb_team_ballparks_<date>.svg
    assets/generated/mlb_team_ballparks_<date>.png
    assets/generated/covers/teams/*
    assets/generated/covers/ballparks/*
"""

from __future__ import annotations

import argparse
import json
import math
import re
from io import BytesIO
from pathlib import Path
from urllib.parse import urlparse

import requests

try:
    import cairosvg
except Exception:  # pragma: no cover - environment dependent
    cairosvg = None

try:
    from PIL import Image, ImageDraw, ImageFont
except Exception:  # pragma: no cover - environment dependent
    Image = ImageDraw = ImageFont = None

from paths import DATA_DIR, REPO_ROOT

OUTPUT_DIR = REPO_ROOT / "assets" / "generated"
COVERS_DIR = OUTPUT_DIR / "covers"
TEAM_DIR = COVERS_DIR / "teams"
BALLPARK_DIR = COVERS_DIR / "ballparks"
WEATHER_JSON = DATA_DIR / "mlb_weather.json"

TEAM_COLORS = {
    "ARI": ("#A71930", "#E3D4AD"),
    "ATL": ("#CE1141", "#13274F"),
    "BAL": ("#DF4601", "#000000"),
    "BOS": ("#BD3039", "#0C2340"),
    "CHC": ("#0E3386", "#CC3433"),
    "CHW": ("#111111", "#C4CED4"),
    "CIN": ("#C6011F", "#000000"),
    "CLE": ("#0C2340", "#E31937"),
    "COL": ("#33006F", "#C4CED4"),
    "DET": ("#0C2340", "#FA4616"),
    "HOU": ("#002D62", "#EB6E1F"),
    "KCR": ("#004687", "#BD9B60"),
    "LAA": ("#BA0021", "#003263"),
    "LAD": ("#005A9C", "#FFFFFF"),
    "MIA": ("#00A3E0", "#EF3340"),
    "MIL": ("#12284B", "#FFC52F"),
    "MIN": ("#002B5C", "#D31145"),
    "NYM": ("#002D72", "#FF5910"),
    "NYY": ("#132448", "#C4CED3"),
    "ATH": ("#003831", "#EFB21E"),
    "PHI": ("#E81828", "#002D72"),
    "PIT": ("#FDB827", "#27251F"),
    "SDP": ("#2F241D", "#FFC425"),
    "SEA": ("#0C2C56", "#005C5C"),
    "SFG": ("#FD5A1E", "#27251F"),
    "STL": ("#C41E3A", "#0C2340"),
    "TBR": ("#092C5C", "#8FBCE6"),
    "TEX": ("#003278", "#C0111F"),
    "TOR": ("#134A8E", "#1D2D5C"),
    "WSH": ("#AB0003", "#14225A"),
}


def read_weather_rows() -> list[dict]:
    if not WEATHER_JSON.exists():
        raise SystemExit(f"Missing weather file: {WEATHER_JSON}")
    return json.loads(WEATHER_JSON.read_text(encoding="utf-8"))


def pick_date(rows: list[dict], target_date: str | None) -> str:
    dates = sorted({str(row.get("date")) for row in rows if row.get("date")})
    if not dates:
        raise SystemExit("No weather dates found in mlb_weather.json")
    if target_date and target_date in dates:
        return target_date
    return dates[0] if target_date else dates[0]


def esc(text: object) -> str:
    return (
        str(text or "")
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def team_colors(abbr: str | None) -> tuple[str, str]:
    return TEAM_COLORS.get(str(abbr or "").upper(), ("#334155", "#94a3b8"))


def slugify(value: str | None) -> str:
    text = re.sub(r"[^a-z0-9]+", "-", str(value or "asset").strip().lower()).strip("-")
    return text or "asset"


def download_asset(url: str | None, destination: Path) -> Path | None:
    if not url:
        return None
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists() and destination.stat().st_size > 0:
        return destination

    response = requests.get(url, timeout=30, headers={"User-Agent": "Mozilla/5.0"})
    response.raise_for_status()
    destination.write_bytes(response.content)
    return destination


def save_covers_assets(rows: list[dict], date_str: str) -> None:
    slate = [row for row in rows if str(row.get("date")) == date_str]
    for entry in slate:
        away = str(entry.get("away_abbr") or "away")
        home = str(entry.get("home_abbr") or "home")

        away_logo_url = entry.get("away_logo_url")
        if away_logo_url:
            ext = Path(urlparse(str(away_logo_url)).path).suffix or ".svg"
            local_path = TEAM_DIR / f"{away}{ext}"
            if download_asset(str(away_logo_url), local_path):
                entry["away_logo_local"] = f"covers/teams/{local_path.name}"

        home_logo_url = entry.get("home_logo_url")
        if home_logo_url:
            ext = Path(urlparse(str(home_logo_url)).path).suffix or ".svg"
            local_path = TEAM_DIR / f"{home}{ext}"
            if download_asset(str(home_logo_url), local_path):
                entry["home_logo_local"] = f"covers/teams/{local_path.name}"

        field_image_url = entry.get("field_image_url")
        if field_image_url:
            ext = Path(urlparse(str(field_image_url)).path).suffix or ".png"
            local_path = BALLPARK_DIR / f"{slugify(entry.get('venue'))}{ext}"
            if download_asset(str(field_image_url), local_path):
                entry["field_image_local"] = f"covers/ballparks/{local_path.name}"


def load_asset_image(path_value: str | None, max_size: tuple[int, int] | None = None):
    if Image is None or not path_value:
        return None

    try:
        asset_path = Path(path_value)
        if not asset_path.is_absolute():
            asset_path = OUTPUT_DIR / asset_path

        if asset_path.suffix.lower() == ".svg":
            if cairosvg is None:
                return None
            png_bytes = cairosvg.svg2png(url=str(asset_path))
            if not png_bytes:
                return None
            image = Image.open(BytesIO(bytes(png_bytes))).convert("RGBA")
        else:
            image = Image.open(asset_path).convert("RGBA")

        if max_size:
            image.thumbnail(max_size)
        return image
    except Exception:
        return None


def draw_badge(cx: int, cy: int, abbr: str, primary: str, secondary: str, text_color: str = "#ffffff") -> str:
    return f"""
    <g>
      <circle cx="{cx}" cy="{cy}" r="28" fill="{primary}" stroke="{secondary}" stroke-width="4" />
      <text x="{cx}" y="{cy + 5}" text-anchor="middle" font-size="15" font-weight="800" fill="{text_color}" font-family="Segoe UI, Arial, sans-serif">{esc(abbr)}</text>
    </g>
    """


def render_card(entry: dict, x: int, y: int, card_w: int, card_h: int) -> str:
    away = entry.get("away_abbr") or "AWY"
    home = entry.get("home_abbr") or "HME"
    away_primary, away_secondary = team_colors(away)
    home_primary, home_secondary = team_colors(home)

    weather_score = entry.get("weather_score")
    score_label = f"Weather {weather_score:.0f}" if isinstance(weather_score, (int, float)) else "Weather N/A"
    temp = f"{entry.get('temperature_f', '—')}°F"
    wind = f"{entry.get('wind_mph', '—')} mph {entry.get('wind_direction', '')}".strip()
    humidity = f"{entry.get('humidity_pct', '—')}%"
    uid = f"{int(x)}-{int(y)}-{esc(away)}-{esc(home)}"

    away_logo = entry.get("away_logo_local") or entry.get("away_logo_url")
    home_logo = entry.get("home_logo_local") or entry.get("home_logo_url")
    field_image = entry.get("field_image_local") or entry.get("field_image_url")

    away_markup = draw_badge(48, 95, away, away_primary, away_secondary)
    if away_logo:
        away_markup = f"""
        <g>
          <circle cx="48" cy="95" r="28" fill="#ffffff" opacity="0.95" />
          <image href="{esc(away_logo)}" x="22" y="69" width="52" height="52" preserveAspectRatio="xMidYMid meet" />
          <circle cx="48" cy="95" r="28" fill="none" stroke="{away_secondary}" stroke-width="3" />
        </g>
        """

    home_markup = draw_badge(card_w - 48, 95, home, home_primary, home_secondary)
    if home_logo:
        home_markup = f"""
        <g>
          <circle cx="{card_w - 48}" cy="95" r="28" fill="#ffffff" opacity="0.95" />
          <image href="{esc(home_logo)}" x="{card_w - 74}" y="69" width="52" height="52" preserveAspectRatio="xMidYMid meet" />
          <circle cx="{card_w - 48}" cy="95" r="28" fill="none" stroke="{home_secondary}" stroke-width="3" />
        </g>
        """

    field_markup = ""
    if field_image:
        field_markup = f'<image href="{esc(field_image)}" x="270" y="122" width="168" height="56" opacity="0.35" preserveAspectRatio="xMidYMid meet" />'

    return f"""
    <g transform="translate({x},{y})">
      <rect x="0" y="0" rx="18" ry="18" width="{card_w}" height="{card_h}" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
      <rect x="0" y="0" rx="18" ry="18" width="{card_w}" height="58" fill="#111827" />
      <text x="20" y="28" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif">{esc(entry.get('game_time_et') or 'TBD')}</text>
      <text x="{card_w - 20}" y="28" text-anchor="end" font-size="13" font-weight="700" fill="#38bdf8" font-family="Segoe UI, Arial, sans-serif">{esc(score_label)}</text>

      {away_markup}
      {home_markup}

      <text x="92" y="87" font-size="18" font-weight="800" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif">{esc(entry.get('away_team') or away)}</text>
      <text x="92" y="108" font-size="14" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif">at {esc(entry.get('home_team') or home)}</text>

      <text x="20" y="142" font-size="15" font-weight="700" fill="#fbbf24" font-family="Segoe UI, Arial, sans-serif">🏟 {esc(entry.get('venue') or 'Ballpark TBD')}</text>
      <text x="20" y="166" font-size="13" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif">Temp: {esc(temp)}   •   Wind: {esc(wind)}</text>
      <text x="20" y="186" font-size="13" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif">Humidity: {esc(humidity)}   •   Rain: {esc(entry.get('precip_pct') or '—')}%</text>
      {field_markup}
    </g>
    """


def build_svg(rows: list[dict], date_str: str) -> str:
    slate = [row for row in rows if str(row.get("date")) == date_str]
    if not slate:
        raise SystemExit(f"No weather entries found for {date_str}")

    columns = 3
    card_w = 460
    card_h = 210
    gap = 20
    padding = 28
    rows_needed = math.ceil(len(slate) / columns)
    width = padding * 2 + columns * card_w + (columns - 1) * gap
    height = 120 + rows_needed * card_h + max(0, rows_needed - 1) * gap + padding

    cards = []
    for idx, entry in enumerate(slate):
        row_idx = idx // columns
        col_idx = idx % columns
        x = padding + col_idx * (card_w + gap)
        y = 92 + row_idx * (card_h + gap)
        cards.append(render_card(entry, x, y, card_w, card_h))

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <text x="28" y="40" font-size="28" font-weight="800" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif">HardHits MLB Team + Ballpark Slate</text>
  <text x="28" y="66" font-size="15" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif">{esc(date_str)} • generated from daily weather + matchup data</text>
  {''.join(cards)}
</svg>
"""


def load_font(size: int, bold: bool = False):
    if ImageFont is None:
        return None
    candidates = [
        "C:/Windows/Fonts/seguiemj.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except Exception:
            continue
    return ImageFont.load_default()


def build_png(rows: list[dict], date_str: str):
    if Image is None or ImageDraw is None:
        return None

    slate = [row for row in rows if str(row.get("date")) == date_str]
    if not slate:
        raise SystemExit(f"No weather entries found for {date_str}")

    columns = 3
    card_w = 460
    card_h = 210
    gap = 20
    padding = 28
    rows_needed = math.ceil(len(slate) / columns)
    width = padding * 2 + columns * card_w + (columns - 1) * gap
    height = 120 + rows_needed * card_h + max(0, rows_needed - 1) * gap + padding

    image = Image.new("RGB", (width, height), "#020617")
    draw = ImageDraw.Draw(image)

    title_font = load_font(28, bold=True)
    meta_font = load_font(15)
    header_font = load_font(16, bold=True)
    team_font = load_font(18, bold=True)
    body_font = load_font(13)
    badge_font = load_font(15, bold=True)

    draw.text((28, 20), "HardHits MLB Team + Ballpark Slate", fill="#f8fafc", font=title_font)
    draw.text((28, 52), f"{date_str} • generated from daily weather + matchup data", fill="#94a3b8", font=meta_font)

    for idx, entry in enumerate(slate):
        row_idx = idx // columns
        col_idx = idx % columns
        x = padding + col_idx * (card_w + gap)
        y = 92 + row_idx * (card_h + gap)

        draw.rounded_rectangle((x, y, x + card_w, y + card_h), radius=18, fill="#0f172a", outline="#1e293b", width=2)
        draw.rounded_rectangle((x, y, x + card_w, y + 58), radius=18, fill="#111827")
        draw.rectangle((x, y + 40, x + card_w, y + 58), fill="#111827")

        weather_score = entry.get("weather_score")
        score_label = f"Weather {weather_score:.0f}" if isinstance(weather_score, (int, float)) else "Weather N/A"
        draw.text((x + 20, y + 14), str(entry.get("game_time_et") or "TBD"), fill="#e2e8f0", font=header_font)
        draw.text((x + card_w - 135, y + 14), score_label, fill="#38bdf8", font=body_font)

        away = str(entry.get("away_abbr") or "AWY")
        home = str(entry.get("home_abbr") or "HME")
        away_primary, away_secondary = team_colors(away)
        home_primary, home_secondary = team_colors(home)

        for cx, abbr, primary, secondary, logo_key in [
            (x + 48, away, away_primary, away_secondary, "away_logo_local"),
            (x + card_w - 48, home, home_primary, home_secondary, "home_logo_local"),
        ]:
            cy = y + 67
            draw.ellipse((cx - 28, cy - 28, cx + 28, cy + 28), fill="#ffffff", outline=secondary, width=4)
            logo_img = load_asset_image(entry.get(logo_key), max_size=(42, 42))
            if logo_img is not None:
                image.paste(logo_img, (cx - logo_img.width // 2, cy - logo_img.height // 2), logo_img)
            else:
                draw.ellipse((cx - 28, cy - 28, cx + 28, cy + 28), fill=primary, outline=secondary, width=4)
                draw.text((cx - 16, cy - 7), abbr, fill="#ffffff", font=badge_font)

        draw.text((x + 92, y + 72), str(entry.get("away_team") or away), fill="#f8fafc", font=team_font)
        draw.text((x + 92, y + 96), f"at {entry.get('home_team') or home}", fill="#94a3b8", font=meta_font)

        field_image_local = entry.get("field_image_local")
        if field_image_local:
            try:
                field_path = OUTPUT_DIR / str(field_image_local)
                field_img = Image.open(field_path).convert("RGBA")
                field_img.thumbnail((160, 58))
                image.paste(field_img, (x + 274, y + 122), field_img)
            except Exception:
                pass

        draw.text((x + 20, y + 138), f"Ballpark: {entry.get('venue') or 'TBD'}", fill="#fbbf24", font=header_font)
        draw.text((x + 20, y + 164), f"Temp: {entry.get('temperature_f', '—')}°F   •   Wind: {entry.get('wind_mph', '—')} mph {entry.get('wind_direction') or ''}", fill="#cbd5e1", font=body_font)
        draw.text((x + 20, y + 186), f"Humidity: {entry.get('humidity_pct', '—')}%   •   Rain: {entry.get('precip_pct', '—')}%", fill="#cbd5e1", font=body_font)

    return image


def main() -> int:
    parser = argparse.ArgumentParser(description="Render a team and ballpark slate image.")
    parser.add_argument("--date", default=None, help="Date to render in YYYY-MM-DD format. Defaults to the earliest available slate in the weather file.")
    args = parser.parse_args()

    rows = read_weather_rows()
    date_str = pick_date(rows, args.date)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    save_covers_assets(rows, date_str)
    svg = build_svg(rows, date_str)

    dated_path = OUTPUT_DIR / f"mlb_team_ballparks_{date_str}.svg"
    latest_path = OUTPUT_DIR / "mlb_team_ballparks_latest.svg"
    dated_path.write_text(svg, encoding="utf-8")
    latest_path.write_text(svg, encoding="utf-8")

    png_image = build_png(rows, date_str)
    if png_image is not None:
        dated_png = OUTPUT_DIR / f"mlb_team_ballparks_{date_str}.png"
        latest_png = OUTPUT_DIR / "mlb_team_ballparks_latest.png"
        png_image.save(dated_png)
        png_image.save(latest_png)
        print(f"✅ Saved image: {dated_png}")
        print(f"✅ Saved image: {latest_png}")

    print(f"✅ Saved image: {dated_path}")
    print(f"✅ Saved image: {latest_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
