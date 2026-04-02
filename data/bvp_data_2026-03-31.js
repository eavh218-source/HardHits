const bvpDate = 'March 31, 2026';
const bvpData = [
    {
        "batter_name": "Pete Alonso",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 101.7,
        "game_date": "2025-09-12"
    },
    {
        "batter_name": "Pete Alonso",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 104.0,
        "game_date": "2025-09-12"
    },
    {
        "batter_name": "Taylor Ward",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 105.1,
        "game_date": "2025-07-28"
    },
    {
        "batter_name": "Gunnar Henderson",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 106.5,
        "game_date": "2025-07-01"
    },
    {
        "batter_name": "Gunnar Henderson",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 111.6,
        "game_date": "2025-07-01"
    },
    {
        "batter_name": "Gunnar Henderson",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 101.0,
        "game_date": "2025-06-25"
    },
    {
        "batter_name": "Gunnar Henderson",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 106.1,
        "game_date": "2025-06-25"
    },
    {
        "batter_name": "Gunnar Henderson",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 105.2,
        "game_date": "2023-04-05"
    },
    {
        "batter_name": "Ryan Mountcastle",
        "pitcher_name": "Jacob deGrom",
        "opponent_team": "BAL",
        "launch_speed": 102.2,
        "game_date": "2023-04-05"
    },
    {
        "batter_name": "Danny Jansen",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": 101.2,
        "game_date": "2025-06-16"
    },
    {
        "batter_name": "Wyatt Langford",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": 103.9,
        "game_date": "2024-04-02"
    },
    {
        "batter_name": "Danny Jansen",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": NaN,
        "game_date": "2024-03-11"
    },
    {
        "batter_name": "Evan Carter",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": 102.5,
        "game_date": "2023-10-04"
    },
    {
        "batter_name": "Corey Seager",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": 105.9,
        "game_date": "2023-10-04"
    },
    {
        "batter_name": "Jake Burger",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": 110.6,
        "game_date": "2023-08-30"
    },
    {
        "batter_name": "Jake Burger",
        "pitcher_name": "Zach Eflin",
        "opponent_team": "TEX",
        "launch_speed": 104.8,
        "game_date": "2023-04-28"
    },
    {
        "batter_name": "Marcell Ozuna",
        "pitcher_name": "Brandon Williamson",
        "opponent_team": "PIT",
        "launch_speed": 101.2,
        "game_date": "2024-09-17"
    },
    {
        "batter_name": "Xavier Edwards",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 105.6,
        "game_date": "2025-08-09"
    },
    {
        "batter_name": "Jakob Marsee",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 101.7,
        "game_date": "2025-08-09"
    },
    {
        "batter_name": "Agust\u00edn Ram\u00edrez",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 101.0,
        "game_date": "2025-08-09"
    },
    {
        "batter_name": "Xavier Edwards",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 103.9,
        "game_date": "2025-08-09"
    },
    {
        "batter_name": "Xavier Edwards",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 102.7,
        "game_date": "2025-03-11"
    },
    {
        "batter_name": "Otto Lopez",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 103.6,
        "game_date": "2025-03-11"
    },
    {
        "batter_name": "Otto Lopez",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 101.7,
        "game_date": "2025-03-11"
    },
    {
        "batter_name": "Griffin Conine",
        "pitcher_name": "Erick Fedde",
        "opponent_team": "MIA",
        "launch_speed": 92.4,
        "game_date": "2025-03-11"
    },
    {
        "batter_name": "Luisangel Acu\u00f1a",
        "pitcher_name": "Janson Junk",
        "opponent_team": "CWS",
        "launch_speed": 102.6,
        "game_date": "2025-03-08"
    },
    {
        "batter_name": "Jes\u00fas S\u00e1nchez",
        "pitcher_name": "Ryan Feltner",
        "opponent_team": "TOR",
        "launch_speed": 107.5,
        "game_date": "2024-04-30"
    },
    {
        "batter_name": "Daulton Varsho",
        "pitcher_name": "Ryan Feltner",
        "opponent_team": "TOR",
        "launch_speed": 102.0,
        "game_date": "2024-04-12"
    },
    {
        "batter_name": "Edouard Julien",
        "pitcher_name": "Max Scherzer",
        "opponent_team": "COL",
        "launch_speed": 102.7,
        "game_date": "2023-08-26"
    },
    {
        "batter_name": "Matt Olson",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 108.8,
        "game_date": "2025-09-08"
    },
    {
        "batter_name": "Michael Harris II",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 103.9,
        "game_date": "2025-09-08"
    },
    {
        "batter_name": "Mike Yastrzemski",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 101.7,
        "game_date": "2025-08-15"
    },
    {
        "batter_name": "Austin Riley",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 103.5,
        "game_date": "2025-06-09"
    },
    {
        "batter_name": "Ronald Acu\u00f1a Jr.",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 107.1,
        "game_date": "2025-06-09"
    },
    {
        "batter_name": "Drake Baldwin",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 104.1,
        "game_date": "2025-06-09"
    },
    {
        "batter_name": "Michael Harris II",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 108.2,
        "game_date": "2025-06-09"
    },
    {
        "batter_name": "Mike Yastrzemski",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 99.6,
        "game_date": "2024-09-10"
    },
    {
        "batter_name": "Jorge Mateo",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 103.4,
        "game_date": "2024-05-31"
    },
    {
        "batter_name": "Dominic Smith",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 103.4,
        "game_date": "2024-05-14"
    },
    {
        "batter_name": "Jonah Heim",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": 102.2,
        "game_date": "2024-04-03"
    },
    {
        "batter_name": "Ozzie Albies",
        "pitcher_name": "Aaron Civale",
        "opponent_team": "ATL",
        "launch_speed": NaN,
        "game_date": "2024-03-23"
    },
    {
        "batter_name": "Brent Rooker",
        "pitcher_name": "Jos\u00e9 Suarez",
        "opponent_team": "ATH",
        "launch_speed": 104.4,
        "game_date": "2023-10-01"
    },
    {
        "batter_name": "Lawrence Butler",
        "pitcher_name": "Jos\u00e9 Suarez",
        "opponent_team": "ATH",
        "launch_speed": 106.9,
        "game_date": "2023-10-01"
    },
    {
        "batter_name": "Shea Langeliers",
        "pitcher_name": "Jos\u00e9 Suarez",
        "opponent_team": "ATH",
        "launch_speed": 107.7,
        "game_date": "2023-04-24"
    },
    {
        "batter_name": "Brent Rooker",
        "pitcher_name": "Jos\u00e9 Suarez",
        "opponent_team": "ATH",
        "launch_speed": 107.7,
        "game_date": "2023-04-24"
    },
    {
        "batter_name": "Brent Rooker",
        "pitcher_name": "Jos\u00e9 Suarez",
        "opponent_team": "ATH",
        "launch_speed": 97.9,
        "game_date": "2023-04-24"
    },
    {
        "batter_name": "Brent Rooker",
        "pitcher_name": "Jos\u00e9 Suarez",
        "opponent_team": "ATH",
        "launch_speed": 103.6,
        "game_date": "2023-04-24"
    },
    {
        "batter_name": "Dylan Carlson",
        "pitcher_name": "Jos\u00e9 Soriano",
        "opponent_team": "CHC",
        "launch_speed": 105.2,
        "game_date": "2026-02-26"
    },
    {
        "batter_name": "Miguel Amaya",
        "pitcher_name": "Jos\u00e9 Soriano",
        "opponent_team": "CHC",
        "launch_speed": 105.3,
        "game_date": "2024-07-07"
    },
    {
        "batter_name": "Nico Hoerner",
        "pitcher_name": "Jos\u00e9 Soriano",
        "opponent_team": "CHC",
        "launch_speed": 105.6,
        "game_date": "2024-07-07"
    },
    {
        "batter_name": "Nico Hoerner",
        "pitcher_name": "Jos\u00e9 Soriano",
        "opponent_team": "CHC",
        "launch_speed": 106.6,
        "game_date": "2023-06-08"
    },
    {
        "batter_name": "Bryce Teodosio",
        "pitcher_name": "Jameson Taillon",
        "opponent_team": "LAA",
        "launch_speed": 102.4,
        "game_date": "2025-08-24"
    },
    {
        "batter_name": "Travis d'Arnaud",
        "pitcher_name": "Jameson Taillon",
        "opponent_team": "LAA",
        "launch_speed": 107.0,
        "game_date": "2025-08-24"
    },
    {
        "batter_name": "Mike Trout",
        "pitcher_name": "Jameson Taillon",
        "opponent_team": "LAA",
        "launch_speed": 104.6,
        "game_date": "2023-06-07"
    },
    {
        "batter_name": "William Contreras",
        "pitcher_name": "Shane McClanahan",
        "opponent_team": "MIL",
        "launch_speed": 110.7,
        "game_date": "2023-05-19"
    },
    {
        "batter_name": "Christian Yelich",
        "pitcher_name": "Shane McClanahan",
        "opponent_team": "MIL",
        "launch_speed": 109.7,
        "game_date": "2023-05-19"
    },
    {
        "batter_name": "Nick Fortes",
        "pitcher_name": "Brandon Woodruff",
        "opponent_team": "TB",
        "launch_speed": 103.4,
        "game_date": "2023-09-11"
    },
    {
        "batter_name": "Yohel Pozo",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 96.0,
        "game_date": "2025-03-14"
    },
    {
        "batter_name": "Nolan Gorman",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 101.1,
        "game_date": "2025-03-14"
    },
    {
        "batter_name": "Victor Scott II",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 104.6,
        "game_date": "2025-03-14"
    },
    {
        "batter_name": "Alec Burleson",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 101.3,
        "game_date": "2023-06-17"
    },
    {
        "batter_name": "Alec Burleson",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 106.5,
        "game_date": "2023-06-17"
    },
    {
        "batter_name": "Nolan Gorman",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 103.2,
        "game_date": "2023-06-17"
    },
    {
        "batter_name": "Jordan Walker",
        "pitcher_name": "Kodai Senga",
        "opponent_team": "STL",
        "launch_speed": 99.7,
        "game_date": "2023-06-17"
    },
    {
        "batter_name": "Bo Bichette",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 102.4,
        "game_date": "2025-06-09"
    },
    {
        "batter_name": "Bo Bichette",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 101.8,
        "game_date": "2025-06-09"
    },
    {
        "batter_name": "Juan Soto",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 105.9,
        "game_date": "2025-05-04"
    },
    {
        "batter_name": "Tyrone Taylor",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 108.3,
        "game_date": "2025-05-04"
    },
    {
        "batter_name": "Juan Soto",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 113.4,
        "game_date": "2025-05-04"
    },
    {
        "batter_name": "Francisco Lindor",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 108.1,
        "game_date": "2025-05-04"
    },
    {
        "batter_name": "Francisco Lindor",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 104.3,
        "game_date": "2025-04-17"
    },
    {
        "batter_name": "Mark Vientos",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 100.1,
        "game_date": "2025-04-17"
    },
    {
        "batter_name": "Juan Soto",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 106.7,
        "game_date": "2025-04-17"
    },
    {
        "batter_name": "Francisco Alvarez",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 103.3,
        "game_date": "2024-08-05"
    },
    {
        "batter_name": "Francisco Alvarez",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 107.4,
        "game_date": "2024-08-05"
    },
    {
        "batter_name": "Francisco Lindor",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 102.6,
        "game_date": "2024-08-05"
    },
    {
        "batter_name": "Francisco Lindor",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 110.7,
        "game_date": "2023-06-18"
    },
    {
        "batter_name": "Marcus Semien",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 101.9,
        "game_date": "2023-06-05"
    },
    {
        "batter_name": "Tyrone Taylor",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 102.6,
        "game_date": "2023-05-17"
    },
    {
        "batter_name": "Francisco Alvarez",
        "pitcher_name": "Andre Pallante",
        "opponent_team": "NYM",
        "launch_speed": 101.6,
        "game_date": "2023-02-27"
    },
    {
        "batter_name": "Carlos Correa",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 104.2,
        "game_date": "2025-05-02"
    },
    {
        "batter_name": "Carlos Correa",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 104.7,
        "game_date": "2025-05-02"
    },
    {
        "batter_name": "Isaac Paredes",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 98.5,
        "game_date": "2023-09-27"
    },
    {
        "batter_name": "Yainer Diaz",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 103.6,
        "game_date": "2023-08-29"
    },
    {
        "batter_name": "Yordan Alvarez",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 113.2,
        "game_date": "2023-08-29"
    },
    {
        "batter_name": "Jeremy Pe\u00f1a",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 103.3,
        "game_date": "2023-08-24"
    },
    {
        "batter_name": "Yordan Alvarez",
        "pitcher_name": "Brayan Bello",
        "opponent_team": "HOU",
        "launch_speed": 107.6,
        "game_date": "2023-08-24"
    },
    {
        "batter_name": "Trevor Story",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 106.2,
        "game_date": "2025-08-13"
    },
    {
        "batter_name": "Roman Anthony",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 105.6,
        "game_date": "2025-08-01"
    },
    {
        "batter_name": "Ceddanne Rafaela",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 104.5,
        "game_date": "2025-08-01"
    },
    {
        "batter_name": "Ceddanne Rafaela",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 103.6,
        "game_date": "2025-08-01"
    },
    {
        "batter_name": "Roman Anthony",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 104.7,
        "game_date": "2025-08-01"
    },
    {
        "batter_name": "Carlos Narv\u00e1ez",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 102.6,
        "game_date": "2025-08-01"
    },
    {
        "batter_name": "Trevor Story",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 105.5,
        "game_date": "2025-08-01"
    },
    {
        "batter_name": "Willson Contreras",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 105.4,
        "game_date": "2025-04-15"
    },
    {
        "batter_name": "Willson Contreras",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 101.1,
        "game_date": "2025-04-15"
    },
    {
        "batter_name": "Connor Wong",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 104.6,
        "game_date": "2024-08-11"
    },
    {
        "batter_name": "Isiah Kiner-Falefa",
        "pitcher_name": "Hunter Brown",
        "opponent_team": "BOS",
        "launch_speed": 98.6,
        "game_date": "2023-08-04"
    },
    {
        "batter_name": "Ketel Marte",
        "pitcher_name": "Casey Mize",
        "opponent_team": "AZ",
        "launch_speed": 106.6,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Corbin Carroll",
        "pitcher_name": "Casey Mize",
        "opponent_team": "AZ",
        "launch_speed": 106.0,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Zach McKinstry",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 103.7,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Spencer Torkelson",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 105.7,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Riley Greene",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 105.3,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Kerry Carpenter",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 106.8,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Gleyber Torres",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 105.2,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Matt Vierling",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 101.9,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Kerry Carpenter",
        "pitcher_name": "Brandon Pfaadt",
        "opponent_team": "DET",
        "launch_speed": 103.2,
        "game_date": "2025-07-29"
    },
    {
        "batter_name": "Ty France",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 107.7,
        "game_date": "2026-03-01"
    },
    {
        "batter_name": "Freddy Fermin",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 103.0,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Jake Cronenworth",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 101.7,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Gavin Sheets",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 101.1,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 108.6,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Jackson Merrill",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 102.7,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 109.0,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Jake Cronenworth",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 101.1,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Gavin Sheets",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 102.2,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 101.0,
        "game_date": "2025-08-11"
    },
    {
        "batter_name": "Jackson Merrill",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 108.3,
        "game_date": "2025-06-02"
    },
    {
        "batter_name": "Miguel Andujar",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 109.0,
        "game_date": "2025-05-16"
    },
    {
        "batter_name": "Xander Bogaerts",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 103.0,
        "game_date": "2025-04-29"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 107.4,
        "game_date": "2025-04-29"
    },
    {
        "batter_name": "Jackson Merrill",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 104.2,
        "game_date": "2024-09-13"
    },
    {
        "batter_name": "Jackson Merrill",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 103.5,
        "game_date": "2024-09-13"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 109.6,
        "game_date": "2024-09-13"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 104.8,
        "game_date": "2024-09-07"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 109.5,
        "game_date": "2024-09-07"
    },
    {
        "batter_name": "Miguel Andujar",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 102.8,
        "game_date": "2024-07-31"
    },
    {
        "batter_name": "Nick Castellanos",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 111.0,
        "game_date": "2024-05-05"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 108.7,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 105.4,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Xander Bogaerts",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 103.5,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Jackson Merrill",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 103.1,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Xander Bogaerts",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 106.8,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 109.1,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Jake Cronenworth",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 104.9,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 107.2,
        "game_date": "2024-04-07"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 105.6,
        "game_date": "2024-03-28"
    },
    {
        "batter_name": "Jackson Merrill",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 101.8,
        "game_date": "2024-03-28"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 106.0,
        "game_date": "2023-09-25"
    },
    {
        "batter_name": "Manny Machado",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 111.4,
        "game_date": "2023-09-25"
    },
    {
        "batter_name": "Fernando Tatis Jr.",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 106.4,
        "game_date": "2023-09-25"
    },
    {
        "batter_name": "Gavin Sheets",
        "pitcher_name": "Logan Webb",
        "opponent_team": "SD",
        "launch_speed": 103.8,
        "game_date": "2023-04-05"
    },
    {
        "batter_name": "Jerar Encarnacion",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 110.1,
        "game_date": "2026-03-01"
    },
    {
        "batter_name": "Willy Adames",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 103.9,
        "game_date": "2025-09-26"
    },
    {
        "batter_name": "Heliot Ramos",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 109.8,
        "game_date": "2025-09-26"
    },
    {
        "batter_name": "Jung Hoo Lee",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 102.0,
        "game_date": "2025-09-26"
    },
    {
        "batter_name": "Willy Adames",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 110.2,
        "game_date": "2025-09-26"
    },
    {
        "batter_name": "Matt Chapman",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 101.6,
        "game_date": "2025-09-03"
    },
    {
        "batter_name": "Rafael Devers",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 111.1,
        "game_date": "2025-09-03"
    },
    {
        "batter_name": "Matt Chapman",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 105.3,
        "game_date": "2025-09-03"
    },
    {
        "batter_name": "Willy Adames",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 101.6,
        "game_date": "2025-05-04"
    },
    {
        "batter_name": "Willy Adames",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 103.0,
        "game_date": "2025-05-04"
    },
    {
        "batter_name": "Harrison Bader",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 105.9,
        "game_date": "2025-03-25"
    },
    {
        "batter_name": "Jerar Encarnacion",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 108.9,
        "game_date": "2025-03-10"
    },
    {
        "batter_name": "Casey Schmitt",
        "pitcher_name": "Germ\u00e1n M\u00e1rquez",
        "opponent_team": "SF",
        "launch_speed": 111.7,
        "game_date": "2025-03-10"
    },
    {
        "batter_name": "Rob Refsnyder",
        "pitcher_name": "Max Fried",
        "opponent_team": "SEA",
        "launch_speed": 105.0,
        "game_date": "2025-09-30"
    },
    {
        "batter_name": "Cal Raleigh",
        "pitcher_name": "Max Fried",
        "opponent_team": "SEA",
        "launch_speed": 105.6,
        "game_date": "2025-05-13"
    },
    {
        "batter_name": "Julio Rodr\u00edguez",
        "pitcher_name": "Max Fried",
        "opponent_team": "SEA",
        "launch_speed": 108.2,
        "game_date": "2024-04-29"
    },
    {
        "batter_name": "Julio Rodr\u00edguez",
        "pitcher_name": "Max Fried",
        "opponent_team": "SEA",
        "launch_speed": 109.0,
        "game_date": "2024-04-29"
    },
    {
        "batter_name": "Paul Goldschmidt",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 101.3,
        "game_date": "2025-07-08"
    },
    {
        "batter_name": "Giancarlo Stanton",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 106.1,
        "game_date": "2025-07-08"
    },
    {
        "batter_name": "Paul Goldschmidt",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 103.5,
        "game_date": "2025-07-08"
    },
    {
        "batter_name": "Jazz Chisholm Jr.",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 105.6,
        "game_date": "2025-07-08"
    },
    {
        "batter_name": "Jazz Chisholm Jr.",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 105.7,
        "game_date": "2024-09-19"
    },
    {
        "batter_name": "Jazz Chisholm Jr.",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 107.1,
        "game_date": "2024-06-22"
    },
    {
        "batter_name": "Giancarlo Stanton",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 101.6,
        "game_date": "2024-05-20"
    },
    {
        "batter_name": "Giancarlo Stanton",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 104.3,
        "game_date": "2024-05-20"
    },
    {
        "batter_name": "Aaron Judge",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 107.6,
        "game_date": "2024-05-20"
    },
    {
        "batter_name": "Amed Rosario",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 110.0,
        "game_date": "2023-09-17"
    },
    {
        "batter_name": "Amed Rosario",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 101.4,
        "game_date": "2023-09-17"
    },
    {
        "batter_name": "Randal Grichuk",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": 102.2,
        "game_date": "2023-09-11"
    },
    {
        "batter_name": "Trent Grisham",
        "pitcher_name": "Logan Gilbert",
        "opponent_team": "NYY",
        "launch_speed": NaN,
        "game_date": "2023-03-26"
    },
    {
        "batter_name": "Teoscar Hern\u00e1ndez",
        "pitcher_name": "Tanner Bibee",
        "opponent_team": "LAD",
        "launch_speed": 109.2,
        "game_date": "2025-05-27"
    },
    {
        "batter_name": "Shohei Ohtani",
        "pitcher_name": "Tanner Bibee",
        "opponent_team": "LAD",
        "launch_speed": 104.5,
        "game_date": "2025-05-27"
    },
    {
        "batter_name": "Shohei Ohtani",
        "pitcher_name": "Tanner Bibee",
        "opponent_team": "LAD",
        "launch_speed": 116.7,
        "game_date": "2024-09-08"
    },
    {
        "batter_name": "Mookie Betts",
        "pitcher_name": "Tanner Bibee",
        "opponent_team": "LAD",
        "launch_speed": 101.7,
        "game_date": "2024-09-08"
    },
    {
        "batter_name": "Kyle Tucker",
        "pitcher_name": "Tanner Bibee",
        "opponent_team": "LAD",
        "launch_speed": 108.0,
        "game_date": "2023-08-02"
    },
    {
        "batter_name": "Shohei Ohtani",
        "pitcher_name": "Tanner Bibee",
        "opponent_team": "LAD",
        "launch_speed": 101.9,
        "game_date": "2023-05-14"
    }
];