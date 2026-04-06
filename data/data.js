const reportDate = 'April 04, 2026';
const statcastData = [
    {
        "player_name": "Lo\u00e1isiga, Jonathan",
        "des": "Ronald Acu\u00f1a Jr. grounds out, second baseman Ketel Marte to first baseman Jose Fernandez.",
        "launch_speed": 112.3,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 73
    },
    {
        "player_name": "Soroka, Michael",
        "des": "Mauricio Dub\u00f3n singles on a sharp line drive to shortstop Geraldo Perdomo.",
        "launch_speed": 104.8,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 179
    },
    {
        "player_name": "Elder, Bryce",
        "des": "Gabriel Moreno singles on a sharp line drive to left fielder Mike Yastrzemski.",
        "launch_speed": 110.2,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 246
    },
    {
        "player_name": "Soroka, Michael",
        "des": "Michael Harris II singles on a ground ball to center fielder Alek Thomas.",
        "launch_speed": 108.7,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 24
    },
    {
        "player_name": "Soroka, Michael",
        "des": "Matt Olson doubles (5) on a sharp fly ball to center fielder Alek Thomas.",
        "launch_speed": 108.6,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 397
    },
    {
        "player_name": "Soroka, Michael",
        "des": "Drake Baldwin flies out to right fielder Corbin Carroll.",
        "launch_speed": 101.0,
        "launch_angle": 41,
        "events": "field_out",
        "hit_distance_sc": 351
    },
    {
        "player_name": "Elder, Bryce",
        "des": "Gabriel Moreno singles on a ground ball to center fielder Michael Harris II.",
        "launch_speed": 104.5,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 88
    },
    {
        "player_name": "Soroka, Michael",
        "des": "Michael Harris II flies out sharply to center fielder Alek Thomas.",
        "launch_speed": 102.3,
        "launch_angle": 29,
        "events": "field_out",
        "hit_distance_sc": 407
    },
    {
        "player_name": "Okert, Steven",
        "des": "Foul",
        "launch_speed": 101.2,
        "launch_angle": 7,
        "events": NaN,
        "hit_distance_sc": 138
    },
    {
        "player_name": "Kelly, Michael",
        "des": "Yainer Diaz singles on a ground ball to left fielder Carlos Cortes. Joey Loperfido to 2nd.",
        "launch_speed": 106.3,
        "launch_angle": -6,
        "events": "single",
        "hit_distance_sc": 20
    },
    {
        "player_name": "Teng, Kai-Wei",
        "des": "Carlos Cortes singles on a line drive to left fielder Joey Loperfido, deflected by third baseman Shay Whitcomb.",
        "launch_speed": 101.5,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 201
    },
    {
        "player_name": "Teng, Kai-Wei",
        "des": "Nick Kurtz flies out sharply to center fielder Jake Meyers.",
        "launch_speed": 105.1,
        "launch_angle": 36,
        "events": "field_out",
        "hit_distance_sc": 378
    },
    {
        "player_name": "Medina, Luis",
        "des": "Christian Walker grounds into a force out, shortstop Jacob Wilson to second baseman Jeff McNeil. Shay Whitcomb out at 2nd.",
        "launch_speed": 104.9,
        "launch_angle": -19,
        "events": "force_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Medina, Luis",
        "des": "Cam Smith homers (2) on a fly ball to left center field.",
        "launch_speed": 111.1,
        "launch_angle": 34,
        "events": "home_run",
        "hit_distance_sc": 402
    },
    {
        "player_name": "Teng, Kai-Wei",
        "des": "Lawrence Butler flies out sharply to center fielder Jake Meyers.",
        "launch_speed": 102.2,
        "launch_angle": 39,
        "events": "field_out",
        "hit_distance_sc": 334
    },
    {
        "player_name": "Imai, Tatsuya",
        "des": "Foul",
        "launch_speed": 106.7,
        "launch_angle": 26,
        "events": NaN,
        "hit_distance_sc": 328
    },
    {
        "player_name": "Imai, Tatsuya",
        "des": "Max Muncy singles on a ground ball to center fielder Jake Meyers.",
        "launch_speed": 101.9,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 86
    },
    {
        "player_name": "Morales, Luis",
        "des": "Christian Walker homers (1) on a line drive to left center field.",
        "launch_speed": 108.2,
        "launch_angle": 20,
        "events": "home_run",
        "hit_distance_sc": 383
    },
    {
        "player_name": "Morales, Luis",
        "des": "Foul",
        "launch_speed": 107.1,
        "launch_angle": -14,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Morales, Luis",
        "des": "Christian V\u00e1zquez singles on a ground ball to left fielder Tyler Soderstrom. Jake Meyers to 2nd.",
        "launch_speed": 107.4,
        "launch_angle": -15,
        "events": "single",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Imai, Tatsuya",
        "des": "Foul",
        "launch_speed": 102.1,
        "launch_angle": 0,
        "events": NaN,
        "hit_distance_sc": 70
    },
    {
        "player_name": "Morales, Luis",
        "des": "Joey Loperfido singles on a sharp ground ball to center fielder Denzel Clarke. Christian Walker to 3rd.",
        "launch_speed": 102.7,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 141
    },
    {
        "player_name": "Morales, Luis",
        "des": "Foul",
        "launch_speed": 113.1,
        "launch_angle": 25,
        "events": NaN,
        "hit_distance_sc": 394
    },
    {
        "player_name": "Chapman, Aroldis",
        "des": "Fernando Tatis Jr. doubles (2) on a line drive to center fielder Ceddanne Rafaela.",
        "launch_speed": 113.5,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 370
    },
    {
        "player_name": "Chapman, Aroldis",
        "des": "Jake Cronenworth lines out sharply to shortstop Trevor Story.",
        "launch_speed": 103.2,
        "launch_angle": 9,
        "events": "field_out",
        "hit_distance_sc": 159
    },
    {
        "player_name": "Morejon, Adrian",
        "des": "Roman Anthony singles on a ground ball to right fielder Fernando Tatis Jr. Ceddanne Rafaela to 3rd.",
        "launch_speed": 103.9,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 75
    },
    {
        "player_name": "Slaten, Justin",
        "des": "Miguel Andujar singles on a line drive to left fielder Jarren Duran.",
        "launch_speed": 108.5,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 288
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Wilyer Abreu grounds out, second baseman Jake Cronenworth to first baseman Ty France.",
        "launch_speed": 103.9,
        "launch_angle": -18,
        "events": "field_out",
        "hit_distance_sc": 5
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Willson Contreras lines out sharply to right fielder Fernando Tatis Jr.",
        "launch_speed": 104.2,
        "launch_angle": 21,
        "events": "field_out",
        "hit_distance_sc": 366
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Trevor Story grounds out, second baseman Jake Cronenworth to first baseman Ty France.",
        "launch_speed": 101.7,
        "launch_angle": -9,
        "events": "field_out",
        "hit_distance_sc": 19
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Roman Anthony triples (1) on a line drive to right fielder Fernando Tatis Jr.",
        "launch_speed": 103.1,
        "launch_angle": 14,
        "events": "triple",
        "hit_distance_sc": 200
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Carlos Narv\u00e1ez grounds out, second baseman Jake Cronenworth to first baseman Ty France.",
        "launch_speed": 105.0,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 57
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Wilyer Abreu singles on a ground ball to center fielder Bryce Johnson.",
        "launch_speed": 102.7,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 33
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Willson Contreras grounds into a double play, shortstop Xander Bogaerts to second baseman Jake Cronenworth to first baseman Ty France. Jarren Duran out at 2nd. Willson Contreras out at 1st.",
        "launch_speed": 102.2,
        "launch_angle": 3,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 76
    },
    {
        "player_name": "V\u00e1squez, Randy",
        "des": "Jarren Duran singles on a sharp line drive to right fielder Fernando Tatis Jr.",
        "launch_speed": 108.2,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 262
    },
    {
        "player_name": "Early, Connelly",
        "des": "Ty France grounds out, third baseman Caleb Durbin to first baseman Willson Contreras.",
        "launch_speed": 102.1,
        "launch_angle": -5,
        "events": "field_out",
        "hit_distance_sc": 19
    },
    {
        "player_name": "Early, Connelly",
        "des": "Ty France singles on a sharp fly ball to left fielder Jarren Duran. Freddy Fermin to 3rd.",
        "launch_speed": 107.4,
        "launch_angle": 23,
        "events": "single",
        "hit_distance_sc": 376
    },
    {
        "player_name": "Fisher, Braydon",
        "des": "Foul",
        "launch_speed": 103.9,
        "launch_angle": 41,
        "events": NaN,
        "hit_distance_sc": 342
    },
    {
        "player_name": "Fisher, Braydon",
        "des": "Munetaka Murakami lines out to shortstop Andr\u00e9s Gim\u00e9nez.",
        "launch_speed": 101.9,
        "launch_angle": 10,
        "events": "field_out",
        "hit_distance_sc": 153
    },
    {
        "player_name": "Nance, Tommy",
        "des": "Andrew Benintendi grounds out, second baseman Ernie Clement to first baseman Vladimir Guerrero Jr.",
        "launch_speed": 102.1,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 47
    },
    {
        "player_name": "Little, Brendon",
        "des": "Munetaka Murakami homers (4) on a fly ball to center field. Miguel Vargas scores.",
        "launch_speed": 111.1,
        "launch_angle": 24,
        "events": "home_run",
        "hit_distance_sc": 431
    },
    {
        "player_name": "Kay, Anthony",
        "des": "Foul",
        "launch_speed": 108.3,
        "launch_angle": 10,
        "events": NaN,
        "hit_distance_sc": 211
    },
    {
        "player_name": "Kay, Anthony",
        "des": "Vladimir Guerrero Jr. homers (1) on a fly ball to left center field. Davis Schneider scores.",
        "launch_speed": 108.5,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 437
    },
    {
        "player_name": "Estrada, Lazaro",
        "des": "Foul",
        "launch_speed": 110.2,
        "launch_angle": -13,
        "events": NaN,
        "hit_distance_sc": 9
    },
    {
        "player_name": "Kay, Anthony",
        "des": "Tyler Heineman grounds out, third baseman Miguel Vargas to first baseman Munetaka Murakami.",
        "launch_speed": 103.0,
        "launch_angle": 4,
        "events": "field_out",
        "hit_distance_sc": 82
    },
    {
        "player_name": "Estrada, Lazaro",
        "des": "Luisangel Acu\u00f1a lines out to right fielder Myles Straw.",
        "launch_speed": 101.2,
        "launch_angle": 15,
        "events": "field_out",
        "hit_distance_sc": 282
    },
    {
        "player_name": "Kay, Anthony",
        "des": "Kazuma Okamoto singles on a sharp line drive to left fielder Austin Hays. Davis Schneider to 2nd.",
        "launch_speed": 103.1,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 217
    },
    {
        "player_name": "Kay, Anthony",
        "des": "Vladimir Guerrero Jr. flies out to left fielder Austin Hays.",
        "launch_speed": 102.8,
        "launch_angle": 35,
        "events": "field_out",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Kay, Anthony",
        "des": "Davis Schneider singles on a ground ball to left fielder Austin Hays.",
        "launch_speed": 107.1,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 106
    },
    {
        "player_name": "Fluharty, Mason",
        "des": "Miguel Vargas doubles (2) on a sharp fly ball to left fielder Davis Schneider. Lenyn Sosa to 3rd.",
        "launch_speed": 109.1,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 331
    },
    {
        "player_name": "Fluharty, Mason",
        "des": "Foul",
        "launch_speed": 110.7,
        "launch_angle": 43,
        "events": NaN,
        "hit_distance_sc": 381
    },
    {
        "player_name": "Dollander, Chase",
        "des": "Brandon Marsh grounds out, shortstop Ezequiel Tovar to first baseman Troy Johnston.",
        "launch_speed": 108.6,
        "launch_angle": -15,
        "events": "field_out",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Luzardo, Jes\u00fas",
        "des": "Kyle Karros flies out to center fielder Justin Crawford. Troy Johnston to 3rd.",
        "launch_speed": 105.2,
        "launch_angle": 26,
        "events": "field_out",
        "hit_distance_sc": 398
    },
    {
        "player_name": "Dollander, Chase",
        "des": "Bryce Harper flies out sharply to center fielder Brenton Doyle.",
        "launch_speed": 101.2,
        "launch_angle": 31,
        "events": "field_out",
        "hit_distance_sc": 402
    },
    {
        "player_name": "Herget, Jimmy",
        "des": "Brandon Marsh flies out sharply to right fielder Tyler Freeman.",
        "launch_speed": 101.1,
        "launch_angle": 40,
        "events": "field_out",
        "hit_distance_sc": 380
    },
    {
        "player_name": "Holton, Tyler",
        "des": "Foul",
        "launch_speed": 111.4,
        "launch_angle": -6,
        "events": NaN,
        "hit_distance_sc": 13
    },
    {
        "player_name": "Svanson, Matt",
        "des": "Riley Greene grounds out, second baseman JJ Wetherholt to first baseman Alec Burleson.",
        "launch_speed": 106.5,
        "launch_angle": 3,
        "events": "field_out",
        "hit_distance_sc": 76
    },
    {
        "player_name": "Svanson, Matt",
        "des": "Matt Vierling grounds into a double play, shortstop Thomas Saggese to second baseman JJ Wetherholt to first baseman Alec Burleson. Parker Meadows out at 2nd. Matt Vierling out at 1st.",
        "launch_speed": 101.3,
        "launch_angle": -20,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Anderson, Drew",
        "des": "Jordan Walker hits a grand slam (2) to left center field. Iv\u00e1n Herrera scores. Alec Burleson scores. Nolan Gorman scores.",
        "launch_speed": 113.7,
        "launch_angle": 22,
        "events": "home_run",
        "hit_distance_sc": 459
    },
    {
        "player_name": "Flaherty, Jack",
        "des": "Alec Burleson doubles (2) on a fly ball to left fielder Riley Greene. JJ Wetherholt scores. Iv\u00e1n Herrera to 3rd.",
        "launch_speed": 101.5,
        "launch_angle": 23,
        "events": "double",
        "hit_distance_sc": 334
    },
    {
        "player_name": "May, Dustin",
        "des": "Zach McKinstry homers (1) on a fly ball to right field. Dillon Dingler scores.",
        "launch_speed": 102.2,
        "launch_angle": 29,
        "events": "home_run",
        "hit_distance_sc": 399
    },
    {
        "player_name": "May, Dustin",
        "des": "Riley Greene flies out to left fielder Nathan Church.",
        "launch_speed": 103.5,
        "launch_angle": 54,
        "events": "field_out",
        "hit_distance_sc": 279
    },
    {
        "player_name": "Flaherty, Jack",
        "des": "Jordan Walker singles on a ground ball to left fielder Riley Greene. Iv\u00e1n Herrera scores.",
        "launch_speed": 111.1,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 87
    },
    {
        "player_name": "May, Dustin",
        "des": "Colt Keith singles on a line drive to right fielder Jordan Walker. Colt Keith out at 2nd on the throw, right fielder Jordan Walker to shortstop Thomas Saggese. Parker Meadows to 3rd.",
        "launch_speed": 105.9,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 206
    },
    {
        "player_name": "May, Dustin",
        "des": "Foul",
        "launch_speed": 102.3,
        "launch_angle": -33,
        "events": NaN,
        "hit_distance_sc": 3
    },
    {
        "player_name": "May, Dustin",
        "des": "Colt Keith singles on a ground ball to first baseman Alec Burleson, deflected by pitcher Dustin May.",
        "launch_speed": 104.4,
        "launch_angle": -4,
        "events": "single",
        "hit_distance_sc": 26
    },
    {
        "player_name": "Koenig, Jared",
        "des": "Kyle Isbel singles on a ground ball to center fielder Garrett Mitchell. Carter Jensen scores. Isaac Collins to 2nd.",
        "launch_speed": 107.4,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 182
    },
    {
        "player_name": "Sproat, Brandon",
        "des": "Carter Jensen singles on a sharp ground ball to right fielder Blake Perkins. Jonathan India to 3rd.",
        "launch_speed": 109.6,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 122
    },
    {
        "player_name": "Sproat, Brandon",
        "des": "Jonathan India singles on a sharp line drive to left fielder Brandon Lockridge.",
        "launch_speed": 105.5,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 185
    },
    {
        "player_name": "Sproat, Brandon",
        "des": "Salvador Perez homers (2) on a fly ball to center field.",
        "launch_speed": 101.6,
        "launch_angle": 24,
        "events": "home_run",
        "hit_distance_sc": 417
    },
    {
        "player_name": "Lugo, Seth",
        "des": "Gary S\u00e1nchez grounds out, third baseman Maikel Garcia to first baseman Vinnie Pasquantino.",
        "launch_speed": 105.2,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 68
    },
    {
        "player_name": "Uribe, Abner",
        "des": "Jac Caglianone grounds out, first baseman Jake Bauers to pitcher Abner Uribe.",
        "launch_speed": 105.9,
        "launch_angle": -18,
        "events": "field_out",
        "hit_distance_sc": 4
    },
    {
        "player_name": "Schreiber, John",
        "des": "Brice Turang grounds into a double play, shortstop Bobby Witt Jr. to second baseman Nick Loftin to third baseman Maikel Garcia. Brandon Lockridge out at 3rd. David Hamilton out at 2nd.",
        "launch_speed": 104.1,
        "launch_angle": 8,
        "events": "double_play",
        "hit_distance_sc": 196
    },
    {
        "player_name": "Ashby, Aaron",
        "des": "Bobby Witt Jr. singles on a sharp ground ball to second baseman Brice Turang. Lane Thomas scores.",
        "launch_speed": 106.6,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 144
    },
    {
        "player_name": "Ashby, Aaron",
        "des": "Lane Thomas doubles (1) on a sharp line drive to left fielder Brandon Lockridge. Nick Loftin scores.",
        "launch_speed": 101.9,
        "launch_angle": 18,
        "events": "double",
        "hit_distance_sc": 269
    },
    {
        "player_name": "Ashby, Aaron",
        "des": "Foul",
        "launch_speed": 103.7,
        "launch_angle": 20,
        "events": NaN,
        "hit_distance_sc": 341
    },
    {
        "player_name": "Ashby, Aaron",
        "des": "Jac Caglianone singles on a ground ball to first baseman Jake Bauers. Vinnie Pasquantino to 3rd.",
        "launch_speed": 106.1,
        "launch_angle": -15,
        "events": "single",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Lange, Alex",
        "des": "Luis Rengifo doubles (2) on a line drive to right fielder Jac Caglianone. Brice Turang to 3rd.",
        "launch_speed": 101.0,
        "launch_angle": 23,
        "events": "double",
        "hit_distance_sc": 324
    },
    {
        "player_name": "Patrick, Chad",
        "des": "Foul",
        "launch_speed": 105.2,
        "launch_angle": 8,
        "events": NaN,
        "hit_distance_sc": 151
    },
    {
        "player_name": "Lynch IV, Daniel",
        "des": "Christian Yelich singles on a ground ball to right fielder Jac Caglianone.",
        "launch_speed": 106.7,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 58
    },
    {
        "player_name": "Patrick, Chad",
        "des": "Starling Marte doubles (1) on a sharp line drive to left fielder Brandon Lockridge. Jac Caglianone to 3rd.",
        "launch_speed": 108.2,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 373
    },
    {
        "player_name": "Avila, Luinder",
        "des": "Brandon Lockridge singles on a ground ball to right fielder Jac Caglianone.",
        "launch_speed": 109.7,
        "launch_angle": -7,
        "events": "single",
        "hit_distance_sc": 18
    },
    {
        "player_name": "Avila, Luinder",
        "des": "Garrett Mitchell homers (1) on a fly ball to right center field. William Contreras scores. Christian Yelich scores.",
        "launch_speed": 106.1,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 420
    },
    {
        "player_name": "Avila, Luinder",
        "des": "William Contreras doubles (3) on a ground ball to left fielder Isaac Collins.",
        "launch_speed": 105.3,
        "launch_angle": -2,
        "events": "double",
        "hit_distance_sc": 32
    },
    {
        "player_name": "Patrick, Chad",
        "des": "Jac Caglianone singles on a sharp line drive to right fielder Sal Frelick.",
        "launch_speed": 116.1,
        "launch_angle": 13,
        "events": "single",
        "hit_distance_sc": 285
    },
    {
        "player_name": "Avila, Luinder",
        "des": "David Hamilton singles on a sharp ground ball to right fielder Jac Caglianone.",
        "launch_speed": 109.9,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 137
    },
    {
        "player_name": "Patrick, Chad",
        "des": "Vinnie Pasquantino grounds into a double play, second baseman Brice Turang to shortstop David Hamilton to first baseman Jake Bauers. Bobby Witt Jr. out at 2nd. Vinnie Pasquantino out at 1st.",
        "launch_speed": 105.1,
        "launch_angle": -12,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Patrick, Chad",
        "des": "Maikel Garcia grounds out, second baseman Brice Turang to first baseman Jake Bauers.",
        "launch_speed": 101.4,
        "launch_angle": -8,
        "events": "field_out",
        "hit_distance_sc": 13
    },
    {
        "player_name": "Avila, Luinder",
        "des": "Garrett Mitchell doubles (2) on a fly ball to center fielder Kyle Isbel. Luis Rengifo scores. Christian Yelich scores.",
        "launch_speed": 108.8,
        "launch_angle": 25,
        "events": "double",
        "hit_distance_sc": 405
    },
    {
        "player_name": "Pomeranz, Drew",
        "des": "Foul",
        "launch_speed": 106.0,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 306
    },
    {
        "player_name": "Bazardo, Eduard",
        "des": "Logan O'Hoppe flies out sharply to left fielder Randy Arozarena.",
        "launch_speed": 101.2,
        "launch_angle": 44,
        "events": "field_out",
        "hit_distance_sc": 314
    },
    {
        "player_name": "Hancock, Emerson",
        "des": "Jo Adell grounds out, second baseman Cole Young to first baseman Josh Naylor.",
        "launch_speed": 104.1,
        "launch_angle": 4,
        "events": "field_out",
        "hit_distance_sc": 101
    },
    {
        "player_name": "Kochanowicz, Jack",
        "des": "Julio Rodr\u00edguez grounds out, shortstop Zach Neto to first baseman Nolan Schanuel.",
        "launch_speed": 102.8,
        "launch_angle": -7,
        "events": "field_out",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Kochanowicz, Jack",
        "des": "Foul",
        "launch_speed": 103.9,
        "launch_angle": -24,
        "events": NaN,
        "hit_distance_sc": 4
    },
    {
        "player_name": "Kochanowicz, Jack",
        "des": "Foul",
        "launch_speed": 101.0,
        "launch_angle": 5,
        "events": NaN,
        "hit_distance_sc": 94
    },
    {
        "player_name": "Kochanowicz, Jack",
        "des": "Luke Raley grounds out, second baseman Oswald Peraza to first baseman Nolan Schanuel.",
        "launch_speed": 101.9,
        "launch_angle": 3,
        "events": "field_out",
        "hit_distance_sc": 75
    },
    {
        "player_name": "Hancock, Emerson",
        "des": "Yo\u00e1n Moncada flies out sharply to right fielder Luke Raley.",
        "launch_speed": 101.3,
        "launch_angle": 32,
        "events": "field_out",
        "hit_distance_sc": 363
    },
    {
        "player_name": "Kochanowicz, Jack",
        "des": "J.P. Crawford hits a ground-rule double (1) on a line drive to right field.",
        "launch_speed": 105.2,
        "launch_angle": 20,
        "events": "double",
        "hit_distance_sc": 339
    },
    {
        "player_name": "Hancock, Emerson",
        "des": "Jorge Soler singles on a ground ball to left fielder Randy Arozarena. Nolan Schanuel to 3rd.",
        "launch_speed": 106.1,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 43
    },
    {
        "player_name": "Hancock, Emerson",
        "des": "Zach Neto homers (3) on a fly ball to left center field.",
        "launch_speed": 106.8,
        "launch_angle": 33,
        "events": "home_run",
        "hit_distance_sc": 443
    },
    {
        "player_name": "Kochanowicz, Jack",
        "des": "Cal Raleigh flies out sharply to right fielder Jo Adell.",
        "launch_speed": 104.7,
        "launch_angle": 28,
        "events": "field_out",
        "hit_distance_sc": 368
    },
    {
        "player_name": "Sulser, Cole",
        "des": "Foul",
        "launch_speed": 102.5,
        "launch_angle": -18,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Kent, Zak",
        "des": "Yandy D\u00edaz triples (1) on a sharp line drive to center fielder James Outman. Richie Palacios scores.",
        "launch_speed": 107.9,
        "launch_angle": 20,
        "events": "triple",
        "hit_distance_sc": 382
    },
    {
        "player_name": "Sulser, Cole",
        "des": "Ryan Jeffers lines out sharply to center fielder Cedric Mullins.",
        "launch_speed": 108.6,
        "launch_angle": 12,
        "events": "field_out",
        "hit_distance_sc": 323
    },
    {
        "player_name": "Rogers, Taylor",
        "des": "Ben Williamson singles on a ground ball to center fielder James Outman. Cedric Mullins scores.",
        "launch_speed": 104.4,
        "launch_angle": -5,
        "events": "single",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Matz, Steven",
        "des": "Victor Caratini grounds out, second baseman Richie Palacios to first baseman Jonathan Aranda.",
        "launch_speed": 103.4,
        "launch_angle": -5,
        "events": "field_out",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Abel, Mick",
        "des": "Foul",
        "launch_speed": 102.3,
        "launch_angle": 20,
        "events": NaN,
        "hit_distance_sc": 279
    },
    {
        "player_name": "Matz, Steven",
        "des": "Matt Wallner singles on a ground ball to center fielder Cedric Mullins.",
        "launch_speed": 103.6,
        "launch_angle": -17,
        "events": "single",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Abel, Mick",
        "des": "Jonathan Aranda doubles (2) on a sharp line drive to right fielder Matt Wallner. Ben Williamson scores. Richie Palacios scores. Yandy D\u00edaz to 3rd.",
        "launch_speed": 102.0,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 275
    },
    {
        "player_name": "Bednar, David",
        "des": "Otto Lopez singles on a ground ball to second baseman Jazz Chisholm Jr.",
        "launch_speed": 102.0,
        "launch_angle": -6,
        "events": "single",
        "hit_distance_sc": 15
    },
    {
        "player_name": "Petersen, Michael",
        "des": "Trent Grisham flies out to center fielder Jakob Marsee.",
        "launch_speed": 103.5,
        "launch_angle": 30,
        "events": "field_out",
        "hit_distance_sc": 350
    },
    {
        "player_name": "Headrick, Brent",
        "des": "Griffin Conine flies out sharply to center fielder Trent Grisham. Javier Sanoja to 3rd.",
        "launch_speed": 102.4,
        "launch_angle": 25,
        "events": "field_out",
        "hit_distance_sc": 346
    },
    {
        "player_name": "Doval, Camilo",
        "des": "Javier Sanoja doubles (3) on a ground ball to left fielder Cody Bellinger. Liam Hicks scores. Xavier Edwards scores.",
        "launch_speed": 103.2,
        "launch_angle": -5,
        "events": "double",
        "hit_distance_sc": 15
    },
    {
        "player_name": "Doval, Camilo",
        "des": "Liam Hicks singles on a line drive to right fielder Aaron Judge.",
        "launch_speed": 102.3,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 111
    },
    {
        "player_name": "Faucher, Calvin",
        "des": "J.C. Escarra grounds out, shortstop Otto Lopez to first baseman Connor Norby. Giancarlo Stanton to 3rd.",
        "launch_speed": 109.0,
        "launch_angle": -18,
        "events": "field_out",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Bender, Anthony",
        "des": "Trent Grisham singles on a ground ball to left fielder Heriberto Hern\u00e1ndez. Paul Goldschmidt scores. Jos\u00e9 Caballero to 2nd.",
        "launch_speed": 105.0,
        "launch_angle": -8,
        "events": "single",
        "hit_distance_sc": 16
    },
    {
        "player_name": "Nardi, Andrew",
        "des": "Foul",
        "launch_speed": 109.3,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 303
    },
    {
        "player_name": "Hill, Tim",
        "des": "Agust\u00edn Ram\u00edrez grounds out, second baseman Jazz Chisholm Jr. to first baseman Ben Rice.",
        "launch_speed": 106.9,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 68
    },
    {
        "player_name": "Blackburn, Paul",
        "des": "Leo Jim\u00e9nez singles on a ground ball to shortstop Jos\u00e9 Caballero.",
        "launch_speed": 102.4,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 17
    },
    {
        "player_name": "Meyer, Max",
        "des": "Cody Bellinger homers (1) on a fly ball to right center field. Aaron Judge scores.",
        "launch_speed": 105.5,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 394
    },
    {
        "player_name": "Meyer, Max",
        "des": "Aaron Judge singles on a line drive to center fielder Jakob Marsee.",
        "launch_speed": 106.5,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 156
    },
    {
        "player_name": "Meyer, Max",
        "des": "Foul",
        "launch_speed": 104.5,
        "launch_angle": -19,
        "events": NaN,
        "hit_distance_sc": 7
    },
    {
        "player_name": "Meyer, Max",
        "des": "Austin Wells lines out sharply to second baseman Xavier Edwards.",
        "launch_speed": 101.1,
        "launch_angle": 12,
        "events": "field_out",
        "hit_distance_sc": 169
    },
    {
        "player_name": "Weathers, Ryan",
        "des": "Austin Slater lines out sharply to left fielder Cody Bellinger.",
        "launch_speed": 101.5,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 306
    },
    {
        "player_name": "Meyer, Max",
        "des": "Aaron Judge lines out sharply to center fielder Jakob Marsee. Ryan McMahon to 3rd.",
        "launch_speed": 111.9,
        "launch_angle": 18,
        "events": "field_out",
        "hit_distance_sc": 385
    },
    {
        "player_name": "Meyer, Max",
        "des": "Ryan McMahon reaches on a fielding error by shortstop Otto Lopez.",
        "launch_speed": 103.3,
        "launch_angle": -20,
        "events": "field_error",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Weathers, Ryan",
        "des": "Heriberto Hern\u00e1ndez triples (1) on a line drive to center fielder Trent Grisham. Agust\u00edn Ram\u00edrez scores. Otto Lopez scores.",
        "launch_speed": 107.7,
        "launch_angle": 14,
        "events": "triple",
        "hit_distance_sc": 288
    },
    {
        "player_name": "Helsley, Ryan",
        "des": "Nick Yorke doubles (1) on a sharp line drive to left fielder Dylan Beavers. Bryan Reynolds scores. Ryan O'Hearn to 3rd.",
        "launch_speed": 105.4,
        "launch_angle": 14,
        "events": "double",
        "hit_distance_sc": 335
    },
    {
        "player_name": "Santana, Dennis",
        "des": "Foul",
        "launch_speed": 106.7,
        "launch_angle": 15,
        "events": NaN,
        "hit_distance_sc": 262
    },
    {
        "player_name": "Santana, Dennis",
        "des": "Blaze Alexander grounds out, second baseman Brandon Lowe to first baseman Spencer Horwitz.",
        "launch_speed": 104.5,
        "launch_angle": 3,
        "events": "field_out",
        "hit_distance_sc": 72
    },
    {
        "player_name": "Barco, Hunter",
        "des": "Tyler O'Neill lines out sharply to shortstop Konnor Griffin.",
        "launch_speed": 102.1,
        "launch_angle": 10,
        "events": "field_out",
        "hit_distance_sc": 175
    },
    {
        "player_name": "Mlodzinski, Carmen",
        "des": "Leody Taveras singles on a sharp line drive to right fielder Ryan O'Hearn. Adley Rutschman scores. Dylan Beavers to 3rd. Coby Mayo to 2nd.",
        "launch_speed": 103.3,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 195
    },
    {
        "player_name": "Mlodzinski, Carmen",
        "des": "Adley Rutschman singles on a ground ball to right fielder Ryan O'Hearn. Gunnar Henderson to 3rd.",
        "launch_speed": 106.0,
        "launch_angle": -2,
        "events": "single",
        "hit_distance_sc": 39
    },
    {
        "player_name": "Mlodzinski, Carmen",
        "des": "Gunnar Henderson singles on a sharp line drive to right fielder Ryan O'Hearn.",
        "launch_speed": 104.9,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 208
    },
    {
        "player_name": "Mlodzinski, Carmen",
        "des": "Blaze Alexander lines out sharply to right fielder Ryan O'Hearn.",
        "launch_speed": 101.9,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 277
    },
    {
        "player_name": "Baz, Shane",
        "des": "Bryan Reynolds singles on a sharp line drive to center fielder Leody Taveras. Brandon Lowe to 2nd.",
        "launch_speed": 103.8,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 204
    },
    {
        "player_name": "Myers, Tobias",
        "des": "Willy Adames lines out sharply to center fielder Carson Benge.",
        "launch_speed": 103.7,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 345
    },
    {
        "player_name": "Kilian, Caleb",
        "des": "Jorge Polanco lines out sharply to center fielder Jared Oliva.",
        "launch_speed": 104.7,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 358
    },
    {
        "player_name": "Borucki, Ryan",
        "des": "Bo Bichette singles on a sharp line drive to left fielder Heliot Ramos.",
        "launch_speed": 103.9,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 155
    },
    {
        "player_name": "Borucki, Ryan",
        "des": "Tyrone Taylor homers (1) on a fly ball to center field. Brett Baty scores. Mark Vientos scores.",
        "launch_speed": 105.1,
        "launch_angle": 31,
        "events": "home_run",
        "hit_distance_sc": 419
    },
    {
        "player_name": "Roupp, Landen",
        "des": "Luis Torrens singles on a sharp line drive to left fielder Heliot Ramos.",
        "launch_speed": 106.4,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 196
    },
    {
        "player_name": "Roupp, Landen",
        "des": "Carson Benge lines out sharply to right fielder Jung Hoo Lee.",
        "launch_speed": 105.4,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 325
    },
    {
        "player_name": "Holmes, Clay",
        "des": "Jerar Encarnacion singles on a ground ball to center fielder Carson Benge.",
        "launch_speed": 110.2,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 119
    },
    {
        "player_name": "Roupp, Landen",
        "des": "Jorge Polanco grounds out, second baseman Luis Arraez to first baseman Jerar Encarnacion.",
        "launch_speed": 104.6,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 43
    },
    {
        "player_name": "Roupp, Landen",
        "des": "Mark Vientos doubles (2) on a ground ball to left fielder Heliot Ramos.",
        "launch_speed": 102.0,
        "launch_angle": -3,
        "events": "double",
        "hit_distance_sc": 26
    },
    {
        "player_name": "Holmes, Clay",
        "des": "Rafael Devers lines out sharply to right fielder Brett Baty.",
        "launch_speed": 102.3,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 294
    },
    {
        "player_name": "Ashcraft, Graham",
        "des": "Foul",
        "launch_speed": 105.3,
        "launch_angle": 34,
        "events": NaN,
        "hit_distance_sc": 370
    },
    {
        "player_name": "Beeks, Jalen",
        "des": "Dane Myers flies out sharply to center fielder Evan Carter.",
        "launch_speed": 104.7,
        "launch_angle": 28,
        "events": "field_out",
        "hit_distance_sc": 411
    },
    {
        "player_name": "Rocker, Kumar",
        "des": "Elly De La Cruz grounds out, shortstop Corey Seager to first baseman Jake Burger.",
        "launch_speed": 107.5,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 31
    },
    {
        "player_name": "Rocker, Kumar",
        "des": "Foul",
        "launch_speed": 107.4,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 296
    },
    {
        "player_name": "Lowder, Rhett",
        "des": "Foul",
        "launch_speed": 109.9,
        "launch_angle": 10,
        "events": NaN,
        "hit_distance_sc": 185
    },
    {
        "player_name": "Rocker, Kumar",
        "des": "Nathaniel Lowe singles on a sharp line drive to left fielder Wyatt Langford. Sal Stewart to 3rd.",
        "launch_speed": 107.0,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 251
    },
    {
        "player_name": "Lowder, Rhett",
        "des": "Josh Smith lines out sharply to right fielder Will Benson.",
        "launch_speed": 105.0,
        "launch_angle": 17,
        "events": "field_out",
        "hit_distance_sc": 323
    },
    {
        "player_name": "Lowder, Rhett",
        "des": "Jake Burger singles on a sharp line drive to left fielder Spencer Steer. Corey Seager to 2nd.",
        "launch_speed": 107.1,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 269
    },
    {
        "player_name": "Lowder, Rhett",
        "des": "Corey Seager singles on a ground ball to right fielder Will Benson.",
        "launch_speed": 107.4,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 63
    },
    {
        "player_name": "Rocker, Kumar",
        "des": "Sal Stewart singles on a sharp line drive to right fielder Brandon Nimmo. Elly De La Cruz scores.",
        "launch_speed": 106.6,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 235
    },
    {
        "player_name": "Rocker, Kumar",
        "des": "TJ Friedl grounds out, shortstop Corey Seager to first baseman Jake Burger.",
        "launch_speed": 102.3,
        "launch_angle": -4,
        "events": "field_out",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Casparius, Ben",
        "des": "CJ Abrams homers (3) on a fly ball to right field. Luis Garc\u00eda Jr. scores.",
        "launch_speed": 103.1,
        "launch_angle": 37,
        "events": "home_run",
        "hit_distance_sc": 361
    },
    {
        "player_name": "Casparius, Ben",
        "des": "Luis Garc\u00eda Jr. singles on a sharp line drive to right fielder Kyle Tucker.",
        "launch_speed": 103.6,
        "launch_angle": 17,
        "events": "single",
        "hit_distance_sc": 275
    },
    {
        "player_name": "Scott, Tanner",
        "des": "James Wood grounds out, shortstop Miguel Rojas to first baseman Freddie Freeman.",
        "launch_speed": 104.7,
        "launch_angle": 5,
        "events": "field_out",
        "hit_distance_sc": 129
    },
    {
        "player_name": "Varland, Gus",
        "des": "Kyle Tucker singles on a ground ball to right fielder James Wood. Alex Call scores.",
        "launch_speed": 104.0,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 143
    },
    {
        "player_name": "Lord, Brad",
        "des": "Max Muncy grounds into a force out, shortstop CJ Abrams to third baseman Brady House. Will Smith out at 2nd. Max Muncy to 1st.",
        "launch_speed": 106.2,
        "launch_angle": 4,
        "events": "force_out",
        "hit_distance_sc": 111
    },
    {
        "player_name": "Glasnow, Tyler",
        "des": "James Wood flies out sharply to center fielder Andy Pages.",
        "launch_speed": 106.0,
        "launch_angle": 38,
        "events": "field_out",
        "hit_distance_sc": 381
    },
    {
        "player_name": "Glasnow, Tyler",
        "des": "Foul",
        "launch_speed": 102.0,
        "launch_angle": 44,
        "events": NaN,
        "hit_distance_sc": 334
    },
    {
        "player_name": "Lord, Brad",
        "des": "Shohei Ohtani singles on a ground ball to right fielder James Wood.",
        "launch_speed": 105.3,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Lord, Brad",
        "des": "Foul",
        "launch_speed": 108.5,
        "launch_angle": -30,
        "events": NaN,
        "hit_distance_sc": 4
    },
    {
        "player_name": "Lord, Brad",
        "des": "Max Muncy singles on a sharp line drive to center fielder Jacob Young. Will Smith to 2nd.",
        "launch_speed": 107.7,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 158
    },
    {
        "player_name": "Irvin, Jake",
        "des": "Foul",
        "launch_speed": 102.7,
        "launch_angle": 1,
        "events": NaN,
        "hit_distance_sc": 63
    },
    {
        "player_name": "Irvin, Jake",
        "des": "Alex Freeland singles on a ground ball to right fielder James Wood.",
        "launch_speed": 104.4,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 95
    },
    {
        "player_name": "Glasnow, Tyler",
        "des": "Luis Garc\u00eda Jr. doubles (3) on a ground ball to right fielder Kyle Tucker.",
        "launch_speed": 104.3,
        "launch_angle": 3,
        "events": "double",
        "hit_distance_sc": 81
    },
    {
        "player_name": "Irvin, Jake",
        "des": "Freddie Freeman doubles (2) on a sharp line drive to right fielder James Wood. Kyle Tucker scores. Mookie Betts scores.",
        "launch_speed": 105.8,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 354
    },
    {
        "player_name": "Irvin, Jake",
        "des": "Shohei Ohtani flies out sharply to left fielder Daylen Lile.",
        "launch_speed": 101.2,
        "launch_angle": 37,
        "events": "field_out",
        "hit_distance_sc": 359
    }
];