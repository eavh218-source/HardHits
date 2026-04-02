# Hard Hits HR Probability System — Unified Specification

## Overview
The Hard Hits system calculates home run probabilities for MLB players using a combination of Statcast metrics, trend analysis, park factors, pitcher context, and lineup status. This document merges the core calculation logic with planned enhancements into a single unified reference.

---

## Core Calculation Components

### 1. Barrel Calculation (`calculate_barrels`)
**Purpose**: Measures a hitter's ability to hit "barrels" — optimally hit balls with high exit velocity and ideal launch angle.

**Logic**:
- **Definition**: Balls with Exit Velocity (EV) ≥ 98 MPH AND Launch Angle between 26–30 degrees
- **Formula**: `barrel_pct = (number_of_barrels / total_batted_balls) × 100`
- **Correlation**: Barrels are the most predictive metric for home runs (correlation > 0.7)

**Power Score Formula**:
```
power_score = min((barrel_pct / 15) × 100, 100)
```
> 15% barrel rate = elite benchmark, scaled to 0–100

---

### 2. Exit Velocity Signals (`get_ev_trend`, `get_advanced_hitter_metrics`)
**Purpose**: Detects whether a hitter is heating up or cooling off, and measures peak/sustained hard contact.

| Metric | What it tells you | Threshold |
|--------|-------------------|-----------|
| **Max EV (last 7 days)** | Peak power ceiling | ≥ 110 MPH = elite |
| **Avg EV (last 14 days)** | Consistent hard contact | ≥ 92 MPH = above avg |
| **EV on fly balls/line drives** | Most relevant to HRs (grounders excluded) | ≥ 95 MPH = danger zone |
| **EV trend (7d vs. 30d)** | Heating up vs. cooling off | Rising = bullish signal |

**Form Score Formula**:
```
form_score = min(max((fb_ev - 88) / 12 × 100, 0), 100)
```
> 88 MPH = baseline, 12 MPH range to reach max score. Fly balls and line drives only.

**EV Trend Formula**:
```
EV_Trend = avg_EV_last_7 - avg_EV_last_30

if EV_Trend > +2.0 mph  → "Heating Up"  (multiplier: 1.15)
if EV_Trend < -2.0 mph  → "Cooling Off" (multiplier: 0.85)
otherwise               → "Stable"      (multiplier: 1.0)
```

**Trend Score Formula**:
```
trend_score = min(max((ev_trend / 5) × 100, 0), 100) × 0.10
```

> **Note:** A batter can be in a slump by batting average but still posting elite EV — this is often a precursor to an HR breakout. The trend signal catches that.

---

### 3. Park Factor Score
**Purpose**: Adjusts for ballpark dimensions and altitude effects.

**Formula**:
```
park_score = min(((park_factor - 0.8) / 0.5) × 100, 100)
```
> Normalized from 0.8–1.3 range to 0–100 scale.

**Reference Park Factors** (sample):

| Park | Team | Factor |
|------|------|--------|
| Great American Ball Park | CIN | 1.28 |
| Coors Field | COL | 1.11 |
| T-Mobile Park | SEA | 0.82 |

**Signal**:
- Park Factor > 1.1 → "Launch Pad" (favorable)
- Park Factor < 0.9 → Suppressive (unfavorable)

---

### 4. Final Probability Calculation
**Purpose**: Combines all factors into a home run probability percentage.

**Current Formula**:
```
final_prob = (power_score × 0.20 + form_score × 0.15 +
              trend_score × 0.10 + park_score × 0.05) / 4.5
```

**Weights**:
- Power (Barrel%): 20%
- Form (FB/LD EV): 15%
- Trend (EV 7d vs 30d): 10%
- Park Factor: 5%

**Output Range**: 0.0% to ~14.0% (capped at 10.0 for display). Denominator of 4.5 normalizes to a realistic MLB HR% range.

---

### 5. Signal Breakdown Percentages
**Purpose**: Provides detailed component scores for each prediction.

