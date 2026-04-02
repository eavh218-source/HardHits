const reportDate = 'April 01, 2026';
const statcastData = [
    {
        "player_name": "Morillo, Juan",
        "des": "Colt Keith grounds out, second baseman Ildemaro Vargas to first baseman Jose Fernandez.",
        "launch_speed": 103.8,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 50
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Jose Fernandez lines out sharply to center fielder Parker Meadows.",
        "launch_speed": 101.6,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 304
    },
    {
        "player_name": "Clarke, Taylor",
        "des": "Dillon Dingler singles on a sharp line drive to left fielder Tim Tawa.",
        "launch_speed": 107.1,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 249
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Geraldo Perdomo grounds into a double play, third baseman Kevin McGonigle to second baseman Gleyber Torres to first baseman Colt Keith. Corbin Carroll out at 2nd. Geraldo Perdomo out at 1st.",
        "launch_speed": 105.5,
        "launch_angle": -20,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Corbin Carroll singles on a ground ball to third baseman Kevin McGonigle.",
        "launch_speed": 109.5,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 133
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Tim Tawa reaches on a throwing error by shortstop Javier B\u00e1ez.",
        "launch_speed": 101.9,
        "launch_angle": -9,
        "events": "field_error",
        "hit_distance_sc": 17
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Ketel Marte grounds out, shortstop Javier B\u00e1ez to first baseman Colt Keith.",
        "launch_speed": 108.5,
        "launch_angle": -7,
        "events": "field_out",
        "hit_distance_sc": 12
    },
    {
        "player_name": "Gallen, Zac",
        "des": "Colt Keith doubles (4) on a sharp fly ball to right fielder Corbin Carroll.",
        "launch_speed": 101.5,
        "launch_angle": 26,
        "events": "double",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Gallen, Zac",
        "des": "Dillon Dingler flies out sharply to right fielder Corbin Carroll.",
        "launch_speed": 103.8,
        "launch_angle": 23,
        "events": "field_out",
        "hit_distance_sc": 351
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Corbin Carroll homers (2) on a fly ball to center field.",
        "launch_speed": 106.8,
        "launch_angle": 23,
        "events": "home_run",
        "hit_distance_sc": 410
    },
    {
        "player_name": "Lee, Dylan",
        "des": "Foul",
        "launch_speed": 108.8,
        "launch_angle": 9,
        "events": NaN,
        "hit_distance_sc": 174
    },
    {
        "player_name": "Medina, Luis",
        "des": "Drake Baldwin flies out sharply to center fielder Denzel Clarke.",
        "launch_speed": 102.8,
        "launch_angle": 23,
        "events": "field_out",
        "hit_distance_sc": 400
    },
    {
        "player_name": "Suarez, Robert",
        "des": "Shea Langeliers singles on a sharp line drive to right fielder Ronald Acu\u00f1a Jr.",
        "launch_speed": 104.3,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 221
    },
    {
        "player_name": "Sale, Chris",
        "des": "Denzel Clarke grounds out, shortstop Mauricio Dub\u00f3n to first baseman Matt Olson.",
        "launch_speed": 108.7,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 66
    },
    {
        "player_name": "Sale, Chris",
        "des": "Max Muncy grounds out, shortstop Mauricio Dub\u00f3n to first baseman Matt Olson.",
        "launch_speed": 106.5,
        "launch_angle": 3,
        "events": "field_out",
        "hit_distance_sc": 69
    },
    {
        "player_name": "Alvarado, Elvis",
        "des": "Drake Baldwin doubles (1) on a line drive to center fielder Denzel Clarke. Dominic Smith scores. Mauricio Dub\u00f3n scores.",
        "launch_speed": 107.4,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 363
    },
    {
        "player_name": "Alvarado, Elvis",
        "des": "Foul",
        "launch_speed": 107.5,
        "launch_angle": 34,
        "events": NaN,
        "hit_distance_sc": 380
    },
    {
        "player_name": "Alvarado, Elvis",
        "des": "Ronald Acu\u00f1a Jr. flies out sharply to right fielder Brent Rooker. Dominic Smith to 3rd.",
        "launch_speed": 103.4,
        "launch_angle": 42,
        "events": "field_out",
        "hit_distance_sc": 337
    },
    {
        "player_name": "Severino, Luis",
        "des": "Mauricio Dub\u00f3n singles on a line drive to center fielder Denzel Clarke. Dominic Smith to 2nd.",
        "launch_speed": 102.6,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 200
    },
    {
        "player_name": "Severino, Luis",
        "des": "Dominic Smith singles on a sharp line drive to right fielder Brent Rooker.",
        "launch_speed": 104.7,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 203
    },
    {
        "player_name": "Severino, Luis",
        "des": "Foul",
        "launch_speed": 103.2,
        "launch_angle": 27,
        "events": NaN,
        "hit_distance_sc": 372
    },
    {
        "player_name": "Su\u00e1rez, Albert",
        "des": "Corey Seager homers (3) on a fly ball to right center field.",
        "launch_speed": 101.8,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 422
    },
    {
        "player_name": "Baumler, Carter",
        "des": "Pete Alonso lines out to third baseman Josh Jung.",
        "launch_speed": 107.0,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 142
    },
    {
        "player_name": "Baumler, Carter",
        "des": "Taylor Ward singles on a sharp line drive to left fielder Wyatt Langford. Leody Taveras to 2nd.",
        "launch_speed": 102.8,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 260
    },
    {
        "player_name": "Su\u00e1rez, Albert",
        "des": "Josh Jung singles on a ground ball to center fielder Leody Taveras.",
        "launch_speed": 101.4,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 120
    },
    {
        "player_name": "Baumler, Carter",
        "des": "Dylan Beavers homers (1) on a fly ball to right center field.",
        "launch_speed": 103.8,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 401
    },
    {
        "player_name": "Rogers, Trevor",
        "des": "Jake Burger grounds out, third baseman Coby Mayo to first baseman Pete Alonso.",
        "launch_speed": 104.8,
        "launch_angle": -3,
        "events": "field_out",
        "hit_distance_sc": 30
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Samuel Basallo homers (1) on a fly ball to center field.",
        "launch_speed": 109.5,
        "launch_angle": 24,
        "events": "home_run",
        "hit_distance_sc": 437
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Pete Alonso flies out sharply to center fielder Wyatt Langford.",
        "launch_speed": 101.6,
        "launch_angle": 38,
        "events": "field_out",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Foul",
        "launch_speed": 104.7,
        "launch_angle": -6,
        "events": NaN,
        "hit_distance_sc": 25
    },
    {
        "player_name": "Rogers, Trevor",
        "des": "Josh Jung singles on a ground ball to right fielder Colton Cowser. Andrew McCutchen scores. Danny Jansen to 2nd.",
        "launch_speed": 103.9,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 102
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Dylan Beavers singles on a ground ball to center fielder Wyatt Langford. Pete Alonso to 2nd.",
        "launch_speed": 101.3,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 154
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Samuel Basallo flies out sharply to center fielder Wyatt Langford.",
        "launch_speed": 103.7,
        "launch_angle": 38,
        "events": "field_out",
        "hit_distance_sc": 377
    },
    {
        "player_name": "Rogers, Trevor",
        "des": "Brandon Nimmo doubles (1) on a sharp line drive to right fielder Colton Cowser. Sam Haggerty to 3rd.",
        "launch_speed": 104.1,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 244
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Samuel Basallo singles on a ground ball to right fielder Andrew McCutchen. Pete Alonso to 2nd.",
        "launch_speed": 107.7,
        "launch_angle": 0,
        "events": "single",
        "hit_distance_sc": 50
    },
    {
        "player_name": "Suter, Brent",
        "des": "Alex Bregman grounds out, third baseman Yo\u00e1n Moncada to first baseman Jeimer Candelario.",
        "launch_speed": 101.2,
        "launch_angle": -3,
        "events": "field_out",
        "hit_distance_sc": 32
    },
    {
        "player_name": "Boyd, Matthew",
        "des": "Foul",
        "launch_speed": 106.5,
        "launch_angle": 34,
        "events": NaN,
        "hit_distance_sc": 383
    },
    {
        "player_name": "Boyd, Matthew",
        "des": "Zach Neto singles on a sharp line drive to left fielder Ian Happ.",
        "launch_speed": 103.9,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 210
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Carson Kelly grounds out, shortstop Zach Neto to first baseman Jeimer Candelario.",
        "launch_speed": 102.2,
        "launch_angle": 4,
        "events": "field_out",
        "hit_distance_sc": 74
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Matt Shaw singles on a ground ball to center fielder Mike Trout. Carson Kelly scores. Michael Busch to 3rd.",
        "launch_speed": 103.6,
        "launch_angle": -5,
        "events": "single",
        "hit_distance_sc": 28
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Michael Busch singles on a line drive to second baseman Oswald Peraza, deflected by first baseman Jeimer Candelario. Ian Happ to 3rd. Carson Kelly to 2nd.",
        "launch_speed": 104.7,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 129
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Ian Happ grounds into a force out, fielded by shortstop Zach Neto. Alex Bregman out at 2nd. Ian Happ advances to 2nd, on a throwing error by shortstop Zach Neto.",
        "launch_speed": 102.7,
        "launch_angle": -21,
        "events": "force_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Alex Bregman singles on a ground ball to center fielder Mike Trout. Nico Hoerner scores.",
        "launch_speed": 103.3,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 76
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Nico Hoerner doubles (3) on a sharp line drive to center fielder Mike Trout. Miguel Amaya scores.",
        "launch_speed": 102.6,
        "launch_angle": 12,
        "events": "double",
        "hit_distance_sc": 281
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Dansby Swanson flies out sharply to center fielder Mike Trout.",
        "launch_speed": 102.0,
        "launch_angle": 25,
        "events": "field_out",
        "hit_distance_sc": 375
    },
    {
        "player_name": "Boyd, Matthew",
        "des": "Jo Adell grounds out, second baseman Nico Hoerner to first baseman Michael Busch.",
        "launch_speed": 108.6,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 16
    },
    {
        "player_name": "Pag\u00e1n, Emilio",
        "des": "Bryan Reynolds homers (2) on a fly ball to right field. Nick Gonzales scores.",
        "launch_speed": 107.7,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 413
    },
    {
        "player_name": "Lawrence, Justin",
        "des": "Elly De La Cruz grounds out sharply, second baseman Nick Gonzales to first baseman Spencer Horwitz.",
        "launch_speed": 103.6,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Ashcraft, Graham",
        "des": "Bryan Reynolds flies out sharply to center fielder Dane Myers.",
        "launch_speed": 102.9,
        "launch_angle": 44,
        "events": "field_out",
        "hit_distance_sc": 344
    },
    {
        "player_name": "Ashcraft, Graham",
        "des": "Nick Gonzales doubles (2) on a sharp line drive to right fielder Spencer Steer.",
        "launch_speed": 102.4,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 339
    },
    {
        "player_name": "Montgomery, Mason",
        "des": "Eugenio Su\u00e1rez homers (2) on a fly ball to left field. Sal Stewart scores.",
        "launch_speed": 107.3,
        "launch_angle": 37,
        "events": "home_run",
        "hit_distance_sc": 410
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Marcell Ozuna lines out sharply to center fielder TJ Friedl.",
        "launch_speed": 102.4,
        "launch_angle": 22,
        "events": "field_out",
        "hit_distance_sc": 376
    },
    {
        "player_name": "Skenes, Paul",
        "des": "Tyler Stephenson singles on a sharp ground ball to right fielder Jake Mangum.",
        "launch_speed": 106.6,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 73
    },
    {
        "player_name": "Skenes, Paul",
        "des": "Nathaniel Lowe doubles (1) on a sharp line drive to center fielder Oneil Cruz. Elly De La Cruz scores.",
        "launch_speed": 106.8,
        "launch_angle": 15,
        "events": "double",
        "hit_distance_sc": 330
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Oneil Cruz lines out sharply to center fielder TJ Friedl.",
        "launch_speed": 103.3,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 374
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Oneil Cruz homers (3) on a fly ball to right field. Bryan Reynolds scores. Marcell Ozuna scores.",
        "launch_speed": 107.4,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 407
    },
    {
        "player_name": "Abreu, Bryan",
        "des": "Roman Anthony homers (1) on a line drive to left center field.",
        "launch_speed": 106.9,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 391
    },
    {
        "player_name": "Whitlock, Garrett",
        "des": "Foul",
        "launch_speed": 105.9,
        "launch_angle": 17,
        "events": NaN,
        "hit_distance_sc": 264
    },
    {
        "player_name": "Teng, Kai-Wei",
        "des": "Wilyer Abreu homers (3) on a fly ball to right field.",
        "launch_speed": 103.5,
        "launch_angle": 42,
        "events": "home_run",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Teng, Kai-Wei",
        "des": "Willson Contreras grounds out, shortstop Carlos Correa to first baseman Christian Walker.",
        "launch_speed": 103.6,
        "launch_angle": -15,
        "events": "field_out",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Coulombe, Danny",
        "des": "Yordan Alvarez lines out sharply to center fielder Ceddanne Rafaela.",
        "launch_speed": 103.6,
        "launch_angle": 19,
        "events": "field_out",
        "hit_distance_sc": 357
    },
    {
        "player_name": "King, Bryan",
        "des": "Masataka Yoshida grounds out, third baseman Isaac Paredes to first baseman Christian Walker.",
        "launch_speed": 103.0,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Crochet, Garrett",
        "des": "Carlos Correa homers (1) on a line drive to left field. Jose Altuve scores. Yordan Alvarez scores.",
        "launch_speed": 106.7,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 402
    },
    {
        "player_name": "Burrows, Mike",
        "des": "Wilyer Abreu singles on a ground ball to center fielder Jake Meyers. Willson Contreras to 2nd.",
        "launch_speed": 101.0,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 47
    },
    {
        "player_name": "Burrows, Mike",
        "des": "Connor Wong singles on a ground ball to right fielder Cam Smith. Isiah Kiner-Falefa to 3rd.",
        "launch_speed": 107.0,
        "launch_angle": -22,
        "events": "single",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Crochet, Garrett",
        "des": "Carlos Correa grounds into a double play, third baseman Caleb Durbin to second baseman Isiah Kiner-Falefa to first baseman Willson Contreras. Yordan Alvarez to 3rd. Isaac Paredes out at 2nd. Carlos Correa out at 1st.",
        "launch_speed": 104.7,
        "launch_angle": 3,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 72
    },
    {
        "player_name": "Burrows, Mike",
        "des": "Connor Wong doubles (3) on a line drive to left fielder Brice Matthews. Isiah Kiner-Falefa to 3rd.",
        "launch_speed": 106.6,
        "launch_angle": 5,
        "events": "double",
        "hit_distance_sc": 116
    },
    {
        "player_name": "Crochet, Garrett",
        "des": "Jake Meyers lines out sharply to center fielder Ceddanne Rafaela.",
        "launch_speed": 102.6,
        "launch_angle": 21,
        "events": "field_out",
        "hit_distance_sc": 345
    },
    {
        "player_name": "Crochet, Garrett",
        "des": "Christian Walker singles on a sharp line drive to left fielder Jarren Duran. Isaac Paredes scores. Carlos Correa to 2nd.",
        "launch_speed": 110.7,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 210
    },
    {
        "player_name": "Crochet, Garrett",
        "des": "Yordan Alvarez doubles (3) on a sharp line drive to right fielder Wilyer Abreu.",
        "launch_speed": 102.2,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 319
    },
    {
        "player_name": "Falter, Bailey",
        "des": "Brooks Lee lines out sharply to left fielder Isaac Collins.",
        "launch_speed": 103.8,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 322
    },
    {
        "player_name": "Falter, Bailey",
        "des": "Josh Bell homers (1) on a fly ball to left field. Matt Wallner scores. Ryan Jeffers scores.",
        "launch_speed": 104.4,
        "launch_angle": 45,
        "events": "home_run",
        "hit_distance_sc": 383
    },
    {
        "player_name": "Cruz, Steven",
        "des": "Foul",
        "launch_speed": 112.0,
        "launch_angle": -30,
        "events": NaN,
        "hit_distance_sc": 3
    },
    {
        "player_name": "Lange, Alex",
        "des": "Foul",
        "launch_speed": 112.0,
        "launch_angle": 10,
        "events": NaN,
        "hit_distance_sc": 184
    },
    {
        "player_name": "Kent, Zak",
        "des": "Salvador Perez grounds into a force out, shortstop Brooks Lee to second baseman Luke Keaschall. Vinnie Pasquantino out at 2nd.",
        "launch_speed": 101.0,
        "launch_angle": 0,
        "events": "force_out",
        "hit_distance_sc": 54
    },
    {
        "player_name": "Kent, Zak",
        "des": "Tyler Tolbert grounds into a double play, shortstop Brooks Lee to second baseman Luke Keaschall to first baseman Victor Caratini. Nick Loftin out at 2nd. Tyler Tolbert out at 1st.",
        "launch_speed": 102.8,
        "launch_angle": -2,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Kent, Zak",
        "des": "Jonathan India hits a grand slam (1) to left field. Maikel Garcia scores. Vinnie Pasquantino scores. Salvador Perez scores.",
        "launch_speed": 101.1,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 397
    },
    {
        "player_name": "Laweryson, Cody",
        "des": "Bobby Witt Jr. out on a sacrifice fly to right fielder Matt Wallner. Isaac Collins scores. Kyle Isbel to 3rd.",
        "launch_speed": 103.6,
        "launch_angle": 14,
        "events": "sac_fly",
        "hit_distance_sc": 310
    },
    {
        "player_name": "Laweryson, Cody",
        "des": "Kyle Isbel singles on a ground ball to shortstop Brooks Lee. Jac Caglianone to 3rd. Isaac Collins to 2nd.",
        "launch_speed": 103.5,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 116
    },
    {
        "player_name": "Mears, Nick",
        "des": "Luke Keaschall lines out sharply to center fielder Kyle Isbel.",
        "launch_speed": 104.1,
        "launch_angle": 13,
        "events": "field_out",
        "hit_distance_sc": 296
    },
    {
        "player_name": "Laweryson, Cody",
        "des": "Salvador Perez doubles (1) on a line drive to left fielder Austin Martin.",
        "launch_speed": 106.7,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 177
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Royce Lewis doubles (1) on a sharp line drive to right fielder Jac Caglianone.",
        "launch_speed": 102.0,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 290
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Bobby Witt Jr. grounds into a double play, second baseman Luke Keaschall to first baseman Victor Caratini. Kyle Isbel out at 2nd. Bobby Witt Jr. out at 1st.",
        "launch_speed": 104.6,
        "launch_angle": 2,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 89
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Maikel Garcia out on a sacrifice fly to center fielder Byron Buxton. Jac Caglianone scores. Isaac Collins to 3rd.",
        "launch_speed": 102.2,
        "launch_angle": 27,
        "events": "sac_fly",
        "hit_distance_sc": null
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Jac Caglianone singles on a line drive to center fielder Byron Buxton.",
        "launch_speed": 104.9,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 196
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Ryan Jeffers doubles (1) on a sharp line drive to left fielder Isaac Collins.",
        "launch_speed": 105.7,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 335
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Matt Wallner flies out sharply to right fielder Jac Caglianone.",
        "launch_speed": 105.5,
        "launch_angle": 52,
        "events": "field_out",
        "hit_distance_sc": 314
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Vinnie Pasquantino doubles (1) on a sharp line drive to right fielder Matt Wallner.",
        "launch_speed": 106.5,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 305
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Isaac Collins doubles (1) on a sharp line drive to right fielder Matt Wallner. Jac Caglianone scores.",
        "launch_speed": 110.9,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 297
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Jac Caglianone doubles (2) on a sharp line drive to center fielder Byron Buxton.",
        "launch_speed": 110.1,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 332
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Foul",
        "launch_speed": 103.5,
        "launch_angle": 15,
        "events": NaN,
        "hit_distance_sc": 252
    },
    {
        "player_name": "Smith, Cade",
        "des": "Will Smith flies out sharply to center fielder Daniel Schneemann.",
        "launch_speed": 102.3,
        "launch_angle": 26,
        "events": "field_out",
        "hit_distance_sc": 392
    },
    {
        "player_name": "Smith, Cade",
        "des": "Freddie Freeman homers (1) on a fly ball to center field.",
        "launch_speed": 104.4,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 407
    },
    {
        "player_name": "Armstrong, Shawn",
        "des": "Andy Pages doubles (1) on a sharp line drive to left fielder Steven Kwan. Teoscar Hern\u00e1ndez to 3rd.",
        "launch_speed": 101.9,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 291
    },
    {
        "player_name": "Scott, Tanner",
        "des": "Jos\u00e9 Ram\u00edrez homers (1) on a fly ball to left field. Angel Mart\u00ednez scores.",
        "launch_speed": 105.4,
        "launch_angle": 36,
        "events": "home_run",
        "hit_distance_sc": 376
    },
    {
        "player_name": "Scott, Tanner",
        "des": "Foul",
        "launch_speed": 102.5,
        "launch_angle": -13,
        "events": NaN,
        "hit_distance_sc": 11
    },
    {
        "player_name": "Klein, Will",
        "des": "Bo Naylor singles on a sharp ground ball to right fielder Kyle Tucker.",
        "launch_speed": 104.3,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 118
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Jos\u00e9 Ram\u00edrez flies out sharply to right fielder Kyle Tucker.",
        "launch_speed": 103.3,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 315
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Foul",
        "launch_speed": 105.5,
        "launch_angle": 6,
        "events": NaN,
        "hit_distance_sc": 116
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Foul",
        "launch_speed": 106.5,
        "launch_angle": 23,
        "events": NaN,
        "hit_distance_sc": 327
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Brayan Rocchio singles on a sharp line drive to right fielder Kyle Tucker. Bo Naylor to 3rd.",
        "launch_speed": 103.3,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 213
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Brayan Rocchio grounds out sharply, second baseman Alex Freeland to first baseman Freddie Freeman.",
        "launch_speed": 103.8,
        "launch_angle": -4,
        "events": "field_out",
        "hit_distance_sc": 26
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Gabriel Arias homers (1) on a fly ball to center field.",
        "launch_speed": 107.4,
        "launch_angle": 35,
        "events": "home_run",
        "hit_distance_sc": 407
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Daniel Schneemann doubles (3) on a sharp line drive to right fielder Kyle Tucker.",
        "launch_speed": 105.5,
        "launch_angle": 7,
        "events": "double",
        "hit_distance_sc": 135
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Bo Naylor flies out sharply to center fielder Andy Pages.",
        "launch_speed": 102.4,
        "launch_angle": 24,
        "events": "field_out",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Colson Montgomery grounds out, shortstop Otto Lopez to first baseman Graham Pauley.",
        "launch_speed": 105.4,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 39
    },
    {
        "player_name": "Leasure, Jordan",
        "des": "Otto Lopez homers (1) on a fly ball to left field.",
        "launch_speed": 102.8,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 392
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Luisangel Acu\u00f1a singles on a line drive to center fielder Jakob Marsee.",
        "launch_speed": 103.9,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 162
    },
    {
        "player_name": "Murphy, Chris",
        "des": "Javier Sanoja doubles (2) on a sharp line drive to left fielder Andrew Benintendi.",
        "launch_speed": 103.6,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Sims, Lucas",
        "des": "Graham Pauley doubles (2) on a sharp fly ball to right fielder Derek Hill.",
        "launch_speed": 105.1,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Smith, Shane",
        "des": "Heriberto Hern\u00e1ndez singles on a sharp line drive to left fielder Andrew Benintendi. Owen Caissie to 2nd.",
        "launch_speed": 109.9,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 243
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Munetaka Murakami flies out sharply to center fielder Jakob Marsee.",
        "launch_speed": 105.1,
        "launch_angle": 39,
        "events": "field_out",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Englert, Mason",
        "des": "Garrett Mitchell doubles (1) on a ground ball to right fielder Jonny DeLuca. William Contreras scores. Christian Yelich scores. Jake Bauers to 3rd.",
        "launch_speed": 112.6,
        "launch_angle": 4,
        "events": "double",
        "hit_distance_sc": 95
    },
    {
        "player_name": "Jax, Griffin",
        "des": "Christian Yelich singles on a ground ball to right fielder Jonny DeLuca. Joey Ortiz scores. Brice Turang scores. William Contreras to 2nd.",
        "launch_speed": 110.2,
        "launch_angle": -16,
        "events": "single",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Jax, Griffin",
        "des": "Joey Ortiz singles on a ground ball to center fielder Cedric Mullins.",
        "launch_speed": 104.1,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 139
    },
    {
        "player_name": "Misiorowski, Jacob",
        "des": "Ben Williamson grounds into a force out, second baseman Brice Turang to shortstop Joey Ortiz. Chandler Simpson out at 2nd. Ben Williamson to 1st.",
        "launch_speed": 101.4,
        "launch_angle": -1,
        "events": "force_out",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Rasmussen, Drew",
        "des": "Brice Turang homers (1) on a fly ball to center field. David Hamilton scores.",
        "launch_speed": 104.9,
        "launch_angle": 24,
        "events": "home_run",
        "hit_distance_sc": 392
    },
    {
        "player_name": "Misiorowski, Jacob",
        "des": "Jonathan Aranda lines out sharply to center fielder Garrett Mitchell.",
        "launch_speed": 101.7,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 313
    },
    {
        "player_name": "Misiorowski, Jacob",
        "des": "Yandy D\u00edaz homers (2) on a fly ball to right field. Richie Palacios scores.",
        "launch_speed": 102.3,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 364
    },
    {
        "player_name": "Rasmussen, Drew",
        "des": "Foul",
        "launch_speed": 102.1,
        "launch_angle": 16,
        "events": NaN,
        "hit_distance_sc": 267
    },
    {
        "player_name": "Rasmussen, Drew",
        "des": "Jake Bauers lines out sharply to left fielder Chandler Simpson.",
        "launch_speed": 103.8,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 306
    },
    {
        "player_name": "Misiorowski, Jacob",
        "des": "Foul",
        "launch_speed": 102.7,
        "launch_angle": -19,
        "events": NaN,
        "hit_distance_sc": 9
    },
    {
        "player_name": "Misiorowski, Jacob",
        "des": "Foul",
        "launch_speed": 111.6,
        "launch_angle": 9,
        "events": NaN,
        "hit_distance_sc": 184
    },
    {
        "player_name": "Rasmussen, Drew",
        "des": "William Contreras lines out to third baseman Junior Caminero.",
        "launch_speed": 108.1,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 137
    },
    {
        "player_name": "Henry, Cole",
        "des": "Justin Crawford singles on a sharp ground ball to right fielder Joey Wiemer. Brandon Marsh scores. J.T. Realmuto to 2nd.",
        "launch_speed": 106.9,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 69
    },
    {
        "player_name": "P\u00e9rez, Cionel",
        "des": "Bryce Harper homers (1) on a fly ball to right center field.",
        "launch_speed": 106.0,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 425
    },
    {
        "player_name": "Pop, Zach",
        "des": "Foul",
        "launch_speed": 106.0,
        "launch_angle": 9,
        "events": NaN,
        "hit_distance_sc": 165
    },
    {
        "player_name": "P\u00e9rez, Cionel",
        "des": "Kyle Schwarber flies out sharply to center fielder Jacob Young.",
        "launch_speed": 103.9,
        "launch_angle": 30,
        "events": "field_out",
        "hit_distance_sc": 403
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "Daylen Lile singles on a sharp ground ball to right fielder Adolis Garc\u00eda. Brady House to 2nd.",
        "launch_speed": 102.1,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 51
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "Curtis Mead lines out sharply to left fielder Brandon Marsh.",
        "launch_speed": 108.2,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 339
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "James Wood grounds into a force out, second baseman Bryson Stott to shortstop Trea Turner. Jacob Young out at 2nd.",
        "launch_speed": 105.2,
        "launch_angle": -11,
        "events": "force_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Cavalli, Cade",
        "des": "Phillies challenged (tag play), call on the field was upheld: Kyle Schwarber doubles (1) on a sharp line drive to right fielder Joey Wiemer. Trea Turner scores. Kyle Schwarber out at 3rd on the throw, right fielder Joey Wiemer to shortstop CJ Abrams to third baseman Brady House.",
        "launch_speed": 105.5,
        "launch_angle": 14,
        "events": "double",
        "hit_distance_sc": 282
    },
    {
        "player_name": "Butt\u00f3, Jos\u00e9",
        "des": "Ram\u00f3n Laureano homers (2) on a fly ball to left center field. Manny Machado scores.",
        "launch_speed": 101.0,
        "launch_angle": 36,
        "events": "home_run",
        "hit_distance_sc": 393
    },
    {
        "player_name": "Kilian, Caleb",
        "des": "Fernando Tatis Jr. grounds out, third baseman Matt Chapman to first baseman Casey Schmitt.",
        "launch_speed": 103.4,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 32
    },
    {
        "player_name": "Kilian, Caleb",
        "des": "Freddy Fermin reaches on a fielder's choice out, third baseman Matt Chapman to catcher Patrick Bailey. Jake Cronenworth out at home. Gavin Sheets to 3rd.",
        "launch_speed": 101.3,
        "launch_angle": 4,
        "events": "fielders_choice_out",
        "hit_distance_sc": 82
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Gavin Sheets doubles (2) on a sharp line drive to center fielder Harrison Bader. Ram\u00f3n Laureano scores. Jake Cronenworth to 3rd.",
        "launch_speed": 105.5,
        "launch_angle": 10,
        "events": "double",
        "hit_distance_sc": 197
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Jake Cronenworth singles on a ground ball to second baseman Luis Arraez. Ram\u00f3n Laureano to 2nd.",
        "launch_speed": 108.6,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 118
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Manny Machado grounds out, shortstop Willy Adames to first baseman Casey Schmitt.",
        "launch_speed": 102.4,
        "launch_angle": -23,
        "events": "field_out",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Jackson Merrill lines out sharply to right fielder Jung Hoo Lee.",
        "launch_speed": 104.7,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 280
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Fernando Tatis Jr. lines out sharply to center fielder Harrison Bader. Bryce Johnson to 3rd.",
        "launch_speed": 107.3,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Jackson Merrill singles on a sharp line drive to right fielder Jung Hoo Lee.",
        "launch_speed": 102.8,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 202
    },
    {
        "player_name": "Bednar, David",
        "des": "Randy Arozarena doubles (3) on a sharp line drive to left fielder Cody Bellinger, deflected by third baseman Ryan McMahon.",
        "launch_speed": 104.1,
        "launch_angle": 10,
        "events": "double",
        "hit_distance_sc": 154
    },
    {
        "player_name": "Criswell, Cooper",
        "des": "Paul Goldschmidt grounds out, second baseman Cole Young to first baseman Josh Naylor.",
        "launch_speed": 102.3,
        "launch_angle": -9,
        "events": "field_out",
        "hit_distance_sc": 12
    },
    {
        "player_name": "Criswell, Cooper",
        "des": "Ben Rice homers (1) on a fly ball to right center field.",
        "launch_speed": 108.2,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 427
    },
    {
        "player_name": "Doval, Camilo",
        "des": "Dominic Canzone singles on a sharp line drive to right fielder Aaron Judge.",
        "launch_speed": 101.7,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 164
    },
    {
        "player_name": "Kirby, George",
        "des": "Jazz Chisholm Jr. flies out to first baseman Josh Naylor in foul territory.",
        "launch_speed": 101.0,
        "launch_angle": 61,
        "events": "field_out",
        "hit_distance_sc": 199
    },
    {
        "player_name": "Kirby, George",
        "des": "Paul Goldschmidt homers (1) on a fly ball to left center field. Trent Grisham scores. Ben Rice scores.",
        "launch_speed": 105.3,
        "launch_angle": 34,
        "events": "home_run",
        "hit_distance_sc": 406
    },
    {
        "player_name": "Kirby, George",
        "des": "Austin Wells singles on a ground ball to third baseman Brendan Donovan.",
        "launch_speed": 106.5,
        "launch_angle": -7,
        "events": "single",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Kirby, George",
        "des": "Foul",
        "launch_speed": 112.3,
        "launch_angle": 17,
        "events": NaN,
        "hit_distance_sc": 275
    },
    {
        "player_name": "Kirby, George",
        "des": "Ben Rice grounds out, pitcher George Kirby to second baseman Cole Young to first baseman Josh Naylor.",
        "launch_speed": 102.5,
        "launch_angle": -4,
        "events": "field_out",
        "hit_distance_sc": 29
    },
    {
        "player_name": "Kirby, George",
        "des": "Austin Wells grounds into a double play, first baseman Josh Naylor to shortstop Leo Rivas. Amed Rosario out at 2nd. Austin Wells out at 1st.",
        "launch_speed": 101.4,
        "launch_angle": -22,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Kirby, George",
        "des": "Aaron Judge flies out sharply to right fielder Luke Raley.",
        "launch_speed": 103.8,
        "launch_angle": 45,
        "events": "field_out",
        "hit_distance_sc": 317
    },
    {
        "player_name": "Bruihl, Justin",
        "des": "Francisco Alvarez reaches on a fielder's choice out, pitcher Justin Bruihl to second baseman JJ Wetherholt. Marcus Semien out at 3rd. Francisco Alvarez to 2nd.",
        "launch_speed": 103.2,
        "launch_angle": -11,
        "events": "fielders_choice_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Williams, Devin",
        "des": "Nolan Gorman flies out sharply to right fielder Carson Benge.",
        "launch_speed": 102.1,
        "launch_angle": 49,
        "events": "field_out",
        "hit_distance_sc": 285
    },
    {
        "player_name": "O'Brien, Riley",
        "des": "Jorge Polanco doubles (2) on a sharp line drive to right fielder Jordan Walker.",
        "launch_speed": 103.5,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 364
    },
    {
        "player_name": "Weaver, Luke",
        "des": "Alec Burleson lines out sharply to right fielder Carson Benge.",
        "launch_speed": 111.0,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 364
    },
    {
        "player_name": "Stanek, Ryne",
        "des": "Brett Baty flies out sharply to center fielder Victor Scott II.",
        "launch_speed": 101.9,
        "launch_angle": 44,
        "events": "field_out",
        "hit_distance_sc": 311
    },
    {
        "player_name": "Stanek, Ryne",
        "des": "Luis Robert Jr. singles on a sharp ground ball to left fielder Thomas Saggese.",
        "launch_speed": 112.4,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 131
    },
    {
        "player_name": "Brazob\u00e1n, Huascar",
        "des": "Nolan Gorman singles on a sharp line drive to center fielder Luis Robert Jr. JJ Wetherholt scores. Iv\u00e1n Herrera to 3rd.",
        "launch_speed": 102.2,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 171
    },
    {
        "player_name": "Peralta, Freddy",
        "des": "Foul",
        "launch_speed": 107.1,
        "launch_angle": 10,
        "events": NaN,
        "hit_distance_sc": 180
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "Juan Soto homers (1) on a fly ball to right field.",
        "launch_speed": 107.6,
        "launch_angle": 42,
        "events": "home_run",
        "hit_distance_sc": 344
    },
    {
        "player_name": "Peralta, Freddy",
        "des": "Iv\u00e1n Herrera grounds out, third baseman Bo Bichette to first baseman Mark Vientos.",
        "launch_speed": 101.3,
        "launch_angle": -22,
        "events": "field_out",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "Francisco Lindor lines out sharply to left fielder Thomas Saggese.",
        "launch_speed": 104.1,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 341
    },
    {
        "player_name": "Peralta, Freddy",
        "des": "Foul",
        "launch_speed": 101.2,
        "launch_angle": -14,
        "events": NaN,
        "hit_distance_sc": 9
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "Marcus Semien grounds out, shortstop Masyn Winn to first baseman Alec Burleson.",
        "launch_speed": 102.8,
        "launch_angle": 5,
        "events": "field_out",
        "hit_distance_sc": 91
    },
    {
        "player_name": "Herget, Jimmy",
        "des": "Vladimir Guerrero Jr. lines out sharply to center fielder Brenton Doyle.",
        "launch_speed": 108.3,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 338
    },
    {
        "player_name": "Little, Brendon",
        "des": "Tyler Freeman singles on a ground ball to center fielder Daulton Varsho. Brenton Doyle scores.",
        "launch_speed": 103.5,
        "launch_angle": 0,
        "events": "single",
        "hit_distance_sc": 55
    },
    {
        "player_name": "Vodnik, Victor",
        "des": "Alejandro Kirk singles on a line drive to center fielder Brenton Doyle.",
        "launch_speed": 104.7,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 165
    },
    {
        "player_name": "Senzatela, Antonio",
        "des": "Andr\u00e9s Gim\u00e9nez grounds out, shortstop Ezequiel Tovar to first baseman Willi Castro.",
        "launch_speed": 108.9,
        "launch_angle": -28,
        "events": "field_out",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Rogers, Tyler",
        "des": "TJ Rumfield singles on a sharp line drive to right fielder Addison Barger.",
        "launch_speed": 102.1,
        "launch_angle": 18,
        "events": "single",
        "hit_distance_sc": 250
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Troy Johnston doubles (1) on a sharp line drive to center fielder Myles Straw.",
        "launch_speed": 101.6,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 326
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Brenton Doyle grounds into a force out, third baseman Kazuma Okamoto to second baseman Ernie Clement. TJ Rumfield out at 2nd.",
        "launch_speed": 104.5,
        "launch_angle": 3,
        "events": "force_out",
        "hit_distance_sc": 83
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Foul",
        "launch_speed": 103.1,
        "launch_angle": 35,
        "events": NaN,
        "hit_distance_sc": 362
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Foul",
        "launch_speed": 102.4,
        "launch_angle": -23,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Hunter Goodman lines out sharply to third baseman Kazuma Okamoto.",
        "launch_speed": 111.1,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 146
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Alejandro Kirk grounds into a double play, shortstop Ezequiel Tovar to second baseman Willi Castro to first baseman TJ Rumfield. Kazuma Okamoto out at 2nd. Alejandro Kirk out at 1st.",
        "launch_speed": 101.3,
        "launch_angle": -11,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Kazuma Okamoto singles on a sharp line drive to left fielder Jordan Beck.",
        "launch_speed": 103.6,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 237
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Vladimir Guerrero Jr. grounds out, shortstop Ezequiel Tovar to first baseman TJ Rumfield.",
        "launch_speed": 110.6,
        "launch_angle": -6,
        "events": "field_out",
        "hit_distance_sc": 14
    }
];