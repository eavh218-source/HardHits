# Hard Hits HR Probability System - Calculation Logic

## Overview
The Hard Hits system calculates home run probabilities for MLB players using a combination of Statcast metrics, trend analysis, and park factors. The system consists of multiple components that work together to generate predictions and validate results.

## Core Components

### 1. Barrel Calculation (`calculate_barrels`)
**Purpose**: Measures a hitter's ability to hit "barrels" - optimally hit balls with high exit velocity and ideal launch angle.

**Logic**:
- **Definition**: Balls with Exit Velocity (EV) ≥ 98 MPH AND Launch Angle between 26-30 degrees
- **Formula**: `(Number of barrels / Total batted balls) × 100`
- **Purpose**: Barrels are the most predictive metric for home runs (correlation > 0.7)

### 2. Exit Velocity Trend Analysis (`get_ev_trend`, `get_advanced_hitter_metrics`)
**Purpose**: Detects whether a hitter is "heating up" or "cooling off" in recent games.

**Logic**:
- **Time Windows**:
  - Last 7 days average EV
  - Last 30 days average EV
- **Trend Calculation**: `trend = avg_7_day - avg_30_day`
- **Signal Classification**:
  - `trend > 2.0`: "Heating Up" (multiplier: 1.15)
  - `trend < -2.0`: "Cooling Off" (multiplier: 0.85)
  - Otherwise: "Stable" (multiplier: 1.0)

### 3. Power Score Calculation
**Purpose**: Quantifies a hitter's raw power potential.

**Logic**:
- **Components**: Barrel percentage and maximum exit velocity
- **Formula**: `power_score = min((barrel_pct / 15) × 100, 100)`
- **Scaling**: Barrel rates are divided by 15 (typical elite rate) and scaled to 0-100

### 4. Form Score Calculation
**Purpose**: Measures current hitting performance based on fly ball/line drive exit velocity.

**Logic**:
- **Data Source**: Fly balls and line drives only (grounders excluded)
- **Formula**: `form_score = min(max((fb_ev - 88) / 12 × 100, 0), 100)`
- **Scaling**: 88 MPH is baseline, 12 MPH range to reach max score

### 5. Trend Score Calculation
**Purpose**: Incorporates recent performance trends into probability.

**Logic**:
- **Formula**: `trend_score = min(max((ev_trend / 5) × 100, 0), 100) × 0.10`
- **Scaling**: EV trend divided by 5 (2.5 MPH = 50 points), capped at 100, then weighted by 10%

### 6. Park Factor Score
**Purpose**: Adjusts for ballpark dimensions and altitude effects.

**Logic**:
- **Park Factors** (by team):
  - Coors Field (COL): 1.11 (most favorable)
  - Great American Ball Park (CIN): 1.28 (most favorable)
  - T-Mobile Park (SEA): 0.82 (least favorable)
- **Formula**: `park_score = min(((park_factor - 0.8) / 0.5) × 100, 100)`
- **Scaling**: Normalized from 0.8-1.3 range to 0-100 scale

### 7. Final Probability Calculation
**Purpose**: Combines all factors into a home run probability percentage.

**Logic**:
- **Weighted Formula**:
  ```
  final_prob = (power_score × 0.20 + form_score × 0.15 +
                trend_score × 0.10 + park_score × 0.05) / 4.5
  ```
- **Weights**:
  - Power: 20% (most important)
  - Form: 15%
  - Trend: 10%
  - Park: 5%
- **Range**: 0.0% to ~14.0% (capped at 10.0 for display)
- **Denominator**: 4.5 normalizes to realistic HR% range

### 8. Signal Breakdown Percentages
**Purpose**: Provides detailed component scores for each prediction.

