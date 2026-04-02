const bvpDate = '2026-04-02';
const dailyMatchups = [
  {
    "time": "18:10 UTC",
    "away_abbr": "MIN",
    "away_p": "Bradley",
    "home_abbr": "KCR",
    "home_p": "Ragans"
  },
  {
    "time": "01:40 UTC",
    "away_abbr": "ATL",
    "away_p": "L\u00f3pez",
    "home_abbr": "ARI",
    "home_p": "Nelson"
  },
  {
    "time": "01:45 UTC",
    "away_abbr": "NYM",
    "away_p": "Peterson",
    "home_abbr": "SFG",
    "home_p": "Ray"
  }
];
const bvpData = [
  {
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Trevor Larnach",
    "launch_speed": 108.0,
    "distance": 23,
    "events": "Field Out",
    "game_date": "2025-04-08"
  },
  {
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Matt Wallner",
    "launch_speed": 105.6,
    "distance": 72,
    "events": "Single",
    "game_date": "2024-09-06"
  },
  {
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Trevor Larnach",
    "launch_speed": 108.0,
    "distance": 14,
    "events": "Field Out",
    "game_date": "2024-08-14"
  },
  {
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 107.0,
    "distance": 326,
    "events": "Triple",
    "game_date": "2024-05-28"
  },
  {
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Royce Lewis",
    "launch_speed": 104.2,
    "distance": 423,
    "events": "Home Run",
    "game_date": "2024-03-28"
  },
  {
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Ryan Jeffers",
    "launch_speed": 109.7,
    "distance": 5,
    "events": "Field Out",
    "game_date": "2024-03-28"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Jonathan India",
    "launch_speed": 101.6,
    "distance": 327,
    "events": "Double",
    "game_date": "2025-06-24"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 103.8,
    "distance": 9,
    "events": "Field Out",
    "game_date": "2025-06-24"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Jonathan India",
    "launch_speed": 102.5,
    "distance": 172,
    "events": "Field Out",
    "game_date": "2025-06-24"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Starling Marte",
    "launch_speed": 111.0,
    "distance": 72,
    "events": "Single",
    "game_date": "2025-06-13"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Starling Marte",
    "launch_speed": 110.2,
    "distance": 58,
    "events": "Single",
    "game_date": "2025-06-13"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 101.6,
    "distance": 144,
    "events": "Double Play",
    "game_date": "2025-04-29"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Salvador Perez",
    "launch_speed": 107.1,
    "distance": 46,
    "events": "Field Out",
    "game_date": "2025-04-29"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Salvador Perez",
    "launch_speed": 101.9,
    "distance": 331,
    "events": "Double",
    "game_date": "2025-04-29"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Lane Thomas",
    "launch_speed": 101.6,
    "distance": 132,
    "events": "Field Out",
    "game_date": "2024-06-30"
  },
  {
    "pitcher_name": "Taj Bradley",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Jonathan India",
    "launch_speed": 105.3,
    "distance": 57,
    "events": "Field Out",
    "game_date": "2023-04-18"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Ozzie Albies",
    "launch_speed": 101.1,
    "distance": 5,
    "events": "Field Out",
    "game_date": "2024-04-07"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Michael Harris",
    "launch_speed": 104.1,
    "distance": 409,
    "events": "Home Run",
    "game_date": "2024-04-07"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Matt Olson",
    "launch_speed": 107.3,
    "distance": 408,
    "events": "Home Run",
    "game_date": "2024-04-07"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Jonah Heim",
    "launch_speed": 96.8,
    "distance": 377,
    "events": "Home Run",
    "game_date": "2023-10-31"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Austin Riley",
    "launch_speed": 111.6,
    "distance": 451,
    "events": "Home Run",
    "game_date": "2023-07-19"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Michael Harris",
    "launch_speed": 102.8,
    "distance": 9,
    "events": "Triple",
    "game_date": "2023-07-19"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Michael Harris",
    "launch_speed": 104.1,
    "distance": 69,
    "events": "Grounded Into Double Play",
    "game_date": "2023-06-03"
  },
  {
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Matt Olson",
    "launch_speed": 101.2,
    "distance": 318,
    "events": "Field Out",
    "game_date": "2023-06-03"
  },
  {
    "pitcher_name": "Robbie Ray",
    "opponent_team": "New York Mets",
    "batter_name": "Luis Torrens",
    "launch_speed": 105.1,
    "distance": 261,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "pitcher_name": "Robbie Ray",
    "opponent_team": "New York Mets",
    "batter_name": "Mark Vientos",
    "launch_speed": 108.7,
    "distance": 209,
    "events": "Double",
    "game_date": "2025-07-26"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Harrison Bader",
    "launch_speed": 111.7,
    "distance": 352,
    "events": "Double",
    "game_date": "2025-09-11"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 112.4,
    "distance": 303,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Willy Adames",
    "launch_speed": 106.6,
    "distance": 322,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Heliot Ramos",
    "launch_speed": 109.9,
    "distance": 40,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Casey Schmitt",
    "launch_speed": 105.8,
    "distance": 147,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Casey Schmitt",
    "launch_speed": 105.1,
    "distance": 226,
    "events": "Double",
    "game_date": "2025-08-01"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Heliot Ramos",
    "launch_speed": 104.4,
    "distance": 292,
    "events": "Single",
    "game_date": "2025-07-26"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 106.5,
    "distance": 275,
    "events": "Single",
    "game_date": "2025-07-26"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Willy Adames",
    "launch_speed": 104.3,
    "distance": 231,
    "events": "Single",
    "game_date": "2025-07-26"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Heliot Ramos",
    "launch_speed": 107.9,
    "distance": 79,
    "events": "Field Out",
    "game_date": "2025-07-26"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Casey Schmitt",
    "launch_speed": 107.8,
    "distance": 117,
    "events": "Field Out",
    "game_date": "2023-07-02"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Patrick Bailey",
    "launch_speed": 108.5,
    "distance": 93,
    "events": "Single",
    "game_date": "2023-07-02"
  },
  {
    "pitcher_name": "David Peterson",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Heliot Ramos",
    "launch_speed": 106.8,
    "distance": 371,
    "events": "Double",
    "game_date": "2023-04-22"
  }
];