const reportDate = 'April 05, 2026';
const statcastData = [
    {
        "player_name": "Payamps, Joel",
        "des": "Ketel Marte doubles (2) on a sharp line drive to right fielder Mike Yastrzemski. Jorge Barrosa scores.",
        "launch_speed": 109.1,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 363
    },
    {
        "player_name": "Rashi, Taylor",
        "des": "Mauricio Dub\u00f3n grounds out sharply, shortstop Geraldo Perdomo to first baseman Ildemaro Vargas.",
        "launch_speed": 101.7,
        "launch_angle": -7,
        "events": "field_out",
        "hit_distance_sc": 20
    },
    {
        "player_name": "Iglesias, Raisel",
        "des": "Foul",
        "launch_speed": 106.0,
        "launch_angle": 47,
        "events": NaN,
        "hit_distance_sc": 367
    },
    {
        "player_name": "Lo\u00e1isiga, Jonathan",
        "des": "Jorge Mateo singles on a sharp ground ball to left fielder Tim Tawa.",
        "launch_speed": 109.2,
        "launch_angle": -6,
        "events": "single",
        "hit_distance_sc": 18
    },
    {
        "player_name": "Ginkel, Kevin",
        "des": "Michael Harris II grounds out, second baseman Ketel Marte to first baseman Ildemaro Vargas.",
        "launch_speed": 102.7,
        "launch_angle": -17,
        "events": "field_out",
        "hit_distance_sc": 3
    },
    {
        "player_name": "Lee, Dylan",
        "des": "Corbin Carroll triples (2) on a sharp line drive to right fielder Mike Yastrzemski. Jorge Barrosa scores.",
        "launch_speed": 106.8,
        "launch_angle": 11,
        "events": "triple",
        "hit_distance_sc": 197
    },
    {
        "player_name": "Lee, Dylan",
        "des": "James McCann flies out sharply to center fielder Michael Harris II.",
        "launch_speed": 102.9,
        "launch_angle": 36,
        "events": "field_out",
        "hit_distance_sc": 371
    },
    {
        "player_name": "Lee, Dylan",
        "des": "Foul",
        "launch_speed": 105.5,
        "launch_angle": 2,
        "events": NaN,
        "hit_distance_sc": 69
    },
    {
        "player_name": "Thompson, Ryan",
        "des": "Drake Baldwin grounds out, second baseman Ketel Marte to first baseman Ildemaro Vargas. Jorge Mateo scores. Ronald Acu\u00f1a Jr. to 2nd.",
        "launch_speed": 103.3,
        "launch_angle": -8,
        "events": "field_out",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Thompson, Ryan",
        "des": "Jorge Mateo hits a ground-rule double (1) on a line drive to left field.",
        "launch_speed": 109.3,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 332
    },
    {
        "player_name": "Pfaadt, Brandon",
        "des": "Ronald Acu\u00f1a Jr. singles on a sharp line drive to center fielder Jorge Barrosa. Jorge Mateo to 2nd.",
        "launch_speed": 109.6,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 165
    },
    {
        "player_name": "Pfaadt, Brandon",
        "des": "Mauricio Dub\u00f3n hits a ground-rule double (2) on a line drive to right-center field.",
        "launch_speed": 104.2,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 375
    },
    {
        "player_name": "P\u00e9rez, Mart\u00edn",
        "des": "Tim Tawa flies out to center fielder Michael Harris II.",
        "launch_speed": 104.1,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 363
    },
    {
        "player_name": "P\u00e9rez, Mart\u00edn",
        "des": "Ketel Marte grounds out sharply, shortstop Jorge Mateo to first baseman Matt Olson.",
        "launch_speed": 116.9,
        "launch_angle": 0,
        "events": "field_out",
        "hit_distance_sc": 52
    },
    {
        "player_name": "P\u00e9rez, Mart\u00edn",
        "des": "Jose Fernandez pops out to shortstop Jorge Mateo in foul territory.",
        "launch_speed": 101.1,
        "launch_angle": 66,
        "events": "field_out",
        "hit_distance_sc": 167
    },
    {
        "player_name": "P\u00e9rez, Mart\u00edn",
        "des": "Nolan Arenado lines out sharply to left fielder Mike Yastrzemski.",
        "launch_speed": 103.9,
        "launch_angle": 14,
        "events": "field_out",
        "hit_distance_sc": 304
    },
    {
        "player_name": "P\u00e9rez, Mart\u00edn",
        "des": "Ketel Marte doubles (1) on a sharp line drive to left fielder Mike Yastrzemski.",
        "launch_speed": 102.7,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 197
    },
    {
        "player_name": "Pfaadt, Brandon",
        "des": "Drake Baldwin homers (4) on a fly ball to right center field.",
        "launch_speed": 108.4,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 398
    },
    {
        "player_name": "Abreu, Bryan",
        "des": "Brent Rooker homers (2) on a fly ball to left field. Shea Langeliers scores. Tyler Soderstrom scores.",
        "launch_speed": 104.8,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 364
    },
    {
        "player_name": "Abreu, Bryan",
        "des": "Shea Langeliers singles on a ground ball to second baseman Jose Altuve. Jeff McNeil out at home, second baseman Jose Altuve to catcher Yainer Diaz. Denzel Clarke to 2nd.",
        "launch_speed": 101.3,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 13
    },
    {
        "player_name": "Harris, Hogan",
        "des": "Nick Allen grounds out, third baseman Max Muncy to first baseman Nick Kurtz.",
        "launch_speed": 102.6,
        "launch_angle": 3,
        "events": "field_out",
        "hit_distance_sc": 73
    },
    {
        "player_name": "Barlow, Scott",
        "des": "Jake Meyers homers (1) on a fly ball to left field.",
        "launch_speed": 106.5,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 393
    },
    {
        "player_name": "Blubaugh, AJ",
        "des": "Max Muncy singles on a sharp line drive to left fielder Joey Loperfido, deflected by shortstop Nick Allen. Lawrence Butler to 3rd.",
        "launch_speed": 104.3,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 183
    },
    {
        "player_name": "Blubaugh, AJ",
        "des": "Lawrence Butler doubles (1) on a sharp line drive to left fielder Joey Loperfido.",
        "launch_speed": 104.8,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 307
    },
    {
        "player_name": "Blubaugh, AJ",
        "des": "Brent Rooker homers (1) on a fly ball to left field. Tyler Soderstrom scores.",
        "launch_speed": 106.6,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 365
    },
    {
        "player_name": "Ginn, J.T.",
        "des": "Carlos Correa singles on a line drive to left fielder Tyler Soderstrom.",
        "launch_speed": 109.7,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 162
    },
    {
        "player_name": "Ginn, J.T.",
        "des": "Foul",
        "launch_speed": 106.8,
        "launch_angle": -26,
        "events": NaN,
        "hit_distance_sc": 4
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Foul",
        "launch_speed": 104.2,
        "launch_angle": 12,
        "events": NaN,
        "hit_distance_sc": 239
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Yainer Diaz grounds out, shortstop Jacob Wilson to first baseman Nick Kurtz.",
        "launch_speed": 108.3,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 37
    },
    {
        "player_name": "Okert, Steven",
        "des": "Tyler Soderstrom triples (1) on a sharp fly ball to right fielder Cam Smith. Jeff McNeil scores. Carlos Cortes scores. Nick Kurtz scores.",
        "launch_speed": 107.8,
        "launch_angle": 25,
        "events": "triple",
        "hit_distance_sc": 400
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Cam Smith singles on a ground ball to left fielder Tyler Soderstrom. Carlos Correa scores. Cam Smith out at 2nd on the throw, left fielder Tyler Soderstrom to second baseman Jeff McNeil.",
        "launch_speed": 112.1,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 96
    },
    {
        "player_name": "Lopez, Jacob",
        "des": "Yordan Alvarez homers (4) on a fly ball to right center field. Jose Altuve scores.",
        "launch_speed": 110.8,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 399
    },
    {
        "player_name": "McCullers Jr., Lance",
        "des": "Lawrence Butler lines into a double play, left fielder Joey Loperfido to shortstop Nick Allen to first baseman Christian Walker. Jacob Wilson out at 1st.",
        "launch_speed": 109.1,
        "launch_angle": 18,
        "events": "double_play",
        "hit_distance_sc": 366
    },
    {
        "player_name": "Lopez, Jacob",
        "des": "Foul",
        "launch_speed": 107.1,
        "launch_angle": 6,
        "events": NaN,
        "hit_distance_sc": 114
    },
    {
        "player_name": "McCullers Jr., Lance",
        "des": "Nick Kurtz singles on a ground ball to center fielder Jake Meyers.",
        "launch_speed": 109.7,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 132
    },
    {
        "player_name": "McCullers Jr., Lance",
        "des": "Carlos Cortes grounds out, second baseman Jose Altuve to first baseman Christian Walker.",
        "launch_speed": 104.3,
        "launch_angle": -11,
        "events": "field_out",
        "hit_distance_sc": 12
    },
    {
        "player_name": "Lopez, Jacob",
        "des": "Foul",
        "launch_speed": 110.6,
        "launch_angle": 28,
        "events": NaN,
        "hit_distance_sc": 379
    },
    {
        "player_name": "Kelly, Zack",
        "des": "Fernando Tatis Jr. out on a sacrifice fly to right fielder Wilyer Abreu. Gavin Sheets scores.",
        "launch_speed": 103.4,
        "launch_angle": 34,
        "events": "sac_fly",
        "hit_distance_sc": 354
    },
    {
        "player_name": "Kelly, Zack",
        "des": "Gavin Sheets doubles (3) on a sharp line drive to center fielder Ceddanne Rafaela.",
        "launch_speed": 108.6,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 375
    },
    {
        "player_name": "Uberstine, Tyler",
        "des": "Jackson Merrill homers (2) on a fly ball to left center field.",
        "launch_speed": 103.6,
        "launch_angle": 34,
        "events": "home_run",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Peralta, Wandy",
        "des": "Masataka Yoshida doubles (2) on a ground ball to second baseman Jake Cronenworth. Willson Contreras scores. Wilyer Abreu scores.",
        "launch_speed": 104.1,
        "launch_angle": 4,
        "events": "double",
        "hit_distance_sc": 85
    },
    {
        "player_name": "Peralta, Wandy",
        "des": "Wilyer Abreu doubles (4) on a fly ball to left fielder Ram\u00f3n Laureano. Willson Contreras to 3rd.",
        "launch_speed": 102.0,
        "launch_angle": 23,
        "events": "double",
        "hit_distance_sc": 345
    },
    {
        "player_name": "Rodriguez, Bradgley",
        "des": "Carlos Narv\u00e1ez singles on a ground ball to second baseman Jake Cronenworth. Masataka Yoshida to 3rd.",
        "launch_speed": 102.2,
        "launch_angle": -23,
        "events": "single",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Rodriguez, Bradgley",
        "des": "Masataka Yoshida singles on a sharp line drive to center fielder Jackson Merrill.",
        "launch_speed": 103.4,
        "launch_angle": 13,
        "events": "single",
        "hit_distance_sc": 283
    },
    {
        "player_name": "Weissert, Greg",
        "des": "Jackson Merrill singles on a sharp line drive to center fielder Jarren Duran. Luis Campusano to 2nd.",
        "launch_speed": 101.0,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 266
    },
    {
        "player_name": "Weissert, Greg",
        "des": "Foul",
        "launch_speed": 108.7,
        "launch_angle": 19,
        "events": NaN,
        "hit_distance_sc": 314
    },
    {
        "player_name": "Suarez, Ranger",
        "des": "Nick Castellanos singles on a sharp line drive to left fielder Masataka Yoshida. Jackson Merrill scores. Manny Machado scores. Xander Bogaerts to 2nd.",
        "launch_speed": 108.7,
        "launch_angle": 16,
        "events": "single",
        "hit_distance_sc": 244
    },
    {
        "player_name": "Suarez, Ranger",
        "des": "Jackson Merrill singles on a sharp line drive to center fielder Jarren Duran. Fernando Tatis Jr. scores.",
        "launch_speed": 108.6,
        "launch_angle": 16,
        "events": "single",
        "hit_distance_sc": 276
    },
    {
        "player_name": "Suarez, Ranger",
        "des": "Fernando Tatis Jr. doubles (3) on a sharp line drive to center fielder Jarren Duran.",
        "launch_speed": 105.3,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 342
    },
    {
        "player_name": "Buehler, Walker",
        "des": "Wilyer Abreu singles on a sharp line drive to right fielder Fernando Tatis Jr.",
        "launch_speed": 106.6,
        "launch_angle": 13,
        "events": "single",
        "hit_distance_sc": 269
    },
    {
        "player_name": "Suarez, Ranger",
        "des": "Manny Machado grounds out, third baseman Caleb Durbin to first baseman Willson Contreras.",
        "launch_speed": 107.2,
        "launch_angle": -13,
        "events": "field_out",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Martin, Davis",
        "des": "Nathan Lukes grounds into a double play, second baseman Chase Meidroth to shortstop Tanner Murray to first baseman Munetaka Murakami. George Springer out at 2nd. Nathan Lukes out at 1st.",
        "launch_speed": 101.5,
        "launch_angle": 2,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 58
    },
    {
        "player_name": "Voth, Austin",
        "des": "Lenyn Sosa doubles (1) on a sharp line drive to left fielder Nathan Lukes. Munetaka Murakami scores.",
        "launch_speed": 101.7,
        "launch_angle": 15,
        "events": "double",
        "hit_distance_sc": 196
    },
    {
        "player_name": "Martin, Davis",
        "des": "Foul",
        "launch_speed": 106.7,
        "launch_angle": -25,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Martin, Davis",
        "des": "Brandon Valenzuela singles on a sharp line drive to right fielder Derek Hill. Andr\u00e9s Gim\u00e9nez to 2nd.",
        "launch_speed": 101.2,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 211
    },
    {
        "player_name": "Lauer, Eric",
        "des": "Austin Hays grounds into a force out, shortstop Andr\u00e9s Gim\u00e9nez to second baseman Ernie Clement. Chase Meidroth out at 2nd.",
        "launch_speed": 102.6,
        "launch_angle": 2,
        "events": "force_out",
        "hit_distance_sc": 58
    },
    {
        "player_name": "Lauer, Eric",
        "des": "Miguel Vargas triples (1) on a sharp line drive to left fielder Nathan Lukes. Chase Meidroth scores.",
        "launch_speed": 101.3,
        "launch_angle": 14,
        "events": "triple",
        "hit_distance_sc": 278
    },
    {
        "player_name": "Martin, Davis",
        "des": "Foul",
        "launch_speed": 116.4,
        "launch_angle": 13,
        "events": NaN,
        "hit_distance_sc": 284
    },
    {
        "player_name": "Martin, Davis",
        "des": "Vladimir Guerrero Jr. singles on a sharp line drive to center fielder Luisangel Acu\u00f1a.",
        "launch_speed": 103.3,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 253
    },
    {
        "player_name": "Webb, Jacob",
        "des": "Gabriel Arias singles on a sharp line drive to left fielder Dylan Carlson. Chase DeLauter scores. Rhys Hoskins to 2nd.",
        "launch_speed": 111.6,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 184
    },
    {
        "player_name": "Webb, Jacob",
        "des": "CJ Kayfus homers (1) on a fly ball to right field.",
        "launch_speed": 104.5,
        "launch_angle": 35,
        "events": "home_run",
        "hit_distance_sc": 352
    },
    {
        "player_name": "Armstrong, Shawn",
        "des": "Foul",
        "launch_speed": 103.3,
        "launch_angle": 9,
        "events": NaN,
        "hit_distance_sc": 166
    },
    {
        "player_name": "Armstrong, Shawn",
        "des": "Ian Happ homers (4) on a line drive to right field.",
        "launch_speed": 107.5,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 382
    },
    {
        "player_name": "Brown, Ben",
        "des": "Gabriel Arias singles on a ground ball to center fielder Pete Crow-Armstrong. CJ Kayfus scores. Rhys Hoskins to 3rd.",
        "launch_speed": 109.5,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 61
    },
    {
        "player_name": "Brown, Ben",
        "des": "Foul",
        "launch_speed": 105.0,
        "launch_angle": 26,
        "events": NaN,
        "hit_distance_sc": 372
    },
    {
        "player_name": "Imanaga, Shota",
        "des": "Austin Hedges doubles (2) on a sharp line drive to left fielder Dylan Carlson.",
        "launch_speed": 106.5,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 283
    },
    {
        "player_name": "Messick, Parker",
        "des": "Pete Crow-Armstrong singles on a ground ball to center fielder Steven Kwan. Matt Shaw to 3rd.",
        "launch_speed": 109.2,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 55
    },
    {
        "player_name": "Imanaga, Shota",
        "des": "Foul",
        "launch_speed": 107.8,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 355
    },
    {
        "player_name": "Messick, Parker",
        "des": "Dansby Swanson grounds into a force out, shortstop Gabriel Arias to second baseman Brayan Rocchio. Michael Busch out at 2nd.",
        "launch_speed": 101.9,
        "launch_angle": -6,
        "events": "force_out",
        "hit_distance_sc": 21
    },
    {
        "player_name": "Messick, Parker",
        "des": "Pete Crow-Armstrong grounds out, second baseman Brayan Rocchio to first baseman Rhys Hoskins.",
        "launch_speed": 108.7,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 112
    },
    {
        "player_name": "Imanaga, Shota",
        "des": "David Fry singles on a sharp line drive to left fielder Dylan Carlson.",
        "launch_speed": 102.9,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 217
    },
    {
        "player_name": "Messick, Parker",
        "des": "Foul",
        "launch_speed": 103.8,
        "launch_angle": 14,
        "events": NaN,
        "hit_distance_sc": 238
    },
    {
        "player_name": "Imanaga, Shota",
        "des": "Jos\u00e9 Ram\u00edrez flies out to left fielder Dylan Carlson in foul territory.",
        "launch_speed": 101.2,
        "launch_angle": 53,
        "events": "field_out",
        "hit_distance_sc": 284
    },
    {
        "player_name": "Imanaga, Shota",
        "des": "Foul",
        "launch_speed": 107.6,
        "launch_angle": 20,
        "events": NaN,
        "hit_distance_sc": 331
    },
    {
        "player_name": "Pallette, Peyton",
        "des": "Dansby Swanson grounds into a force out, shortstop Gabriel Arias to second baseman Brayan Rocchio. Nico Hoerner out at 2nd.",
        "launch_speed": 102.2,
        "launch_angle": -1,
        "events": "force_out",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Brogdon, Connor",
        "des": "Miguel Amaya singles on a sharp line drive to right fielder Chase DeLauter. Dylan Carlson scores.",
        "launch_speed": 105.7,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 203
    },
    {
        "player_name": "Cabrera, Edward",
        "des": "Foul",
        "launch_speed": 104.2,
        "launch_angle": 27,
        "events": NaN,
        "hit_distance_sc": 365
    },
    {
        "player_name": "Cabrera, Edward",
        "des": "Chase DeLauter reaches on a fielder's choice out, second baseman Nico Hoerner to catcher Miguel Amaya. CJ Kayfus out at home.",
        "launch_speed": 103.1,
        "launch_angle": -27,
        "events": "fielders_choice_out",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Cecconi, Slade",
        "des": "Pete Crow-Armstrong flies out to center fielder Steven Kwan.",
        "launch_speed": 104.7,
        "launch_angle": 35,
        "events": "field_out",
        "hit_distance_sc": 399
    },
    {
        "player_name": "Cecconi, Slade",
        "des": "Michael Conforto singles on a ground ball to right fielder Chase DeLauter.",
        "launch_speed": 102.9,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 83
    },
    {
        "player_name": "Cabrera, Edward",
        "des": "Bo Naylor flies out sharply to right fielder Michael Conforto.",
        "launch_speed": 103.1,
        "launch_angle": 35,
        "events": "field_out",
        "hit_distance_sc": 362
    },
    {
        "player_name": "Cabrera, Edward",
        "des": "Kyle Manzardo grounds out, first baseman Michael Busch to pitcher Edward Cabrera.",
        "launch_speed": 101.0,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 32
    },
    {
        "player_name": "Cecconi, Slade",
        "des": "Foul",
        "launch_speed": 107.5,
        "launch_angle": 35,
        "events": NaN,
        "hit_distance_sc": 382
    },
    {
        "player_name": "Cecconi, Slade",
        "des": "Foul",
        "launch_speed": 105.3,
        "launch_angle": 12,
        "events": NaN,
        "hit_distance_sc": 204
    },
    {
        "player_name": "Vodnik, Victor",
        "des": "Adolis Garc\u00eda singles on a sharp ground ball to right fielder Mickey Moniak. Alec Bohm to 2nd.",
        "launch_speed": 106.5,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 48
    },
    {
        "player_name": "Mayza, Tim",
        "des": "Brenton Doyle lines out sharply to center fielder Justin Crawford.",
        "launch_speed": 102.8,
        "launch_angle": 19,
        "events": "field_out",
        "hit_distance_sc": 360
    },
    {
        "player_name": "Sugano, Tomoyuki",
        "des": "Alec Bohm grounds out, shortstop Ezequiel Tovar to first baseman Troy Johnston.",
        "launch_speed": 107.2,
        "launch_angle": -11,
        "events": "field_out",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Walker, Taijuan",
        "des": "Mickey Moniak homers (2) on a fly ball to right center field.",
        "launch_speed": 103.1,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 437
    },
    {
        "player_name": "Sugano, Tomoyuki",
        "des": "Kyle Schwarber flies out sharply to center fielder Jake McCarthy.",
        "launch_speed": 107.8,
        "launch_angle": 30,
        "events": "field_out",
        "hit_distance_sc": 419
    },
    {
        "player_name": "Sugano, Tomoyuki",
        "des": "Justin Crawford singles on a sharp ground ball to second baseman Edouard Julien.",
        "launch_speed": 106.5,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 63
    },
    {
        "player_name": "Walker, Taijuan",
        "des": "Jake McCarthy doubles (2) on a line drive to center fielder Justin Crawford.",
        "launch_speed": 102.0,
        "launch_angle": 11,
        "events": "double",
        "hit_distance_sc": 219
    },
    {
        "player_name": "Walker, Taijuan",
        "des": "Jordan Beck flies out sharply to left fielder Brandon Marsh.",
        "launch_speed": 101.6,
        "launch_angle": 43,
        "events": "field_out",
        "hit_distance_sc": 357
    },
    {
        "player_name": "Walker, Taijuan",
        "des": "Willi Castro singles on a line drive to right fielder Adolis Garc\u00eda.",
        "launch_speed": 105.3,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 151
    },
    {
        "player_name": "Sugano, Tomoyuki",
        "des": "Brandon Marsh doubles (3) on a sharp line drive to center fielder Jake McCarthy.",
        "launch_speed": 101.1,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 326
    },
    {
        "player_name": "Sugano, Tomoyuki",
        "des": "Adolis Garc\u00eda homers (2) on a fly ball to right center field.",
        "launch_speed": 103.4,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 405
    },
    {
        "player_name": "Sugano, Tomoyuki",
        "des": "Bryson Stott grounds out, second baseman Edouard Julien to first baseman Troy Johnston.",
        "launch_speed": 101.1,
        "launch_angle": -4,
        "events": "field_out",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Walker, Taijuan",
        "des": "TJ Rumfield homers (2) on a line drive to right field. Hunter Goodman scores.",
        "launch_speed": 107.6,
        "launch_angle": 21,
        "events": "home_run",
        "hit_distance_sc": 387
    },
    {
        "player_name": "Walker, Taijuan",
        "des": "Mickey Moniak homers (1) on a fly ball to right field.",
        "launch_speed": 108.7,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 433
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Riley Greene flies out sharply to center fielder Victor Scott II.",
        "launch_speed": 101.2,
        "launch_angle": 29,
        "events": "field_out",
        "hit_distance_sc": 393
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Kevin McGonigle flies out sharply to center fielder Victor Scott II.",
        "launch_speed": 104.4,
        "launch_angle": 41,
        "events": "field_out",
        "hit_distance_sc": 370
    },
    {
        "player_name": "Montero, Keider",
        "des": "Nathan Church grounds into a force out, second baseman Gleyber Torres to shortstop Javier B\u00e1ez. Nolan Gorman to 3rd. Thomas Saggese out at 2nd. Nathan Church to 1st.",
        "launch_speed": 105.8,
        "launch_angle": -21,
        "events": "force_out",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Montero, Keider",
        "des": "Nolan Gorman singles on a ground ball to right fielder Kerry Carpenter, deflected by first baseman Spencer Torkelson.",
        "launch_speed": 101.1,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 94
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Colt Keith lines out sharply to center fielder Victor Scott II.",
        "launch_speed": 104.4,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 325
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Spencer Torkelson doubles (2) on a ground ball to left fielder Nathan Church.",
        "launch_speed": 101.4,
        "launch_angle": 7,
        "events": "double",
        "hit_distance_sc": 111
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Kerry Carpenter homers (2) on a fly ball to center field. Colt Keith scores.",
        "launch_speed": 103.3,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 425
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Colt Keith singles on a ground ball to left fielder Nathan Church.",
        "launch_speed": 104.8,
        "launch_angle": 0,
        "events": "single",
        "hit_distance_sc": 53
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Javier B\u00e1ez grounds out, third baseman Nolan Gorman to first baseman Alec Burleson.",
        "launch_speed": 101.1,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 33
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Parker Meadows singles on a line drive to center fielder Victor Scott II.",
        "launch_speed": 105.0,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 174
    },
    {
        "player_name": "Leahy, Kyle",
        "des": "Foul",
        "launch_speed": 104.6,
        "launch_angle": 30,
        "events": NaN,
        "hit_distance_sc": 336
    },
    {
        "player_name": "Megill, Trevor",
        "des": "Bobby Witt Jr. singles on a ground ball to right fielder Blake Perkins.",
        "launch_speed": 103.4,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 122
    },
    {
        "player_name": "Zerpa, Angel",
        "des": "Starling Marte grounds out, third baseman Luis Rengifo to first baseman Jake Bauers.",
        "launch_speed": 107.3,
        "launch_angle": -17,
        "events": "field_out",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Zerpa, Angel",
        "des": "Salvador Perez flies out sharply to center fielder Garrett Mitchell. Maikel Garcia to 3rd.",
        "launch_speed": 104.5,
        "launch_angle": 34,
        "events": "field_out",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Anderson, Grant",
        "des": "Starling Marte singles on a ground ball to left fielder Brandon Lockridge.",
        "launch_speed": 104.0,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 63
    },
    {
        "player_name": "Strahm, Matt",
        "des": "Christian Yelich grounds into a force out, second baseman Jonathan India to shortstop Bobby Witt Jr. William Contreras out at 2nd. Christian Yelich to 1st.",
        "launch_speed": 102.6,
        "launch_angle": -13,
        "events": "force_out",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Strahm, Matt",
        "des": "William Contreras singles on a ground ball to left fielder Nick Loftin. Brice Turang scores. Luis Rengifo scores.",
        "launch_speed": 103.5,
        "launch_angle": 0,
        "events": "single",
        "hit_distance_sc": 46
    },
    {
        "player_name": "Anderson, Grant",
        "des": "Salvador Perez doubles (2) on a sharp line drive to right fielder Luis Matos, deflected by center fielder Brandon Lockridge.",
        "launch_speed": 105.8,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 363
    },
    {
        "player_name": "Mears, Nick",
        "des": "Luis Matos singles on a ground ball to left fielder Nick Loftin. Gary S\u00e1nchez to 2nd.",
        "launch_speed": 104.5,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 50
    },
    {
        "player_name": "Harrison, Kyle",
        "des": "Nick Loftin singles on a ground ball to center fielder Brandon Lockridge.",
        "launch_speed": 110.8,
        "launch_angle": -10,
        "events": "single",
        "hit_distance_sc": 10
    },
    {
        "player_name": "Bubic, Kris",
        "des": "William Contreras doubles (4) on a sharp line drive to left fielder Nick Loftin.",
        "launch_speed": 110.9,
        "launch_angle": 9,
        "events": "double",
        "hit_distance_sc": 157
    },
    {
        "player_name": "Bubic, Kris",
        "des": "Blake Perkins doubles (2) on a line drive to left fielder Nick Loftin. Brandon Lockridge scores.",
        "launch_speed": 106.2,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 357
    },
    {
        "player_name": "Harrison, Kyle",
        "des": "Maikel Garcia homers (1) on a fly ball to left field. Jonathan India scores.",
        "launch_speed": 101.5,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 388
    },
    {
        "player_name": "Harrison, Kyle",
        "des": "Salvador Perez lines out sharply to third baseman Luis Rengifo.",
        "launch_speed": 104.1,
        "launch_angle": 8,
        "events": "field_out",
        "hit_distance_sc": 143
    },
    {
        "player_name": "Harrison, Kyle",
        "des": "Foul",
        "launch_speed": 107.1,
        "launch_angle": 19,
        "events": NaN,
        "hit_distance_sc": 307
    },
    {
        "player_name": "Harrison, Kyle",
        "des": "Bobby Witt Jr. flies out sharply to center fielder Brandon Lockridge.",
        "launch_speed": 105.1,
        "launch_angle": 26,
        "events": "field_out",
        "hit_distance_sc": 373
    },
    {
        "player_name": "Harrison, Kyle",
        "des": "Maikel Garcia grounds out, second baseman Brice Turang to first baseman Gary S\u00e1nchez.",
        "launch_speed": 105.7,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 100
    },
    {
        "player_name": "Bubic, Kris",
        "des": "Gary S\u00e1nchez homers (3) on a fly ball to left center field. Christian Yelich scores.",
        "launch_speed": 109.0,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 414
    },
    {
        "player_name": "Brash, Matt",
        "des": "Logan O'Hoppe out on a sacrifice fly to center fielder Julio Rodr\u00edguez. Jo Adell scores.",
        "launch_speed": 108.4,
        "launch_angle": 16,
        "events": "sac_fly",
        "hit_distance_sc": 320
    },
    {
        "player_name": "Mu\u00f1oz, Andr\u00e9s",
        "des": "Jeimer Candelario grounds out sharply to first baseman Josh Naylor.",
        "launch_speed": 102.3,
        "launch_angle": 5,
        "events": "field_out",
        "hit_distance_sc": 104
    },
    {
        "player_name": "Legumina, Casey",
        "des": "Adam Frazier doubles (1) on a sharp line drive to right fielder Luke Raley.",
        "launch_speed": 102.3,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 276
    },
    {
        "player_name": "Legumina, Casey",
        "des": "Logan O'Hoppe flies out sharply to center fielder Julio Rodr\u00edguez.",
        "launch_speed": 102.4,
        "launch_angle": 28,
        "events": "field_out",
        "hit_distance_sc": 377
    },
    {
        "player_name": "Suter, Brent",
        "des": "Cole Young homers (2) on a fly ball to right field. Randy Arozarena scores. J.P. Crawford scores.",
        "launch_speed": 104.0,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 394
    },
    {
        "player_name": "Zeferjahn, Ryan",
        "des": "Josh Naylor grounds out sharply, pitcher Ryan Zeferjahn to first baseman Nolan Schanuel.",
        "launch_speed": 103.1,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 14
    },
    {
        "player_name": "Castillo, Luis",
        "des": "Jorge Soler singles on a sharp ground ball to right fielder Luke Raley. Mike Trout scores.",
        "launch_speed": 111.3,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 136
    },
    {
        "player_name": "Castillo, Luis",
        "des": "Nolan Schanuel grounds out sharply, first baseman Josh Naylor to pitcher Luis Castillo. Mike Trout to 3rd.",
        "launch_speed": 102.7,
        "launch_angle": -8,
        "events": "field_out",
        "hit_distance_sc": 15
    },
    {
        "player_name": "Castillo, Luis",
        "des": "Mike Trout doubles (1) on a sharp line drive to left fielder Randy Arozarena.",
        "launch_speed": 109.3,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 358
    },
    {
        "player_name": "Klassen, George",
        "des": "Cole Young flies out sharply to center fielder Mike Trout. Josh Naylor to 3rd. Randy Arozarena to 2nd.",
        "launch_speed": 101.7,
        "launch_angle": 28,
        "events": "field_out",
        "hit_distance_sc": 397
    },
    {
        "player_name": "Klassen, George",
        "des": "Foul",
        "launch_speed": 101.0,
        "launch_angle": 23,
        "events": NaN,
        "hit_distance_sc": 291
    },
    {
        "player_name": "Castillo, Luis",
        "des": "Logan O'Hoppe singles on a sharp ground ball to left fielder Randy Arozarena.",
        "launch_speed": 103.4,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 80
    },
    {
        "player_name": "Klassen, George",
        "des": "Julio Rodr\u00edguez lines out sharply to left fielder Josh Lowe.",
        "launch_speed": 111.3,
        "launch_angle": 13,
        "events": "field_out",
        "hit_distance_sc": 324
    },
    {
        "player_name": "Castillo, Luis",
        "des": "Zach Neto doubles (2) on a sharp line drive to left fielder Randy Arozarena.",
        "launch_speed": 104.7,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 289
    },
    {
        "player_name": "Castillo, Luis",
        "des": "Foul",
        "launch_speed": 105.6,
        "launch_angle": 30,
        "events": NaN,
        "hit_distance_sc": 369
    },
    {
        "player_name": "Sands, Cole",
        "des": "Junior Caminero flies out sharply to left fielder Trevor Larnach.",
        "launch_speed": 104.9,
        "launch_angle": 41,
        "events": "field_out",
        "hit_distance_sc": 347
    },
    {
        "player_name": "Jax, Griffin",
        "des": "Trevor Larnach lines out sharply to center fielder Cedric Mullins.",
        "launch_speed": 101.9,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 343
    },
    {
        "player_name": "Sands, Cole",
        "des": "Yandy D\u00edaz singles on a ground ball to center fielder Austin Martin.",
        "launch_speed": 105.2,
        "launch_angle": -15,
        "events": "single",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Woods Richardson, Simeon",
        "des": "Jonathan Aranda lines out sharply to center fielder Austin Martin.",
        "launch_speed": 101.7,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 341
    },
    {
        "player_name": "Woods Richardson, Simeon",
        "des": "Cedric Mullins lines out sharply to right fielder Matt Wallner.",
        "launch_speed": 102.3,
        "launch_angle": 20,
        "events": "field_out",
        "hit_distance_sc": 329
    },
    {
        "player_name": "Woods Richardson, Simeon",
        "des": "Junior Caminero homers (1) on a fly ball to left field.",
        "launch_speed": 103.2,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 397
    },
    {
        "player_name": "Woods Richardson, Simeon",
        "des": "Yandy D\u00edaz grounds into a double play, shortstop Brooks Lee to second baseman Luke Keaschall to first baseman Kody Clemens. Hunter Feduccia out at 2nd. Yandy D\u00edaz out at 1st.",
        "launch_speed": 103.1,
        "launch_angle": -9,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 12
    },
    {
        "player_name": "Woods Richardson, Simeon",
        "des": "Jonny DeLuca grounds out sharply, third baseman Tristan Gray to first baseman Kody Clemens.",
        "launch_speed": 105.3,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 55
    },
    {
        "player_name": "Martinez, Nick",
        "des": "Matt Wallner homers (3) on a fly ball to right field.",
        "launch_speed": 110.1,
        "launch_angle": 36,
        "events": "home_run",
        "hit_distance_sc": 409
    },
    {
        "player_name": "Martinez, Nick",
        "des": "Luke Keaschall grounds out sharply, shortstop Ben Williamson to first baseman Jonathan Aranda.",
        "launch_speed": 104.7,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 125
    },
    {
        "player_name": "Bender, Anthony",
        "des": "Jazz Chisholm Jr. doubles (3) on a sharp line drive to right fielder Owen Caissie. Cody Bellinger scores. Ben Rice scores.",
        "launch_speed": 106.0,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 330
    },
    {
        "player_name": "Bird, Jake",
        "des": "Graham Pauley doubles (3) on a sharp line drive to right fielder Aaron Judge. Jakob Marsee scores. Otto Lopez scores. Griffin Conine to 3rd.",
        "launch_speed": 104.3,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 211
    },
    {
        "player_name": "Paddack, Chris",
        "des": "Giancarlo Stanton singles on a line drive to left fielder Heriberto Hern\u00e1ndez. Ben Rice to 3rd.",
        "launch_speed": 116.3,
        "launch_angle": 17,
        "events": "single",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Paddack, Chris",
        "des": "Jazz Chisholm Jr. grounds out, shortstop Otto Lopez to first baseman Connor Norby.",
        "launch_speed": 102.9,
        "launch_angle": 0,
        "events": "field_out",
        "hit_distance_sc": 55
    },
    {
        "player_name": "Paddack, Chris",
        "des": "Aaron Judge doubles (1) on a sharp fly ball to center fielder Jakob Marsee.",
        "launch_speed": 110.7,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 404
    },
    {
        "player_name": "Fairbanks, Pete",
        "des": "Giancarlo Stanton singles on a sharp line drive to center fielder Jakob Marsee.",
        "launch_speed": 115.2,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 201
    },
    {
        "player_name": "Fairbanks, Pete",
        "des": "Ben Rice homers (3) on a fly ball to right field. Trent Grisham scores. Aaron Judge scores.",
        "launch_speed": 110.0,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 410
    },
    {
        "player_name": "Montgomery, Mason",
        "des": "Jeremiah Jackson singles on a ground ball to right fielder Ryan O'Hearn. Tyler O'Neill scores. Dylan Beavers to 2nd.",
        "launch_speed": 109.0,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 28
    },
    {
        "player_name": "Povich, Cade",
        "des": "Oneil Cruz homers (4) on a fly ball to center field. Jake Mangum scores.",
        "launch_speed": 107.2,
        "launch_angle": 23,
        "events": "home_run",
        "hit_distance_sc": 415
    },
    {
        "player_name": "Povich, Cade",
        "des": "Nick Yorke grounds out sharply, shortstop Gunnar Henderson to first baseman Pete Alonso.",
        "launch_speed": 103.7,
        "launch_angle": -10,
        "events": "field_out",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Povich, Cade",
        "des": "Bryan Reynolds grounds out sharply, third baseman Blaze Alexander to first baseman Pete Alonso.",
        "launch_speed": 104.9,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 33
    },
    {
        "player_name": "Ashcraft, Braxton",
        "des": "Foul",
        "launch_speed": 110.6,
        "launch_angle": 27,
        "events": NaN,
        "hit_distance_sc": 385
    },
    {
        "player_name": "Ashcraft, Braxton",
        "des": "Foul",
        "launch_speed": 110.5,
        "launch_angle": 30,
        "events": NaN,
        "hit_distance_sc": 401
    },
    {
        "player_name": "Ashcraft, Braxton",
        "des": "Pete Alonso doubles (1) on a sharp line drive to center fielder Oneil Cruz. Taylor Ward scores.",
        "launch_speed": 107.1,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 335
    },
    {
        "player_name": "Bassitt, Chris",
        "des": "Brandon Lowe grounds into a force out, first baseman Pete Alonso to catcher Samuel Basallo. Henry Davis out at home. Jake Mangum to 3rd. Oneil Cruz to 2nd. Brandon Lowe to 1st.",
        "launch_speed": 101.9,
        "launch_angle": 1,
        "events": "force_out",
        "hit_distance_sc": 58
    },
    {
        "player_name": "Bassitt, Chris",
        "des": "Oneil Cruz singles on a sharp ground ball to catcher Samuel Basallo, deflected by pitcher Chris Bassitt. Spencer Horwitz scores. Henry Davis to 3rd. Jake Mangum to 2nd.",
        "launch_speed": 111.8,
        "launch_angle": -7,
        "events": "single",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Bassitt, Chris",
        "des": "Nick Yorke singles on a sharp ground ball to right fielder Tyler O'Neill.",
        "launch_speed": 108.8,
        "launch_angle": -7,
        "events": "single",
        "hit_distance_sc": 18
    },
    {
        "player_name": "Bassitt, Chris",
        "des": "Ryan O'Hearn homers (3) on a fly ball to center field. Bryan Reynolds scores.",
        "launch_speed": 103.8,
        "launch_angle": 32,
        "events": "home_run",
        "hit_distance_sc": 402
    },
    {
        "player_name": "Williams, Devin",
        "des": "Rafael Devers grounds out, second baseman Marcus Semien to first baseman Mark Vientos.",
        "launch_speed": 106.3,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 60
    },
    {
        "player_name": "Miller, Erik",
        "des": "Marcus Semien doubles (2) on a sharp line drive to left fielder Heliot Ramos. Mark Vientos scores.",
        "launch_speed": 106.3,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 296
    },
    {
        "player_name": "Winn, Keaton",
        "des": "Jorge Polanco doubles (3) on a sharp line drive to right fielder Jung Hoo Lee.",
        "launch_speed": 108.7,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 242
    },
    {
        "player_name": "Brazob\u00e1n, Huascar",
        "des": "Harrison Bader grounds out, first baseman Mark Vientos to pitcher Huascar Brazob\u00e1n.",
        "launch_speed": 101.8,
        "launch_angle": 0,
        "events": "field_out",
        "hit_distance_sc": 53
    },
    {
        "player_name": "Brazob\u00e1n, Huascar",
        "des": "Jung Hoo Lee lines out to second baseman Marcus Semien.",
        "launch_speed": 104.0,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 148
    },
    {
        "player_name": "Senga, Kodai",
        "des": "Matt Chapman doubles (2) on a sharp line drive to left fielder Jared Young. Patrick Bailey scores.",
        "launch_speed": 104.8,
        "launch_angle": 14,
        "events": "double",
        "hit_distance_sc": 267
    },
    {
        "player_name": "Webb, Logan",
        "des": "Bo Bichette grounds out, shortstop Willy Adames to first baseman Rafael Devers.",
        "launch_speed": 101.3,
        "launch_angle": -14,
        "events": "field_out",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Webb, Logan",
        "des": "Francisco Alvarez singles on a ground ball to center fielder Harrison Bader.",
        "launch_speed": 105.5,
        "launch_angle": 0,
        "events": "single",
        "hit_distance_sc": 35
    },
    {
        "player_name": "Senga, Kodai",
        "des": "Heliot Ramos grounds into a force out, shortstop Francisco Lindor to second baseman Marcus Semien. Rafael Devers out at 2nd.",
        "launch_speed": 107.9,
        "launch_angle": -6,
        "events": "force_out",
        "hit_distance_sc": 16
    },
    {
        "player_name": "Webb, Logan",
        "des": "Luis Robert Jr. grounds into a force out, second baseman Luis Arraez to shortstop Willy Adames. Jorge Polanco out at 2nd. Luis Robert Jr. to 1st.",
        "launch_speed": 104.8,
        "launch_angle": -14,
        "events": "force_out",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Webb, Logan",
        "des": "Foul",
        "launch_speed": 105.3,
        "launch_angle": -4,
        "events": NaN,
        "hit_distance_sc": 24
    },
    {
        "player_name": "Webb, Logan",
        "des": "Jorge Polanco singles on a sharp line drive to right fielder Jung Hoo Lee.",
        "launch_speed": 101.2,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 258
    },
    {
        "player_name": "Webb, Logan",
        "des": "Luis Robert Jr. singles on a ground ball to center fielder Harrison Bader.",
        "launch_speed": 106.6,
        "launch_angle": -18,
        "events": "single",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Webb, Logan",
        "des": "Jorge Polanco grounds out to first baseman Rafael Devers.",
        "launch_speed": 103.1,
        "launch_angle": -34,
        "events": "field_out",
        "hit_distance_sc": 3
    },
    {
        "player_name": "Webb, Logan",
        "des": "Foul",
        "launch_speed": 103.7,
        "launch_angle": 18,
        "events": NaN,
        "hit_distance_sc": 273
    },
    {
        "player_name": "Martin, Chris",
        "des": "Will Benson singles on a ground ball to right fielder Brandon Nimmo.",
        "launch_speed": 105.9,
        "launch_angle": -4,
        "events": "single",
        "hit_distance_sc": 25
    },
    {
        "player_name": "Phillips, Connor",
        "des": "Evan Carter flies out sharply to center fielder Dane Myers.",
        "launch_speed": 101.9,
        "launch_angle": 29,
        "events": "field_out",
        "hit_distance_sc": 404
    },
    {
        "player_name": "Phillips, Connor",
        "des": "Foul",
        "launch_speed": 101.5,
        "launch_angle": -3,
        "events": NaN,
        "hit_distance_sc": 32
    },
    {
        "player_name": "Phillips, Connor",
        "des": "Jake Burger doubles (3) on a sharp line drive to left fielder TJ Friedl.",
        "launch_speed": 105.5,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 342
    },
    {
        "player_name": "Martin, Chris",
        "des": "Tyler Stephenson lines into a double play, second baseman Josh Smith to third baseman Josh Jung. Elly De La Cruz out at 3rd.",
        "launch_speed": 106.4,
        "launch_angle": 10,
        "events": "double_play",
        "hit_distance_sc": 169
    },
    {
        "player_name": "Garcia, Robert",
        "des": "Sal Stewart lines out to right fielder Brandon Nimmo.",
        "launch_speed": 101.9,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 321
    },
    {
        "player_name": "Garcia, Robert",
        "des": "Elly De La Cruz singles on a ground ball to right fielder Brandon Nimmo. Matt McLain scores.",
        "launch_speed": 104.1,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 39
    },
    {
        "player_name": "Johnson, Pierce",
        "des": "Kyle Higashioka flies out softly to center fielder TJ Friedl. Evan Carter to 3rd.",
        "launch_speed": 101.3,
        "launch_angle": 27,
        "events": "field_out",
        "hit_distance_sc": 406
    },
    {
        "player_name": "Burns, Chase",
        "des": "Joc Pederson homers (1) on a fly ball to right field.",
        "launch_speed": 101.6,
        "launch_angle": 41,
        "events": "home_run",
        "hit_distance_sc": 361
    },
    {
        "player_name": "Leiter, Jack",
        "des": "Ke'Bryan Hayes singles on a sharp line drive to center fielder Evan Carter.",
        "launch_speed": 104.6,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 268
    },
    {
        "player_name": "Leiter, Jack",
        "des": "Foul",
        "launch_speed": 104.3,
        "launch_angle": -29,
        "events": NaN,
        "hit_distance_sc": 5
    },
    {
        "player_name": "Leiter, Jack",
        "des": "Tyler Stephenson flies out sharply to center fielder Evan Carter.",
        "launch_speed": 101.3,
        "launch_angle": 24,
        "events": "field_out",
        "hit_distance_sc": 369
    },
    {
        "player_name": "Leiter, Jack",
        "des": "Foul",
        "launch_speed": 103.1,
        "launch_angle": 17,
        "events": NaN,
        "hit_distance_sc": 285
    },
    {
        "player_name": "Beeter, Clayton",
        "des": "Teoscar Hern\u00e1ndez homers (1) on a fly ball to center field.",
        "launch_speed": 103.0,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 414
    },
    {
        "player_name": "Beeter, Clayton",
        "des": "Shohei Ohtani out on a sacrifice fly to left fielder Daylen Lile. Santiago Espinal scores.",
        "launch_speed": 102.1,
        "launch_angle": 30,
        "events": "sac_fly",
        "hit_distance_sc": 343
    },
    {
        "player_name": "P\u00e9rez, Cionel",
        "des": "Andy Pages doubles (2) on a sharp ground ball to left fielder Daylen Lile. Freddie Freeman to 3rd.",
        "launch_speed": 103.6,
        "launch_angle": 6,
        "events": "double",
        "hit_distance_sc": 116
    },
    {
        "player_name": "Dreyer, Jack",
        "des": "Luis Garc\u00eda Jr. flies out to center fielder Andy Pages.",
        "launch_speed": 104.6,
        "launch_angle": 24,
        "events": "field_out",
        "hit_distance_sc": 389
    },
    {
        "player_name": "Vesia, Alex",
        "des": "James Wood grounds into a force out, third baseman Santiago Espinal to shortstop Miguel Rojas. Curtis Mead out at 2nd.",
        "launch_speed": 105.1,
        "launch_angle": 1,
        "events": "force_out",
        "hit_distance_sc": 76
    },
    {
        "player_name": "Poulin, PJ",
        "des": "Dalton Rushing homers (1) on a fly ball to right center field. Alex Call scores.",
        "launch_speed": 103.0,
        "launch_angle": 31,
        "events": "home_run",
        "hit_distance_sc": 375
    },
    {
        "player_name": "Poulin, PJ",
        "des": "Foul",
        "launch_speed": 104.2,
        "launch_angle": 18,
        "events": NaN,
        "hit_distance_sc": 265
    },
    {
        "player_name": "Sasaki, Roki",
        "des": "Joey Wiemer grounds out, shortstop Miguel Rojas to first baseman Freddie Freeman.",
        "launch_speed": 102.5,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 48
    },
    {
        "player_name": "Sasaki, Roki",
        "des": "James Wood homers (2) on a fly ball to center field. Keibert Ruiz scores. Jos\u00e9 Tena scores.",
        "launch_speed": 107.6,
        "launch_angle": 34,
        "events": "home_run",
        "hit_distance_sc": 416
    },
    {
        "player_name": "Sasaki, Roki",
        "des": "Luis Garc\u00eda Jr. homers (1) on a fly ball to center field. James Wood scores.",
        "launch_speed": 107.4,
        "launch_angle": 30,
        "events": "home_run",
        "hit_distance_sc": 405
    },
    {
        "player_name": "Griffin, Foster",
        "des": "Teoscar Hern\u00e1ndez singles on a ground ball to right fielder James Wood. Miguel Rojas to 2nd.",
        "launch_speed": 104.2,
        "launch_angle": -25,
        "events": "single",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Griffin, Foster",
        "des": "Shohei Ohtani homers (2) on a fly ball to center field.",
        "launch_speed": 114.6,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 438
    }
];