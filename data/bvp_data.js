const bvpDate = '2026-04-08';
const dailyMatchups = [
  {
    "date": "2026-04-08",
    "time": "12:35 PM ET",
    "away_abbr": "SDP",
    "away_p": "King",
    "home_abbr": "PIT",
    "home_p": "Keller"
  },
  {
    "date": "2026-04-08",
    "time": "1:10 PM ET",
    "away_abbr": "KCR",
    "away_p": "Ragans",
    "home_abbr": "CLE",
    "home_p": "Cantillo"
  },
  {
    "date": "2026-04-08",
    "time": "1:35 PM ET",
    "away_abbr": "MIL",
    "away_p": "Drohan",
    "home_abbr": "BOS",
    "home_p": "Gray"
  },
  {
    "date": "2026-04-08",
    "time": "2:10 PM ET",
    "away_abbr": "BAL",
    "away_p": "Bradish",
    "home_abbr": "CHW",
    "home_p": "Burke"
  },
  {
    "date": "2026-04-08",
    "time": "2:35 PM ET",
    "away_abbr": "SEA",
    "away_p": "Woo",
    "home_abbr": "TEX",
    "home_p": "Gore"
  },
  {
    "date": "2026-04-08",
    "time": "3:07 PM ET",
    "away_abbr": "LAD",
    "away_p": "Ohtani",
    "home_abbr": "TOR",
    "home_p": "Cease"
  },
  {
    "date": "2026-04-08",
    "time": "3:10 PM ET",
    "away_abbr": "HOU",
    "away_p": "Javier",
    "home_abbr": "COL",
    "home_p": "Lorenzen"
  },
  {
    "date": "2026-04-08",
    "time": "3:45 PM ET",
    "away_abbr": "PHI",
    "away_p": "Nola",
    "home_abbr": "SFG",
    "home_p": "Mahle"
  },
  {
    "date": "2026-04-08",
    "time": "4:05 PM ET",
    "away_abbr": "STL",
    "away_p": "McGreevy",
    "home_abbr": "WSH",
    "home_p": "Mikolas"
  },
  {
    "date": "2026-04-08",
    "time": "4:07 PM ET",
    "away_abbr": "ATL",
    "away_p": "Holmes",
    "home_abbr": "LAA",
    "home_p": "Detmers"
  },
  {
    "date": "2026-04-08",
    "time": "4:10 PM ET",
    "away_abbr": "ARI",
    "away_p": "Nelson",
    "home_abbr": "NYM",
    "home_p": "Peterson"
  },
  {
    "date": "2026-04-08",
    "time": "6:40 PM ET",
    "away_abbr": "CHC",
    "away_p": "Rea",
    "home_abbr": "TBR",
    "home_p": "Boyle"
  },
  {
    "date": "2026-04-08",
    "time": "6:40 PM ET",
    "away_abbr": "CIN",
    "away_p": "Singer",
    "home_abbr": "MIA",
    "home_p": "P\u00e9rez"
  },
  {
    "date": "2026-04-08",
    "time": "7:05 PM ET",
    "away_abbr": "ATH",
    "away_p": "Severino",
    "home_abbr": "NYY",
    "home_p": "Warren"
  },
  {
    "date": "2026-04-08",
    "time": "7:40 PM ET",
    "away_abbr": "DET",
    "away_p": "Valdez",
    "home_abbr": "MIN",
    "home_p": "Ober"
  }
];
const bvpData = [
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 113.0,
    "distance": 446,
    "events": "Home Run",
    "game_date": "2023-06-26"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Ronny Mauricio",
    "launch_speed": 112.4,
    "distance": 440,
    "events": "Home Run",
    "game_date": "2023-09-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Colt Keith",
    "launch_speed": 106.2,
    "distance": 426,
    "events": "Home Run",
    "game_date": "2024-07-04"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 108.9,
    "distance": 424,
    "events": "Home Run",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Sal Frelick",
    "launch_speed": 104.4,
    "distance": 422,
    "events": "Home Run",
    "game_date": "2025-09-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 111.9,
    "distance": 420,
    "events": "Home Run",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Kyle Farmer",
    "launch_speed": 106.9,
    "distance": 419,
    "events": "Home Run",
    "game_date": "2024-09-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Jake Bauers",
    "launch_speed": 105.3,
    "distance": 417,
    "events": "Home Run",
    "game_date": "2024-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Riley Greene",
    "launch_speed": 107.3,
    "distance": 415,
    "events": "Home Run",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Jazz Chisholm",
    "launch_speed": 106.4,
    "distance": 413,
    "events": "Home Run",
    "game_date": "2024-05-18"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Joey Ortiz",
    "launch_speed": 103.1,
    "distance": 408,
    "events": "Home Run",
    "game_date": "2024-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Alvarez",
    "launch_speed": 99.2,
    "distance": 408,
    "events": "Home Run",
    "game_date": "2023-07-06"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Gavin Sheets",
    "launch_speed": 108.6,
    "distance": 406,
    "events": "Home Run",
    "game_date": "2025-05-02"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Gleyber Torres",
    "launch_speed": 101.6,
    "distance": 406,
    "events": "Home Run",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Matt Vierling",
    "launch_speed": 101.2,
    "distance": 403,
    "events": "Field Out",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Aaron Judge",
    "launch_speed": 110.2,
    "distance": 402,
    "events": "Home Run",
    "game_date": "2025-06-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Max Muncy",
    "launch_speed": 102.6,
    "distance": 400,
    "events": "Home Run",
    "game_date": "2025-05-31"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Jake Fraley",
    "launch_speed": 101.9,
    "distance": 400,
    "events": "Home Run",
    "game_date": "2025-05-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "MacKenzie Gore",
    "opponent_team": "Seattle Mariners",
    "batter_name": "J.P. Crawford",
    "launch_speed": 104.9,
    "distance": 399,
    "events": "Home Run",
    "game_date": "2024-05-24"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Isaac Paredes",
    "launch_speed": 104.7,
    "distance": 398,
    "events": "Home Run",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Wyatt Langford",
    "launch_speed": 104.7,
    "distance": 396,
    "events": "Home Run",
    "game_date": "2024-09-22"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 103.6,
    "distance": 396,
    "events": "Home Run",
    "game_date": "2024-08-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Cedric Mullins",
    "launch_speed": 101.0,
    "distance": 396,
    "events": "Home Run",
    "game_date": "2024-04-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Shohei Ohtani",
    "opponent_team": "Toronto Blue Jays",
    "batter_name": "Vladimir Guerrero",
    "launch_speed": 102.7,
    "distance": 395,
    "events": "Home Run",
    "game_date": "2025-10-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Freddie Freeman",
    "launch_speed": 104.7,
    "distance": 394,
    "events": "Field Out",
    "game_date": "2025-06-10"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sean Burke",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Taylor Ward",
    "launch_speed": 109.1,
    "distance": 392,
    "events": "Double",
    "game_date": "2025-03-27"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Riley Greene",
    "launch_speed": 105.8,
    "distance": 392,
    "events": "Home Run",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Jake Fraley",
    "launch_speed": 98.9,
    "distance": 391,
    "events": "Home Run",
    "game_date": "2023-06-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Cristian Javier",
    "opponent_team": "Colorado Rockies",
    "batter_name": "Mickey Moniak",
    "launch_speed": 102.9,
    "distance": 390,
    "events": "Field Out",
    "game_date": "2023-07-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Nick Kurtz",
    "launch_speed": 113.6,
    "distance": 388,
    "events": "Double",
    "game_date": "2025-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Tyler Stephenson",
    "launch_speed": 104.6,
    "distance": 388,
    "events": "Home Run",
    "game_date": "2023-05-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Matt Vierling",
    "launch_speed": 101.2,
    "distance": 387,
    "events": "Sac Fly",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Paul Goldschmidt",
    "launch_speed": 102.7,
    "distance": 386,
    "events": "Home Run",
    "game_date": "2023-07-01"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Spencer Torkelson",
    "launch_speed": 100.4,
    "distance": 380,
    "events": "Home Run",
    "game_date": "2023-08-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Shohei Ohtani",
    "opponent_team": "Toronto Blue Jays",
    "batter_name": "Ernie Clement",
    "launch_speed": 101.7,
    "distance": 377,
    "events": "Double",
    "game_date": "2025-10-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Zach Mckinstry",
    "launch_speed": 99.6,
    "distance": 374,
    "events": "Home Run",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 111.8,
    "distance": 372,
    "events": "Home Run",
    "game_date": "2024-10-05"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Spencer Torkelson",
    "launch_speed": 106.4,
    "distance": 372,
    "events": "Field Out",
    "game_date": "2023-06-25"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Mauricio Dub\u00f3n",
    "launch_speed": 98.4,
    "distance": 372,
    "events": "Home Run",
    "game_date": "2024-05-20"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Willy Adames",
    "launch_speed": 102.8,
    "distance": 370,
    "events": "Field Out",
    "game_date": "2024-09-18"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "William Contreras",
    "launch_speed": 106.4,
    "distance": 367,
    "events": "Field Out",
    "game_date": "2024-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Richie Palacios",
    "launch_speed": 101.3,
    "distance": 367,
    "events": "Home Run",
    "game_date": "2023-09-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Spencer Torkelson",
    "launch_speed": 101.2,
    "distance": 366,
    "events": "Double",
    "game_date": "2024-04-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 116.8,
    "distance": 362,
    "events": "Double",
    "game_date": "2024-09-25"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Lawrence Butler",
    "launch_speed": 103.9,
    "distance": 362,
    "events": "Field Out",
    "game_date": "2025-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Jazz Chisholm",
    "launch_speed": 102.5,
    "distance": 362,
    "events": "Home Run",
    "game_date": "2025-06-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 99.8,
    "distance": 359,
    "events": "Home Run",
    "game_date": "2023-09-24"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Luis Robert",
    "launch_speed": 101.7,
    "distance": 357,
    "events": "Home Run",
    "game_date": "2025-06-24"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Junior Caminero",
    "launch_speed": 106.8,
    "distance": 355,
    "events": "Double",
    "game_date": "2025-09-13"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Jos\u00e9 Ram\u00edrez",
    "launch_speed": 104.6,
    "distance": 355,
    "events": "Double",
    "game_date": "2024-06-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Matt Mclain",
    "launch_speed": 96.4,
    "distance": 354,
    "events": "Home Run",
    "game_date": "2025-07-08"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Christian Walker",
    "launch_speed": 102.8,
    "distance": 352,
    "events": "Double",
    "game_date": "2023-06-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Rhys Hoskins",
    "launch_speed": 103.8,
    "distance": 350,
    "events": "Field Out",
    "game_date": "2024-05-06"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Jake Cronenworth",
    "launch_speed": 108.2,
    "distance": 348,
    "events": "Home Run",
    "game_date": "2024-08-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Lawrence Butler",
    "launch_speed": 102.4,
    "distance": 348,
    "events": "Field Out",
    "game_date": "2025-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Will Benson",
    "launch_speed": 105.9,
    "distance": 342,
    "events": "Field Out",
    "game_date": "2025-07-08"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Trent Grisham",
    "launch_speed": 105.6,
    "distance": 342,
    "events": "Field Out",
    "game_date": "2023-05-27"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Nick Castellanos",
    "launch_speed": 104.8,
    "distance": 342,
    "events": "Field Out",
    "game_date": "2023-07-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 102.1,
    "distance": 342,
    "events": "Field Out",
    "game_date": "2025-03-18"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 105.2,
    "distance": 337,
    "events": "Double",
    "game_date": "2025-06-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Jake Rogers",
    "launch_speed": 103.9,
    "distance": 337,
    "events": "Field Out",
    "game_date": "2024-04-20"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 101.5,
    "distance": 337,
    "events": "Field Out",
    "game_date": "2025-05-05"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "MacKenzie Gore",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Julio Rodr\u00edguez",
    "launch_speed": 102.8,
    "distance": 333,
    "events": "Field Out",
    "game_date": "2024-05-24"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Tyrone Taylor",
    "launch_speed": 102.8,
    "distance": 331,
    "events": "Triple",
    "game_date": "2025-05-05"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Brady Singer",
    "opponent_team": "Miami Marlins",
    "batter_name": "Agust\u00edn Ram\u00edrez",
    "launch_speed": 102.1,
    "distance": 330,
    "events": "Field Out",
    "game_date": "2025-07-07"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Alvarez",
    "launch_speed": 115.0,
    "distance": 329,
    "events": "Field Out",
    "game_date": "2025-05-05"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Jake Bauers",
    "launch_speed": 104.9,
    "distance": 325,
    "events": "Field Out",
    "game_date": "2025-04-26"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Max Muncy",
    "launch_speed": 108.2,
    "distance": 309,
    "events": "Single",
    "game_date": "2025-06-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Joey Cantillo",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Salvador Perez",
    "launch_speed": 107.6,
    "distance": 305,
    "events": "Field Out",
    "game_date": "2025-04-13"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Kyle Tucker",
    "launch_speed": 105.1,
    "distance": 299,
    "events": "Field Out",
    "game_date": "2023-03-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Willy Adames",
    "launch_speed": 103.1,
    "distance": 299,
    "events": "Double",
    "game_date": "2025-04-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Manny Machado",
    "launch_speed": 101.2,
    "distance": 299,
    "events": "Double",
    "game_date": "2025-05-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Kyle Bradish",
    "opponent_team": "Chicago White Sox",
    "batter_name": "Colson Montgomery",
    "launch_speed": 111.2,
    "distance": 297,
    "events": "Single",
    "game_date": "2025-09-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "David Peterson",
    "opponent_team": "Arizona Diamondbacks",
    "batter_name": "Jorge Barrosa",
    "launch_speed": 101.3,
    "distance": 295,
    "events": "Double",
    "game_date": "2025-04-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Will Smith",
    "launch_speed": 105.0,
    "distance": 291,
    "events": "Field Out",
    "game_date": "2024-10-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Garrett Mitchell",
    "launch_speed": 102.5,
    "distance": 291,
    "events": "Field Out",
    "game_date": "2024-09-04"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Ben Rice",
    "launch_speed": 108.2,
    "distance": 287,
    "events": "Field Out",
    "game_date": "2025-05-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Shea Langeliers",
    "launch_speed": 112.3,
    "distance": 280,
    "events": "Field Out",
    "game_date": "2025-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Jazz Chisholm",
    "launch_speed": 110.3,
    "distance": 277,
    "events": "Double",
    "game_date": "2025-06-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Jake Fraley",
    "launch_speed": 102.5,
    "distance": 271,
    "events": "Single",
    "game_date": "2023-06-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Colin Rea",
    "opponent_team": "Tampa Bay Rays",
    "batter_name": "Jake Fraley",
    "launch_speed": 110.2,
    "distance": 265,
    "events": "Single",
    "game_date": "2023-07-24"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Josh Smith",
    "launch_speed": 106.7,
    "distance": 253,
    "events": "Single",
    "game_date": "2025-04-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Blake Perkins",
    "launch_speed": 102.6,
    "distance": 252,
    "events": "Single",
    "game_date": "2024-04-21"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Tj Friedl",
    "launch_speed": 101.5,
    "distance": 248,
    "events": "Triple",
    "game_date": "2023-08-07"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Joey Ortiz",
    "launch_speed": 106.2,
    "distance": 244,
    "events": "Double",
    "game_date": "2025-06-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Austin Hedges",
    "launch_speed": 106.0,
    "distance": 236,
    "events": "Single",
    "game_date": "2025-04-13"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Bo Bichette",
    "launch_speed": 104.7,
    "distance": 230,
    "events": "Single",
    "game_date": "2023-07-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Jorge Mateo",
    "launch_speed": 105.7,
    "distance": 228,
    "events": "Single",
    "game_date": "2023-09-05"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 102.8,
    "distance": 227,
    "events": "Single",
    "game_date": "2023-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Shohei Ohtani",
    "opponent_team": "Toronto Blue Jays",
    "batter_name": "George Springer",
    "launch_speed": 105.8,
    "distance": 223,
    "events": "Single",
    "game_date": "2025-11-01"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 106.9,
    "distance": 206,
    "events": "Single",
    "game_date": "2023-06-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Jake Rogers",
    "launch_speed": 102.3,
    "distance": 197,
    "events": "Double",
    "game_date": "2023-06-25"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 103.9,
    "distance": 187,
    "events": "Single",
    "game_date": "2023-06-25"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Kyle Farmer",
    "launch_speed": 102.9,
    "distance": 185,
    "events": "Single",
    "game_date": "2023-05-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Christian Yelich",
    "launch_speed": 109.1,
    "distance": 183,
    "events": "Single",
    "game_date": "2024-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "William Contreras",
    "launch_speed": 103.0,
    "distance": 183,
    "events": "Single",
    "game_date": "2024-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Drake Baldwin",
    "launch_speed": 110.3,
    "distance": 179,
    "events": "Field Out",
    "game_date": "2025-07-01"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Shohei Ohtani",
    "opponent_team": "Toronto Blue Jays",
    "batter_name": "Nathan Lukes",
    "launch_speed": 101.6,
    "distance": 173,
    "events": "Single",
    "game_date": "2025-10-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Will Benson",
    "launch_speed": 102.6,
    "distance": 171,
    "events": "Field Out",
    "game_date": "2025-07-08"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Aaron Judge",
    "launch_speed": 110.0,
    "distance": 170,
    "events": "Double",
    "game_date": "2025-05-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 112.5,
    "distance": 165,
    "events": "Field Out",
    "game_date": "2023-09-24"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 110.3,
    "distance": 162,
    "events": "Single",
    "game_date": "2023-09-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Kyle Bradish",
    "opponent_team": "Chicago White Sox",
    "batter_name": "Chase Meidroth",
    "launch_speed": 102.3,
    "distance": 147,
    "events": "Single",
    "game_date": "2025-09-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Aaron Judge",
    "launch_speed": 108.2,
    "distance": 146,
    "events": "Single",
    "game_date": "2025-05-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Miles Mikolas",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Jj Wetherholt",
    "launch_speed": 102.0,
    "distance": 141,
    "events": "Field Out",
    "game_date": "2026-03-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Andy Pages",
    "launch_speed": 105.1,
    "distance": 139,
    "events": "Field Out",
    "game_date": "2024-07-31"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Miles Mikolas",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Alec Burleson",
    "launch_speed": 101.3,
    "distance": 136,
    "events": "Single",
    "game_date": "2026-03-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Cole Ragans",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Austin Hedges",
    "launch_speed": 101.0,
    "distance": 133,
    "events": "Single",
    "game_date": "2024-08-26"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Spencer Torkelson",
    "launch_speed": 106.3,
    "distance": 131,
    "events": "Single",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Joey Cantillo",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Bobby Witt",
    "launch_speed": 101.5,
    "distance": 131,
    "events": "Single",
    "game_date": "2025-03-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Brice Turang",
    "launch_speed": 104.2,
    "distance": 125,
    "events": "Single",
    "game_date": "2025-06-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Kerry Carpenter",
    "launch_speed": 101.7,
    "distance": 123,
    "events": "Single",
    "game_date": "2023-08-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Brady Singer",
    "opponent_team": "Miami Marlins",
    "batter_name": "Austin Slater",
    "launch_speed": 108.3,
    "distance": 117,
    "events": "Field Out",
    "game_date": "2025-03-21"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "William Contreras",
    "launch_speed": 106.3,
    "distance": 117,
    "events": "Single",
    "game_date": "2024-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Brandon Nimmo",
    "launch_speed": 105.3,
    "distance": 114,
    "events": "Single",
    "game_date": "2025-08-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "David Peterson",
    "opponent_team": "Arizona Diamondbacks",
    "batter_name": "Corbin Carroll",
    "launch_speed": 109.6,
    "distance": 110,
    "events": "Field Out",
    "game_date": "2025-05-06"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Gavin Sheets",
    "launch_speed": 105.3,
    "distance": 103,
    "events": "Field Out",
    "game_date": "2025-05-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "MacKenzie Gore",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Cal Raleigh",
    "launch_speed": 106.5,
    "distance": 96,
    "events": "Single",
    "game_date": "2025-05-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael McGreevy",
    "opponent_team": "Washington Nationals",
    "batter_name": "James Wood",
    "launch_speed": 102.5,
    "distance": 96,
    "events": "Single",
    "game_date": "2024-02-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Brent Rooker",
    "launch_speed": 108.2,
    "distance": 86,
    "events": "Single",
    "game_date": "2025-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Joey Cantillo",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Jonathan India",
    "launch_speed": 107.2,
    "distance": 80,
    "events": "Single",
    "game_date": "2025-03-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Shohei Ohtani",
    "opponent_team": "Toronto Blue Jays",
    "batter_name": "Nathan Lukes",
    "launch_speed": 105.4,
    "distance": 80,
    "events": "Single",
    "game_date": "2025-10-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Joe Boyle",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Alex Bregman",
    "launch_speed": 101.6,
    "distance": 79,
    "events": "Field Out",
    "game_date": "2025-07-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Carlos Correa",
    "launch_speed": 101.8,
    "distance": 78,
    "events": "Field Out",
    "game_date": "2025-04-07"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "David Peterson",
    "opponent_team": "Arizona Diamondbacks",
    "batter_name": "Gabriel Moreno",
    "launch_speed": 103.9,
    "distance": 74,
    "events": "Field Out",
    "game_date": "2025-04-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Jake Meyers",
    "launch_speed": 101.5,
    "distance": 73,
    "events": "Field Out",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Joey Cantillo",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Maikel Garcia",
    "launch_speed": 105.1,
    "distance": 72,
    "events": "Double",
    "game_date": "2025-03-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Shohei Ohtani",
    "launch_speed": 101.1,
    "distance": 69,
    "events": "Single",
    "game_date": "2025-06-10"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 105.2,
    "distance": 66,
    "events": "Triple",
    "game_date": "2023-07-06"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Luis Campusano",
    "launch_speed": 107.7,
    "distance": 65,
    "events": "Field Out",
    "game_date": "2024-08-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Jonah Heim",
    "launch_speed": 102.1,
    "distance": 63,
    "events": "Single",
    "game_date": "2023-09-26"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Jonah Heim",
    "launch_speed": 101.2,
    "distance": 58,
    "events": "Double",
    "game_date": "2025-04-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Freddie Freeman",
    "launch_speed": 108.8,
    "distance": 56,
    "events": "Single",
    "game_date": "2024-10-05"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sean Burke",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Tyler O'Neill",
    "launch_speed": 101.5,
    "distance": 52,
    "events": "Field Out",
    "game_date": "2025-09-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Carlos Correa",
    "launch_speed": 104.5,
    "distance": 45,
    "events": "Grounded Into Double Play",
    "game_date": "2023-06-25"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Matt Vierling",
    "launch_speed": 108.4,
    "distance": 44,
    "events": "Single",
    "game_date": "2024-04-20"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 101.3,
    "distance": 42,
    "events": "Double",
    "game_date": "2023-06-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Bo Bichette",
    "launch_speed": 101.8,
    "distance": 40,
    "events": "Field Out",
    "game_date": "2023-07-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Will Warren",
    "opponent_team": "Athletics",
    "batter_name": "Brent Rooker",
    "launch_speed": 103.9,
    "distance": 37,
    "events": "Field Out",
    "game_date": "2025-05-09"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sean Burke",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Jeremiah Jackson",
    "launch_speed": 103.3,
    "distance": 36,
    "events": "Single",
    "game_date": "2025-09-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Ryne Nelson",
    "opponent_team": "New York Mets",
    "batter_name": "Bo Bichette",
    "launch_speed": 101.6,
    "distance": 35,
    "events": "Field Out",
    "game_date": "2025-06-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Tj Friedl",
    "launch_speed": 102.5,
    "distance": 32,
    "events": "Double",
    "game_date": "2025-07-08"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Manny Machado",
    "launch_speed": 104.6,
    "distance": 29,
    "events": "Single",
    "game_date": "2023-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Jake Bauers",
    "launch_speed": 109.4,
    "distance": 28,
    "events": "Single",
    "game_date": "2025-09-13"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Yainer Diaz",
    "launch_speed": 106.0,
    "distance": 26,
    "events": "Field Out",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Teoscar Hern\u00e1ndez",
    "launch_speed": 110.3,
    "distance": 25,
    "events": "Field Out",
    "game_date": "2025-06-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Gavin Sheets",
    "launch_speed": 102.2,
    "distance": 25,
    "events": "Grounded Into Double Play",
    "game_date": "2025-05-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Joc Pederson",
    "launch_speed": 107.8,
    "distance": 24,
    "events": "Field Out",
    "game_date": "2023-07-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "William Contreras",
    "launch_speed": 101.2,
    "distance": 23,
    "events": "Single",
    "game_date": "2025-09-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Grant Holmes",
    "opponent_team": "Los Angeles Angels",
    "batter_name": "Mike Trout",
    "launch_speed": 107.4,
    "distance": 22,
    "events": "Field Out",
    "game_date": "2025-07-01"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Luis Severino",
    "opponent_team": "New York Yankees",
    "batter_name": "Ben Rice",
    "launch_speed": 106.9,
    "distance": 21,
    "events": "Field Out",
    "game_date": "2025-05-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Eury P\u00e9rez",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Spencer Steer",
    "launch_speed": 102.0,
    "distance": 21,
    "events": "Field Out",
    "game_date": "2023-05-12"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Jake Bauers",
    "launch_speed": 107.9,
    "distance": 19,
    "events": "Single",
    "game_date": "2025-09-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Reid Detmers",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Matt Olson",
    "launch_speed": 107.0,
    "distance": 18,
    "events": "Field Out",
    "game_date": "2025-07-01"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Miguel Andujar",
    "launch_speed": 104.1,
    "distance": 18,
    "events": "Single",
    "game_date": "2025-08-08"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "David Peterson",
    "opponent_team": "Arizona Diamondbacks",
    "batter_name": "Geraldo Perdomo",
    "launch_speed": 101.7,
    "distance": 18,
    "events": "Double",
    "game_date": "2025-04-29"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Andy Pages",
    "launch_speed": 101.1,
    "distance": 17,
    "events": "Field Out",
    "game_date": "2025-06-10"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Brice Turang",
    "launch_speed": 101.6,
    "distance": 14,
    "events": "Force Out",
    "game_date": "2025-09-19"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Ezequiel Duran",
    "launch_speed": 112.7,
    "distance": 13,
    "events": "Single",
    "game_date": "2023-06-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "William Contreras",
    "launch_speed": 104.8,
    "distance": 13,
    "events": "Field Out",
    "game_date": "2024-04-21"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sonny Gray",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Christian Yelich",
    "launch_speed": 104.2,
    "distance": 11,
    "events": "Single",
    "game_date": "2025-04-26"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Michael Lorenzen",
    "opponent_team": "Houston Astros",
    "batter_name": "Yainer Diaz",
    "launch_speed": 101.3,
    "distance": 11,
    "events": "Field Out",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Rafael Devers",
    "launch_speed": 101.1,
    "distance": 11,
    "events": "Grounded Into Double Play",
    "game_date": "2024-06-13"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 103.9,
    "distance": 8,
    "events": "Single",
    "game_date": "2025-04-16"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Sean Burke",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Ryan Mountcastle",
    "launch_speed": 104.3,
    "distance": 7,
    "events": "Field Out",
    "game_date": "2025-09-15"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Fernando Tatis",
    "launch_speed": 101.6,
    "distance": 7,
    "events": "Field Out",
    "game_date": "2025-05-30"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "MacKenzie Gore",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Brendan Donovan",
    "launch_speed": 108.1,
    "distance": 6,
    "events": "Field Out",
    "game_date": "2025-05-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "MacKenzie Gore",
    "opponent_team": "Seattle Mariners",
    "batter_name": "Brendan Donovan",
    "launch_speed": 101.2,
    "distance": 6,
    "events": "Field Out",
    "game_date": "2025-05-11"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Dylan Cease",
    "opponent_team": "Los Angeles Dodgers",
    "batter_name": "Hyeseong Kim",
    "launch_speed": 101.1,
    "distance": 5,
    "events": "Field Out",
    "game_date": "2025-06-10"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Gavin Sheets",
    "launch_speed": 108.5,
    "distance": 4,
    "events": "Field Out",
    "game_date": "2024-07-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Mitch Keller",
    "opponent_team": "San Diego Padres",
    "batter_name": "Nick Castellanos",
    "launch_speed": 107.6,
    "distance": 4,
    "events": "Single",
    "game_date": "2024-04-14"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bryan Woo",
    "opponent_team": "Texas Rangers",
    "batter_name": "Corey Seager",
    "launch_speed": 103.5,
    "distance": 4,
    "events": "Grounded Into Double Play",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 103.1,
    "distance": 3,
    "events": "Grounded Into Double Play",
    "game_date": "2024-05-03"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Aaron Nola",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Casey Schmitt",
    "launch_speed": 102.6,
    "distance": 3,
    "events": "Field Out",
    "game_date": "2023-08-21"
  },
  {
    "date": "2026-04-08",
    "pitcher_name": "Bailey Ober",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Jahmai Jones",
    "launch_speed": 104.2,
    "distance": 0,
    "events": "Field Out",
    "game_date": "2025-03-18"
  }
];