```
Power signal:  max_ev_pct = (max_ev / 110) × 100     (110 MPH = 100%)
Form signal:   fb_ev_pct  = (fb_ev / 100) × 100      (100 MPH = 100%)
Trend label:   "Hot"    if ev_trend > 1.5 MPH
               "Stable" otherwise
Park label:    "Launch Pad" if park_factor > 1.1
               "Neutral"    otherwise
```

---

## Enhancement Layers

### 6. Pitcher Matchup Factors
**Purpose**: Incorporate opposing pitcher vulnerability into the probability.

**Signals**:
- HR/9 and HR/FB% allowed (career vs. current season)
- Fastball velocity trends (declining velo = more HRs allowed)
- Fly ball rate allowed — more fly balls = more HR opportunities
- Platoon splits: how the pitcher fares vs. L/R batters

**Scoring**:
```
pitcher_score = SP_or_RP_HR_FB_pct (normalized to 0–100)
              + fly_ball_rate_allowed (normalized to 0–100)
```

---

### 7. Starter vs. Reliever Context
**Purpose**: Adjust pitcher metrics based on arm type and fatigue state.

| Scenario | Why it matters |
|----------|----------------|
| **Facing starter (early innings)** | Predictable pitch mix; starter may fatigue by 3rd–5th inning |
| **Facing reliever (mid/late)** | Often harder stuff, but fatigued bullpen arms can get hit hard |
| **Opener/bulk situations** | Unpredictable — treat similarly to reliever |

**Adjustment Logic**:
```
if facing_starter:
    use SP-specific HR/FB% and platoon splits
    apply "fatigue bonus" if starter is past 75 pitches

if facing_reliever:
    use RP-specific HR/9
    apply "cold arm" bonus if reliever has 3+ days rest (less sharp)
    apply "fatigue bonus" if reliever pitched previous 2 days
```

---

### 8. Batter Lineup Status
**Purpose**: Weight probability by actual plate appearance opportunity.

| Scenario | Impact |
|----------|--------|
| **In starting lineup** | Guaranteed PAs — apply full model score |
| **Not starting** | Pinch hit only — drastically fewer opportunities |
| **Pinch hit situations** | High-leverage, late-game — likely facing premium reliever stuff |

**Lineup Spot PA Expectations**:
```
Batting 1–2  → ~4.5 PA expected
Batting 3–5  → ~4.0 PA expected
Batting 6–9  → ~3.5 PA expected
Not starting → ~1.0 PA expected (pinch hit only)
```

**PA Multiplier** (applied after scoring):
```
final_prob × (expected_PA / 4.0)
```

> Flag non-starters as **"lineup dependent"** and monitor for late lineup changes. Note: some players have strong pinch hit HR history — worth tracking as a separate split.

---

### 9. Platoon Splits
**Purpose**: Adjust for batter vs. pitcher handedness advantages.

- Batter HR rate vs. LHP vs. RHP
- Pitcher HR/FB% allowed vs. L vs. R batters
- Apply platoon multiplier when handedness favors the batter

---

### 10. Head-to-Head Matchup History
**Purpose**: Factor in historical batter vs. pitcher outcomes.

- AB, HR, hard contact rate in prior matchups
- Pitch type vulnerability: batter's HR rate vs. pitcher's primary pitch type
- Count tendencies: batter HR rate in hitter's counts (2-0, 3-1, 1-0)

---

### 11. Weather Effects
**Purpose**: Temperature, wind, and humidity adjustments.

| Condition | Effect |
|-----------|--------|
| Wind blowing out (CF/RF/LF) | Boosts HR carry — positive signal |
| Wind blowing in | Suppresses HRs — negative signal |
| Temperature > 75°F | Warm air = more carry — slight boost |
| Temperature < 50°F | Cold air = less carry — slight penalty |

---

## Unified Scoring Formula

```
HR_Score = (power_score × 0.20)
         + (form_score × 0.15)
         + (ev_trend_score × 0.10)
         + (pitcher_HR_FB_pct × 0.13)
         + (starter_vs_reliever_context × 0.05)
         + (pitcher_fb_rate_allowed × 0.06)
         + (park_score × 0.06)
         + (platoon_advantage × 0.05)
         + (h2h_history × 0.03)
         + (weather_boost × 0.02)
         / 4.5  ← normalizer to realistic HR% range

× (expected_PA / 4.0)  ← lineup status multiplier applied last
```

