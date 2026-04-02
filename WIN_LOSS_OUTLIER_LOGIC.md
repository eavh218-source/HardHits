# Win/Loss/Outlier Classification Logic

## Overview
The Hard Hits system classifies predictions into three categories: Wins, Losses, and Outliers. This classification happens after actual game results are available and compares model predictions against real outcomes.

---

## Classification Definitions

### 1. Win (✓ WIN)
**Definition**: A player who was flagged as a prediction AND actually hit a home run.

**Logic**:
- `probability >= 5.0%` (prediction threshold)
- `actual_home_run = true` (player hit HR in game)
- **Result**: Successful prediction

**Win Quality Score**:
```javascript
win_quality = actual_probability / threshold
// 5.1% win → quality: 1.02 (just squeaked in)
// 9.5% win → quality: 1.90 (high conviction, rewarded)
```
Track win quality over time to evaluate model calibration — not all wins are equal.

---

### 2. Loss (✗ LOSS)
**Definition**: A player who was flagged as a prediction but did NOT hit a home run.

**Logic**:
- `probability >= 5.0%` (prediction threshold)
- `actual_home_run = false` (player did not hit HR in game)
- **Result**: Failed prediction

**Loss Reason Tagging**:
```javascript
if (status === 'loss' && player.lineup_spot === 'not_starting') {
    loss_reason = 'Did not start — PA opportunity never materialized';
} else if (status === 'loss' && pitcher_type === 'reliever') {
    loss_reason = 'Faced bullpen — matchup changed mid-game';
} else {
    loss_reason = 'Model overestimated HR probability';
}
```
This separates *model was wrong* from *circumstances changed*.

---

### 3. Outlier (⭐ OUTLIER)
**Definition**: A player who actually hit a home run but was NOT flagged as a prediction.

**Logic**:
- `probability < 5.0%` (below prediction threshold)
- `actual_home_run = true` (player hit HR in game)
- **Result**: Unexpected outcome worth investigating

**Outlier Sub-Categories**:

| Type | Condition | Meaning |
|------|-----------|---------|
| **Near Miss** | Probability 3.0–4.9% | Model was close — possible threshold issue |
| **Cold Miss** | Probability 1.0–2.9% | Weak signal — worth deeper investigation |
| **Blind Spot** | Not modeled at all | Player missing from data entirely |

**Outlier Type Tagging**:
```javascript
if (outlier.exit_velocity > 108 && outlier.launch_angle > 25) {
    outlier_type = 'Pure Power Outlier';       // Elite contact, model underweighted EV
} else if (outlier.distance < 350) {
    outlier_type = 'Cheapie / Park Effect';    // Short porch, wind-aided
} else if (outlier.pitcher_type === 'reliever') {
    outlier_type = 'Bullpen Surprise';         // Unexpected reliever matchup
} else {
    outlier_type = 'General Miss';
}
```

---

## Tiered Confidence Bands

Rather than a single hard cutoff, predictions are bucketed into confidence tiers:

```javascript
if (probability >= 8.0)      → "High Confidence" prediction
if (probability >= 5.0)      → "Standard" prediction
if (probability >= 3.0)      → "Watchlist" (tracked but not flagged)
if (probability < 3.0)       → Not modeled
```

This gives more nuance in wins/losses and helps distinguish *how right* or *how wrong* the model was. Near-miss outliers (3.0–4.9%) are tracked on the Watchlist for pattern analysis.

---

## Processing Algorithm (`processResultsData`)

### Step 1: Data Preparation
```javascript
const actualHRNames = new Set(resultsData.map(r => r.name));
const resultsByName = new Map(resultsData.map(r => [r.name, r]));
```

### Step 2: Prediction Classification
```javascript
modelData.forEach(p => {
    const didHit = actualHRNames.has(p.name);
    const isFlagged = p.probability >= 5.0;
    const isWatchlist = p.probability >= 3.0 && p.probability < 5.0;

    if (isFlagged && didHit) {
        status = 'win';
        win_quality = p.probability / 5.0;
    } else if (isFlagged && !didHit) {
        status = 'loss';
        loss_reason = inferLossReason(p);
    } else if (isWatchlist && didHit) {
        status = 'outlier';
        outlier_subtype = 'near_miss';
    }
});
```

