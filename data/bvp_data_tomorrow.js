const bvpTomorrowDate = '2026-04-05';
const tomorrowMatchups = [
  {
    "date": "2026-04-05",
    "time": "1:10 PM ET",
    "away_abbr": "CHC",
    "away_p": "Cabrera",
    "home_abbr": "CLE",
    "home_p": "Cecconi"
  },
  {
    "date": "2026-04-05",
    "time": "1:45 PM ET",
    "away_abbr": "CHC",
    "away_p": "Imanaga",
    "home_abbr": "CLE",
    "home_p": "Messick"
  },
  {
    "date": "2026-04-05",
    "time": "1:35 PM ET",
    "away_abbr": "LAD",
    "away_p": "Sasaki",
    "home_abbr": "WSH",
    "home_p": "Griffin"
  },
  {
    "date": "2026-04-05",
    "time": "1:35 PM ET",
    "away_abbr": "BAL",
    "away_p": "Bassitt",
    "home_abbr": "PIT",
    "home_p": "Ashcraft"
  },
  {
    "date": "2026-04-05",
    "time": "1:35 PM ET",
    "away_abbr": "SDP",
    "away_p": "Buehler",
    "home_abbr": "BOS",
    "home_p": "Suarez"
  },
  {
    "date": "2026-04-05",
    "time": "1:35 PM ET",
    "away_abbr": "MIA",
    "away_p": "Paddack",
    "home_abbr": "NYY",
    "home_p": "Fried"
  },
  {
    "date": "2026-04-05",
    "time": "2:10 PM ET",
    "away_abbr": "TBR",
    "away_p": "Martinez",
    "home_abbr": "MIN",
    "home_p": "Richardson"
  },
  {
    "date": "2026-04-05",
    "time": "2:10 PM ET",
    "away_abbr": "TOR",
    "away_p": "Lauer",
    "home_abbr": "CHW",
    "home_p": "Martin"
  },
  {
    "date": "2026-04-05",
    "time": "2:10 PM ET",
    "away_abbr": "MIL",
    "away_p": "Harrison",
    "home_abbr": "KCR",
    "home_p": "Bubic"
  },
  {
    "date": "2026-04-05",
    "time": "2:35 PM ET",
    "away_abbr": "CIN",
    "away_p": "Burns",
    "home_abbr": "TEX",
    "home_p": "Leiter"
  },
  {
    "date": "2026-04-05",
    "time": "3:10 PM ET",
    "away_abbr": "PHI",
    "away_p": "Walker",
    "home_abbr": "COL",
    "home_p": "Sugano"
  },
  {
    "date": "2026-04-05",
    "time": "4:05 PM ET",
    "away_abbr": "HOU",
    "away_p": "Jr.",
    "home_abbr": "ATH",
    "home_p": "Lopez"
  },
  {
    "date": "2026-04-05",
    "time": "4:05 PM ET",
    "away_abbr": "NYM",
    "away_p": "Senga",
    "home_abbr": "SFG",
    "home_p": "Webb"
  },
  {
    "date": "2026-04-05",
    "time": "4:07 PM ET",
    "away_abbr": "SEA",
    "away_p": "Castillo",
    "home_abbr": "LAA",
    "home_p": "Johnson"
  },
  {
    "date": "2026-04-05",
    "time": "4:10 PM ET",
    "away_abbr": "ATL",
    "away_p": "TBD",
    "home_abbr": "ARI",
    "home_p": "Pfaadt"
  },
  {
    "date": "2026-04-05",
    "time": "7:20 PM ET",
    "away_abbr": "STL",
    "away_p": "Leahy",
    "home_abbr": "DET",
    "home_p": "Montero"
  }
];
const bvpTomorrowData = [
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Brandon Lowe",
    "launch_speed": 111.0,
    "distance": 444,
    "events": "Home Run",
    "game_date": "2024-03-29"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Ryan Mcmahon",
    "launch_speed": 105.1,
    "distance": 436,
    "events": "Home Run",
    "game_date": "2025-07-18"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Giancarlo Stanton",
    "launch_speed": 114.0,
    "distance": 427,
    "events": "Home Run",
    "game_date": "2024-05-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Jonah Heim",
    "launch_speed": 106.8,
    "distance": 418,
    "events": "Home Run",
    "game_date": "2023-05-03"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Parker Messick",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Scott Kingery",
    "launch_speed": 104.4,
    "distance": 418,
    "events": "Home Run",
    "game_date": "2026-02-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kyle Harrison",
    "opponent_team": "Kansas City Royals",
    "batter_name": "Jonathan India",
    "launch_speed": 104.8,
    "distance": 417,
    "events": "Home Run",
    "game_date": "2024-08-03"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Brandon Lowe",
    "launch_speed": 109.5,
    "distance": 414,
    "events": "Home Run",
    "game_date": "2024-07-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 109.6,
    "distance": 413,
    "events": "Home Run",
    "game_date": "2025-07-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Paul Goldschmidt",
    "launch_speed": 105.5,
    "distance": 410,
    "events": "Home Run",
    "game_date": "2024-03-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 103.1,
    "distance": 410,
    "events": "Home Run",
    "game_date": "2025-07-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Parker Messick",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Alex Bregman",
    "launch_speed": 105.0,
    "distance": 408,
    "events": "Double",
    "game_date": "2026-02-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Brandon Lowe",
    "launch_speed": 103.8,
    "distance": 407,
    "events": "Home Run",
    "game_date": "2025-05-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Jack Leiter",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Eugenio Su\u00e1rez",
    "launch_speed": 106.7,
    "distance": 404,
    "events": "Double",
    "game_date": "2024-02-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Brandon Lowe",
    "launch_speed": 106.4,
    "distance": 395,
    "events": "Double",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Ryan O'Hearn",
    "launch_speed": 102.5,
    "distance": 395,
    "events": "Home Run",
    "game_date": "2023-06-13"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Mike Yastrzemski",
    "launch_speed": 104.4,
    "distance": 393,
    "events": "Field Out",
    "game_date": "2024-09-24"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Tomoyuki Sugano",
    "opponent_team": "Philadelphia Phillies",
    "batter_name": "Adolis Garc\u00eda",
    "launch_speed": 104.7,
    "distance": 391,
    "events": "Field Out",
    "game_date": "2025-07-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Braxton Ashcraft",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Pete Alonso",
    "launch_speed": 110.7,
    "distance": 389,
    "events": "Double",
    "game_date": "2025-06-28"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Bryan Reynolds",
    "launch_speed": 104.2,
    "distance": 388,
    "events": "Double",
    "game_date": "2023-05-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Matt Olson",
    "launch_speed": 105.4,
    "distance": 387,
    "events": "Field Out",
    "game_date": "2025-06-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Slade Cecconi",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Michael Conforto",
    "launch_speed": 105.1,
    "distance": 384,
    "events": "Field Out",
    "game_date": "2024-04-21"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Rafael Devers",
    "launch_speed": 103.3,
    "distance": 381,
    "events": "Double",
    "game_date": "2025-08-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Max Fried",
    "opponent_team": "Miami Marlins",
    "batter_name": "Connor Norby",
    "launch_speed": 105.4,
    "distance": 378,
    "events": "Field Out",
    "game_date": "2024-09-21"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 104.1,
    "distance": 377,
    "events": "Home Run",
    "game_date": "2025-07-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 102.1,
    "distance": 374,
    "events": "Field Out",
    "game_date": "2024-05-26"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Shota Imanaga",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Steven Kwan",
    "launch_speed": 99.9,
    "distance": 373,
    "events": "Home Run",
    "game_date": "2024-08-12"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Rafael Devers",
    "launch_speed": 102.7,
    "distance": 369,
    "events": "Field Out",
    "game_date": "2025-07-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Parker Messick",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Alex Bregman",
    "launch_speed": 103.1,
    "distance": 366,
    "events": "Double",
    "game_date": "2025-09-01"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Shota Imanaga",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "David Fry",
    "launch_speed": 100.1,
    "distance": 366,
    "events": "Home Run",
    "game_date": "2025-07-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Ben Rice",
    "launch_speed": 101.4,
    "distance": 364,
    "events": "Field Out",
    "game_date": "2025-09-09"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Braxton Ashcraft",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Jeremiah Jackson",
    "launch_speed": 105.3,
    "distance": 362,
    "events": "Home Run",
    "game_date": "2025-09-09"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Henry Davis",
    "launch_speed": 105.8,
    "distance": 360,
    "events": "Field Out",
    "game_date": "2025-08-20"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Drake Baldwin",
    "launch_speed": 105.4,
    "distance": 359,
    "events": "Field Out",
    "game_date": "2025-06-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Juan Soto",
    "launch_speed": 101.9,
    "distance": 356,
    "events": "Sac Fly",
    "game_date": "2024-06-01"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Slade Cecconi",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Michael Conforto",
    "launch_speed": 105.0,
    "distance": 355,
    "events": "Field Out",
    "game_date": "2023-08-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Matt Olson",
    "launch_speed": 107.1,
    "distance": 351,
    "events": "Field Out",
    "game_date": "2025-04-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kyle Leahy",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Riley Greene",
    "launch_speed": 109.0,
    "distance": 348,
    "events": "Double",
    "game_date": "2025-05-20"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Jack Leiter",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Elly De",
    "launch_speed": 106.7,
    "distance": 348,
    "events": "Double",
    "game_date": "2025-04-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Braxton Ashcraft",
    "opponent_team": "Baltimore Orioles",
    "batter_name": "Samuel Basallo",
    "launch_speed": 102.4,
    "distance": 348,
    "events": "Field Out",
    "game_date": "2025-09-09"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Juan Soto",
    "launch_speed": 109.2,
    "distance": 339,
    "events": "Double",
    "game_date": "2025-07-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Taijuan Walker",
    "opponent_team": "Colorado Rockies",
    "batter_name": "Hunter Goodman",
    "launch_speed": 111.2,
    "distance": 338,
    "events": "Field Out",
    "game_date": "2025-05-21"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Aaron Judge",
    "launch_speed": 115.1,
    "distance": 326,
    "events": "Field Out",
    "game_date": "2024-05-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Heliot Ramos",
    "launch_speed": 107.1,
    "distance": 321,
    "events": "Field Out",
    "game_date": "2025-08-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Marcell Ozuna",
    "launch_speed": 104.8,
    "distance": 318,
    "events": "Double",
    "game_date": "2026-03-11"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Jacob Lopez",
    "opponent_team": "Houston Astros",
    "batter_name": "Cam Smith",
    "launch_speed": 104.7,
    "distance": 318,
    "events": "Field Out",
    "game_date": "2025-06-19"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Juan Soto",
    "launch_speed": 114.4,
    "distance": 308,
    "events": "Triple",
    "game_date": "2024-06-01"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Matt Olson",
    "launch_speed": 101.5,
    "distance": 292,
    "events": "Double",
    "game_date": "2024-04-06"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Keider Montero",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Alec Burleson",
    "launch_speed": 102.2,
    "distance": 290,
    "events": "Double",
    "game_date": "2025-05-19"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Jacob Lopez",
    "opponent_team": "Houston Astros",
    "batter_name": "Jake Meyers",
    "launch_speed": 102.1,
    "distance": 287,
    "events": "Field Out",
    "game_date": "2025-06-19"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Shota Imanaga",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "David Fry",
    "launch_speed": 103.8,
    "distance": 279,
    "events": "Single",
    "game_date": "2024-08-12"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Edward Cabrera",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Austin Hedges",
    "launch_speed": 108.6,
    "distance": 275,
    "events": "Double",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Edward Cabrera",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Gabriel Arias",
    "launch_speed": 104.9,
    "distance": 261,
    "events": "Sac Fly",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Edward Cabrera",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Angel Mart\u00ednez",
    "launch_speed": 107.1,
    "distance": 260,
    "events": "Single",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Giancarlo Stanton",
    "launch_speed": 115.5,
    "distance": 254,
    "events": "Single",
    "game_date": "2024-06-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kyle Leahy",
    "opponent_team": "Detroit Tigers",
    "batter_name": "Zach Mckinstry",
    "launch_speed": 101.8,
    "distance": 254,
    "events": "Single",
    "game_date": "2025-05-20"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Austin Riley",
    "launch_speed": 111.8,
    "distance": 248,
    "events": "Single",
    "game_date": "2024-07-11"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 107.2,
    "distance": 245,
    "events": "Single",
    "game_date": "2025-07-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Oneil Cruz",
    "launch_speed": 117.2,
    "distance": 242,
    "events": "Single",
    "game_date": "2024-06-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Drake Baldwin",
    "launch_speed": 103.9,
    "distance": 239,
    "events": "Single",
    "game_date": "2025-04-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Keider Montero",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Ram\u00f3n Ur\u00edas",
    "launch_speed": 101.0,
    "distance": 239,
    "events": "Single",
    "game_date": "2025-03-07"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Brandon Lowe",
    "launch_speed": 110.9,
    "distance": 208,
    "events": "Single",
    "game_date": "2025-05-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Tomoyuki Sugano",
    "opponent_team": "Philadelphia Phillies",
    "batter_name": "Adolis Garc\u00eda",
    "launch_speed": 108.2,
    "distance": 204,
    "events": "Single",
    "game_date": "2025-07-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Michael Harris",
    "launch_speed": 114.4,
    "distance": 180,
    "events": "Force Out",
    "game_date": "2024-04-06"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Henry Davis",
    "launch_speed": 108.9,
    "distance": 177,
    "events": "Field Out",
    "game_date": "2024-02-26"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Ryan O'Hearn",
    "launch_speed": 103.6,
    "distance": 175,
    "events": "Single",
    "game_date": "2023-07-31"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Alvarez",
    "launch_speed": 111.7,
    "distance": 174,
    "events": "Single",
    "game_date": "2025-07-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Bo Bichette",
    "launch_speed": 108.4,
    "distance": 172,
    "events": "Double Play",
    "game_date": "2025-07-19"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Rafael Devers",
    "launch_speed": 102.1,
    "distance": 157,
    "events": "Field Out",
    "game_date": "2025-07-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Mike Yastrzemski",
    "launch_speed": 107.0,
    "distance": 150,
    "events": "Single",
    "game_date": "2025-07-03"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Francisco Lindor",
    "launch_speed": 103.9,
    "distance": 150,
    "events": "Single",
    "game_date": "2024-05-26"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Edward Cabrera",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Kyle Manzardo",
    "launch_speed": 101.4,
    "distance": 143,
    "events": "Single",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Jake Mangum",
    "launch_speed": 107.8,
    "distance": 137,
    "events": "Single",
    "game_date": "2025-09-18"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Taijuan Walker",
    "opponent_team": "Colorado Rockies",
    "batter_name": "Hunter Goodman",
    "launch_speed": 110.4,
    "distance": 132,
    "events": "Single",
    "game_date": "2025-05-21"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Paddack",
    "opponent_team": "New York Yankees",
    "batter_name": "Ryan Mcmahon",
    "launch_speed": 107.2,
    "distance": 100,
    "events": "Grounded Into Double Play",
    "game_date": "2024-06-10"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Matt Chapman",
    "launch_speed": 109.5,
    "distance": 96,
    "events": "Double",
    "game_date": "2023-06-04"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Shota Imanaga",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Brayan Rocchio",
    "launch_speed": 101.0,
    "distance": 96,
    "events": "Force Out",
    "game_date": "2025-07-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Brett Baty",
    "launch_speed": 105.6,
    "distance": 88,
    "events": "Single",
    "game_date": "2025-07-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Drake Baldwin",
    "launch_speed": 106.6,
    "distance": 62,
    "events": "Single",
    "game_date": "2025-04-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Brandon Lowe",
    "launch_speed": 101.0,
    "distance": 58,
    "events": "Single",
    "game_date": "2025-09-18"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Max Fried",
    "opponent_team": "Miami Marlins",
    "batter_name": "Otto Lopez",
    "launch_speed": 105.1,
    "distance": 55,
    "events": "Field Out",
    "game_date": "2024-09-21"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Mike Yastrzemski",
    "launch_speed": 102.8,
    "distance": 54,
    "events": "Single",
    "game_date": "2025-05-13"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Ryan O'Hearn",
    "launch_speed": 101.6,
    "distance": 52,
    "events": "Single",
    "game_date": "2025-03-30"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Keider Montero",
    "opponent_team": "St. Louis Cardinals",
    "batter_name": "Masyn Winn",
    "launch_speed": 101.3,
    "distance": 52,
    "events": "Single",
    "game_date": "2025-05-19"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Ronald Acu\u00f1a",
    "launch_speed": 103.3,
    "distance": 46,
    "events": "Field Out",
    "game_date": "2025-06-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Edward Cabrera",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "David Fry",
    "launch_speed": 104.9,
    "distance": 45,
    "events": "Field Out",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Joey Bart",
    "launch_speed": 109.4,
    "distance": 44,
    "events": "Field Out",
    "game_date": "2025-03-23"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kris Bubic",
    "opponent_team": "Milwaukee Brewers",
    "batter_name": "Gary S\u00e1nchez",
    "launch_speed": 107.4,
    "distance": 43,
    "events": "Single",
    "game_date": "2026-03-01"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Taijuan Walker",
    "opponent_team": "Colorado Rockies",
    "batter_name": "Ezequiel Tovar",
    "launch_speed": 101.3,
    "distance": 43,
    "events": "Field Error",
    "game_date": "2025-04-03"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Austin Riley",
    "launch_speed": 108.2,
    "distance": 35,
    "events": "Field Out",
    "game_date": "2025-04-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Austin Riley",
    "launch_speed": 110.4,
    "distance": 26,
    "events": "Single",
    "game_date": "2025-06-05"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Mike Yastrzemski",
    "launch_speed": 103.5,
    "distance": 18,
    "events": "Single",
    "game_date": "2025-07-03"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Jacob Lopez",
    "opponent_team": "Houston Astros",
    "batter_name": "Christian Walker",
    "launch_speed": 101.8,
    "distance": 16,
    "events": "Single",
    "game_date": "2025-06-19"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Logan Webb",
    "opponent_team": "New York Mets",
    "batter_name": "Juan Soto",
    "launch_speed": 107.3,
    "distance": 15,
    "events": "Field Out",
    "game_date": "2023-09-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Taijuan Walker",
    "opponent_team": "Colorado Rockies",
    "batter_name": "Troy Johnston",
    "launch_speed": 102.2,
    "distance": 15,
    "events": "Field Out",
    "game_date": "2025-09-25"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Parker Messick",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Dansby Swanson",
    "launch_speed": 110.3,
    "distance": 14,
    "events": "Single",
    "game_date": "2026-02-27"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Oneil Cruz",
    "launch_speed": 103.0,
    "distance": 12,
    "events": "Field Out",
    "game_date": "2025-03-23"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Edward Cabrera",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Austin Hedges",
    "launch_speed": 106.3,
    "distance": 9,
    "events": "Field Out",
    "game_date": "2025-08-14"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Jack Leiter",
    "opponent_team": "Cincinnati Reds",
    "batter_name": "Ke'Bryan Hayes",
    "launch_speed": 103.8,
    "distance": 9,
    "events": "Single",
    "game_date": "2025-06-22"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Shota Imanaga",
    "opponent_team": "Cleveland Guardians",
    "batter_name": "Jos\u00e9 Ram\u00edrez",
    "launch_speed": 101.3,
    "distance": 8,
    "events": "Field Error",
    "game_date": "2024-08-12"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Nick Gonzales",
    "launch_speed": 107.7,
    "distance": 6,
    "events": "Field Out",
    "game_date": "2025-03-23"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Brandon Pfaadt",
    "opponent_team": "Atlanta Braves",
    "batter_name": "Ronald Acu\u00f1a",
    "launch_speed": 106.4,
    "distance": 6,
    "events": "Field Out",
    "game_date": "2024-04-06"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Kodai Senga",
    "opponent_team": "San Francisco Giants",
    "batter_name": "Heliot Ramos",
    "launch_speed": 102.5,
    "distance": 5,
    "events": "Field Out",
    "game_date": "2025-08-02"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Chris Bassitt",
    "opponent_team": "Pittsburgh Pirates",
    "batter_name": "Oneil Cruz",
    "launch_speed": 104.9,
    "distance": 0,
    "events": "Home Run",
    "game_date": "2024-03-13"
  },
  {
    "date": "2026-04-05",
    "pitcher_name": "Slade Cecconi",
    "opponent_team": "Chicago Cubs",
    "batter_name": "Michael Conforto",
    "launch_speed": 0.0,
    "distance": 0,
    "events": "Home Run",
    "game_date": "2023-03-04"
  }
];