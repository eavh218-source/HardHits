import argparse
from datetime import datetime

from hr_engine import generate_probability_payload, load_bvp_data, save_probability_payload
from paths import DATA_DIR

DEFAULT_TARGET_DATE = '2026-04-01'


def run_backdated_model(target_date, max_games=None):
    print(f"--- ⚾ HR Historical Engine (Unified | date: {target_date}) ---")
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    bvp_data = load_bvp_data()
    payload = generate_probability_payload(target_date, bvp_data, max_games=max_games, reference_date=target_date)
    output_path = save_probability_payload(payload, target_date)

    print(f"\n✅ Saved {len(payload)} unified model rows to {output_path}")
    print('Open site/HRProbability_Historical.html to review the saved date output.')


def parse_args():
    parser = argparse.ArgumentParser(description='Generate unified historical HR model output.')
    parser.add_argument('--date', default=DEFAULT_TARGET_DATE, help='Historical date to model (YYYY-MM-DD).')
    parser.add_argument(
        '--max-games',
        type=int,
        default=5,
        help='Optional smoke-test limit for the number of games on the target date.',
    )
    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()
    datetime.strptime(args.date, '%Y-%m-%d')
    run_backdated_model(args.date, max_games=args.max_games or None)