**Weight Summary**:

| Factor | Weight | Notes |
|--------|--------|-------|
| Power (Barrel%) | 20% | Top predictor |
| Form (FB/LD EV) | 15% | Fly ball EV only |
| EV Trend | 10% | 7d vs. 30d |
| Pitcher HR/FB% | 13% | SP or RP specific |
| Pitcher FB% allowed | 6% | Opportunity factor |
| Starter vs. Reliever | 5% | Fatigue/context |
| Park Factor | 6% | HR index |
| Platoon Advantage | 5% | L/R splits |
| H2H History | 3% | Prior matchup data |
| Weather | 2% | Wind/temp |
| **Lineup PA Multiplier** | — | Applied post-score |

---

## Key Metrics & Thresholds Reference

| Metric | Threshold | Meaning |
|--------|-----------|---------|
| Barrel | EV ≥ 98 MPH & LA 26–30° | Optimal HR trajectory |
| Hard Hit | EV ≥ 101 MPH | Well-struck ball |
| Elite Power | Max EV ≥ 110 MPH | Top 10% of MLB hitters |
| Hot EV Trend | EV trend > 1.5 MPH | Improving performance |
| Cold EV Trend | EV trend < -2.0 MPH | Declining performance |
| Favorable Park | Park Factor > 1.1 | Ballpark boosts HRs |
| Unfavorable Park | Park Factor < 0.9 | Ballpark suppresses HRs |
| Elite Barrel Rate | > 12% | Strong HR candidate |
| Quality FB Contact | ≥ 95 MPH on fly balls | HR danger zone |

---

## Tiered Signal Strength

| Tier | Condition | Boost |
|------|-----------|-------|
| 🔥 Elite | Barrel% > 12%, pitcher HR/FB% > 15%, favorable park, confirmed starter | Strong |
| ✅ Solid | Recent HR in last 3 games, platoon advantage, wind out, facing fatigued SP | Moderate |
| ⚠️ Weak | Cold weather, pitcher with low HR/FB%, pitcher's park, not in starting lineup | Negative |

---

## Data Flow

1. **Daily Predictions**
   - Fetch MLB schedule and confirm starting lineups
   - Get team rosters and lineup spots
   - Calculate Statcast metrics for each hitter
   - Apply pitcher matchup, park, platoon, and weather adjustments
   - Apply lineup PA multiplier
   - Generate probability scores → save to `hr_model_data.js`

2. **Results Validation**
   - Fetch previous day's Statcast data
   - Extract home run events (`events == 'home_run'`)
   - Match with predictions via regex: `^(.*?) homers`
   - Capture: exit velocity, launch angle, distance, batter/pitcher names
   - Save to `hr_results_data.js`

3. **Historical Analysis**
   - Generate predictions for past dates (30-day lookback window)
   - Fallback: if no current season data, use end-of-prior-season data
   - Fetch actual results and compare predictions vs. outcomes
   - Save to individual date files

---

## Recommended Data Sources

| Source | Data |
|--------|------|
| **Baseball Savant (Statcast)** | Barrel%, hard hit%, launch angle, exit velocity, EV trends |
| **MLB StatsAPI** | Schedule, rosters, confirmed lineups, game results |
| **FanGraphs** | HR/FB%, platoon splits, park factors, SP vs. RP splits |
| **Rotowire / Baseball Reference** | Daily starting lineups, lineup spot, confirmed starters |
| **Weather APIs (e.g. OpenWeather)** | Wind speed/direction, temperature on game day |

---

## Statistical Validation

- **Barrel Rate**: ~15% for elite power hitters
- **Exit Velocity**: 88+ MPH average for quality contact
- **Park Factors**: Validated against 3-year HR/FB rates
- **Trend Analysis**: 7-day vs. 30-day comparison proven effective
- **Probability Range**: 2–14% aligns with MLB home run rates