**Logic**:
- **Power**: `max_ev_pct = (max_ev / 110) × 100` (110 MPH = 100%)
- **Form**: `fb_ev_pct = (fb_ev / 100) × 100` (100 MPH = 100%)
- **Trend**: `ev_trend_label = "Hot" if ev_trend > 1.5 else "Stable"`
- **Park**: `park_factor = "Launch Pad" if pf > 1.1 else "Neutral"`

## Data Processing Components

### 9. Historical Data Generation (`generate_historical_data.py`)
**Purpose**: Creates HR predictions for past dates using the same logic.

**Logic**:
- **Time Window**: 30 days prior to target date
- **Fallback**: If no 2026 data, uses end-of-2025 data
- **Probability Formula**: `(power × 0.20 + form + trend × 0.10 + park × 10) / 5`
- **Differences from Live**: Uses simplified scoring for historical consistency

### 10. Results Validation (`hr_validator.py`, `TodaysHomers.py`)
**Purpose**: Fetches actual home run results to validate predictions.

**Logic**:
- **Data Source**: MLB StatsAPI and PyBaseball Statcast
- **Filtering**: `events == 'home_run'`
- **Name Extraction**: Regex pattern `^(.*?) homers` from play description
- **Metrics Captured**: Exit velocity, launch angle, distance, batter/pitcher names

### 11. Hard Hits Dashboard (`hardHits.py`)
**Purpose**: Identifies all hard-hit balls (101+ MPH) for analysis.

**Logic**:
- **Threshold**: Exit velocity ≥ 101 MPH
- **Data**: Launch speed, angle, distance, play description
- **Purpose**: Broader analysis beyond just home runs

## JavaScript Processing

### 12. Matchup Logic (`matchupLogic.js`)
**Purpose**: Processes batter vs. pitcher data for matchup analysis.

**Logic**:
- **Time Conversion**: UTC to Eastern Time (-4 hours)
- **Grouping**: Home runs grouped by pitcher allowed
- **Sorting**: By distance (longest first) and alphabetically by pitcher
- **Display**: Interactive collapsible panes showing HR details

## Key Metrics and Thresholds

| Metric | Threshold | Meaning |
|--------|-----------|---------|
| Barrel | EV ≥ 98 MPH & LA 26-30° | Optimal home run trajectory |
| Hard Hit | EV ≥ 101 MPH | Well-struck ball |
| Hot Trend | EV trend > 1.5 MPH | Improving performance |
| Cold Trend | EV trend < -2.0 MPH | Declining performance |
| Elite Power | Max EV ≥ 110 MPH | Top 10% of MLB hitters |
| Favorable Park | Park Factor > 1.1 | Ballpark boosts HRs |
| Unfavorable Park | Park Factor < 0.9 | Ballpark suppresses HRs |

## Data Flow

1. **Daily Predictions**:
   - Fetch MLB schedule
   - Get team rosters
   - Calculate metrics for each hitter
   - Generate probability scores
   - Save to `hr_model_data.js`

2. **Results Validation**:
   - Fetch previous day's Statcast data
   - Extract home run events
   - Match with predictions
   - Save to `hr_results_data.js`

3. **Historical Analysis**:
   - Generate predictions for past dates
   - Fetch actual results
   - Compare predictions vs. outcomes
   - Save to individual date files

## Statistical Validation

- **Barrel Rate**: ~15% for elite power hitters
- **Exit Velocity**: 88+ MPH average for quality contact
- **Park Factors**: Validated against 3-year HR/FB rates
- **Trend Analysis**: 7-day vs 30-day comparison proven effective
- **Probability Range**: 2-14% aligns with MLB home run rates

## Future Enhancements

- **Pitcher Matchups**: Incorporate opposing pitcher stats
- **Weather Effects**: Temperature, wind, humidity adjustments
- **Platoon Splits**: Left/right handed pitcher adjustments
- **Defensive Shifts**: Impact on ground ball rates
- **Stadium Changes**: Dynamic park factor updates</content>
<parameter name="filePath">c:\code\HardHits\CALCULATION_LOGIC.md