const lineupUpdateDate = '2026-04-07';
const lineupLastCompleted = '12:22 PM ET';
const startingLineups = [
  {
    "date": "2026-04-07",
    "game_pk": 824457,
    "matchup": "KCR @ CLE",
    "away_team": "Kansas City Royals",
    "home_team": "Cleveland Guardians",
    "game_time_et": "1:10 PM ET",
    "status": "Pre-Game",
    "eligible": true,
    "reason": "within 47 minutes of first pitch",
    "minutes_to_first_pitch": 47,
    "away_lineup": [
      {
        "slot": 1,
        "name": "Maikel Garcia",
        "position": "3B",
        "jersey": "11",
        "player_id": 672580
      },
      {
        "slot": 2,
        "name": "Bobby Witt Jr.",
        "position": "SS",
        "jersey": "7",
        "player_id": 677951
      },
      {
        "slot": 3,
        "name": "Vinnie Pasquantino",
        "position": "1B",
        "jersey": "9",
        "player_id": 686469
      },
      {
        "slot": 4,
        "name": "Salvador Perez",
        "position": "DH",
        "jersey": "13",
        "player_id": 521692
      },
      {
        "slot": 5,
        "name": "Carter Jensen",
        "position": "C",
        "jersey": "22",
        "player_id": 695600
      },
      {
        "slot": 6,
        "name": "Jonathan India",
        "position": "2B",
        "jersey": "6",
        "player_id": 663697
      },
      {
        "slot": 7,
        "name": "Jac Caglianone",
        "position": "RF",
        "jersey": "14",
        "player_id": 695506
      },
      {
        "slot": 8,
        "name": "Isaac Collins",
        "position": "LF",
        "jersey": "1",
        "player_id": 686555
      },
      {
        "slot": 9,
        "name": "Kyle Isbel",
        "position": "CF",
        "jersey": "28",
        "player_id": 664728
      }
    ],
    "home_lineup": [
      {
        "slot": 1,
        "name": "Steven Kwan",
        "position": "CF",
        "jersey": "38",
        "player_id": 680757
      },
      {
        "slot": 2,
        "name": "Angel Mart\u00ednez",
        "position": "LF",
        "jersey": "1",
        "player_id": 682657
      },
      {
        "slot": 3,
        "name": "Jos\u00e9 Ram\u00edrez",
        "position": "3B",
        "jersey": "11",
        "player_id": 608070
      },
      {
        "slot": 4,
        "name": "David Fry",
        "position": "DH",
        "jersey": "6",
        "player_id": 681807
      },
      {
        "slot": 5,
        "name": "Rhys Hoskins",
        "position": "1B",
        "jersey": "8",
        "player_id": 656555
      },
      {
        "slot": 6,
        "name": "Juan Brito",
        "position": "2B",
        "jersey": "34",
        "player_id": 682877
      },
      {
        "slot": 7,
        "name": "CJ Kayfus",
        "position": "RF",
        "jersey": "2",
        "player_id": 692216
      },
      {
        "slot": 8,
        "name": "Austin Hedges",
        "position": "C",
        "jersey": "27",
        "player_id": 595978
      },
      {
        "slot": 9,
        "name": "Brayan Rocchio",
        "position": "SS",
        "jersey": "4",
        "player_id": 677587
      }
    ]
  },
  {
    "date": "2026-04-07",
    "game_pk": 824618,
    "matchup": "BAL @ CHW",
    "away_team": "Baltimore Orioles",
    "home_team": "Chicago White Sox",
    "game_time_et": "3:10 PM ET",
    "status": "Pre-Game",
    "eligible": false,
    "reason": "too early (167 minutes to first pitch)",
    "minutes_to_first_pitch": 167,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 823648,
    "matchup": "ARI @ NYM",
    "away_team": "Arizona Diamondbacks",
    "home_team": "New York Mets",
    "game_time_et": "4:10 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (227 minutes to first pitch)",
    "minutes_to_first_pitch": 227,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 823402,
    "matchup": "SDP @ PIT",
    "away_team": "San Diego Padres",
    "home_team": "Pittsburgh Pirates",
    "game_time_et": "6:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (377 minutes to first pitch)",
    "minutes_to_first_pitch": 377,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 822999,
    "matchup": "CHC @ TBR",
    "away_team": "Chicago Cubs",
    "home_team": "Tampa Bay Rays",
    "game_time_et": "6:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (377 minutes to first pitch)",
    "minutes_to_first_pitch": 377,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 823887,
    "matchup": "CIN @ MIA",
    "away_team": "Cincinnati Reds",
    "home_team": "Miami Marlins",
    "game_time_et": "6:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (377 minutes to first pitch)",
    "minutes_to_first_pitch": 377,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 822754,
    "matchup": "STL @ WSH",
    "away_team": "St. Louis Cardinals",
    "home_team": "Washington Nationals",
    "game_time_et": "6:45 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (382 minutes to first pitch)",
    "minutes_to_first_pitch": 382,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 824780,
    "matchup": "MIL @ BOS",
    "away_team": "Milwaukee Brewers",
    "home_team": "Boston Red Sox",
    "game_time_et": "6:45 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (382 minutes to first pitch)",
    "minutes_to_first_pitch": 382,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 823567,
    "matchup": "ATH @ NYY",
    "away_team": "Athletics",
    "home_team": "New York Yankees",
    "game_time_et": "7:05 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (402 minutes to first pitch)",
    "minutes_to_first_pitch": 402,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 822831,
    "matchup": "LAD @ TOR",
    "away_team": "Los Angeles Dodgers",
    "home_team": "Toronto Blue Jays",
    "game_time_et": "7:07 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (404 minutes to first pitch)",
    "minutes_to_first_pitch": 404,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 823727,
    "matchup": "DET @ MIN",
    "away_team": "Detroit Tigers",
    "home_team": "Minnesota Twins",
    "game_time_et": "7:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (437 minutes to first pitch)",
    "minutes_to_first_pitch": 437,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 822916,
    "matchup": "SEA @ TEX",
    "away_team": "Seattle Mariners",
    "home_team": "Texas Rangers",
    "game_time_et": "8:05 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (462 minutes to first pitch)",
    "minutes_to_first_pitch": 462,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 824375,
    "matchup": "HOU @ COL",
    "away_team": "Houston Astros",
    "home_team": "Colorado Rockies",
    "game_time_et": "8:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (497 minutes to first pitch)",
    "minutes_to_first_pitch": 497,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 824051,
    "matchup": "ATL @ LAA",
    "away_team": "Atlanta Braves",
    "home_team": "Los Angeles Angels",
    "game_time_et": "9:38 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (555 minutes to first pitch)",
    "minutes_to_first_pitch": 555,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-07",
    "game_pk": 823235,
    "matchup": "PHI @ SFG",
    "away_team": "Philadelphia Phillies",
    "home_team": "San Francisco Giants",
    "game_time_et": "9:45 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (562 minutes to first pitch)",
    "minutes_to_first_pitch": 562,
    "away_lineup": [],
    "home_lineup": []
  }
];