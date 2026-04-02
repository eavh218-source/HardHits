# Win/Loss/Outlier Classification Logic

## Overview
The Hard Hits system classifies predictions into three categories: Wins, Losses, and Outliers. This classification happens after actual game results are available and compares model predictions against real outcomes.

## Classification Definitions

### 1. Win (✓ WIN)
**Definition**: A player who was flagged as a prediction AND actually hit a home run.

**Logic**:
- `probability >= 5.0%` (prediction threshold)
- `actual_home_run = true` (player hit HR in game)
- **Result**: Successful prediction

### 2. Loss (✗ LOSS)
**Definition**: A player who was flagged as a prediction but did NOT hit a home run.

**Logic**:
- `probability >= 5.0%` (prediction threshold)
- `actual_home_run = false` (player did not hit HR in game)
- **Result**: Failed prediction

### 3. Outlier (⭐ OUTLIER)
**Definition**: A player who actually hit a home run but was NOT flagged as a prediction.

**Logic**:
- `probability < 5.0%` (below prediction threshold)
- `actual_home_run = true` (player hit HR in game)
- **Result**: Unexpected outcome worth investigating

## Processing Algorithm (`processResultsData`)

### Step 1: Data Preparation
```javascript
// Create lookup sets for fast matching
const actualHRNames = new Set(resultsData.map(r => r.name));
const resultsByName = new Map(resultsData.map(r => [r.name, r]));
```

### Step 2: Prediction Classification
```javascript
modelData.forEach(p => {
    const didHit = actualHRNames.has(p.name);
    const isFlagged = p.probability >= 5.0;

    if (isFlagged && didHit) {
        // WIN: Correctly predicted HR
        status = 'win';
    } else if (isFlagged && !didHit) {
        // LOSS: Incorrectly predicted HR
        status = 'loss';
    }
    // Non-flagged predictions are not counted
});
```

### Step 3: Outlier Detection
```javascript
// Find players who hit HRs but weren't predicted
const predictedNames = new Set(
    modelData.filter(p => p.probability >= 5.0).map(p => p.name)
);

resultsData.forEach(r => {
    if (!predictedNames.has(r.name)) {
        // OUTLIER: Unpredicted HR
        status = 'outlier';
    }
});
```

### Step 4: Sorting and Display
```javascript
// Sort by priority: Wins → Outliers → Losses
const statusOrder = { 'win': 0, 'outlier': 1, 'loss': 2 };
allCards.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
```

## Performance Metrics

### Accuracy Calculation
```javascript
const accuracy = (successfulPredictions / totalFlagged) * 100;
// successfulPredictions = number of wins
// totalFlagged = number of predictions made (wins + losses)
```

### Coverage Metrics
- **Total HRs**: All home runs hit in the game
- **Predicted HRs**: Home runs that were correctly predicted (wins)
- **Prediction Rate**: `predictedHRs / totalHRs`

## Outlier Analysis (`inferModelMissReason`)

### Purpose
When an outlier occurs, the system analyzes why the model missed the prediction.

### Logic
```javascript
function inferModelMissReason(result, modelEntry, modelData) {
    if (!modelEntry) {
        return 'Player not found in model data for this date.';
    }

    const threshold = 5.0;
    const rank = sorted.findIndex(p => p.name === modelEntry.name) + 1;
    const thresholdTag = modelEntry.probability < threshold ?
        `below threshold (${threshold}%)` : 'at or above threshold';

    return `Modeled at ${modelEntry.probability}% (rank ${rank}, ${thresholdTag})`;
}
```

### Outlier Categories
1. **Low Probability**: Player had model data but probability < 5.0%
2. **Not Modeled**: Player not included in model predictions for that date
3. **Data Gap**: Missing historical metrics or roster changes

## Key Thresholds

| Threshold | Purpose | Impact |
|-----------|---------|--------|
| 5.0% | Prediction cutoff | Determines flagged vs. non-flagged |
| - | Win condition | Probability ≥ 5.0% AND actual HR |
| - | Loss condition | Probability ≥ 5.0% AND no HR |
| - | Outlier condition | Probability < 5.0% AND actual HR |

## Display Logic

### Card Styling
- **Wins**: Green badge (`badge-hit`), success styling
- **Losses**: Red badge (`badge-miss`), error styling
- **Outliers**: Yellow badge (`badge-outlier`), warning styling

### Sorting Priority
1. **Wins** (highest priority - successful predictions)
2. **Outliers** (medium priority - investigation needed)
3. **Losses** (lowest priority - failed predictions)

## Statistical Insights

### Expected Ranges
- **Accuracy**: 20-40% (realistic for HR prediction)
- **Coverage**: 30-60% of total HRs predicted
- **Outlier Rate**: 40-70% of total HRs (unpredicted)

### Model Health Indicators
- **High Accuracy + Low Coverage**: Model is conservative
- **Low Accuracy + High Coverage**: Model is aggressive
- **High Outlier Rate**: Model missing key factors

## Interactive Features

### Outlier Modal
- Click outlier cards to see detailed analysis
- Shows model ratings even for low-probability players
- Provides context for why prediction was missed

### Historical Lookup
- Cross-references multiple data sources
- Fallback to consolidated historical data
- Handles missing data gracefully

## Future Enhancements

- **Confidence Intervals**: Add probability ranges to predictions
- **Outlier Clustering**: Group similar missed predictions
- **Model Retraining**: Use outlier analysis to improve future predictions
- **Real-time Updates**: Update classifications as games progress</content>
<parameter name="filePath">c:\code\HardHits\WIN_LOSS_OUTLIER_LOGIC.md