### Step 3: Outlier Detection
```javascript
const predictedNames = new Set(
    modelData.filter(p => p.probability >= 5.0).map(p => p.name)
);

resultsData.forEach(r => {
    if (!predictedNames.has(r.name)) {
        const modelEntry = modelData.find(p => p.name === r.name);
        status = 'outlier';
        outlier_subtype = inferOutlierSubtype(r, modelEntry);
    }
});
```

### Step 4: Sorting and Display
```javascript
// Sort by priority: Wins → Outliers → Losses
const statusOrder = { 'win': 0, 'outlier': 1, 'loss': 2 };
allCards.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
```

---

## Performance Metrics

### Precision, Recall & F1 Score
Rather than accuracy alone, use the standard binary classification metrics:

```javascript
precision = wins / (wins + losses)
// How often flagged players actually deliver

recall    = wins / (wins + outliers)
// How many total HRs the model actually caught

f1_score  = 2 × (precision × recall) / (precision + recall)
// Balanced single metric for model health — track this over time
```

### Legacy Accuracy Calculation
```javascript
const accuracy = (wins / (wins + losses)) * 100;
```

### Coverage Metrics
- **Total HRs**: All home runs hit in the game
- **Predicted HRs**: Home runs correctly predicted (wins)
- **Prediction Rate**: `predictedHRs / totalHRs`
- **Watchlist Coverage**: Near-miss outliers caught by watchlist band

---

## Outlier Analysis (`inferModelMissReason`)

### Purpose
When an outlier occurs, the system analyzes why the model missed the prediction.

### Logic
```javascript
function inferModelMissReason(result, modelEntry, modelData) {
    if (!modelEntry) {
        return 'Player not found in model data for this date. (Blind Spot)';
    }

    const threshold = 5.0;
    const rank = sorted.findIndex(p => p.name === modelEntry.name) + 1;
    const subtype = modelEntry.probability >= 3.0 ? 'Near Miss' : 'Cold Miss';
    const thresholdTag = `below threshold (${threshold}%)`;

    return `Modeled at ${modelEntry.probability}% (rank ${rank}, ${thresholdTag}, ${subtype})`;
}
```

---

## Model Health Indicators

| Condition | Meaning | Action |
|-----------|---------|--------|
| High Precision + Low Recall | Model is too conservative | Lower threshold or add signals |
| Low Precision + High Recall | Model is too aggressive | Raise threshold or tighten signals |
| High Outlier Rate | Missing key factors | Investigate outlier clusters |
| High Near-Miss Rate | Threshold may be too high | Consider lowering to 4.0–4.5% |
| Many "Did Not Start" Losses | Lineup status not applied | Ensure PA multiplier is active |

### Expected Ranges
- **Precision**: 20–40% (realistic for HR prediction)
- **Recall**: 30–60% of total HRs predicted
- **Outlier Rate**: 40–70% of total HRs (unpredicted)
- **F1 Score**: 0.25–0.50 is healthy for this domain

---

## Display Logic

### Card Styling
- **Wins**: Green badge (`badge-hit`), success styling
- **Losses**: Red badge (`badge-miss`), error styling, loss reason tag shown
- **Outliers**: Yellow badge (`badge-outlier`), warning styling, subtype tag shown
- **High Confidence Wins**: Gold border to distinguish conviction hits

### Sorting Priority
1. **Wins** — successful predictions (high confidence first)
2. **Outliers** — near misses before cold misses before blind spots
3. **Losses** — failed predictions (highest probability first)

---

## Interactive Features

### Outlier Modal
- Click outlier cards to see detailed analysis
- Shows model ratings even for low-probability players
- Displays outlier subtype and inferred miss reason
- Provides EV, launch angle, distance context for clustering

### Historical Lookup
- Cross-references multiple data sources
- Fallback to consolidated historical data
- Handles missing data gracefully

---

## Future Enhancements

- **Confidence Intervals**: Add probability ranges to predictions
- **Outlier Clustering**: Group similar missed predictions by type (power, park, bullpen)
- **Model Retraining**: Use outlier analysis to surface missing signals and improve future predictions
- **Real-time Updates**: Update classifications as games progress
- **Watchlist Tracking**: Surface watchlist players who hit HRs to inform threshold calibration</content>
<parameter name="filePath">c:\code\HardHits\WIN_LOSS_OUTLIER_LOGIC.md