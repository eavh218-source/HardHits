"""Live in-game adjustment utilities for H+R+RBI probabilities."""

from __future__ import annotations


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def innings_remaining_multiplier(innings_remaining: float) -> float:
    # Scale from ~0.35 in late game to ~1.0 pregame.
    return clamp(innings_remaining / 9.0, 0.35, 1.0)


def contribution_state_multiplier(current_total: int, innings_remaining: float) -> float:
    # Rules based on the model doc:
    # - target met (>=3): win confirmed
    # - one away with >=3 innings left: 1.20x
    # - 0 total with <=3 innings left: 0.75x
    # - trending (>=2) with >=3 innings left: 1.10x
    if current_total >= 3:
        return 1.0
    if current_total >= 2 and innings_remaining >= 3.0:
        return 1.10
    if current_total == 2 and innings_remaining >= 3.0:
        return 1.20
    if current_total == 0 and innings_remaining <= 3.0:
        return 0.75
    return 1.0


def game_state_factor(run_diff: int) -> float:
    # Blowout vs close-game effect.
    abs_diff = abs(run_diff)
    if abs_diff >= 10:
        return 0.80
    if abs_diff >= 8:
        return 0.85
    if abs_diff >= 5:
        return 0.90
    if abs_diff <= 2:
        return 1.05
    return 1.0


def bullpen_switch_adjustment(pitcher_contact_delta: float = 0.0) -> float:
    # Direct additive adjustment; caller supplies change in pitcher-contact friendliness.
    return pitcher_contact_delta


def runners_on_base_rbi_spike(runners_on: int) -> float:
    # Additive spike when RBI opportunities are immediate.
    if runners_on >= 2:
        return 0.20
    if runners_on == 1:
        return 0.15
    return 0.0


def live_hrbi_probability(
    base_probability: float,
    current_h: int,
    current_r: int,
    current_rbi: int,
    innings_remaining: float,
    run_diff: int,
    runners_on: int,
    pitcher_contact_delta: float = 0.0,
) -> dict:
    """Return adjusted live probability and status for H+R+RBI model."""
    current_total = current_h + current_r + current_rbi

    if current_total >= 3:
        return {
            "live_probability": 100.0,
            "status": "WIN_CONFIRMED",
            "current_total": current_total,
        }

    mult = (
        innings_remaining_multiplier(innings_remaining)
        * contribution_state_multiplier(current_total, innings_remaining)
        * game_state_factor(run_diff)
    )

    adjusted = base_probability * mult
    adjusted += bullpen_switch_adjustment(pitcher_contact_delta)
    adjusted += runners_on_base_rbi_spike(runners_on)

    adjusted = round(clamp(adjusted, 0.0, 99.9), 2)
    return {
        "live_probability": adjusted,
        "status": "IN_PROGRESS",
        "current_total": current_total,
    }
