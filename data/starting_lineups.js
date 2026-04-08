const lineupUpdateDate = '2026-04-08';
const lineupLastCompleted = '10:42 AM ET';
const startingLineups = [
  {
    "date": "2026-04-08",
    "game_pk": 823403,
    "matchup": "SDP @ PIT",
    "away_team": "San Diego Padres",
    "home_team": "Pittsburgh Pirates",
    "game_time_et": "12:35 PM ET",
    "status": "Pre-Game",
    "eligible": true,
    "reason": "within 112 minutes of first pitch",
    "minutes_to_first_pitch": 112,
    "away_lineup": [
      {
        "slot": 1,
        "name": "Ram\u00f3n Laureano",
        "position": "LF",
        "jersey": "5",
        "player_id": 657656
      },
      {
        "slot": 2,
        "name": "Fernando Tatis Jr.",
        "position": "RF",
        "jersey": "23",
        "player_id": 665487
      },
      {
        "slot": 3,
        "name": "Jackson Merrill",
        "position": "CF",
        "jersey": "3",
        "player_id": 701538
      },
      {
        "slot": 4,
        "name": "Gavin Sheets",
        "position": "1B",
        "jersey": "30",
        "player_id": 657757
      },
      {
        "slot": 5,
        "name": "Xander Bogaerts",
        "position": "SS",
        "jersey": "2",
        "player_id": 593428
      },
      {
        "slot": 6,
        "name": "Miguel Andujar",
        "position": "3B",
        "jersey": "41",
        "player_id": 609280
      },
      {
        "slot": 7,
        "name": "Nick Castellanos",
        "position": "DH",
        "jersey": "21",
        "player_id": 592206
      },
      {
        "slot": 8,
        "name": "Luis Campusano",
        "position": "C",
        "jersey": "12",
        "player_id": 669134
      },
      {
        "slot": 9,
        "name": "Jake Cronenworth",
        "position": "2B",
        "jersey": "9",
        "player_id": 630105
      }
    ],
    "home_lineup": [
      {
        "slot": 1,
        "name": "Oneil Cruz",
        "position": "CF",
        "jersey": "15",
        "player_id": 665833
      },
      {
        "slot": 2,
        "name": "Brandon Lowe",
        "position": "2B",
        "jersey": "5",
        "player_id": 664040
      },
      {
        "slot": 3,
        "name": "Bryan Reynolds",
        "position": "RF",
        "jersey": "10",
        "player_id": 668804
      },
      {
        "slot": 4,
        "name": "Ryan O'Hearn",
        "position": "DH",
        "jersey": "29",
        "player_id": 656811
      },
      {
        "slot": 5,
        "name": "Nick Yorke",
        "position": "3B",
        "jersey": "38",
        "player_id": 694377
      },
      {
        "slot": 6,
        "name": "Nick Gonzales",
        "position": "SS",
        "jersey": "3",
        "player_id": 693304
      },
      {
        "slot": 7,
        "name": "Spencer Horwitz",
        "position": "1B",
        "jersey": "2",
        "player_id": 687462
      },
      {
        "slot": 8,
        "name": "Joey Bart",
        "position": "C",
        "jersey": "14",
        "player_id": 663698
      },
      {
        "slot": 9,
        "name": "Jake Mangum",
        "position": "LF",
        "jersey": "28",
        "player_id": 663968
      }
    ]
  },
  {
    "date": "2026-04-08",
    "game_pk": 824455,
    "matchup": "KCR @ CLE",
    "away_team": "Kansas City Royals",
    "home_team": "Cleveland Guardians",
    "game_time_et": "1:10 PM ET",
    "status": "Pre-Game",
    "eligible": false,
    "reason": "too early (147 minutes to first pitch)",
    "minutes_to_first_pitch": 147,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 824779,
    "matchup": "MIL @ BOS",
    "away_team": "Milwaukee Brewers",
    "home_team": "Boston Red Sox",
    "game_time_et": "1:35 PM ET",
    "status": "Pre-Game",
    "eligible": false,
    "reason": "too early (172 minutes to first pitch)",
    "minutes_to_first_pitch": 172,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 824617,
    "matchup": "BAL @ CHW",
    "away_team": "Baltimore Orioles",
    "home_team": "Chicago White Sox",
    "game_time_et": "2:10 PM ET",
    "status": "Pre-Game",
    "eligible": false,
    "reason": "too early (207 minutes to first pitch)",
    "minutes_to_first_pitch": 207,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 822915,
    "matchup": "SEA @ TEX",
    "away_team": "Seattle Mariners",
    "home_team": "Texas Rangers",
    "game_time_et": "2:35 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (232 minutes to first pitch)",
    "minutes_to_first_pitch": 232,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 822833,
    "matchup": "LAD @ TOR",
    "away_team": "Los Angeles Dodgers",
    "home_team": "Toronto Blue Jays",
    "game_time_et": "3:07 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (264 minutes to first pitch)",
    "minutes_to_first_pitch": 264,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 824374,
    "matchup": "HOU @ COL",
    "away_team": "Houston Astros",
    "home_team": "Colorado Rockies",
    "game_time_et": "3:10 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (267 minutes to first pitch)",
    "minutes_to_first_pitch": 267,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 823234,
    "matchup": "PHI @ SFG",
    "away_team": "Philadelphia Phillies",
    "home_team": "San Francisco Giants",
    "game_time_et": "3:45 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (302 minutes to first pitch)",
    "minutes_to_first_pitch": 302,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 822753,
    "matchup": "STL @ WSH",
    "away_team": "St. Louis Cardinals",
    "home_team": "Washington Nationals",
    "game_time_et": "4:05 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (322 minutes to first pitch)",
    "minutes_to_first_pitch": 322,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 824050,
    "matchup": "ATL @ LAA",
    "away_team": "Atlanta Braves",
    "home_team": "Los Angeles Angels",
    "game_time_et": "4:07 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (324 minutes to first pitch)",
    "minutes_to_first_pitch": 324,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 823646,
    "matchup": "ARI @ NYM",
    "away_team": "Arizona Diamondbacks",
    "home_team": "New York Mets",
    "game_time_et": "4:10 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (327 minutes to first pitch)",
    "minutes_to_first_pitch": 327,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 823000,
    "matchup": "CHC @ TBR",
    "away_team": "Chicago Cubs",
    "home_team": "Tampa Bay Rays",
    "game_time_et": "6:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (477 minutes to first pitch)",
    "minutes_to_first_pitch": 477,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 823885,
    "matchup": "CIN @ MIA",
    "away_team": "Cincinnati Reds",
    "home_team": "Miami Marlins",
    "game_time_et": "6:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (477 minutes to first pitch)",
    "minutes_to_first_pitch": 477,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 823564,
    "matchup": "ATH @ NYY",
    "away_team": "Athletics",
    "home_team": "New York Yankees",
    "game_time_et": "7:05 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (502 minutes to first pitch)",
    "minutes_to_first_pitch": 502,
    "away_lineup": [],
    "home_lineup": []
  },
  {
    "date": "2026-04-08",
    "game_pk": 823726,
    "matchup": "DET @ MIN",
    "away_team": "Detroit Tigers",
    "home_team": "Minnesota Twins",
    "game_time_et": "7:40 PM ET",
    "status": "Scheduled",
    "eligible": false,
    "reason": "too early (537 minutes to first pitch)",
    "minutes_to_first_pitch": 537,
    "away_lineup": [],
    "home_lineup": []
  }
];