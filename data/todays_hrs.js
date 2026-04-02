const hrUpdateDate = '2026-04-01';
const todaysHRData = [
  {
    "batter": "Shea Langeliers",
    "batter_team": "Athletics",
    "pitcher": "Chris Sale",
    "pitcher_team": "Atlanta Braves",
    "exit_velo": 98.1,
    "launch_angle": 38.0,
    "distance": 355.0
  },
  {
    "batter": "Samuel Basallo",
    "batter_team": "Baltimore Orioles",
    "pitcher": "Nathan Eovaldi",
    "pitcher_team": "Texas Rangers",
    "exit_velo": 109.5,
    "launch_angle": 24.0,
    "distance": 437.0
  },
  {
    "batter": "Dylan Beavers",
    "batter_team": "Baltimore Orioles",
    "pitcher": "Carter Baumler",
    "pitcher_team": "Texas Rangers",
    "exit_velo": 103.8,
    "launch_angle": 25.0,
    "distance": 401.0
  },
  {
    "batter": "Corey Seager",
    "batter_team": "Texas Rangers",
    "pitcher": "Albert Su\u00e1rez",
    "pitcher_team": "Baltimore Orioles",
    "exit_velo": 101.8,
    "launch_angle": 29.0,
    "distance": 422.0
  },
  {
    "batter": "Oneil Cruz",
    "batter_team": "Pittsburgh Pirates",
    "pitcher": "Andrew Abbott",
    "pitcher_team": "Cincinnati Reds",
    "exit_velo": 107.4,
    "launch_angle": 28.0,
    "distance": 407.0
  },
  {
    "batter": "Eugenio Su\u00e1rez",
    "batter_team": "Cincinnati Reds",
    "pitcher": "Mason Montgomery",
    "pitcher_team": "Pittsburgh Pirates",
    "exit_velo": 107.3,
    "launch_angle": 37.0,
    "distance": 410.0
  },
  {
    "batter": "Bryan Reynolds",
    "batter_team": "Pittsburgh Pirates",
    "pitcher": "Emilio Pag\u00e1n",
    "pitcher_team": "Cincinnati Reds",
    "exit_velo": 107.7,
    "launch_angle": 32.0,
    "distance": 413.0
  },
  {
    "batter": "CJ Abrams",
    "batter_team": "Washington Nationals",
    "pitcher": "Brad Keller",
    "pitcher_team": "Philadelphia Phillies",
    "exit_velo": 97.7,
    "launch_angle": 34.0,
    "distance": 391.0
  },
  {
    "batter": "J.T. Realmuto",
    "batter_team": "Philadelphia Phillies",
    "pitcher": "Andre Granillo",
    "pitcher_team": "Washington Nationals",
    "exit_velo": 98.8,
    "launch_angle": 28.0,
    "distance": 401.0
  },
  {
    "batter": "Bryce Harper",
    "batter_team": "Philadelphia Phillies",
    "pitcher": "Cionel P\u00e9rez",
    "pitcher_team": "Washington Nationals",
    "exit_velo": 106.0,
    "launch_angle": 25.0,
    "distance": 425.0
  },
  {
    "batter": "Liam Hicks",
    "batter_team": "Miami Marlins",
    "pitcher": "Shane Smith",
    "pitcher_team": "Chicago White Sox",
    "exit_velo": 98.8,
    "launch_angle": 40.0,
    "distance": 347.0
  },
  {
    "batter": "Otto Lopez",
    "batter_team": "Miami Marlins",
    "pitcher": "Jordan Leasure",
    "pitcher_team": "Chicago White Sox",
    "exit_velo": 102.8,
    "launch_angle": 29.0,
    "distance": 392.0
  },
  {
    "batter": "Juan Soto",
    "batter_team": "New York Mets",
    "pitcher": "Matthew Liberatore",
    "pitcher_team": "St. Louis Cardinals",
    "exit_velo": 107.6,
    "launch_angle": 42.0,
    "distance": 344.0
  },
  {
    "batter": "Yandy D\u00edaz",
    "batter_team": "Tampa Bay Rays",
    "pitcher": "Jacob Misiorowski",
    "pitcher_team": "Milwaukee Brewers",
    "exit_velo": 102.3,
    "launch_angle": 28.0,
    "distance": 364.0
  },
  {
    "batter": "Brice Turang",
    "batter_team": "Milwaukee Brewers",
    "pitcher": "Drew Rasmussen",
    "pitcher_team": "Tampa Bay Rays",
    "exit_velo": 104.9,
    "launch_angle": 24.0,
    "distance": 392.0
  },
  {
    "batter": "Carlos Correa",
    "batter_team": "Houston Astros",
    "pitcher": "Garrett Crochet",
    "pitcher_team": "Boston Red Sox",
    "exit_velo": 106.7,
    "launch_angle": 25.0,
    "distance": 402.0
  },
  {
    "batter": "Christian V\u00e1zquez",
    "batter_team": "Houston Astros",
    "pitcher": "Danny Coulombe",
    "pitcher_team": "Boston Red Sox",
    "exit_velo": 100.8,
    "launch_angle": 23.0,
    "distance": 379.0
  },
  {
    "batter": "Wilyer Abreu",
    "batter_team": "Boston Red Sox",
    "pitcher": "Kai-Wei Teng",
    "pitcher_team": "Houston Astros",
    "exit_velo": 103.5,
    "launch_angle": 42.0,
    "distance": 372.0
  },
  {
    "batter": "Roman Anthony",
    "batter_team": "Boston Red Sox",
    "pitcher": "Bryan Abreu",
    "pitcher_team": "Houston Astros",
    "exit_velo": 106.9,
    "launch_angle": 32.0,
    "distance": 391.0
  },
  {
    "batter": "Corbin Carroll",
    "batter_team": "Arizona Diamondbacks",
    "pitcher": "Tarik Skubal",
    "pitcher_team": "Detroit Tigers",
    "exit_velo": 106.8,
    "launch_angle": 23.0,
    "distance": 410.0
  },
  {
    "batter": "Ram\u00f3n Laureano",
    "batter_team": "San Diego Padres",
    "pitcher": "Jos\u00e9 Butt\u00f3",
    "pitcher_team": "San Francisco Giants",
    "exit_velo": 101.0,
    "launch_angle": 36.0,
    "distance": 393.0
  },
  {
    "batter": "Paul Goldschmidt",
    "batter_team": "New York Yankees",
    "pitcher": "George Kirby",
    "pitcher_team": "Seattle Mariners",
    "exit_velo": 105.3,
    "launch_angle": 34.0,
    "distance": 406.0
  },
  {
    "batter": "Ben Rice",
    "batter_team": "New York Yankees",
    "pitcher": "Cooper Criswell",
    "pitcher_team": "Seattle Mariners",
    "exit_velo": 108.2,
    "launch_angle": 29.0,
    "distance": 427.0
  },
  {
    "batter": "Jonathan India",
    "batter_team": "Kansas City Royals",
    "pitcher": "Zak Kent",
    "pitcher_team": "Minnesota Twins",
    "exit_velo": 101.1,
    "launch_angle": 29.0,
    "distance": 397.0
  },
  {
    "batter": "Kyle Isbel",
    "batter_team": "Kansas City Royals",
    "pitcher": "Zak Kent",
    "pitcher_team": "Minnesota Twins",
    "exit_velo": 98.6,
    "launch_angle": 26.0,
    "distance": 360.0
  },
  {
    "batter": "Josh Bell",
    "batter_team": "Minnesota Twins",
    "pitcher": "Bailey Falter",
    "pitcher_team": "Kansas City Royals",
    "exit_velo": 104.4,
    "launch_angle": 45.0,
    "distance": 383.0
  },
  {
    "batter": "Gabriel Arias",
    "batter_team": "Cleveland Guardians",
    "pitcher": "Yoshinobu Yamamoto",
    "pitcher_team": "Los Angeles Dodgers",
    "exit_velo": 107.4,
    "launch_angle": 35.0,
    "distance": 407.0
  },
  {
    "batter": "Jos\u00e9 Ram\u00edrez",
    "batter_team": "Cleveland Guardians",
    "pitcher": "Tanner Scott",
    "pitcher_team": "Los Angeles Dodgers",
    "exit_velo": 105.4,
    "launch_angle": 36.0,
    "distance": 376.0
  },
  {
    "batter": "Freddie Freeman",
    "batter_team": "Los Angeles Dodgers",
    "pitcher": "Cade Smith",
    "pitcher_team": "Cleveland Guardians",
    "exit_velo": 104.4,
    "launch_angle": 28.0,
    "distance": 407.0
  }
];