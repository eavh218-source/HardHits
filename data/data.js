const reportDate = 'April 06, 2026';
const statcastData = [
    {
        "player_name": "Zerpa, Angel",
        "des": "Willson Contreras homers (2) on a fly ball to left field.",
        "launch_speed": 105.3,
        "launch_angle": 33,
        "events": "home_run",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Watson, Ryan",
        "des": "Sal Frelick singles on a ground ball to center fielder Ceddanne Rafaela. Luis Rengifo scores.",
        "launch_speed": 104.2,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 14
    },
    {
        "player_name": "Watson, Ryan",
        "des": "Luis Rengifo doubles (4) on a sharp line drive to right fielder Wilyer Abreu.",
        "launch_speed": 103.1,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 330
    },
    {
        "player_name": "Whitlock, Garrett",
        "des": "Jake Bauers flies out sharply to right fielder Wilyer Abreu.",
        "launch_speed": 103.0,
        "launch_angle": 26,
        "events": "field_out",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Woodruff, Brandon",
        "des": "Masataka Yoshida singles on a ground ball to center fielder Garrett Mitchell. Ceddanne Rafaela to 3rd.",
        "launch_speed": 103.6,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 71
    },
    {
        "player_name": "Coulombe, Danny",
        "des": "Christian Yelich singles on a ground ball to third baseman Caleb Durbin. David Hamilton scores. Brice Turang to 3rd. William Contreras to 2nd.",
        "launch_speed": 101.9,
        "launch_angle": -5,
        "events": "single",
        "hit_distance_sc": 30
    },
    {
        "player_name": "Bello, Brayan",
        "des": "Sal Frelick singles on a ground ball to second baseman Marcelo Mayer.",
        "launch_speed": 101.4,
        "launch_angle": -21,
        "events": "single",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Woodruff, Brandon",
        "des": "Caleb Durbin singles on a ground ball to left fielder Blake Perkins.",
        "launch_speed": 101.2,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 61
    },
    {
        "player_name": "Woodruff, Brandon",
        "des": "Roman Anthony doubles (1) on a sharp fly ball to left fielder Blake Perkins.",
        "launch_speed": 101.8,
        "launch_angle": 25,
        "events": "double",
        "hit_distance_sc": 333
    },
    {
        "player_name": "Bello, Brayan",
        "des": "Christian Yelich doubles (2) on a fly ball to left fielder Roman Anthony. William Contreras to 3rd.",
        "launch_speed": 101.4,
        "launch_angle": 36,
        "events": "double",
        "hit_distance_sc": 329
    },
    {
        "player_name": "Helsley, Ryan",
        "des": "Colson Montgomery grounds out sharply, first baseman Pete Alonso to pitcher Ryan Helsley. Munetaka Murakami to 3rd. Miguel Vargas to 2nd.",
        "launch_speed": 103.6,
        "launch_angle": -13,
        "events": "field_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Wells, Tyler",
        "des": "Foul",
        "launch_speed": 104.2,
        "launch_angle": 44,
        "events": NaN,
        "hit_distance_sc": 338
    },
    {
        "player_name": "Fedde, Erick",
        "des": "Colton Cowser flies out sharply to right fielder Tristan Peters.",
        "launch_speed": 104.6,
        "launch_angle": 39,
        "events": "field_out",
        "hit_distance_sc": 356
    },
    {
        "player_name": "Fedde, Erick",
        "des": "Gunnar Henderson homers (3) on a fly ball to right field.",
        "launch_speed": 105.3,
        "launch_angle": 30,
        "events": "home_run",
        "hit_distance_sc": 389
    },
    {
        "player_name": "Fedde, Erick",
        "des": "Pete Alonso lines out sharply to center fielder Luisangel Acu\u00f1a.",
        "launch_speed": 104.9,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 342
    },
    {
        "player_name": "Young, Brandon",
        "des": "Munetaka Murakami flies out sharply to right fielder Tyler O'Neill.",
        "launch_speed": 102.3,
        "launch_angle": 48,
        "events": "field_out",
        "hit_distance_sc": 322
    },
    {
        "player_name": "Young, Brandon",
        "des": "Chase Meidroth singles on a sharp ground ball to center fielder Colton Cowser.",
        "launch_speed": 101.8,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 20
    },
    {
        "player_name": "Fedde, Erick",
        "des": "Foul",
        "launch_speed": 102.1,
        "launch_angle": -2,
        "events": NaN,
        "hit_distance_sc": 60
    },
    {
        "player_name": "Fedde, Erick",
        "des": "Tyler O'Neill grounds out sharply, second baseman Chase Meidroth to first baseman Munetaka Murakami.",
        "launch_speed": 103.4,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 147
    },
    {
        "player_name": "Young, Brandon",
        "des": "Miguel Vargas grounds out sharply, shortstop Gunnar Henderson to first baseman Pete Alonso.",
        "launch_speed": 101.5,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Taylor, Grant",
        "des": "Adley Rutschman flies out sharply to right fielder Tristan Peters.",
        "launch_speed": 101.3,
        "launch_angle": 41,
        "events": "field_out",
        "hit_distance_sc": 342
    },
    {
        "player_name": "Taylor, Grant",
        "des": "Pete Alonso flies out sharply to right fielder Tristan Peters.",
        "launch_speed": 101.6,
        "launch_angle": 63,
        "events": "field_out",
        "hit_distance_sc": 197
    },
    {
        "player_name": "Taylor, Grant",
        "des": "Taylor Ward doubles (5) on a sharp line drive to center fielder Luisangel Acu\u00f1a.",
        "launch_speed": 105.7,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 347
    },
    {
        "player_name": "Allard, Kolby",
        "des": "Maikel Garcia doubles (4) on a sharp line drive to left fielder CJ Kayfus.",
        "launch_speed": 103.5,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 356
    },
    {
        "player_name": "Strahm, Matt",
        "des": "Brayan Rocchio homers (1) on a fly ball to left center field.",
        "launch_speed": 101.7,
        "launch_angle": 34,
        "events": "home_run",
        "hit_distance_sc": 377
    },
    {
        "player_name": "Allard, Kolby",
        "des": "Jac Caglianone grounds out, shortstop Brayan Rocchio to first baseman Kyle Manzardo.",
        "launch_speed": 110.8,
        "launch_angle": -16,
        "events": "field_out",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Allard, Kolby",
        "des": "Jonathan India homers (2) on a fly ball to left center field. Carter Jensen scores.",
        "launch_speed": 101.8,
        "launch_angle": 30,
        "events": "home_run",
        "hit_distance_sc": 380
    },
    {
        "player_name": "Allard, Kolby",
        "des": "Carter Jensen singles on a ground ball to left fielder CJ Kayfus.",
        "launch_speed": 110.3,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 12
    },
    {
        "player_name": "Wacha, Michael",
        "des": "Foul",
        "launch_speed": 103.6,
        "launch_angle": -40,
        "events": NaN,
        "hit_distance_sc": 2
    },
    {
        "player_name": "Pallette, Peyton",
        "des": "Bobby Witt Jr. grounds into a double play, third baseman Jos\u00e9 Ram\u00edrez to second baseman Daniel Schneemann to first baseman Kyle Manzardo. Kyle Isbel out at 2nd. Bobby Witt Jr. out at 1st.",
        "launch_speed": 108.9,
        "launch_angle": 1,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 61
    },
    {
        "player_name": "Pallette, Peyton",
        "des": "Maikel Garcia flies out to center fielder Steven Kwan.",
        "launch_speed": 101.0,
        "launch_angle": 23,
        "events": "field_out",
        "hit_distance_sc": 374
    },
    {
        "player_name": "Pallette, Peyton",
        "des": "Jac Caglianone singles on a sharp line drive to left fielder CJ Kayfus.",
        "launch_speed": 102.1,
        "launch_angle": 16,
        "events": "single",
        "hit_distance_sc": 290
    },
    {
        "player_name": "Pallette, Peyton",
        "des": "Foul",
        "launch_speed": 101.6,
        "launch_angle": -25,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Pallette, Peyton",
        "des": "Carter Jensen homers (2) on a line drive to right field.",
        "launch_speed": 111.2,
        "launch_angle": 21,
        "events": "home_run",
        "hit_distance_sc": 359
    },
    {
        "player_name": "Wacha, Michael",
        "des": "Gabriel Arias doubles (1) on a sharp line drive to right fielder Jac Caglianone.",
        "launch_speed": 108.7,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 324
    },
    {
        "player_name": "Wacha, Michael",
        "des": "CJ Kayfus flies out sharply to center fielder Kyle Isbel.",
        "launch_speed": 101.7,
        "launch_angle": 36,
        "events": "field_out",
        "hit_distance_sc": 349
    },
    {
        "player_name": "Wacha, Michael",
        "des": "Bo Naylor grounds out, first baseman Vinnie Pasquantino to pitcher Michael Wacha.",
        "launch_speed": 102.2,
        "launch_angle": -23,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Bibee, Tanner",
        "des": "Bobby Witt Jr. singles on a ground ball to first baseman Kyle Manzardo. Maikel Garcia to 3rd.",
        "launch_speed": 107.8,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 37
    },
    {
        "player_name": "Bibee, Tanner",
        "des": "Maikel Garcia doubles (3) on a sharp line drive to left fielder CJ Kayfus.",
        "launch_speed": 104.7,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 357
    },
    {
        "player_name": "Bibee, Tanner",
        "des": "Jac Caglianone grounds out, shortstop Gabriel Arias to first baseman Kyle Manzardo.",
        "launch_speed": 106.8,
        "launch_angle": -20,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Bibee, Tanner",
        "des": "Foul",
        "launch_speed": 109.5,
        "launch_angle": -1,
        "events": NaN,
        "hit_distance_sc": 38
    },
    {
        "player_name": "Bibee, Tanner",
        "des": "Bobby Witt Jr. lines out sharply to center fielder Steven Kwan.",
        "launch_speed": 104.4,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 335
    },
    {
        "player_name": "Wacha, Michael",
        "des": "Chase DeLauter grounds out, shortstop Bobby Witt Jr. to first baseman Vinnie Pasquantino.",
        "launch_speed": 104.8,
        "launch_angle": -21,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Wacha, Michael",
        "des": "Jos\u00e9 Ram\u00edrez lines out to center fielder Kyle Isbel.",
        "launch_speed": 101.8,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 339
    },
    {
        "player_name": "Bibee, Tanner",
        "des": "Bobby Witt Jr. singles on a sharp line drive to left fielder CJ Kayfus.",
        "launch_speed": 115.6,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 231
    },
    {
        "player_name": "De Los Santos, Enyel",
        "des": "Troy Johnston grounds out, shortstop Jeremy Pe\u00f1a to first baseman Christian Walker.",
        "launch_speed": 105.2,
        "launch_angle": 0,
        "events": "field_out",
        "hit_distance_sc": 49
    },
    {
        "player_name": "Agnos, Zach",
        "des": "Jake Meyers doubles (2) on a sharp line drive to center fielder Brenton Doyle. Yainer Diaz to 3rd.",
        "launch_speed": 102.6,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Agnos, Zach",
        "des": "Cam Smith doubles (2) on a sharp line drive to right fielder Troy Johnston. Christian Walker to 3rd.",
        "launch_speed": 106.9,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Kyle Karros singles on a ground ball to right fielder Cam Smith. Willi Castro scores. Brenton Doyle to 3rd. Jake McCarthy to 2nd.",
        "launch_speed": 108.3,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 151
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Foul",
        "launch_speed": 106.0,
        "launch_angle": -35,
        "events": NaN,
        "hit_distance_sc": 2
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Willi Castro singles on a sharp line drive to right fielder Cam Smith. TJ Rumfield scores.",
        "launch_speed": 101.9,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 248
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Hunter Goodman singles on a ground ball to left fielder Joey Loperfido. Kyle Karros scores. Edouard Julien to 3rd.",
        "launch_speed": 104.4,
        "launch_angle": -2,
        "events": "single",
        "hit_distance_sc": 33
    },
    {
        "player_name": "Bolton, Cody",
        "des": "TJ Rumfield grounds out, third baseman Carlos Correa to first baseman Christian Walker.",
        "launch_speed": 101.7,
        "launch_angle": -5,
        "events": "field_out",
        "hit_distance_sc": 25
    },
    {
        "player_name": "Feltner, Ryan",
        "des": "Joey Loperfido grounds out, shortstop Willi Castro to first baseman TJ Rumfield.",
        "launch_speed": 105.7,
        "launch_angle": -6,
        "events": "field_out",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Feltner, Ryan",
        "des": "Cam Smith homers (3) on a fly ball to center field.",
        "launch_speed": 110.9,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 462
    },
    {
        "player_name": "Feltner, Ryan",
        "des": "Carlos Correa flies out sharply to center fielder Brenton Doyle.",
        "launch_speed": 103.5,
        "launch_angle": 27,
        "events": "field_out",
        "hit_distance_sc": 411
    },
    {
        "player_name": "Feltner, Ryan",
        "des": "Yordan Alvarez flies out sharply to center fielder Brenton Doyle.",
        "launch_speed": 103.5,
        "launch_angle": 27,
        "events": "field_out",
        "hit_distance_sc": 412
    },
    {
        "player_name": "Bolton, Cody",
        "des": "Hunter Goodman flies out to left fielder Joey Loperfido.",
        "launch_speed": 104.0,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 318
    },
    {
        "player_name": "Bolton, Cody",
        "des": "Edouard Julien singles on a line drive to left fielder Joey Loperfido, deflected by pitcher Cody Bolton.",
        "launch_speed": 102.0,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 102
    },
    {
        "player_name": "Feltner, Ryan",
        "des": "Carlos Correa doubles (2) on a sharp line drive to right fielder Troy Johnston. Jose Altuve scores.",
        "launch_speed": 104.7,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 363
    },
    {
        "player_name": "Silseth, Chase",
        "des": "Mauricio Dub\u00f3n homers (2) on a fly ball to left field.",
        "launch_speed": 103.4,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Soriano, Jos\u00e9",
        "des": "Foul",
        "launch_speed": 111.1,
        "launch_angle": 29,
        "events": NaN,
        "hit_distance_sc": 407
    },
    {
        "player_name": "Soriano, Jos\u00e9",
        "des": "Ronald Acu\u00f1a Jr. flies out sharply to right fielder Jorge Soler.",
        "launch_speed": 104.8,
        "launch_angle": 25,
        "events": "field_out",
        "hit_distance_sc": 354
    },
    {
        "player_name": "Payamps, Joel",
        "des": "Oswald Peraza lines out sharply to center fielder Michael Harris II.",
        "launch_speed": 102.1,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 316
    },
    {
        "player_name": "Sale, Chris",
        "des": "Jo Adell homers (1) on a fly ball to left center field. Jorge Soler scores.",
        "launch_speed": 113.2,
        "launch_angle": 24,
        "events": "home_run",
        "hit_distance_sc": 411
    },
    {
        "player_name": "Soriano, Jos\u00e9",
        "des": "Mike Yastrzemski grounds out, first baseman Jeimer Candelario to pitcher Jos\u00e9 Soriano.",
        "launch_speed": 103.6,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 37
    },
    {
        "player_name": "Sale, Chris",
        "des": "Zach Neto homers (4) on a fly ball to left field.",
        "launch_speed": 107.0,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 400
    },
    {
        "player_name": "Soriano, Jos\u00e9",
        "des": "Drake Baldwin homers (5) on a fly ball to right center field.",
        "launch_speed": 102.1,
        "launch_angle": 34,
        "events": "home_run",
        "hit_distance_sc": 397
    },
    {
        "player_name": "Pag\u00e1n, Emilio",
        "des": "Otto Lopez grounds out, shortstop Elly De La Cruz to first baseman Sal Stewart.",
        "launch_speed": 106.3,
        "launch_angle": -5,
        "events": "field_out",
        "hit_distance_sc": 24
    },
    {
        "player_name": "Phillips, Tyler",
        "des": "Will Benson grounds out, second baseman Javier Sanoja to first baseman Liam Hicks.",
        "launch_speed": 109.5,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 141
    },
    {
        "player_name": "Phillips, Tyler",
        "des": "Sal Stewart flies out sharply to right fielder Owen Caissie.",
        "launch_speed": 102.5,
        "launch_angle": 29,
        "events": "field_out",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Santillan, Tony",
        "des": "Javier Sanoja grounds out, shortstop Elly De La Cruz to first baseman Sal Stewart.",
        "launch_speed": 103.7,
        "launch_angle": -15,
        "events": "field_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Junk, Janson",
        "des": "Spencer Steer lines out sharply to center fielder Jakob Marsee.",
        "launch_speed": 102.7,
        "launch_angle": 22,
        "events": "field_out",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Williamson, Brandon",
        "des": "Otto Lopez singles on a ground ball to left fielder Spencer Steer, deflected by third baseman Ke'Bryan Hayes.",
        "launch_speed": 105.0,
        "launch_angle": -10,
        "events": "single",
        "hit_distance_sc": 12
    },
    {
        "player_name": "Williamson, Brandon",
        "des": "Jakob Marsee lines out sharply to center fielder TJ Friedl.",
        "launch_speed": 103.5,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 309
    },
    {
        "player_name": "Junk, Janson",
        "des": "Sal Stewart singles on a ground ball to center fielder Jakob Marsee. Elly De La Cruz scores.",
        "launch_speed": 103.1,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 136
    },
    {
        "player_name": "Junk, Janson",
        "des": "Elly De La Cruz doubles (1) on a ground ball to right fielder Austin Slater.",
        "launch_speed": 111.9,
        "launch_angle": -3,
        "events": "double",
        "hit_distance_sc": 30
    },
    {
        "player_name": "Williamson, Brandon",
        "des": "Heriberto Hern\u00e1ndez lines out sharply to left fielder Spencer Steer.",
        "launch_speed": 101.6,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 287
    },
    {
        "player_name": "Williamson, Brandon",
        "des": "Otto Lopez grounds out, second baseman Matt McLain to first baseman Sal Stewart.",
        "launch_speed": 101.7,
        "launch_angle": 3,
        "events": "field_out",
        "hit_distance_sc": 79
    },
    {
        "player_name": "Junk, Janson",
        "des": "TJ Friedl singles on a ground ball to center fielder Jakob Marsee.",
        "launch_speed": 101.5,
        "launch_angle": 0,
        "events": "single",
        "hit_distance_sc": 52
    },
    {
        "player_name": "Banda, Anthony",
        "des": "Spencer Torkelson flies out sharply to center fielder James Outman.",
        "launch_speed": 103.5,
        "launch_angle": 30,
        "events": "field_out",
        "hit_distance_sc": 376
    },
    {
        "player_name": "Mize, Casey",
        "des": "Foul",
        "launch_speed": 106.7,
        "launch_angle": 34,
        "events": NaN,
        "hit_distance_sc": 369
    },
    {
        "player_name": "Mize, Casey",
        "des": "Victor Caratini singles on a sharp ground ball to right fielder Zach McKinstry.",
        "launch_speed": 104.2,
        "launch_angle": -2,
        "events": "single",
        "hit_distance_sc": 35
    },
    {
        "player_name": "Mize, Casey",
        "des": "Luke Keaschall homers (1) on a fly ball to left field. Trevor Larnach scores.",
        "launch_speed": 101.8,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 367
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Zach McKinstry singles on a ground ball to right fielder Matt Wallner. Gleyber Torres scores. Colt Keith scores. Spencer Torkelson to 3rd. Zach McKinstry to 2nd.",
        "launch_speed": 101.2,
        "launch_angle": -2,
        "events": "single",
        "hit_distance_sc": 35
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Foul",
        "launch_speed": 103.4,
        "launch_angle": -29,
        "events": NaN,
        "hit_distance_sc": 3
    },
    {
        "player_name": "Ryan, Joe",
        "des": "Colt Keith doubles (5) on a sharp line drive to right fielder Matt Wallner. Kevin McGonigle scores. Gleyber Torres to 3rd.",
        "launch_speed": 101.1,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 184
    },
    {
        "player_name": "Mize, Casey",
        "des": "Trevor Larnach singles on a ground ball to second baseman Gleyber Torres. Byron Buxton to 3rd.",
        "launch_speed": 104.6,
        "launch_angle": -2,
        "events": "single",
        "hit_distance_sc": 38
    },
    {
        "player_name": "Mize, Casey",
        "des": "Byron Buxton doubles (2) on a sharp line drive to left fielder Matt Vierling.",
        "launch_speed": 104.5,
        "launch_angle": 10,
        "events": "double",
        "hit_distance_sc": 177
    },
    {
        "player_name": "Lawrence, Justin",
        "des": "Foul",
        "launch_speed": 104.5,
        "launch_angle": -1,
        "events": NaN,
        "hit_distance_sc": 65
    },
    {
        "player_name": "Mattson, Isaac",
        "des": "Fernando Tatis Jr. grounds out, second baseman Brandon Lowe to first baseman Spencer Horwitz.",
        "launch_speed": 111.5,
        "launch_angle": 4,
        "events": "field_out",
        "hit_distance_sc": 118
    },
    {
        "player_name": "Marinaccio, Ron",
        "des": "Marcell Ozuna grounds out, shortstop Xander Bogaerts to first baseman Gavin Sheets.",
        "launch_speed": 101.4,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 51
    },
    {
        "player_name": "Ram\u00edrez, Yohan",
        "des": "Jake Cronenworth doubles (1) on a sharp fly ball to right fielder Ryan O'Hearn. Freddy Fermin scores.",
        "launch_speed": 106.0,
        "launch_angle": 23,
        "events": "double",
        "hit_distance_sc": 332
    },
    {
        "player_name": "Ram\u00edrez, Yohan",
        "des": "Gavin Sheets grounds out, second baseman Brandon Lowe to first baseman Spencer Horwitz.",
        "launch_speed": 107.9,
        "launch_angle": 5,
        "events": "field_out",
        "hit_distance_sc": 114
    },
    {
        "player_name": "M\u00e1rquez, Germ\u00e1n",
        "des": "Oneil Cruz singles on a ground ball to right fielder Fernando Tatis Jr.",
        "launch_speed": 112.4,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 30
    },
    {
        "player_name": "Chandler, Bubba",
        "des": "Ram\u00f3n Laureano grounds into a force out, shortstop Konnor Griffin to second baseman Brandon Lowe. Jake Cronenworth out at 2nd. Ram\u00f3n Laureano to 1st.",
        "launch_speed": 105.9,
        "launch_angle": -4,
        "events": "force_out",
        "hit_distance_sc": 21
    },
    {
        "player_name": "Chandler, Bubba",
        "des": "Nick Castellanos doubles (2) on a sharp line drive to left fielder Bryan Reynolds. Manny Machado scores. Gavin Sheets to 3rd.",
        "launch_speed": 103.5,
        "launch_angle": 12,
        "events": "double",
        "hit_distance_sc": 209
    },
    {
        "player_name": "Chandler, Bubba",
        "des": "Foul",
        "launch_speed": 107.9,
        "launch_angle": 13,
        "events": NaN,
        "hit_distance_sc": 232
    },
    {
        "player_name": "Chandler, Bubba",
        "des": "Xander Bogaerts singles on a ground ball to left fielder Bryan Reynolds. Manny Machado to 2nd.",
        "launch_speed": 101.4,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 127
    },
    {
        "player_name": "M\u00e1rquez, Germ\u00e1n",
        "des": "Foul",
        "launch_speed": 101.8,
        "launch_angle": -24,
        "events": NaN,
        "hit_distance_sc": 4
    },
    {
        "player_name": "M\u00e1rquez, Germ\u00e1n",
        "des": "Bryan Reynolds singles on a sharp line drive to right fielder Fernando Tatis Jr. Brandon Lowe to 3rd.",
        "launch_speed": 106.6,
        "launch_angle": 21,
        "events": "single",
        "hit_distance_sc": 320
    },
    {
        "player_name": "Chandler, Bubba",
        "des": "Jake Cronenworth singles on a ground ball to right fielder Ryan O'Hearn.",
        "launch_speed": 102.4,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 117
    },
    {
        "player_name": "M\u00e1rquez, Germ\u00e1n",
        "des": "Nick Gonzales singles on a ground ball to center fielder Jackson Merrill. Ryan O'Hearn to 2nd.",
        "launch_speed": 106.1,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 145
    },
    {
        "player_name": "M\u00e1rquez, Germ\u00e1n",
        "des": "Oneil Cruz grounds out, shortstop Xander Bogaerts to first baseman Gavin Sheets.",
        "launch_speed": 102.1,
        "launch_angle": -6,
        "events": "field_out",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Chandler, Bubba",
        "des": "Jackson Merrill flies out sharply to center fielder Oneil Cruz.",
        "launch_speed": 101.9,
        "launch_angle": 37,
        "events": "field_out",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Duran, Jhoan",
        "des": "Willy Adames doubles (4) on a sharp fly ball to right fielder Adolis Garc\u00eda.",
        "launch_speed": 104.8,
        "launch_angle": 23,
        "events": "double",
        "hit_distance_sc": 366
    },
    {
        "player_name": "Tidwell, Blade",
        "des": "Bryson Stott flies out sharply to right fielder Jung Hoo Lee.",
        "launch_speed": 101.9,
        "launch_angle": 24,
        "events": "field_out",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Houser, Adrian",
        "des": "J.T. Realmuto grounds into a double play, third baseman Matt Chapman to second baseman Luis Arraez to first baseman Rafael Devers. Brandon Marsh out at 2nd. J.T. Realmuto out at 1st.",
        "launch_speed": 101.8,
        "launch_angle": -23,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Mayza, Tim",
        "des": "Rafael Devers grounds out, shortstop Trea Turner to first baseman Bryce Harper.",
        "launch_speed": 103.6,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Bryce Harper doubles (3) on a sharp fly ball to right fielder Jung Hoo Lee. Justin Crawford scores. Kyle Schwarber to 3rd.",
        "launch_speed": 112.5,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 340
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Trea Turner grounds out, second baseman Luis Arraez to first baseman Rafael Devers. J.T. Realmuto scores. Justin Crawford to 3rd.",
        "launch_speed": 108.9,
        "launch_angle": -5,
        "events": "field_out",
        "hit_distance_sc": 18
    },
    {
        "player_name": "Houser, Adrian",
        "des": "J.T. Realmuto singles on a sharp line drive to center fielder Harrison Bader.",
        "launch_speed": 105.5,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 280
    },
    {
        "player_name": "Painter, Andrew",
        "des": "Jerar Encarnacion grounds out, shortstop Trea Turner to first baseman Bryce Harper.",
        "launch_speed": 106.1,
        "launch_angle": -17,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Painter, Andrew",
        "des": "Foul",
        "launch_speed": 101.0,
        "launch_angle": -29,
        "events": NaN,
        "hit_distance_sc": 4
    },
    {
        "player_name": "Painter, Andrew",
        "des": "Rafael Devers grounds out, shortstop Trea Turner to first baseman Bryce Harper.",
        "launch_speed": 103.9,
        "launch_angle": -6,
        "events": "field_out",
        "hit_distance_sc": 20
    },
    {
        "player_name": "Painter, Andrew",
        "des": "Matt Chapman triples (1) on a sharp fly ball to center fielder Justin Crawford. Willy Adames scores. Luis Arraez scores.",
        "launch_speed": 104.7,
        "launch_angle": 24,
        "events": "triple",
        "hit_distance_sc": 386
    },
    {
        "player_name": "Houser, Adrian",
        "des": "J.T. Realmuto singles on a ground ball to third baseman Matt Chapman.",
        "launch_speed": 101.8,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Painter, Andrew",
        "des": "Matt Chapman singles on a sharp line drive to center fielder Justin Crawford. Luis Arraez to 2nd.",
        "launch_speed": 113.0,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 162
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Alec Bohm grounds out, third baseman Matt Chapman to first baseman Rafael Devers.",
        "launch_speed": 102.2,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 13
    },
    {
        "player_name": "Houser, Adrian",
        "des": "Foul",
        "launch_speed": 103.5,
        "launch_angle": -16,
        "events": NaN,
        "hit_distance_sc": 8
    },
    {
        "player_name": "Baker, Bryan",
        "des": "Matt Shaw homers (2) on a line drive to left field.",
        "launch_speed": 106.0,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 366
    },
    {
        "player_name": "Martin, Riley",
        "des": "Nick Fortes grounds into a double play, second baseman Nico Hoerner to shortstop Dansby Swanson to first baseman Michael Busch. Chandler Simpson out at 2nd. Nick Fortes out at 1st.",
        "launch_speed": 103.3,
        "launch_angle": -1,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Maton, Phil",
        "des": "Jake Fraley lines out sharply to center fielder Pete Crow-Armstrong.",
        "launch_speed": 105.8,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 386
    },
    {
        "player_name": "Maton, Phil",
        "des": "Jonathan Aranda homers (3) on a fly ball to right center field. Ben Williamson scores.",
        "launch_speed": 103.5,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 403
    },
    {
        "player_name": "Taillon, Jameson",
        "des": "Nick Fortes doubles (3) on a sharp line drive to left fielder Ian Happ.",
        "launch_speed": 108.8,
        "launch_angle": 12,
        "events": "double",
        "hit_distance_sc": 275
    },
    {
        "player_name": "Seymour, Ian",
        "des": "Ian Happ doubles (2) on a line drive to left fielder Chandler Simpson.",
        "launch_speed": 103.5,
        "launch_angle": 3,
        "events": "double",
        "hit_distance_sc": 75
    },
    {
        "player_name": "Taillon, Jameson",
        "des": "Jonathan Aranda lines out sharply to right fielder Matt Shaw.",
        "launch_speed": 102.2,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 305
    },
    {
        "player_name": "McClanahan, Shane",
        "des": "Pete Crow-Armstrong grounds out to first baseman Jonathan Aranda.",
        "launch_speed": 105.5,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 65
    },
    {
        "player_name": "Taillon, Jameson",
        "des": "Junior Caminero homers (2) on a fly ball to left field.",
        "launch_speed": 106.8,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 401
    },
    {
        "player_name": "Taillon, Jameson",
        "des": "Cedric Mullins homers (1) on a line drive to right field. Chandler Simpson scores.",
        "launch_speed": 104.2,
        "launch_angle": 23,
        "events": "home_run",
        "hit_distance_sc": 367
    },
    {
        "player_name": "McClanahan, Shane",
        "des": "Nico Hoerner singles on a sharp line drive to left fielder Chandler Simpson. Michael Busch scores. Dansby Swanson scores. Miguel Amaya to 2nd.",
        "launch_speed": 103.3,
        "launch_angle": 13,
        "events": "single",
        "hit_distance_sc": 245
    },
    {
        "player_name": "Criswell, Cooper",
        "des": "Josh Jung singles on a ground ball to center fielder Julio Rodr\u00edguez.",
        "launch_speed": 106.3,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 54
    },
    {
        "player_name": "Gilbert, Logan",
        "des": "Foul",
        "launch_speed": 108.0,
        "launch_angle": 15,
        "events": NaN,
        "hit_distance_sc": 257
    },
    {
        "player_name": "Gilbert, Logan",
        "des": "Jake Burger doubles (4) on a line drive to left fielder Randy Arozarena. Corey Seager scores.",
        "launch_speed": 106.7,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 339
    },
    {
        "player_name": "Gilbert, Logan",
        "des": "Foul",
        "launch_speed": 106.5,
        "launch_angle": 4,
        "events": NaN,
        "hit_distance_sc": 88
    },
    {
        "player_name": "Gilbert, Logan",
        "des": "Jake Burger grounds into a double play, second baseman Cole Young to shortstop Leo Rivas to first baseman Josh Naylor. Corey Seager out at 2nd. Jake Burger out at 1st.",
        "launch_speed": 101.9,
        "launch_angle": -5,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 26
    },
    {
        "player_name": "Gilbert, Logan",
        "des": "Corey Seager singles on a ground ball to right fielder Luke Raley. Wyatt Langford scores.",
        "launch_speed": 104.7,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 120
    },
    {
        "player_name": "deGrom, Jacob",
        "des": "Cal Raleigh homers (1) on a fly ball to right field.",
        "launch_speed": 107.8,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 418
    },
    {
        "player_name": "deGrom, Jacob",
        "des": "Foul",
        "launch_speed": 102.0,
        "launch_angle": 40,
        "events": NaN,
        "hit_distance_sc": 342
    },
    {
        "player_name": "Henriquez, Edgardo",
        "des": "Foul",
        "launch_speed": 102.0,
        "launch_angle": -5,
        "events": NaN,
        "hit_distance_sc": 24
    },
    {
        "player_name": "Miles, Spencer",
        "des": "Dalton Rushing homers (3) on a fly ball to right center field.",
        "launch_speed": 109.0,
        "launch_angle": 23,
        "events": "home_run",
        "hit_distance_sc": 413
    },
    {
        "player_name": "Nance, Tommy",
        "des": "Teoscar Hern\u00e1ndez singles on a sharp line drive to right fielder Myles Straw. Kyle Tucker scores. Freddie Freeman scores.",
        "launch_speed": 110.7,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 209
    },
    {
        "player_name": "Nance, Tommy",
        "des": "Dalton Rushing homers (2) on a fly ball to right center field.",
        "launch_speed": 107.4,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 415
    },
    {
        "player_name": "Mantiply, Joe",
        "des": "Freddie Freeman lines out sharply to right fielder Myles Straw.",
        "launch_speed": 108.3,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 343
    },
    {
        "player_name": "Mantiply, Joe",
        "des": "Foul",
        "launch_speed": 105.9,
        "launch_angle": 17,
        "events": NaN,
        "hit_distance_sc": 253
    },
    {
        "player_name": "Mantiply, Joe",
        "des": "Shohei Ohtani homers (3) on a fly ball to center field.",
        "launch_speed": 107.8,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 414
    },
    {
        "player_name": "Fleming, Josh",
        "des": "Dalton Rushing singles on a sharp line drive to center fielder Daulton Varsho.",
        "launch_speed": 107.6,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 222
    },
    {
        "player_name": "Fleming, Josh",
        "des": "Foul",
        "launch_speed": 103.4,
        "launch_angle": 18,
        "events": NaN,
        "hit_distance_sc": 235
    },
    {
        "player_name": "Fleming, Josh",
        "des": "Kyle Tucker out on a sacrifice fly to center fielder Daulton Varsho. Dalton Rushing scores. Hyeseong Kim to 3rd.",
        "launch_speed": 102.6,
        "launch_angle": 42,
        "events": "sac_fly",
        "hit_distance_sc": 367
    },
    {
        "player_name": "Fleming, Josh",
        "des": "Andy Pages reaches on a fielding error by third baseman Kazuma Okamoto. Max Muncy to 3rd. Andy Pages to 2nd.",
        "launch_speed": 105.8,
        "launch_angle": 3,
        "events": "field_error",
        "hit_distance_sc": 72
    },
    {
        "player_name": "Fleming, Josh",
        "des": "Freddie Freeman homers (3) on a fly ball to right center field. Shohei Ohtani scores.",
        "launch_speed": 108.5,
        "launch_angle": 35,
        "events": "home_run",
        "hit_distance_sc": 438
    },
    {
        "player_name": "Fleming, Josh",
        "des": "Foul",
        "launch_speed": 106.6,
        "launch_angle": 19,
        "events": NaN,
        "hit_distance_sc": 322
    },
    {
        "player_name": "Scherzer, Max",
        "des": "Hyeseong Kim flies out sharply to center fielder Daulton Varsho.",
        "launch_speed": 103.0,
        "launch_angle": 23,
        "events": "field_out",
        "hit_distance_sc": 365
    },
    {
        "player_name": "Wrobleski, Justin",
        "des": "Kazuma Okamoto singles on a sharp ground ball to left fielder Teoscar Hern\u00e1ndez. George Springer to 2nd.",
        "launch_speed": 104.5,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 122
    },
    {
        "player_name": "Scherzer, Max",
        "des": "Teoscar Hern\u00e1ndez homers (2) on a fly ball to left field. Kyle Tucker scores.",
        "launch_speed": 102.2,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 371
    },
    {
        "player_name": "P\u00e9rez, Cionel",
        "des": "Alec Burleson flies out sharply to center fielder Joey Wiemer.",
        "launch_speed": 106.4,
        "launch_angle": 28,
        "events": "field_out",
        "hit_distance_sc": 370
    },
    {
        "player_name": "Svanson, Matt",
        "des": "Brady House homers (2) on a fly ball to center field. Curtis Mead scores.",
        "launch_speed": 110.0,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 423
    },
    {
        "player_name": "Stanek, Ryne",
        "des": "James Wood homers (3) on a line drive to center field. Drew Millas scores. Joey Wiemer scores.",
        "launch_speed": 114.3,
        "launch_angle": 18,
        "events": "home_run",
        "hit_distance_sc": 409
    },
    {
        "player_name": "Stanek, Ryne",
        "des": "Jos\u00e9 Tena flies out sharply to right fielder Jordan Walker.",
        "launch_speed": 104.3,
        "launch_angle": 48,
        "events": "field_out",
        "hit_distance_sc": 295
    },
    {
        "player_name": "Granillo, Andre",
        "des": "Foul",
        "launch_speed": 107.7,
        "launch_angle": 24,
        "events": NaN,
        "hit_distance_sc": 349
    },
    {
        "player_name": "Waldichuk, Ken",
        "des": "Jordan Walker homers (3) on a fly ball to right field.",
        "launch_speed": 104.4,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 378
    },
    {
        "player_name": "Waldichuk, Ken",
        "des": "Ram\u00f3n Ur\u00edas homers (2) on a fly ball to center field. Nolan Gorman scores.",
        "launch_speed": 106.8,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 414
    },
    {
        "player_name": "Pallante, Andre",
        "des": "Brady House doubles (2) on a sharp line drive to left fielder Thomas Saggese.",
        "launch_speed": 101.7,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 347
    },
    {
        "player_name": "Littell, Zack",
        "des": "Jordan Walker grounds into a force out, shortstop CJ Abrams to second baseman Nasim Nu\u00f1ez. Alec Burleson out at 2nd.",
        "launch_speed": 115.2,
        "launch_angle": -5,
        "events": "force_out",
        "hit_distance_sc": 21
    },
    {
        "player_name": "Littell, Zack",
        "des": "Thomas Saggese doubles (1) on a sharp line drive to left fielder Daylen Lile.",
        "launch_speed": 105.0,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 250
    },
    {
        "player_name": "Pallante, Andre",
        "des": "Daylen Lile flies out sharply to center fielder Victor Scott II.",
        "launch_speed": 103.7,
        "launch_angle": 39,
        "events": "field_out",
        "hit_distance_sc": 353
    },
    {
        "player_name": "Pallante, Andre",
        "des": "Luis Garc\u00eda Jr. grounds into a force out, fielded by shortstop Masyn Winn. James Wood out at 2nd.",
        "launch_speed": 106.2,
        "launch_angle": -6,
        "events": "force_out",
        "hit_distance_sc": 26
    },
    {
        "player_name": "Pallante, Andre",
        "des": "Jacob Young lines out sharply to center fielder Victor Scott II.",
        "launch_speed": 103.3,
        "launch_angle": 19,
        "events": "field_out",
        "hit_distance_sc": 342
    },
    {
        "player_name": "Pallante, Andre",
        "des": "Daylen Lile grounds out, shortstop Masyn Winn to first baseman Alec Burleson. James Wood scores. Luis Garc\u00eda Jr. to 3rd.",
        "launch_speed": 101.7,
        "launch_angle": -17,
        "events": "field_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Pallante, Andre",
        "des": "James Wood singles on a ground ball to shortstop Masyn Winn.",
        "launch_speed": 104.3,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 15
    }
];