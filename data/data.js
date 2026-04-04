const reportDate = 'April 03, 2026';
const statcastData = [
    {
        "player_name": "Iglesias, Raisel",
        "des": "Corbin Carroll flies out sharply to center fielder Michael Harris II.",
        "launch_speed": 102.0,
        "launch_angle": 52,
        "events": "field_out",
        "hit_distance_sc": 273
    },
    {
        "player_name": "Sewald, Paul",
        "des": "Matt Olson homers (2) on a fly ball to left center field.",
        "launch_speed": 107.3,
        "launch_angle": 30,
        "events": "home_run",
        "hit_distance_sc": 426
    },
    {
        "player_name": "Sewald, Paul",
        "des": "Ozzie Albies homers (2) on a fly ball to right field.",
        "launch_speed": 105.6,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 382
    },
    {
        "player_name": "Suarez, Robert",
        "des": "Tim Tawa grounds out, third baseman Austin Riley to first baseman Matt Olson.",
        "launch_speed": 103.8,
        "launch_angle": -3,
        "events": "field_out",
        "hit_distance_sc": 25
    },
    {
        "player_name": "Morillo, Juan",
        "des": "Drake Baldwin lines out sharply to center fielder Alek Thomas.",
        "launch_speed": 105.0,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 313
    },
    {
        "player_name": "Holmes, Grant",
        "des": "Ketel Marte singles on a sharp line drive to left fielder Eli White.",
        "launch_speed": 101.9,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 166
    },
    {
        "player_name": "Rodriguez, Eduardo",
        "des": "Matt Olson grounds out, second baseman Ketel Marte to first baseman Carlos Santana.",
        "launch_speed": 106.1,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 36
    },
    {
        "player_name": "Holmes, Grant",
        "des": "Ketel Marte lines out to pitcher Grant Holmes.",
        "launch_speed": 102.7,
        "launch_angle": 5,
        "events": "field_out",
        "hit_distance_sc": 102
    },
    {
        "player_name": "Rodriguez, Eduardo",
        "des": "Ronald Acu\u00f1a Jr. flies out sharply to right fielder Corbin Carroll.",
        "launch_speed": 101.1,
        "launch_angle": 37,
        "events": "field_out",
        "hit_distance_sc": 351
    },
    {
        "player_name": "Holmes, Grant",
        "des": "Alek Thomas flies out sharply to center fielder Michael Harris II.",
        "launch_speed": 102.8,
        "launch_angle": 29,
        "events": "field_out",
        "hit_distance_sc": 395
    },
    {
        "player_name": "Holmes, Grant",
        "des": "Nolan Arenado lines out sharply to left fielder Eli White.",
        "launch_speed": 103.3,
        "launch_angle": 14,
        "events": "field_out",
        "hit_distance_sc": 271
    },
    {
        "player_name": "Holmes, Grant",
        "des": "Ketel Marte grounds out, shortstop Mauricio Dub\u00f3n to first baseman Matt Olson.",
        "launch_speed": 107.2,
        "launch_angle": -16,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Ginn, J.T.",
        "des": "Nick Allen singles on a ground ball to left fielder Tyler Soderstrom.",
        "launch_speed": 105.8,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 104
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Lawrence Butler lines out to third baseman Nick Allen.",
        "launch_speed": 104.9,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 141
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Brent Rooker lines out sharply to left fielder Joey Loperfido.",
        "launch_speed": 109.6,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 350
    },
    {
        "player_name": "Weiss, Ryan",
        "des": "Max Muncy grounds into a double play, third baseman Nick Allen to second baseman Brice Matthews to first baseman Shay Whitcomb. Jacob Wilson to 3rd. Lawrence Butler out at 2nd. Max Muncy out at 1st.",
        "launch_speed": 102.7,
        "launch_angle": -21,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Mu\u00f1oz, Roddery",
        "des": "Tyler Soderstrom doubles (2) on a sharp line drive to center fielder Jake Meyers. Shea Langeliers scores.",
        "launch_speed": 111.7,
        "launch_angle": 10,
        "events": "double",
        "hit_distance_sc": 215
    },
    {
        "player_name": "Mu\u00f1oz, Roddery",
        "des": "Foul",
        "launch_speed": 113.7,
        "launch_angle": 25,
        "events": NaN,
        "hit_distance_sc": 377
    },
    {
        "player_name": "Mu\u00f1oz, Roddery",
        "des": "Max Muncy homers (2) on a fly ball to left field.",
        "launch_speed": 101.7,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 404
    },
    {
        "player_name": "Javier, Cristian",
        "des": "Shea Langeliers grounds into a double play, shortstop Jeremy Pe\u00f1a to second baseman Jose Altuve to first baseman Christian Walker. Denzel Clarke to 3rd. Nick Kurtz out at 2nd. Shea Langeliers out at 1st.",
        "launch_speed": 104.4,
        "launch_angle": -17,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Javier, Cristian",
        "des": "Max Muncy doubles (3) on a sharp line drive to center fielder Jake Meyers. Brent Rooker scores. Lawrence Butler scores.",
        "launch_speed": 104.9,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 315
    },
    {
        "player_name": "Springs, Jeffrey",
        "des": "Yordan Alvarez out on a sacrifice fly to right fielder Lawrence Butler. Yainer Diaz scores. Jeremy Pe\u00f1a to 3rd.",
        "launch_speed": 106.5,
        "launch_angle": 40,
        "events": "sac_fly",
        "hit_distance_sc": 369
    },
    {
        "player_name": "Javier, Cristian",
        "des": "Max Muncy singles on a sharp line drive to left fielder Brice Matthews.",
        "launch_speed": 109.9,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 196
    },
    {
        "player_name": "Javier, Cristian",
        "des": "Brent Rooker lines out sharply to left fielder Brice Matthews.",
        "launch_speed": 107.9,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 329
    },
    {
        "player_name": "Javier, Cristian",
        "des": "Nick Kurtz flies out sharply to left fielder Brice Matthews.",
        "launch_speed": 104.9,
        "launch_angle": 40,
        "events": "field_out",
        "hit_distance_sc": 366
    },
    {
        "player_name": "King, Michael",
        "des": "Wilyer Abreu singles on a sharp line drive to right fielder Fernando Tatis Jr.",
        "launch_speed": 113.1,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 205
    },
    {
        "player_name": "King, Michael",
        "des": "Willson Contreras homers (1) on a fly ball to center field.",
        "launch_speed": 108.7,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 423
    },
    {
        "player_name": "King, Michael",
        "des": "Roman Anthony singles on a ground ball to right fielder Fernando Tatis Jr.",
        "launch_speed": 107.3,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 53
    },
    {
        "player_name": "Gray, Sonny",
        "des": "Luis Campusano doubles (1) on a fly ball to center fielder Ceddanne Rafaela. Gavin Sheets scores.",
        "launch_speed": 101.7,
        "launch_angle": 24,
        "events": "double",
        "hit_distance_sc": 387
    },
    {
        "player_name": "Gray, Sonny",
        "des": "Gavin Sheets singles on a sharp line drive to right fielder Wilyer Abreu. Miguel Andujar scores.",
        "launch_speed": 101.2,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 158
    },
    {
        "player_name": "Gray, Sonny",
        "des": "Foul",
        "launch_speed": 108.2,
        "launch_angle": 25,
        "events": NaN,
        "hit_distance_sc": 342
    },
    {
        "player_name": "Dom\u00ednguez, Seranthony",
        "des": "Jes\u00fas S\u00e1nchez grounds out, shortstop Colson Montgomery to first baseman Munetaka Murakami.",
        "launch_speed": 104.5,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 52
    },
    {
        "player_name": "Dom\u00ednguez, Seranthony",
        "des": "Ernie Clement grounds out, shortstop Colson Montgomery to first baseman Munetaka Murakami. Davis Schneider to 3rd.",
        "launch_speed": 109.7,
        "launch_angle": -11,
        "events": "field_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Rogers, Tyler",
        "des": "Edgar Quero singles on a sharp ground ball to left fielder Myles Straw.",
        "launch_speed": 101.2,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 132
    },
    {
        "player_name": "Newcomb, Sean",
        "des": "Daulton Varsho doubles (1) on a sharp line drive to left fielder Austin Hays.",
        "launch_speed": 101.2,
        "launch_angle": 12,
        "events": "double",
        "hit_distance_sc": 260
    },
    {
        "player_name": "Newcomb, Sean",
        "des": "Alejandro Kirk grounds out sharply, third baseman Miguel Vargas to first baseman Munetaka Murakami.",
        "launch_speed": 105.4,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 57
    },
    {
        "player_name": "Leasure, Jordan",
        "des": "Andr\u00e9s Gim\u00e9nez homers (2) on a fly ball to right field. Ernie Clement scores.",
        "launch_speed": 105.3,
        "launch_angle": 35,
        "events": "home_run",
        "hit_distance_sc": 361
    },
    {
        "player_name": "Cease, Dylan",
        "des": "Edgar Quero lines out sharply to left fielder Jes\u00fas S\u00e1nchez.",
        "launch_speed": 101.0,
        "launch_angle": 21,
        "events": "field_out",
        "hit_distance_sc": 325
    },
    {
        "player_name": "Burke, Sean",
        "des": "Alejandro Kirk grounds out sharply, third baseman Miguel Vargas to first baseman Munetaka Murakami.",
        "launch_speed": 105.6,
        "launch_angle": 0,
        "events": "field_out",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Burke, Sean",
        "des": "Addison Barger lines out sharply to center fielder Luisangel Acu\u00f1a.",
        "launch_speed": 108.1,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 321
    },
    {
        "player_name": "Burke, Sean",
        "des": "George Springer singles on a sharp line drive to left fielder Austin Hays.",
        "launch_speed": 105.5,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 156
    },
    {
        "player_name": "Cease, Dylan",
        "des": "Edgar Quero grounds out sharply, second baseman Ernie Clement to first baseman Vladimir Guerrero Jr.",
        "launch_speed": 106.5,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 41
    },
    {
        "player_name": "Burke, Sean",
        "des": "Foul",
        "launch_speed": 101.6,
        "launch_angle": -18,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Cease, Dylan",
        "des": "Munetaka Murakami singles on a sharp line drive to center fielder Daulton Varsho. Chase Meidroth to 3rd.",
        "launch_speed": 107.5,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 306
    },
    {
        "player_name": "Webb, Jacob",
        "des": "Foul",
        "launch_speed": 105.0,
        "launch_angle": 47,
        "events": NaN,
        "hit_distance_sc": 333
    },
    {
        "player_name": "Harvey, Hunter",
        "des": "Chase DeLauter homers (5) on a fly ball to right field. Steven Kwan scores.",
        "launch_speed": 109.0,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 402
    },
    {
        "player_name": "Harvey, Hunter",
        "des": "Gabriel Arias homers (2) on a fly ball to right field.",
        "launch_speed": 101.9,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 358
    },
    {
        "player_name": "Brogdon, Connor",
        "des": "Foul",
        "launch_speed": 107.7,
        "launch_angle": 37,
        "events": NaN,
        "hit_distance_sc": 394
    },
    {
        "player_name": "Brogdon, Connor",
        "des": "Matt Shaw flies out sharply to center fielder Daniel Schneemann.",
        "launch_speed": 102.0,
        "launch_angle": 25,
        "events": "field_out",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Milner, Hoby",
        "des": "Kyle Manzardo flies out sharply to center fielder Pete Crow-Armstrong.",
        "launch_speed": 105.5,
        "launch_angle": 36,
        "events": "field_out",
        "hit_distance_sc": 324
    },
    {
        "player_name": "Rea, Colin",
        "des": "Daniel Schneemann doubles (4) on a sharp fly ball to center fielder Pete Crow-Armstrong.",
        "launch_speed": 106.8,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 379
    },
    {
        "player_name": "Rea, Colin",
        "des": "Chase DeLauter singles on a sharp ground ball to right fielder Matt Shaw.",
        "launch_speed": 105.7,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 138
    },
    {
        "player_name": "Rea, Colin",
        "des": "Brayan Rocchio singles on a ground ball to shortstop Dansby Swanson.",
        "launch_speed": 104.0,
        "launch_angle": -2,
        "events": "single",
        "hit_distance_sc": 38
    },
    {
        "player_name": "Cantillo, Joey",
        "des": "Carson Kelly singles on a ground ball to center fielder Daniel Schneemann.",
        "launch_speed": 106.2,
        "launch_angle": -14,
        "events": "single",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Horton, Cade",
        "des": "Jos\u00e9 Ram\u00edrez flies out to right fielder Matt Shaw in foul territory.",
        "launch_speed": 105.1,
        "launch_angle": 56,
        "events": "field_out",
        "hit_distance_sc": null
    },
    {
        "player_name": "Bellozo, Valente",
        "des": "Adolis Garc\u00eda lines out sharply to right fielder Mickey Moniak.",
        "launch_speed": 109.5,
        "launch_angle": 13,
        "events": "field_out",
        "hit_distance_sc": 303
    },
    {
        "player_name": "Bellozo, Valente",
        "des": "Kyle Schwarber homers (3) on a fly ball to right field.",
        "launch_speed": 110.7,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 460
    },
    {
        "player_name": "Nola, Aaron",
        "des": "Ezequiel Tovar singles on a sharp line drive to left fielder Brandon Marsh. Mickey Moniak to 2nd.",
        "launch_speed": 102.3,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 282
    },
    {
        "player_name": "Bellozo, Valente",
        "des": "Foul",
        "launch_speed": 104.3,
        "launch_angle": 30,
        "events": NaN,
        "hit_distance_sc": 366
    },
    {
        "player_name": "Lorenzen, Michael",
        "des": "Justin Crawford grounds out, first baseman TJ Rumfield to pitcher Michael Lorenzen.",
        "launch_speed": 106.7,
        "launch_angle": -20,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Nola, Aaron",
        "des": "Jake McCarthy flies out sharply to center fielder Justin Crawford.",
        "launch_speed": 102.4,
        "launch_angle": 26,
        "events": "field_out",
        "hit_distance_sc": 391
    },
    {
        "player_name": "Nola, Aaron",
        "des": "Willi Castro doubles (3) on a line drive to right fielder Adolis Garc\u00eda. TJ Rumfield to 3rd.",
        "launch_speed": 104.2,
        "launch_angle": 5,
        "events": "double",
        "hit_distance_sc": 107
    },
    {
        "player_name": "Lorenzen, Michael",
        "des": "Adolis Garc\u00eda singles on a ground ball to left fielder Jake McCarthy. Bryson Stott to 2nd.",
        "launch_speed": 108.4,
        "launch_angle": -10,
        "events": "single",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Lorenzen, Michael",
        "des": "Alec Bohm grounds out, shortstop Ezequiel Tovar to first baseman TJ Rumfield.",
        "launch_speed": 105.3,
        "launch_angle": -7,
        "events": "field_out",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Lorenzen, Michael",
        "des": "Bryce Harper homers (2) on a fly ball to right center field.",
        "launch_speed": 108.9,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 421
    },
    {
        "player_name": "Lorenzen, Michael",
        "des": "Brandon Marsh homers (1) on a fly ball to right center field. Alec Bohm scores. Bryson Stott scores.",
        "launch_speed": 106.1,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 454
    },
    {
        "player_name": "Lorenzen, Michael",
        "des": "Trea Turner doubles (2) on a ground ball to left fielder Jake McCarthy.",
        "launch_speed": 106.6,
        "launch_angle": 3,
        "events": "double",
        "hit_distance_sc": 94
    },
    {
        "player_name": "Graceffo, Gordon",
        "des": "Riley Greene flies out sharply to center fielder Victor Scott II. Gleyber Torres to 3rd.",
        "launch_speed": 108.9,
        "launch_angle": 23,
        "events": "field_out",
        "hit_distance_sc": 407
    },
    {
        "player_name": "Soriano, George",
        "des": "Javier B\u00e1ez singles on a ground ball to left fielder Jos\u00e9 Ferm\u00edn. Parker Meadows scores.",
        "launch_speed": 101.6,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 54
    },
    {
        "player_name": "Bruihl, Justin",
        "des": "Dillon Dingler lines out sharply to center fielder Victor Scott II.",
        "launch_speed": 105.1,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 388
    },
    {
        "player_name": "McGreevy, Michael",
        "des": "Dillon Dingler homers (2) on a fly ball to left center field. Riley Greene scores.",
        "launch_speed": 105.9,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 433
    },
    {
        "player_name": "McGreevy, Michael",
        "des": "Riley Greene doubles (3) on a sharp fly ball to right fielder Jordan Walker.",
        "launch_speed": 111.0,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 366
    },
    {
        "player_name": "Valdez, Framber",
        "des": "Alec Burleson singles on a ground ball to right fielder Kerry Carpenter.",
        "launch_speed": 107.2,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 110
    },
    {
        "player_name": "Valdez, Framber",
        "des": "Iv\u00e1n Herrera grounds into a force out, shortstop Javier B\u00e1ez to second baseman Zach McKinstry. Masyn Winn out at 2nd.",
        "launch_speed": 101.8,
        "launch_angle": 3,
        "events": "force_out",
        "hit_distance_sc": 68
    },
    {
        "player_name": "McGreevy, Michael",
        "des": "Kerry Carpenter singles on a sharp fly ball to right fielder Jordan Walker.",
        "launch_speed": 110.3,
        "launch_angle": 24,
        "events": "single",
        "hit_distance_sc": 346
    },
    {
        "player_name": "McGreevy, Michael",
        "des": "Kevin McGonigle flies out sharply to center fielder Victor Scott II.",
        "launch_speed": 102.5,
        "launch_angle": 28,
        "events": "field_out",
        "hit_distance_sc": 400
    },
    {
        "player_name": "Valdez, Framber",
        "des": "Masyn Winn lines out sharply to left fielder Riley Greene.",
        "launch_speed": 101.4,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 317
    },
    {
        "player_name": "Pomeranz, Drew",
        "des": "Randy Arozarena grounds out sharply, pitcher Drew Pomeranz to first baseman Nolan Schanuel.",
        "launch_speed": 103.4,
        "launch_angle": -5,
        "events": "field_out",
        "hit_distance_sc": 21
    },
    {
        "player_name": "Woo, Bryan",
        "des": "Foul",
        "launch_speed": 105.4,
        "launch_angle": -15,
        "events": NaN,
        "hit_distance_sc": 7
    },
    {
        "player_name": "Detmers, Reid",
        "des": "Randy Arozarena grounds out sharply, second baseman Oswald Peraza to first baseman Nolan Schanuel.",
        "launch_speed": 105.7,
        "launch_angle": -7,
        "events": "field_out",
        "hit_distance_sc": 22
    },
    {
        "player_name": "Woo, Bryan",
        "des": "Foul",
        "launch_speed": 102.4,
        "launch_angle": -17,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Woo, Bryan",
        "des": "Foul",
        "launch_speed": 101.6,
        "launch_angle": 5,
        "events": NaN,
        "hit_distance_sc": 97
    },
    {
        "player_name": "Woo, Bryan",
        "des": "Logan O'Hoppe grounds out, shortstop J.P. Crawford to first baseman Josh Naylor.",
        "launch_speed": 104.8,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 46
    },
    {
        "player_name": "Detmers, Reid",
        "des": "J.P. Crawford lines out sharply to center fielder Mike Trout.",
        "launch_speed": 102.7,
        "launch_angle": 22,
        "events": "field_out",
        "hit_distance_sc": 356
    },
    {
        "player_name": "G\u00f3mez, Yoendrys",
        "des": "Tristan Gray hits a grand slam (1) to right field. Ryan Jeffers scores. Austin Martin scores. Royce Lewis scores.",
        "launch_speed": 106.4,
        "launch_angle": 20,
        "events": "home_run",
        "hit_distance_sc": 374
    },
    {
        "player_name": "Kelly, Kevin",
        "des": "Ryan Jeffers reaches on a fielder's choice. Luke Keaschall to 3rd. Josh Bell to 2nd. Fielding error by third baseman Junior Caminero.",
        "launch_speed": 107.7,
        "launch_angle": -18,
        "events": "fielders_choice",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Kelly, Kevin",
        "des": "Josh Bell singles on a sharp line drive to center fielder Cedric Mullins. James Outman scores. Luke Keaschall to 2nd.",
        "launch_speed": 105.6,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 294
    },
    {
        "player_name": "Kelly, Kevin",
        "des": "Foul",
        "launch_speed": 105.0,
        "launch_angle": 10,
        "events": NaN,
        "hit_distance_sc": 173
    },
    {
        "player_name": "Funderburk, Kody",
        "des": "Jonny DeLuca grounds out, second baseman Luke Keaschall to first baseman Kody Clemens.",
        "launch_speed": 104.8,
        "launch_angle": -14,
        "events": "field_out",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Topa, Justin",
        "des": "Foul",
        "launch_speed": 101.7,
        "launch_angle": 17,
        "events": NaN,
        "hit_distance_sc": 277
    },
    {
        "player_name": "Boyle, Joe",
        "des": "Luke Keaschall grounds out sharply, second baseman Ben Williamson to first baseman Jonathan Aranda.",
        "launch_speed": 105.4,
        "launch_angle": 5,
        "events": "field_out",
        "hit_distance_sc": 123
    },
    {
        "player_name": "Boyle, Joe",
        "des": "Byron Buxton flies out sharply to left fielder Chandler Simpson.",
        "launch_speed": 101.3,
        "launch_angle": 51,
        "events": "field_out",
        "hit_distance_sc": 244
    },
    {
        "player_name": "Boyle, Joe",
        "des": "Royce Lewis reaches on a fielder's choice. Josh Bell scores. Ryan Jeffers to 3rd. Trevor Larnach to 2nd. Fielding error by shortstop Carson Williams.",
        "launch_speed": 102.0,
        "launch_angle": -3,
        "events": "fielders_choice",
        "hit_distance_sc": 24
    },
    {
        "player_name": "Ober, Bailey",
        "des": "Ben Williamson doubles (1) on a sharp line drive to left fielder Trevor Larnach. Jake Fraley scores.",
        "launch_speed": 103.9,
        "launch_angle": 11,
        "events": "double",
        "hit_distance_sc": 183
    },
    {
        "player_name": "Ober, Bailey",
        "des": "Jake Fraley doubles (3) on a sharp line drive to right fielder Matt Wallner.",
        "launch_speed": 102.7,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 240
    },
    {
        "player_name": "Ober, Bailey",
        "des": "Nick Fortes doubles (2) on a sharp line drive to left fielder Trevor Larnach. Yandy D\u00edaz scores. Junior Caminero scores.",
        "launch_speed": 108.5,
        "launch_angle": 8,
        "events": "double",
        "hit_distance_sc": 218
    },
    {
        "player_name": "Ober, Bailey",
        "des": "Junior Caminero doubles (1) on a sharp line drive to left fielder Trevor Larnach. Yandy D\u00edaz to 3rd.",
        "launch_speed": 114.0,
        "launch_angle": 12,
        "events": "double",
        "hit_distance_sc": 232
    },
    {
        "player_name": "Yarbrough, Ryan",
        "des": "Foul",
        "launch_speed": 103.0,
        "launch_angle": 13,
        "events": NaN,
        "hit_distance_sc": 245
    },
    {
        "player_name": "Bachar, Lake",
        "des": "Ben Rice doubles (4) on a sharp line drive to center fielder Jakob Marsee. Aaron Judge scores. Cody Bellinger scores.",
        "launch_speed": 101.1,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 359
    },
    {
        "player_name": "Bachar, Lake",
        "des": "Marlins challenged (tag play), call on the field was overturned: Aaron Judge singles on a line drive to left fielder Heriberto Hern\u00e1ndez. Trent Grisham out at 3rd on the throw, left fielder Heriberto Hern\u00e1ndez to third baseman Leo Jim\u00e9nez.",
        "launch_speed": 103.9,
        "launch_angle": 13,
        "events": "single",
        "hit_distance_sc": 237
    },
    {
        "player_name": "Petersen, Michael",
        "des": "Foul",
        "launch_speed": 102.5,
        "launch_angle": 0,
        "events": NaN,
        "hit_distance_sc": 62
    },
    {
        "player_name": "Petersen, Michael",
        "des": "Ben Rice homers (2) on a line drive to right field.",
        "launch_speed": 110.9,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 353
    },
    {
        "player_name": "Petersen, Michael",
        "des": "Foul",
        "launch_speed": 110.5,
        "launch_angle": 25,
        "events": NaN,
        "hit_distance_sc": 369
    },
    {
        "player_name": "Bird, Jake",
        "des": "Otto Lopez flies out sharply to center fielder Trent Grisham.",
        "launch_speed": 103.2,
        "launch_angle": 32,
        "events": "field_out",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Phillips, Tyler",
        "des": "Foul",
        "launch_speed": 110.1,
        "launch_angle": 17,
        "events": NaN,
        "hit_distance_sc": 313
    },
    {
        "player_name": "Phillips, Tyler",
        "des": "Cody Bellinger hits a ground-rule double (1) on a fly ball to left-center field.",
        "launch_speed": 105.2,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 381
    },
    {
        "player_name": "Warren, Will",
        "des": "Owen Caissie homers (2) on a fly ball to right center field.",
        "launch_speed": 106.2,
        "launch_angle": 24,
        "events": "home_run",
        "hit_distance_sc": 379
    },
    {
        "player_name": "P\u00e9rez, Eury",
        "des": "Austin Wells flies out sharply to right fielder Owen Caissie. Jazz Chisholm Jr. to 3rd.",
        "launch_speed": 107.0,
        "launch_angle": 50,
        "events": "field_out",
        "hit_distance_sc": 308
    },
    {
        "player_name": "P\u00e9rez, Eury",
        "des": "Jazz Chisholm Jr. doubles (1) on a sharp line drive to right fielder Owen Caissie.",
        "launch_speed": 105.8,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 267
    },
    {
        "player_name": "P\u00e9rez, Eury",
        "des": "Foul",
        "launch_speed": 104.8,
        "launch_angle": 10,
        "events": NaN,
        "hit_distance_sc": 178
    },
    {
        "player_name": "P\u00e9rez, Eury",
        "des": "Aaron Judge homers (3) on a fly ball to left field. Trent Grisham scores.",
        "launch_speed": 101.2,
        "launch_angle": 31,
        "events": "home_run",
        "hit_distance_sc": 387
    },
    {
        "player_name": "Warren, Will",
        "des": "Xavier Edwards homers (1) on a fly ball to right center field.",
        "launch_speed": 103.9,
        "launch_angle": 35,
        "events": "home_run",
        "hit_distance_sc": 377
    },
    {
        "player_name": "Soto, Gregory",
        "des": "Gunnar Henderson homers (2) on a fly ball to right center field.",
        "launch_speed": 101.0,
        "launch_angle": 31,
        "events": "home_run",
        "hit_distance_sc": 397
    },
    {
        "player_name": "Santana, Dennis",
        "des": "Dylan Beavers grounds out, second baseman Brandon Lowe to first baseman Spencer Horwitz.",
        "launch_speed": 105.8,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 66
    },
    {
        "player_name": "Ram\u00edrez, Yohan",
        "des": "Taylor Ward doubles (3) on a line drive to center fielder Oneil Cruz. Blaze Alexander scores.",
        "launch_speed": 104.4,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 355
    },
    {
        "player_name": "Bradish, Kyle",
        "des": "Henry Davis grounds into a double play, third baseman Blaze Alexander to first baseman Pete Alonso. Konnor Griffin out at 3rd. Jared Triolo to 2nd. Henry Davis out at 1st.",
        "launch_speed": 103.9,
        "launch_angle": -6,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Keller, Mitch",
        "des": "Foul",
        "launch_speed": 101.5,
        "launch_angle": 19,
        "events": NaN,
        "hit_distance_sc": 308
    },
    {
        "player_name": "Bradish, Kyle",
        "des": "Oneil Cruz singles on a ground ball to left fielder Taylor Ward. Henry Davis scores.",
        "launch_speed": 106.9,
        "launch_angle": -18,
        "events": "single",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Bradish, Kyle",
        "des": "Henry Davis doubles (2) on a line drive to left fielder Taylor Ward. Jared Triolo scores.",
        "launch_speed": 112.3,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 290
    },
    {
        "player_name": "Bradish, Kyle",
        "des": "Konnor Griffin doubles (1) on a sharp line drive to center fielder Colton Cowser. Ryan O'Hearn scores.",
        "launch_speed": 105.8,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 367
    },
    {
        "player_name": "Keller, Mitch",
        "des": "Dylan Beavers singles on a ground ball to right fielder Ryan O'Hearn.",
        "launch_speed": 105.3,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 58
    },
    {
        "player_name": "Keller, Mitch",
        "des": "Samuel Basallo grounds out, pitcher Mitch Keller to first baseman Spencer Horwitz.",
        "launch_speed": 103.1,
        "launch_angle": -6,
        "events": "field_out",
        "hit_distance_sc": 27
    },
    {
        "player_name": "Keller, Mitch",
        "des": "Gunnar Henderson lines out to right fielder Ryan O'Hearn.",
        "launch_speed": 105.7,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 303
    },
    {
        "player_name": "Garc\u00eda, Luis",
        "des": "Heliot Ramos singles on a ground ball to right fielder Carson Benge, deflected by second baseman Marcus Semien.",
        "launch_speed": 107.7,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Miller, Erik",
        "des": "Carson Benge grounds into a force out, second baseman Luis Arraez to shortstop Willy Adames. Brett Baty scores. Marcus Semien out at 2nd. Carson Benge to 1st.",
        "launch_speed": 107.1,
        "launch_angle": -22,
        "events": "force_out",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Miller, Erik",
        "des": "Brett Baty doubles (1) on a sharp line drive to left fielder Heliot Ramos. Luis Robert Jr. scores.",
        "launch_speed": 104.7,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 263
    },
    {
        "player_name": "Gage, Matt",
        "des": "Francisco Alvarez flies out sharply to center fielder Harrison Bader.",
        "launch_speed": 102.3,
        "launch_angle": 33,
        "events": "field_out",
        "hit_distance_sc": 376
    },
    {
        "player_name": "Brazob\u00e1n, Huascar",
        "des": "Harrison Bader grounds out, shortstop Francisco Lindor to first baseman Brett Baty.",
        "launch_speed": 103.2,
        "launch_angle": -20,
        "events": "field_out",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Brazob\u00e1n, Huascar",
        "des": "Heliot Ramos singles on a ground ball to center fielder Luis Robert Jr.",
        "launch_speed": 107.3,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 75
    },
    {
        "player_name": "Brubaker, JT",
        "des": "Francisco Alvarez homers (3) on a fly ball to left field.",
        "launch_speed": 107.0,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 401
    },
    {
        "player_name": "McLean, Nolan",
        "des": "Willy Adames hits a ground-rule double (2) on a line drive to right-center field. Harrison Bader scores. Patrick Bailey to 3rd.",
        "launch_speed": 102.8,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 375
    },
    {
        "player_name": "Mahle, Tyler",
        "des": "Francisco Alvarez homers (2) on a fly ball to center field.",
        "launch_speed": 106.1,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 415
    },
    {
        "player_name": "Mahle, Tyler",
        "des": "Marcus Semien homers (1) on a fly ball to center field. Mark Vientos scores.",
        "launch_speed": 101.7,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 407
    },
    {
        "player_name": "McLean, Nolan",
        "des": "Heliot Ramos grounds out, second baseman Marcus Semien to first baseman Brett Baty.",
        "launch_speed": 108.9,
        "launch_angle": -3,
        "events": "field_out",
        "hit_distance_sc": 27
    },
    {
        "player_name": "Mahle, Tyler",
        "des": "Bo Bichette singles on a sharp line drive to center fielder Harrison Bader. Francisco Lindor scores. Juan Soto to 3rd.",
        "launch_speed": 104.4,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 286
    },
    {
        "player_name": "Martin, Chris",
        "des": "Spencer Steer doubles (1) on a sharp line drive to center fielder Evan Carter.",
        "launch_speed": 106.2,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 329
    },
    {
        "player_name": "Winn, Cole",
        "des": "Ke'Bryan Hayes singles on a ground ball to center fielder Evan Carter. Tyler Stephenson to 2nd.",
        "launch_speed": 103.0,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 185
    },
    {
        "player_name": "Singer, Brady",
        "des": "Jake Burger doubles (2) on a sharp line drive to left fielder Spencer Steer.",
        "launch_speed": 104.2,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 333
    },
    {
        "player_name": "Gore, MacKenzie",
        "des": "Elly De La Cruz homers (3) on a line drive to left center field.",
        "launch_speed": 107.5,
        "launch_angle": 20,
        "events": "home_run",
        "hit_distance_sc": 385
    },
    {
        "player_name": "Singer, Brady",
        "des": "Corey Seager grounds out, pitcher Brady Singer to first baseman Sal Stewart.",
        "launch_speed": 107.0,
        "launch_angle": -9,
        "events": "field_out",
        "hit_distance_sc": 15
    },
    {
        "player_name": "Gore, MacKenzie",
        "des": "Dane Myers lines out sharply to center fielder Evan Carter.",
        "launch_speed": 105.1,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 339
    },
    {
        "player_name": "Singer, Brady",
        "des": "Foul",
        "launch_speed": 107.0,
        "launch_angle": 24,
        "events": NaN,
        "hit_distance_sc": 355
    },
    {
        "player_name": "Gore, MacKenzie",
        "des": "Sal Stewart lines out sharply to left fielder Wyatt Langford.",
        "launch_speed": 107.5,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 297
    },
    {
        "player_name": "Singer, Brady",
        "des": "Wyatt Langford lines out sharply to center fielder Dane Myers.",
        "launch_speed": 109.0,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 343
    },
    {
        "player_name": "Singer, Brady",
        "des": "Danny Jansen doubles (2) on a sharp line drive to left fielder Spencer Steer. Josh Jung scores. Evan Carter scores.",
        "launch_speed": 103.3,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 299
    },
    {
        "player_name": "Singer, Brady",
        "des": "Evan Carter doubles (3) on a sharp line drive to right fielder Noelvi Marte. Josh Jung to 3rd.",
        "launch_speed": 106.5,
        "launch_angle": 9,
        "events": "double",
        "hit_distance_sc": 164
    },
    {
        "player_name": "Singer, Brady",
        "des": "Josh Jung singles on a sharp line drive to left fielder Spencer Steer.",
        "launch_speed": 101.9,
        "launch_angle": 13,
        "events": "single",
        "hit_distance_sc": 253
    },
    {
        "player_name": "Singer, Brady",
        "des": "Joc Pederson grounds out, shortstop Elly De La Cruz to first baseman Sal Stewart.",
        "launch_speed": 108.0,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 73
    },
    {
        "player_name": "Gore, MacKenzie",
        "des": "Spencer Steer homers (1) on a fly ball to left center field. Eugenio Su\u00e1rez scores.",
        "launch_speed": 104.1,
        "launch_angle": 35,
        "events": "home_run",
        "hit_distance_sc": 399
    },
    {
        "player_name": "Singer, Brady",
        "des": "Wyatt Langford lines out sharply to center fielder Dane Myers.",
        "launch_speed": 107.8,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Gore, MacKenzie",
        "des": "Matt McLain grounds out, shortstop Corey Seager to first baseman Jake Burger.",
        "launch_speed": 106.9,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 127
    },
    {
        "player_name": "Casparius, Ben",
        "des": "Brady House flies out sharply to center fielder Andy Pages.",
        "launch_speed": 104.4,
        "launch_angle": 23,
        "events": "field_out",
        "hit_distance_sc": 369
    },
    {
        "player_name": "Granillo, Andre",
        "des": "Andy Pages singles on a ground ball to center fielder Jacob Young. Alex Call to 2nd.",
        "launch_speed": 101.0,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 64
    },
    {
        "player_name": "Henriquez, Edgardo",
        "des": "Jorbit Vivas singles on a ground ball to left fielder Alex Call. Nasim Nu\u00f1ez to 2nd.",
        "launch_speed": 101.0,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 95
    },
    {
        "player_name": "Granillo, Andre",
        "des": "Will Smith singles on a sharp line drive to left fielder Daylen Lile.",
        "launch_speed": 102.9,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 209
    },
    {
        "player_name": "Treinen, Blake",
        "des": "Luis Garc\u00eda Jr. doubles (2) on a sharp fly ball to center fielder Andy Pages.",
        "launch_speed": 102.4,
        "launch_angle": 25,
        "events": "double",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Waldichuk, Ken",
        "des": "Kyle Tucker homers (1) on a fly ball to right center field.",
        "launch_speed": 101.6,
        "launch_angle": 33,
        "events": "home_run",
        "hit_distance_sc": 404
    },
    {
        "player_name": "Varland, Gus",
        "des": "Mookie Betts lines out sharply to left fielder Daylen Lile.",
        "launch_speed": 102.0,
        "launch_angle": 21,
        "events": "field_out",
        "hit_distance_sc": 360
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Teoscar Hern\u00e1ndez doubles (1) on a sharp line drive to center fielder Jacob Young. Max Muncy scores.",
        "launch_speed": 105.3,
        "launch_angle": 14,
        "events": "double",
        "hit_distance_sc": 263
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Max Muncy singles on a sharp fly ball to right fielder James Wood.",
        "launch_speed": 106.5,
        "launch_angle": 26,
        "events": "single",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Freddie Freeman homers (2) on a fly ball to right field. Mookie Betts scores.",
        "launch_speed": 110.0,
        "launch_angle": 41,
        "events": "home_run",
        "hit_distance_sc": 391
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Mookie Betts singles on a sharp line drive to center fielder Jacob Young.",
        "launch_speed": 101.2,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 205
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Shohei Ohtani singles on a ground ball to right fielder James Wood.",
        "launch_speed": 104.4,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 149
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Andy Pages homers (2) on a fly ball to left field. Teoscar Hern\u00e1ndez scores.",
        "launch_speed": 109.1,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 412
    },
    {
        "player_name": "Sheehan, Emmet",
        "des": "Daylen Lile grounds into a force out, second baseman Alex Freeland to shortstop Mookie Betts. Luis Garc\u00eda Jr. out at 2nd. Daylen Lile to 1st.",
        "launch_speed": 104.4,
        "launch_angle": -3,
        "events": "force_out",
        "hit_distance_sc": 30
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Shohei Ohtani homers (1) on a fly ball to right center field. Teoscar Hern\u00e1ndez scores. Andy Pages scores.",
        "launch_speed": 109.5,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 401
    },
    {
        "player_name": "Mikolas, Miles",
        "des": "Freddie Freeman grounds out, first baseman Luis Garc\u00eda Jr. to pitcher Miles Mikolas.",
        "launch_speed": 105.7,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 59
    },
    {
        "player_name": "Sheehan, Emmet",
        "des": "CJ Abrams homers (2) on a fly ball to right field. James Wood scores. Brady House scores.",
        "launch_speed": 103.2,
        "launch_angle": 30,
        "events": "home_run",
        "hit_distance_sc": 387
    },
    {
        "player_name": "Sheehan, Emmet",
        "des": "James Wood doubles (3) on a sharp line drive to center fielder Andy Pages.",
        "launch_speed": 109.8,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 352
    }
];