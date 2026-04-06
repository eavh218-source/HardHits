const bvpDate = '2026-04-06';
const dailyMatchups = [
  {
    "date": "2026-04-06",
    "time": "4:10 PM ET",
    "away_abbr": "CHC",
    "away_p": "Taillon",
    "home_abbr": "TBR",
    "home_p": "McClanahan"
  },
  {
    "date": "2026-04-06",
    "time": "6:10 PM ET",
    "away_abbr": "KCR",
    "away_p": "Wacha",
    "home_abbr": "CLE",
    "home_p": "Bibee"
  },
  {
    "date": "2026-04-06",
    "time": "6:40 PM ET",
    "away_abbr": "SDP",
    "away_p": "M\u00e1rquez",
    "home_abbr": "PIT",
    "home_p": "Chandler"
  },
  {
    "date": "2026-04-06",
    "time": "6:40 PM ET",
    "away_abbr": "CIN",
    "away_p": "Williamson",
    "home_abbr": "MIA",
    "home_p": "Junk"
  },
  {
    "date": "2026-04-06",
    "time": "6:45 PM ET",
    "away_abbr": "STL",
    "away_p": "Pallante",
    "home_abbr": "WSH",
    "home_p": "Littell"
  },
  {
    "date": "2026-04-06",
    "time": "6:45 PM ET",
    "away_abbr": "MIL",
    "away_p": "Woodruff",
    "home_abbr": "BOS",
    "home_p": "Bello"
  },
  {
    "date": "2026-04-06",
    "time": "7:07 PM ET",
    "away_abbr": "LAD",
    "away_p": "Wrobleski",
    "home_abbr": "TOR",
    "home_p": "Scherzer"
  },
  {
    "date": "2026-04-06",
    "time": "7:40 PM ET",
    "away_abbr": "DET",
    "away_p": "Mize",
    "home_abbr": "MIN",
    "home_p": "Ryan"
  },
  {
    "date": "2026-04-06",
    "time": "7:40 PM ET",
    "away_abbr": "BAL",
    "away_p": "TBD",
    "home_abbr": "CHW",
    "home_p": "Taylor"
  },
  {
    "date": "2026-04-06",
    "time": "8:05 PM ET",
    "away_abbr": "SEA",
    "away_p": "Gilbert",
    "home_abbr": "TEX",
    "home_p": "deGrom"
  },
  {
    "date": "2026-04-06",
    "time": "8:40 PM ET",
    "away_abbr": "HOU",
    "away_p": "Bolton",
    "home_abbr": "COL",
    "home_p": "Feltner"
  },
  {
    "date": "2026-04-06",
    "time": "9:38 PM ET",
    "away_abbr": "ATL",
    "away_p": "Sale",
    "home_abbr": "LAA",
    "home_p": "Soriano"
  },
  {
    "date": "2026-04-06",
    "time": "9:45 PM ET",
    "away_abbr": "PHI",
    "away_p": "Painter",
    "home_abbr": "SFG",
    "home_p": "Houser"
  }
];
const bvpData = [
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 110.2,
    "distance": 449,
    "events": "Home Run",
    "game_date": "2025-07-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Brandon Williamson",
    "opponent_team": "Miami Marlins",
    "batter_name": "Austin Slater",
    "launch_speed": 109.6,
    "distance": 442,
    "events": "Home Run",
    "game_date": "2023-07-17"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Matt Wallner",
    "launch_speed": 109.7,
    "distance": 437,
    "events": "Home Run",
    "game_date": "2025-08-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Trevor Larnach",
    "launch_speed": 106.9,
    "distance": 434,
    "events": "Home Run",
    "game_date": "2025-08-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Matt Vierling",
    "launch_speed": 104.0,
    "distance": 428,
    "events": "Home Run",
    "game_date": "2023-06-16"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Ryan Jeffers",
    "launch_speed": 107.0,
    "distance": 420,
    "events": "Home Run",
    "game_date": "2025-08-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Brandon Nimmo",
    "launch_speed": 110.1,
    "distance": 416,
    "events": "Home Run",
    "game_date": "2023-09-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 108.0,
    "distance": 415,
    "events": "Home Run",
    "game_date": "2024-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Teoscar Hern\u00e1ndez",
    "launch_speed": 109.0,
    "distance": 412,
    "events": "Home Run",
    "game_date": "2025-10-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Ryan Feltner",
    "opponent_team": "Houston Astros",
    "batter_name": "Christian Walker",
    "launch_speed": 103.9,
    "distance": 409,
    "events": "Home Run",
    "game_date": "2024-03-31"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "J.P. Crawford",
    "launch_speed": 104.5,
    "distance": 408,
    "events": "Home Run",
    "game_date": "2025-08-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Pedro Pag\u00e9s",
    "launch_speed": 107.2,
    "distance": 407,
    "events": "Home Run",
    "game_date": "2025-08-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Kody Clemens",
    "launch_speed": 101.7,
    "distance": 405,
    "events": "Field Out",
    "game_date": "2025-08-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 109.6,
    "distance": 402,
    "events": "Home Run",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Michael Wacha",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Kyle Manzardo",
    "launch_speed": 102.6,
    "distance": 402,
    "events": "Double",
    "game_date": "2025-07-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 112.5,
    "distance": 399,
    "events": "Home Run",
    "game_date": "2025-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jameson Taillon",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Nick Fortes",
    "launch_speed": 101.9,
    "distance": 399,
    "events": "Home Run",
    "game_date": "2025-05-20"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 108.6,
    "distance": 395,
    "events": "Home Run",
    "game_date": "2025-06-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 107.3,
    "distance": 395,
    "events": "Field Out",
    "game_date": "2024-03-20"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Iv\u00e1n Herrera",
    "launch_speed": 104.8,
    "distance": 395,
    "events": "Home Run",
    "game_date": "2025-08-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 100.7,
    "distance": 394,
    "events": "Home Run",
    "game_date": "2024-06-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Brayan Bello",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Jake Bauers",
    "launch_speed": 108.6,
    "distance": 392,
    "events": "Home Run",
    "game_date": "2025-05-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Julio Rodr\u00edguez",
    "launch_speed": 103.6,
    "distance": 391,
    "events": "Home Run",
    "game_date": "2025-08-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Brooks Lee",
    "launch_speed": 101.2,
    "distance": 391,
    "events": "Triple",
    "game_date": "2025-08-16"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Kyle Higashioka",
    "launch_speed": 100.0,
    "distance": 391,
    "events": "Home Run",
    "game_date": "2024-07-09"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Will Smith",
    "launch_speed": 104.9,
    "distance": 389,
    "events": "Double",
    "game_date": "2025-11-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 101.5,
    "distance": 389,
    "events": "Home Run",
    "game_date": "2025-10-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jos\u00e9 Soriano",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Michael Harris",
    "launch_speed": 101.9,
    "distance": 387,
    "events": "Field Out",
    "game_date": "2025-07-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Josh Jung",
    "launch_speed": 101.0,
    "distance": 385,
    "events": "Field Out",
    "game_date": "2023-05-08"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 98.7,
    "distance": 385,
    "events": "Home Run",
    "game_date": "2024-08-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Michael Wacha",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Bo Naylor",
    "launch_speed": 98.6,
    "distance": 379,
    "events": "Home Run",
    "game_date": "2024-08-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 95.1,
    "distance": 378,
    "events": "Home Run",
    "game_date": "2024-08-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Royce Lewis",
    "launch_speed": 101.8,
    "distance": 370,
    "events": "Double",
    "game_date": "2024-03-20"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 103.4,
    "distance": 369,
    "events": "Triple",
    "game_date": "2025-03-30"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Evan Carter",
    "launch_speed": 101.8,
    "distance": 369,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Shane McClanahan",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Nico Hoerner",
    "launch_speed": 99.8,
    "distance": 367,
    "events": "Home Run",
    "game_date": "2023-05-30"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Justin Wrobleski",
    "opponent_team": "Toronto Blue Jays",
    "batter_name": "Ernie Clement",
    "launch_speed": 102.3,
    "distance": 365,
    "events": "Double",
    "game_date": "2025-10-31"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 104.4,
    "distance": 364,
    "events": "Field Out",
    "game_date": "2025-11-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Freddie Freeman",
    "launch_speed": 102.1,
    "distance": 364,
    "events": "Field Out",
    "game_date": "2025-11-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Salvador Perez",
    "launch_speed": 105.0,
    "distance": 355,
    "events": "Field Out",
    "game_date": "2024-06-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Andre Pallante",
    "opponent_team": "Washington Nationals",
    "batter_name": "Cj Abrams",
    "launch_speed": 107.9,
    "distance": 353,
    "events": "Double",
    "game_date": "2025-07-09"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 101.5,
    "distance": 351,
    "events": "Double",
    "game_date": "2025-08-08"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Luke Raley",
    "launch_speed": 108.1,
    "distance": 350,
    "events": "Double",
    "game_date": "2024-09-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Ram\u00f3n Ur\u00edas",
    "launch_speed": 107.1,
    "distance": 350,
    "events": "Double",
    "game_date": "2025-07-19"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Randy Arozarena",
    "launch_speed": 101.2,
    "distance": 346,
    "events": "Field Out",
    "game_date": "2024-09-20"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Michael Wacha",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "David Fry",
    "launch_speed": 102.9,
    "distance": 337,
    "events": "Double",
    "game_date": "2024-08-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jameson Taillon",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Yandy D\u00edaz",
    "launch_speed": 114.0,
    "distance": 330,
    "events": "Field Out",
    "game_date": "2024-06-11"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Michael Wacha",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Bo Naylor",
    "launch_speed": 105.2,
    "distance": 322,
    "events": "Sac Fly",
    "game_date": "2025-07-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Freddie Freeman",
    "launch_speed": 107.5,
    "distance": 315,
    "events": "Field Out",
    "game_date": "2023-07-16"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Zach Mckinstry",
    "launch_speed": 101.5,
    "distance": 307,
    "events": "Field Out",
    "game_date": "2024-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Teoscar Hern\u00e1ndez",
    "launch_speed": 109.8,
    "distance": 303,
    "events": "Sac Fly",
    "game_date": "2025-11-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Josh Smith",
    "launch_speed": 102.4,
    "distance": 302,
    "events": "Field Out",
    "game_date": "2025-08-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Janson Junk",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Elly De",
    "launch_speed": 102.9,
    "distance": 277,
    "events": "Field Out",
    "game_date": "2025-07-07"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jameson Taillon",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Jake Fraley",
    "launch_speed": 102.6,
    "distance": 277,
    "events": "Field Out",
    "game_date": "2023-05-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 102.9,
    "distance": 273,
    "events": "Single",
    "game_date": "2025-08-08"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 101.8,
    "distance": 270,
    "events": "Double",
    "game_date": "2024-04-19"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Ram\u00f3n Ur\u00edas",
    "launch_speed": 103.3,
    "distance": 269,
    "events": "Single",
    "game_date": "2024-08-09"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 102.7,
    "distance": 268,
    "events": "Single",
    "game_date": "2024-09-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Nolan Gorman",
    "launch_speed": 107.1,
    "distance": 265,
    "events": "Single",
    "game_date": "2025-08-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 105.5,
    "distance": 259,
    "events": "Single",
    "game_date": "2025-07-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Alec Burleson",
    "launch_speed": 107.7,
    "distance": 258,
    "events": "Single",
    "game_date": "2026-03-19"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Ryan Feltner",
    "opponent_team": "Houston Astros",
    "batter_name": "Jose Altuve",
    "launch_speed": 101.1,
    "distance": 254,
    "events": "Single",
    "game_date": "2024-06-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 113.8,
    "distance": 244,
    "events": "Double",
    "game_date": "2025-10-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Andre Pallante",
    "opponent_team": "Washington Nationals",
    "batter_name": "James Wood",
    "launch_speed": 112.4,
    "distance": 232,
    "events": "Single",
    "game_date": "2025-05-10"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 102.6,
    "distance": 214,
    "events": "Single",
    "game_date": "2024-06-06"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 104.8,
    "distance": 210,
    "events": "Single",
    "game_date": "2024-06-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 107.8,
    "distance": 201,
    "events": "Single",
    "game_date": "2024-08-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Cal Raleigh",
    "launch_speed": 103.4,
    "distance": 198,
    "events": "Single",
    "game_date": "2025-03-19"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Freddie Freeman",
    "launch_speed": 107.7,
    "distance": 191,
    "events": "Single",
    "game_date": "2025-11-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Iv\u00e1n Herrera",
    "launch_speed": 104.5,
    "distance": 187,
    "events": "Single",
    "game_date": "2025-08-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Joc Pederson",
    "launch_speed": 103.6,
    "distance": 185,
    "events": "Single",
    "game_date": "2023-07-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Josh Smith",
    "launch_speed": 105.9,
    "distance": 182,
    "events": "Double",
    "game_date": "2024-04-23"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Julio Rodr\u00edguez",
    "launch_speed": 112.1,
    "distance": 170,
    "events": "Single",
    "game_date": "2024-09-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Cal Raleigh",
    "launch_speed": 101.8,
    "distance": 169,
    "events": "Field Out",
    "game_date": "2025-08-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Michael Wacha",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Daniel Schneemann",
    "launch_speed": 106.3,
    "distance": 167,
    "events": "Double",
    "game_date": "2025-07-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Lane Thomas",
    "launch_speed": 110.1,
    "distance": 163,
    "events": "Field Error",
    "game_date": "2024-05-31"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Gleyber Torres",
    "launch_speed": 104.7,
    "distance": 158,
    "events": "Double",
    "game_date": "2024-05-16"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Alec Burleson",
    "launch_speed": 103.1,
    "distance": 156,
    "events": "Single",
    "game_date": "2026-03-19"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Maikel Garcia",
    "launch_speed": 103.8,
    "distance": 153,
    "events": "Field Error",
    "game_date": "2024-06-06"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Kyle Isbel",
    "launch_speed": 101.4,
    "distance": 151,
    "events": "Field Out",
    "game_date": "2024-09-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Kyle Isbel",
    "launch_speed": 104.7,
    "distance": 141,
    "events": "Single",
    "game_date": "2025-07-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Adrian Houser",
    "opponent_team": "Philadelphia Phillies",
    "batter_name": "Bryce Harper",
    "launch_speed": 109.8,
    "distance": 136,
    "events": "Single",
    "game_date": "2024-06-08"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 107.6,
    "distance": 134,
    "events": "Double",
    "game_date": "2025-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 102.2,
    "distance": 133,
    "events": "Field Out",
    "game_date": "2024-06-06"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Julio Rodr\u00edguez",
    "launch_speed": 112.4,
    "distance": 129,
    "events": "Single",
    "game_date": "2025-08-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Josh Smith",
    "launch_speed": 102.4,
    "distance": 113,
    "events": "Single",
    "game_date": "2025-08-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Ram\u00f3n Ur\u00edas",
    "launch_speed": 101.2,
    "distance": 110,
    "events": "Single",
    "game_date": "2024-06-02"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Kyle Tucker",
    "launch_speed": 101.1,
    "distance": 97,
    "events": "Field Out",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Ryan Feltner",
    "opponent_team": "Houston Astros",
    "batter_name": "Jake Meyers",
    "launch_speed": 105.9,
    "distance": 92,
    "events": "Grounded Into Double Play",
    "game_date": "2024-06-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Ryan Feltner",
    "opponent_team": "Houston Astros",
    "batter_name": "Yainer Diaz",
    "launch_speed": 105.6,
    "distance": 92,
    "events": "Single",
    "game_date": "2024-06-26"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 106.9,
    "distance": 86,
    "events": "Triple",
    "game_date": "2024-03-12"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Wyatt Langford",
    "launch_speed": 109.5,
    "distance": 82,
    "events": "Single",
    "game_date": "2025-08-01"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Julio Rodr\u00edguez",
    "launch_speed": 108.9,
    "distance": 79,
    "events": "Single",
    "game_date": "2024-09-20"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 108.4,
    "distance": 78,
    "events": "Single",
    "game_date": "2025-04-11"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jos\u00e9 Soriano",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Ronald Acu\u00f1a",
    "launch_speed": 111.5,
    "distance": 74,
    "events": "Force Out",
    "game_date": "2025-07-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Janson Junk",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Will Benson",
    "launch_speed": 105.7,
    "distance": 68,
    "events": "Field Out",
    "game_date": "2025-07-07"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Maikel Garcia",
    "launch_speed": 108.4,
    "distance": 62,
    "events": "Field Out",
    "game_date": "2024-06-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Brayan Bello",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Christian Yelich",
    "launch_speed": 109.6,
    "distance": 57,
    "events": "Single",
    "game_date": "2023-04-23"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Maikel Garcia",
    "launch_speed": 103.5,
    "distance": 54,
    "events": "Field Out",
    "game_date": "2024-06-29"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Brayan Bello",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Christian Yelich",
    "launch_speed": 109.6,
    "distance": 44,
    "events": "Field Out",
    "game_date": "2023-04-23"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 105.0,
    "distance": 41,
    "events": "Force Out",
    "game_date": "2024-04-21"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Matt Vierling",
    "launch_speed": 108.3,
    "distance": 37,
    "events": "Single",
    "game_date": "2024-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Kody Clemens",
    "launch_speed": 104.3,
    "distance": 33,
    "events": "Grounded Into Double Play",
    "game_date": "2025-08-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jameson Taillon",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Nick Fortes",
    "launch_speed": 104.5,
    "distance": 30,
    "events": "Field Out",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Maikel Garcia",
    "launch_speed": 105.0,
    "distance": 29,
    "events": "Field Out",
    "game_date": "2025-03-30"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Josh Naylor",
    "launch_speed": 102.2,
    "distance": 28,
    "events": "Field Out",
    "game_date": "2025-08-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Josh Smith",
    "launch_speed": 106.1,
    "distance": 27,
    "events": "Field Out",
    "game_date": "2025-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Andre Pallante",
    "opponent_team": "Washington Nationals",
    "batter_name": "Luis Garc\u00eda",
    "launch_speed": 101.6,
    "distance": 23,
    "events": "Field Out",
    "game_date": "2025-05-10"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Janson Junk",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Will Benson",
    "launch_speed": 101.7,
    "distance": 22,
    "events": "Grounded Into Double Play",
    "game_date": "2025-07-07"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Joe Ryan",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Matt Vierling",
    "launch_speed": 107.9,
    "distance": 21,
    "events": "Single",
    "game_date": "2024-07-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Janson Junk",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Noelvi Marte",
    "launch_speed": 101.2,
    "distance": 21,
    "events": "Field Out",
    "game_date": "2025-07-07"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Max Scherzer",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Kyle Tucker",
    "launch_speed": 104.6,
    "distance": 19,
    "events": "Field Out",
    "game_date": "2023-10-18"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Ryan Jeffers",
    "launch_speed": 110.2,
    "distance": 18,
    "events": "Field Out",
    "game_date": "2025-08-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Casey Mize",
    "opponent_team": "Minnesota Twins",
    "batter_name": "Byron Buxton",
    "launch_speed": 106.6,
    "distance": 18,
    "events": "Field Out",
    "game_date": "2025-04-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Vinnie Pasquantino",
    "launch_speed": 102.9,
    "distance": 17,
    "events": "Single",
    "game_date": "2024-08-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Tanner Bibee",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Salvador Perez",
    "launch_speed": 101.5,
    "distance": 17,
    "events": "Field Out",
    "game_date": "2024-09-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 105.8,
    "distance": 13,
    "events": "Field Out",
    "game_date": "2023-09-28"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Zack Littell",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Ram\u00f3n Ur\u00edas",
    "launch_speed": 102.7,
    "distance": 13,
    "events": "Field Out",
    "game_date": "2024-06-09"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Brayan Bello",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Christian Yelich",
    "launch_speed": 101.6,
    "distance": 11,
    "events": "Field Out",
    "game_date": "2023-04-23"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jos\u00e9 Soriano",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Ronald Acu\u00f1a",
    "launch_speed": 101.0,
    "distance": 10,
    "events": "Field Out",
    "game_date": "2025-07-03"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Andre Pallante",
    "opponent_team": "Washington Nationals",
    "batter_name": "James Wood",
    "launch_speed": 113.6,
    "distance": 9,
    "events": "Field Out",
    "game_date": "2025-07-09"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jameson Taillon",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Jake Fraley",
    "launch_speed": 101.9,
    "distance": 9,
    "events": "Field Out",
    "game_date": "2024-09-27"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Evan Carter",
    "launch_speed": 102.4,
    "distance": 8,
    "events": "Field Out",
    "game_date": "2023-09-23"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Julio Rodr\u00edguez",
    "launch_speed": 108.2,
    "distance": 7,
    "events": "Single",
    "game_date": "2025-05-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "J.P. Crawford",
    "launch_speed": 103.5,
    "distance": 6,
    "events": "Field Out",
    "game_date": "2025-05-04"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Evan Carter",
    "launch_speed": 104.0,
    "distance": 5,
    "events": "Double",
    "game_date": "2023-09-23"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jacob deGrom",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Victor Robles",
    "launch_speed": 108.2,
    "distance": 4,
    "events": "Field Out",
    "game_date": "2024-09-13"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Jameson Taillon",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Nick Fortes",
    "launch_speed": 101.7,
    "distance": 4,
    "events": "Field Out",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Evan Carter",
    "launch_speed": 0.0,
    "distance": 0,
    "events": "Home Run",
    "game_date": "2024-03-05"
  },
  {
    "date": "2026-04-06",
    "pitcher_name": "Logan Gilbert",
    "opponent_team": "Texas Rangers",
    "batter_name": "Evan Carter",
    "launch_speed": 0.0,
    "distance": 0,
    "events": "Home Run",
    "game_date": "2024-03-05"
  }
];