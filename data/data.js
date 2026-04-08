const reportDate = 'April 07, 2026';
const statcastData = [
    {
        "player_name": "Whitlock, Garrett",
        "des": "Luis Rengifo grounds out, second baseman Isiah Kiner-Falefa to first baseman Willson Contreras.",
        "launch_speed": 101.7,
        "launch_angle": -15,
        "events": "field_out",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Hall, DL",
        "des": "Trevor Story doubles (2) on a sharp line drive to left fielder Brandon Lockridge. Jarren Duran scores. Willson Contreras scores. Wilyer Abreu to 3rd.",
        "launch_speed": 102.2,
        "launch_angle": 9,
        "events": "double",
        "hit_distance_sc": 156
    },
    {
        "player_name": "Misiorowski, Jacob",
        "des": "Foul",
        "launch_speed": 114.8,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 328
    },
    {
        "player_name": "Hudson, Bryan",
        "des": "Blaze Alexander grounds into a double play, third baseman Tanner Murray to second baseman Chase Meidroth to first baseman Lenyn Sosa. Coby Mayo out at 2nd. Blaze Alexander out at 1st.",
        "launch_speed": 101.3,
        "launch_angle": 4,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 84
    },
    {
        "player_name": "Nunez, Anthony",
        "des": "Foul",
        "launch_speed": 102.7,
        "launch_angle": 1,
        "events": NaN,
        "hit_distance_sc": 57
    },
    {
        "player_name": "Murphy, Chris",
        "des": "Gunnar Henderson homers (4) on a line drive to right center field. Taylor Ward scores.",
        "launch_speed": 105.0,
        "launch_angle": 21,
        "events": "home_run",
        "hit_distance_sc": 387
    },
    {
        "player_name": "Leasure, Jordan",
        "des": "Pete Alonso flies out sharply to center fielder Luisangel Acu\u00f1a.",
        "launch_speed": 104.9,
        "launch_angle": 36,
        "events": "field_out",
        "hit_distance_sc": 377
    },
    {
        "player_name": "Newcomb, Sean",
        "des": "Ryan Mountcastle grounds out, shortstop Colson Montgomery to first baseman Lenyn Sosa. Samuel Basallo scores.",
        "launch_speed": 111.0,
        "launch_angle": -8,
        "events": "field_out",
        "hit_distance_sc": 16
    },
    {
        "player_name": "Smith, Shane",
        "des": "Blaze Alexander reaches on a fielding error by third baseman Tanner Murray.",
        "launch_speed": 101.0,
        "launch_angle": -4,
        "events": "field_error",
        "hit_distance_sc": 22
    },
    {
        "player_name": "Smith, Shane",
        "des": "Foul",
        "launch_speed": 101.6,
        "launch_angle": -21,
        "events": NaN,
        "hit_distance_sc": 5
    },
    {
        "player_name": "Rogers, Trevor",
        "des": "Foul",
        "launch_speed": 103.8,
        "launch_angle": -16,
        "events": NaN,
        "hit_distance_sc": 4
    },
    {
        "player_name": "Smith, Shane",
        "des": "Samuel Basallo singles on a line drive to pitcher Shane Smith.",
        "launch_speed": 108.0,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 93
    },
    {
        "player_name": "Smith, Shane",
        "des": "Pete Alonso grounds out, third baseman Tanner Murray to first baseman Lenyn Sosa.",
        "launch_speed": 104.8,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 47
    },
    {
        "player_name": "Schreiber, John",
        "des": "CJ Kayfus singles on a ground ball to right fielder Lane Thomas.",
        "launch_speed": 104.0,
        "launch_angle": -9,
        "events": "single",
        "hit_distance_sc": 15
    },
    {
        "player_name": "Lynch IV, Daniel",
        "des": "Austin Hedges grounds out, third baseman Maikel Garcia to first baseman Vinnie Pasquantino.",
        "launch_speed": 103.3,
        "launch_angle": 2,
        "events": "field_out",
        "hit_distance_sc": 61
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Juan Brito singles on a sharp line drive to left fielder Isaac Collins.",
        "launch_speed": 107.2,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 237
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Salvador Perez flies out sharply to center fielder Steven Kwan.",
        "launch_speed": 101.5,
        "launch_angle": 25,
        "events": "field_out",
        "hit_distance_sc": 360
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Jos\u00e9 Ram\u00edrez flies out to right fielder Jac Caglianone.",
        "launch_speed": 102.2,
        "launch_angle": 21,
        "events": "field_out",
        "hit_distance_sc": 345
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Bobby Witt Jr. grounds out, third baseman Jos\u00e9 Ram\u00edrez to first baseman Rhys Hoskins.",
        "launch_speed": 106.2,
        "launch_angle": -25,
        "events": "field_out",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Foul",
        "launch_speed": 104.8,
        "launch_angle": 23,
        "events": NaN,
        "hit_distance_sc": 316
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Foul",
        "launch_speed": 101.0,
        "launch_angle": 42,
        "events": NaN,
        "hit_distance_sc": 300
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Foul",
        "launch_speed": 110.0,
        "launch_angle": 24,
        "events": NaN,
        "hit_distance_sc": 354
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Juan Brito doubles (1) on a sharp line drive to left fielder Isaac Collins.",
        "launch_speed": 104.0,
        "launch_angle": 10,
        "events": "double",
        "hit_distance_sc": 180
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Carter Jensen homers (3) on a fly ball to right center field.",
        "launch_speed": 112.5,
        "launch_angle": 21,
        "events": "home_run",
        "hit_distance_sc": 389
    },
    {
        "player_name": "Williams, Gavin",
        "des": "Salvador Perez grounds out, shortstop Brayan Rocchio to first baseman Rhys Hoskins.",
        "launch_speed": 105.3,
        "launch_angle": -26,
        "events": "field_out",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Jos\u00e9 Ram\u00edrez flies out to left fielder Isaac Collins.",
        "launch_speed": 101.6,
        "launch_angle": 37,
        "events": "field_out",
        "hit_distance_sc": 304
    },
    {
        "player_name": "Cameron, Noah",
        "des": "Angel Mart\u00ednez grounds out, third baseman Maikel Garcia to first baseman Vinnie Pasquantino.",
        "launch_speed": 102.5,
        "launch_angle": -14,
        "events": "field_out",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Roa, Christian",
        "des": "TJ Rumfield grounds out, shortstop Jeremy Pe\u00f1a to first baseman Christian Walker.",
        "launch_speed": 101.8,
        "launch_angle": -8,
        "events": "field_out",
        "hit_distance_sc": 13
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Cam Smith singles on a line drive to center fielder Mickey Moniak.",
        "launch_speed": 103.7,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 114
    },
    {
        "player_name": "Burrows, Mike",
        "des": "Brett Sullivan singles on a sharp line drive to right fielder Cam Smith.",
        "launch_speed": 101.4,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 222
    },
    {
        "player_name": "Burrows, Mike",
        "des": "Willi Castro homers (1) on a fly ball to right center field. TJ Rumfield scores.",
        "launch_speed": 106.5,
        "launch_angle": 25,
        "events": "home_run",
        "hit_distance_sc": 436
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Isaac Paredes singles on a sharp line drive to left fielder Jordan Beck.",
        "launch_speed": 104.6,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 211
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Jeremy Pe\u00f1a reaches on a fielding error by shortstop Ezequiel Tovar.",
        "launch_speed": 102.4,
        "launch_angle": -4,
        "events": "field_error",
        "hit_distance_sc": 23
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Yainer Diaz grounds out to first baseman TJ Rumfield.",
        "launch_speed": 101.3,
        "launch_angle": -3,
        "events": "field_out",
        "hit_distance_sc": 28
    },
    {
        "player_name": "Burrows, Mike",
        "des": "Foul",
        "launch_speed": 104.9,
        "launch_angle": 25,
        "events": NaN,
        "hit_distance_sc": 361
    },
    {
        "player_name": "Freeland, Kyle",
        "des": "Foul",
        "launch_speed": 105.6,
        "launch_angle": -20,
        "events": NaN,
        "hit_distance_sc": 6
    },
    {
        "player_name": "Iglesias, Raisel",
        "des": "Zach Neto singles on a sharp line drive to left fielder Mike Yastrzemski.",
        "launch_speed": 104.6,
        "launch_angle": 16,
        "events": "single",
        "hit_distance_sc": 268
    },
    {
        "player_name": "Anderson, Shaun",
        "des": "Ronald Acu\u00f1a Jr. singles on a sharp line drive to left fielder Bryce Teodosio. Mike Yastrzemski to 3rd.",
        "launch_speed": 105.5,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 178
    },
    {
        "player_name": "Bummer, Aaron",
        "des": "Jo Adell flies out sharply to center fielder Michael Harris II. Jeimer Candelario to 3rd. Yo\u00e1n Moncada to 2nd.",
        "launch_speed": 103.5,
        "launch_angle": 38,
        "events": "field_out",
        "hit_distance_sc": 360
    },
    {
        "player_name": "Bummer, Aaron",
        "des": "Foul",
        "launch_speed": 105.5,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 316
    },
    {
        "player_name": "Anderson, Shaun",
        "des": "Ozzie Albies homers (3) on a fly ball to right center field.",
        "launch_speed": 101.8,
        "launch_angle": 38,
        "events": "home_run",
        "hit_distance_sc": 379
    },
    {
        "player_name": "L\u00f3pez, Reynaldo",
        "des": "Jo Adell grounds out, shortstop Jorge Mateo to first baseman Matt Olson.",
        "launch_speed": 107.8,
        "launch_angle": -4,
        "events": "field_out",
        "hit_distance_sc": 25
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Mauricio Dub\u00f3n doubles (3) on a sharp line drive to left fielder Josh Lowe. Austin Riley to 3rd.",
        "launch_speed": 106.3,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 312
    },
    {
        "player_name": "Kikuchi, Yusei",
        "des": "Austin Riley singles on a ground ball to right fielder Jo Adell. Matt Olson scores.",
        "launch_speed": 106.3,
        "launch_angle": -3,
        "events": "single",
        "hit_distance_sc": 30
    },
    {
        "player_name": "L\u00f3pez, Reynaldo",
        "des": "Nolan Schanuel hits a ground-rule double (2) on a line drive to right field.",
        "launch_speed": 102.6,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 349
    },
    {
        "player_name": "L\u00f3pez, Reynaldo",
        "des": "Jorge Soler homers (2) on a line drive to left field. Mike Trout scores.",
        "launch_speed": 109.2,
        "launch_angle": 21,
        "events": "home_run",
        "hit_distance_sc": 366
    },
    {
        "player_name": "Faucher, Calvin",
        "des": "Matt McLain doubles (3) on a sharp fly ball to left fielder Javier Sanoja. Tyler Stephenson scores. Dane Myers scores. TJ Friedl to 3rd.",
        "launch_speed": 101.5,
        "launch_angle": 27,
        "events": "double",
        "hit_distance_sc": 384
    },
    {
        "player_name": "Faucher, Calvin",
        "des": "Nathaniel Lowe singles on a sharp line drive to center fielder Jakob Marsee. Spencer Steer scores. Tyler Stephenson to 2nd.",
        "launch_speed": 106.4,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 177
    },
    {
        "player_name": "Pag\u00e1n, Emilio",
        "des": "Foul",
        "launch_speed": 111.0,
        "launch_angle": 27,
        "events": NaN,
        "hit_distance_sc": 385
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Otto Lopez flies out sharply to center fielder TJ Friedl.",
        "launch_speed": 104.3,
        "launch_angle": 38,
        "events": "field_out",
        "hit_distance_sc": 361
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Jakob Marsee singles on a sharp line drive to right fielder Noelvi Marte.",
        "launch_speed": 109.0,
        "launch_angle": 8,
        "events": "single",
        "hit_distance_sc": 201
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Ke'Bryan Hayes lines out to second baseman Xavier Edwards.",
        "launch_speed": 104.5,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 153
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Noelvi Marte singles on a ground ball to third baseman Javier Sanoja.",
        "launch_speed": 106.0,
        "launch_angle": -16,
        "events": "single",
        "hit_distance_sc": 6
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Foul",
        "launch_speed": 102.9,
        "launch_angle": 58,
        "events": NaN,
        "hit_distance_sc": 276
    },
    {
        "player_name": "Alcantara, Sandy",
        "des": "Sal Stewart singles on a ground ball to center fielder Jakob Marsee.",
        "launch_speed": 103.0,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 39
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Otto Lopez grounds out, second baseman Matt McLain to first baseman Sal Stewart. Agust\u00edn Ram\u00edrez scores. Jakob Marsee to 3rd.",
        "launch_speed": 105.6,
        "launch_angle": -2,
        "events": "field_out",
        "hit_distance_sc": 37
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Agust\u00edn Ram\u00edrez doubles (2) on a sharp line drive to left fielder Spencer Steer.",
        "launch_speed": 113.0,
        "launch_angle": 16,
        "events": "double",
        "hit_distance_sc": 346
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Javier Sanoja grounds out, second baseman Matt McLain to first baseman Sal Stewart.",
        "launch_speed": 102.9,
        "launch_angle": -31,
        "events": "field_out",
        "hit_distance_sc": 3
    },
    {
        "player_name": "Abbott, Andrew",
        "des": "Heriberto Hern\u00e1ndez singles on a ground ball to left fielder Spencer Steer.",
        "launch_speed": 103.7,
        "launch_angle": 3,
        "events": "single",
        "hit_distance_sc": 73
    },
    {
        "player_name": "Holton, Tyler",
        "des": "Byron Buxton lines out sharply to center fielder Parker Meadows.",
        "launch_speed": 109.3,
        "launch_angle": 16,
        "events": "field_out",
        "hit_distance_sc": 369
    },
    {
        "player_name": "Holton, Tyler",
        "des": "Matt Wallner grounds out sharply, second baseman Gleyber Torres to first baseman Spencer Torkelson.",
        "launch_speed": 102.3,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 145
    },
    {
        "player_name": "Skubal, Tarik",
        "des": "Byron Buxton singles on a sharp line drive to left fielder Riley Greene. Brooks Lee to 2nd.",
        "launch_speed": 107.1,
        "launch_angle": 17,
        "events": "single",
        "hit_distance_sc": 267
    },
    {
        "player_name": "Bradley, Taj",
        "des": "Riley Greene lines out sharply to center fielder Byron Buxton.",
        "launch_speed": 104.4,
        "launch_angle": 21,
        "events": "field_out",
        "hit_distance_sc": 380
    },
    {
        "player_name": "Sewald, Paul",
        "des": "Ronny Mauricio singles on a sharp line drive to right fielder Corbin Carroll. Francisco Lindor scores.",
        "launch_speed": 107.1,
        "launch_angle": 15,
        "events": "single",
        "hit_distance_sc": 335
    },
    {
        "player_name": "Lo\u00e1isiga, Jonathan",
        "des": "Jared Young out on a sacrifice fly to right fielder Corbin Carroll. Tyrone Taylor scores.",
        "launch_speed": 106.3,
        "launch_angle": 39,
        "events": "sac_fly",
        "hit_distance_sc": 352
    },
    {
        "player_name": "Gallen, Zac",
        "des": "Foul",
        "launch_speed": 102.6,
        "launch_angle": 24,
        "events": NaN,
        "hit_distance_sc": 350
    },
    {
        "player_name": "Brazob\u00e1n, Huascar",
        "des": "Adrian Del Castillo singles on a line drive to right fielder Brett Baty. Corbin Carroll scores. Geraldo Perdomo scores. Gabriel Moreno to 3rd.",
        "launch_speed": 106.7,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 252
    },
    {
        "player_name": "Peralta, Freddy",
        "des": "Gabriel Moreno lines out to shortstop Francisco Lindor.",
        "launch_speed": 102.2,
        "launch_angle": 7,
        "events": "field_out",
        "hit_distance_sc": 176
    },
    {
        "player_name": "Gallen, Zac",
        "des": "Francisco Lindor doubles (1) on a sharp line drive to right fielder Corbin Carroll. Francisco Alvarez scores. Francisco Lindor to 3rd. Throwing error by right fielder Corbin Carroll.",
        "launch_speed": 105.5,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 345
    },
    {
        "player_name": "Peralta, Freddy",
        "des": "Geraldo Perdomo flies out sharply to center fielder Luis Robert Jr.",
        "launch_speed": 101.5,
        "launch_angle": 19,
        "events": "field_out",
        "hit_distance_sc": 361
    },
    {
        "player_name": "Peralta, Freddy",
        "des": "Ketel Marte singles on a sharp line drive to center fielder Luis Robert Jr.",
        "launch_speed": 102.3,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 223
    },
    {
        "player_name": "Bednar, David",
        "des": "Nick Kurtz flies out sharply to right fielder Aaron Judge.",
        "launch_speed": 101.5,
        "launch_angle": 52,
        "events": "field_out",
        "hit_distance_sc": 260
    },
    {
        "player_name": "Leiter Jr., Mark",
        "des": "Amed Rosario homers (2) on a fly ball to left field. Ben Rice scores. Randal Grichuk scores.",
        "launch_speed": 107.3,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 414
    },
    {
        "player_name": "Leiter Jr., Mark",
        "des": "Cody Bellinger singles on a sharp ground ball to center fielder Denzel Clarke.",
        "launch_speed": 103.4,
        "launch_angle": 7,
        "events": "single",
        "hit_distance_sc": 161
    },
    {
        "player_name": "Cruz, Fernando",
        "des": "Foul",
        "launch_speed": 111.4,
        "launch_angle": 21,
        "events": NaN,
        "hit_distance_sc": 355
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Trent Grisham grounds out sharply, shortstop Jacob Wilson to first baseman Nick Kurtz. Austin Wells to 3rd.",
        "launch_speed": 103.8,
        "launch_angle": 1,
        "events": "field_out",
        "hit_distance_sc": 57
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Foul",
        "launch_speed": 105.6,
        "launch_angle": -6,
        "events": NaN,
        "hit_distance_sc": 16
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Austin Wells doubles (1) on a sharp line drive to center fielder Denzel Clarke.",
        "launch_speed": 110.5,
        "launch_angle": 13,
        "events": "double",
        "hit_distance_sc": 307
    },
    {
        "player_name": "Sterner, Justin",
        "des": "Foul",
        "launch_speed": 107.7,
        "launch_angle": 5,
        "events": NaN,
        "hit_distance_sc": 122
    },
    {
        "player_name": "Bird, Jake",
        "des": "Tyler Soderstrom singles on a sharp line drive to right fielder Aaron Judge.",
        "launch_speed": 113.2,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 235
    },
    {
        "player_name": "Civale, Aaron",
        "des": "Jos\u00e9 Caballero doubles (1) on a sharp line drive to center fielder Denzel Clarke.",
        "launch_speed": 104.6,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 370
    },
    {
        "player_name": "Schlittler, Cam",
        "des": "Jeff McNeil singles on a sharp line drive to center fielder Trent Grisham.",
        "launch_speed": 102.6,
        "launch_angle": 9,
        "events": "single",
        "hit_distance_sc": 234
    },
    {
        "player_name": "Schlittler, Cam",
        "des": "Max Muncy grounds out sharply, shortstop Jos\u00e9 Caballero to first baseman Ben Rice.",
        "launch_speed": 102.3,
        "launch_angle": -7,
        "events": "field_out",
        "hit_distance_sc": 21
    },
    {
        "player_name": "Schlittler, Cam",
        "des": "Nick Kurtz doubles (2) on a sharp line drive to center fielder Trent Grisham. Max Muncy scores. Jeff McNeil scores.",
        "launch_speed": 115.1,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 357
    },
    {
        "player_name": "Schlittler, Cam",
        "des": "Jeff McNeil singles on a sharp line drive to right fielder Aaron Judge. Max Muncy to 2nd.",
        "launch_speed": 102.7,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 170
    },
    {
        "player_name": "Civale, Aaron",
        "des": "Trent Grisham flies out sharply to center fielder Denzel Clarke.",
        "launch_speed": 101.6,
        "launch_angle": 46,
        "events": "field_out",
        "hit_distance_sc": 337
    },
    {
        "player_name": "Civale, Aaron",
        "des": "Amed Rosario homers (1) on a fly ball to left field.",
        "launch_speed": 105.1,
        "launch_angle": 33,
        "events": "home_run",
        "hit_distance_sc": 399
    },
    {
        "player_name": "Morejon, Adrian",
        "des": "Konnor Griffin singles on a ground ball to left fielder Ram\u00f3n Laureano. Nick Gonzales scores. Jake Mangum scores.",
        "launch_speed": 113.2,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 139
    },
    {
        "player_name": "Morejon, Adrian",
        "des": "Bryan Reynolds singles on a ground ball to right fielder Fernando Tatis Jr.",
        "launch_speed": 105.8,
        "launch_angle": -14,
        "events": "single",
        "hit_distance_sc": 8
    },
    {
        "player_name": "Peralta, Wandy",
        "des": "Konnor Griffin grounds into a double play, third baseman Manny Machado to second baseman Jake Cronenworth to first baseman Gavin Sheets. Spencer Horwitz out at 2nd. Konnor Griffin out at 1st.",
        "launch_speed": 106.0,
        "launch_angle": 3,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 71
    },
    {
        "player_name": "Skenes, Paul",
        "des": "Xander Bogaerts homers (1) on a fly ball to left field.",
        "launch_speed": 105.3,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 383
    },
    {
        "player_name": "Rodriguez, Bradgley",
        "des": "Nick Yorke singles on a ground ball to right fielder Fernando Tatis Jr. Ryan O'Hearn to 2nd.",
        "launch_speed": 104.9,
        "launch_angle": -8,
        "events": "single",
        "hit_distance_sc": 16
    },
    {
        "player_name": "Skenes, Paul",
        "des": "Ram\u00f3n Laureano grounds into a force out, third baseman Nick Yorke to second baseman Nick Gonzales. Jake Cronenworth out at 2nd. Ram\u00f3n Laureano to 1st.",
        "launch_speed": 104.1,
        "launch_angle": 2,
        "events": "force_out",
        "hit_distance_sc": 68
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "Casey Schmitt hits a ground-rule double (2) on a fly ball to right-center field. Rafael Devers to 3rd.",
        "launch_speed": 104.4,
        "launch_angle": 22,
        "events": "double",
        "hit_distance_sc": 387
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "Rafael Devers singles on a ground ball to left fielder Otto Kemp.",
        "launch_speed": 102.3,
        "launch_angle": 6,
        "events": "single",
        "hit_distance_sc": 119
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "Matt Chapman doubles (3) on a sharp line drive to left fielder Otto Kemp. Daniel Susac scores.",
        "launch_speed": 111.7,
        "launch_angle": 15,
        "events": "double",
        "hit_distance_sc": 345
    },
    {
        "player_name": "S\u00e1nchez, Cristopher",
        "des": "Jared Oliva grounds into a double play, third baseman Edmundo Sosa to second baseman Dylan Moore to first baseman Bryce Harper. Daniel Susac out at 2nd. Jared Oliva out at 1st.",
        "launch_speed": 105.4,
        "launch_angle": -12,
        "events": "grounded_into_double_play",
        "hit_distance_sc": 9
    },
    {
        "player_name": "Ray, Robbie",
        "des": "Edmundo Sosa doubles (1) on a sharp line drive to right fielder Jerar Encarnacion.",
        "launch_speed": 108.0,
        "launch_angle": 14,
        "events": "double",
        "hit_distance_sc": 305
    },
    {
        "player_name": "G\u00f3mez, Yoendrys",
        "des": "Dansby Swanson flies out sharply to center fielder Cedric Mullins.",
        "launch_speed": 104.5,
        "launch_angle": 29,
        "events": "field_out",
        "hit_distance_sc": 394
    },
    {
        "player_name": "G\u00f3mez, Yoendrys",
        "des": "Mois\u00e9s Ballesteros homers (1) on a line drive to right field. Pete Crow-Armstrong scores.",
        "launch_speed": 105.7,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 379
    },
    {
        "player_name": "G\u00f3mez, Yoendrys",
        "des": "Foul",
        "launch_speed": 107.4,
        "launch_angle": 16,
        "events": NaN,
        "hit_distance_sc": 244
    },
    {
        "player_name": "Maton, Phil",
        "des": "Jonathan Aranda doubles (3) on a sharp fly ball to center fielder Pete Crow-Armstrong. Richie Palacios scores. Yandy D\u00edaz to 3rd.",
        "launch_speed": 105.9,
        "launch_angle": 28,
        "events": "double",
        "hit_distance_sc": 403
    },
    {
        "player_name": "G\u00f3mez, Yoendrys",
        "des": "Michael Busch flies out sharply to right fielder Ryan Vilade. Michael Conforto to 3rd.",
        "launch_speed": 101.8,
        "launch_angle": 40,
        "events": "field_out",
        "hit_distance_sc": 359
    },
    {
        "player_name": "G\u00f3mez, Yoendrys",
        "des": "Pete Crow-Armstrong homers (1) on a fly ball to right field.",
        "launch_speed": 108.3,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 389
    },
    {
        "player_name": "Sulser, Cole",
        "des": "Matt Shaw singles on a sharp line drive to left fielder Chandler Simpson. Mois\u00e9s Ballesteros to 3rd. Michael Conforto to 2nd.",
        "launch_speed": 105.4,
        "launch_angle": 14,
        "events": "single",
        "hit_distance_sc": 263
    },
    {
        "player_name": "Sulser, Cole",
        "des": "Mois\u00e9s Ballesteros singles on a ground ball to right fielder Jake Fraley.",
        "launch_speed": 101.0,
        "launch_angle": -21,
        "events": "single",
        "hit_distance_sc": 7
    },
    {
        "player_name": "Sulser, Cole",
        "des": "Alex Bregman singles on a sharp ground ball to center fielder Cedric Mullins.",
        "launch_speed": 101.0,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 89
    },
    {
        "player_name": "Englert, Mason",
        "des": "Foul",
        "launch_speed": 107.6,
        "launch_angle": -36,
        "events": NaN,
        "hit_distance_sc": 2
    },
    {
        "player_name": "Englert, Mason",
        "des": "Mois\u00e9s Ballesteros out on a sacrifice fly to center fielder Cedric Mullins. Pete Crow-Armstrong scores.",
        "launch_speed": 101.6,
        "launch_angle": 47,
        "events": "sac_fly",
        "hit_distance_sc": 311
    },
    {
        "player_name": "Englert, Mason",
        "des": "Michael Conforto singles on a sharp line drive to right fielder Jake Fraley. Dansby Swanson scores.",
        "launch_speed": 105.5,
        "launch_angle": 10,
        "events": "single",
        "hit_distance_sc": 179
    },
    {
        "player_name": "Englert, Mason",
        "des": "Dansby Swanson doubles (1) on a sharp line drive to left fielder Chandler Simpson.",
        "launch_speed": 108.9,
        "launch_angle": 15,
        "events": "double",
        "hit_distance_sc": 278
    },
    {
        "player_name": "Kirby, George",
        "des": "Foul",
        "launch_speed": 103.7,
        "launch_angle": 7,
        "events": NaN,
        "hit_distance_sc": 137
    },
    {
        "player_name": "Kirby, George",
        "des": "Jake Burger grounds out, shortstop J.P. Crawford to first baseman Josh Naylor.",
        "launch_speed": 101.2,
        "launch_angle": -13,
        "events": "field_out",
        "hit_distance_sc": 13
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Luke Raley singles on a ground ball to right fielder Brandon Nimmo.",
        "launch_speed": 102.0,
        "launch_angle": 2,
        "events": "single",
        "hit_distance_sc": 63
    },
    {
        "player_name": "Kirby, George",
        "des": "Ezequiel Duran grounds out, first baseman Josh Naylor to pitcher George Kirby.",
        "launch_speed": 102.2,
        "launch_angle": -24,
        "events": "field_out",
        "hit_distance_sc": 5
    },
    {
        "player_name": "Kirby, George",
        "des": "Kyle Higashioka homers (1) on a line drive to left center field. Evan Carter scores.",
        "launch_speed": 107.1,
        "launch_angle": 21,
        "events": "home_run",
        "hit_distance_sc": 388
    },
    {
        "player_name": "Eovaldi, Nathan",
        "des": "Dominic Canzone grounds out, second baseman Josh Smith to first baseman Jake Burger.",
        "launch_speed": 107.3,
        "launch_angle": 6,
        "events": "field_out",
        "hit_distance_sc": 116
    },
    {
        "player_name": "Kirby, George",
        "des": "Foul",
        "launch_speed": 106.5,
        "launch_angle": 29,
        "events": NaN,
        "hit_distance_sc": 383
    },
    {
        "player_name": "Kirby, George",
        "des": "Wyatt Langford grounds out, second baseman Cole Young to first baseman Josh Naylor.",
        "launch_speed": 102.6,
        "launch_angle": 0,
        "events": "field_out",
        "hit_distance_sc": 54
    },
    {
        "player_name": "Kirby, George",
        "des": "Brandon Nimmo grounds out, second baseman Cole Young to first baseman Josh Naylor.",
        "launch_speed": 104.4,
        "launch_angle": -13,
        "events": "field_out",
        "hit_distance_sc": 11
    },
    {
        "player_name": "Hoffman, Jeff",
        "des": "Kyle Tucker singles on a sharp line drive to right fielder Jes\u00fas S\u00e1nchez. Alex Freeland scores. Shohei Ohtani to 2nd.",
        "launch_speed": 104.3,
        "launch_angle": 12,
        "events": "single",
        "hit_distance_sc": 242
    },
    {
        "player_name": "Varland, Louis",
        "des": "Freddie Freeman lines out sharply, pitcher Louis Varland to first baseman Vladimir Guerrero Jr.",
        "launch_speed": 107.9,
        "launch_angle": 4,
        "events": "field_out",
        "hit_distance_sc": 109
    },
    {
        "player_name": "Yamamoto, Yoshinobu",
        "des": "Kazuma Okamoto doubles (1) on a sharp line drive to center fielder Andy Pages.",
        "launch_speed": 106.1,
        "launch_angle": 21,
        "events": "double",
        "hit_distance_sc": 374
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Andy Pages singles on a sharp ground ball to left fielder Jes\u00fas S\u00e1nchez. Freddie Freeman to 2nd.",
        "launch_speed": 106.4,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 109
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Freddie Freeman singles on a sharp ground ball to center fielder Daulton Varsho.",
        "launch_speed": 108.3,
        "launch_angle": -1,
        "events": "single",
        "hit_distance_sc": 33
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Alex Freeland singles on a line drive to right fielder Nathan Lukes. Hyeseong Kim scores.",
        "launch_speed": 106.8,
        "launch_angle": 11,
        "events": "single",
        "hit_distance_sc": 218
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Shohei Ohtani singles on a sharp fly ball to right fielder Nathan Lukes. Hyeseong Kim scores. Alex Freeland to 3rd.",
        "launch_speed": 105.2,
        "launch_angle": 22,
        "events": "single",
        "hit_distance_sc": 357
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Hyeseong Kim doubles (1) on a sharp line drive to center fielder Daulton Varsho.",
        "launch_speed": 101.9,
        "launch_angle": 19,
        "events": "double",
        "hit_distance_sc": 344
    },
    {
        "player_name": "Gausman, Kevin",
        "des": "Foul",
        "launch_speed": 110.1,
        "launch_angle": 24,
        "events": NaN,
        "hit_distance_sc": 392
    },
    {
        "player_name": "Henry, Cole",
        "des": "Thomas Saggese doubles (2) on a sharp line drive to center fielder Jacob Young. Masyn Winn scores.",
        "launch_speed": 101.6,
        "launch_angle": 17,
        "events": "double",
        "hit_distance_sc": 302
    },
    {
        "player_name": "Soriano, George",
        "des": "Luis Garc\u00eda Jr. flies out sharply to center fielder Nathan Church.",
        "launch_speed": 103.2,
        "launch_angle": 31,
        "events": "field_out",
        "hit_distance_sc": 380
    },
    {
        "player_name": "Beeter, Clayton",
        "des": "Jordan Walker lines out sharply to center fielder Jacob Young.",
        "launch_speed": 106.1,
        "launch_angle": 19,
        "events": "field_out",
        "hit_distance_sc": 372
    },
    {
        "player_name": "Soriano, George",
        "des": "Foul",
        "launch_speed": 108.0,
        "launch_angle": 14,
        "events": NaN,
        "hit_distance_sc": 226
    },
    {
        "player_name": "Varland, Gus",
        "des": "Nathan Church homers (1) on a fly ball to right field. Masyn Winn scores.",
        "launch_speed": 102.1,
        "launch_angle": 31,
        "events": "home_run",
        "hit_distance_sc": 378
    },
    {
        "player_name": "Varland, Gus",
        "des": "Foul",
        "launch_speed": 102.1,
        "launch_angle": 14,
        "events": NaN,
        "hit_distance_sc": 225
    },
    {
        "player_name": "Poulin, PJ",
        "des": "Jordan Walker homers (4) on a fly ball to right center field.",
        "launch_speed": 109.1,
        "launch_angle": 26,
        "events": "home_run",
        "hit_distance_sc": 386
    },
    {
        "player_name": "Graceffo, Gordon",
        "des": "Curtis Mead singles on a ground ball to center fielder Nathan Church. James Wood scores.",
        "launch_speed": 105.1,
        "launch_angle": -4,
        "events": "single",
        "hit_distance_sc": 25
    },
    {
        "player_name": "Schultz, Paxton",
        "des": "Nolan Gorman singles on a ground ball to right fielder Joey Wiemer.",
        "launch_speed": 101.6,
        "launch_angle": 1,
        "events": "single",
        "hit_distance_sc": 51
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "CJ Abrams singles on a ground ball to right fielder Jordan Walker. Daylen Lile scores. Joey Wiemer to 3rd.",
        "launch_speed": 103.7,
        "launch_angle": 5,
        "events": "single",
        "hit_distance_sc": 108
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "Curtis Mead homers (1) on a fly ball to center field.",
        "launch_speed": 107.6,
        "launch_angle": 28,
        "events": "home_run",
        "hit_distance_sc": 398
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "Curtis Mead singles on a ground ball to left fielder Thomas Saggese.",
        "launch_speed": 106.0,
        "launch_angle": 4,
        "events": "single",
        "hit_distance_sc": 135
    },
    {
        "player_name": "Liberatore, Matthew",
        "des": "James Wood homers (4) on a fly ball to left center field.",
        "launch_speed": 108.4,
        "launch_angle": 27,
        "events": "home_run",
        "hit_distance_sc": 394
    },
    {
        "player_name": "Cavalli, Cade",
        "des": "JJ Wetherholt grounds out, second baseman Nasim Nu\u00f1ez to first baseman Curtis Mead.",
        "launch_speed": 102.5,
        "launch_angle": -1,
        "events": "field_out",
        "hit_distance_sc": 40
    },
    {
        "player_name": "Cavalli, Cade",
        "des": "Nolan Gorman singles on a sharp line drive to right fielder Joey Wiemer. Alec Burleson scores. Nolan Gorman out at 2nd, first baseman Curtis Mead to shortstop CJ Abrams. Jordan Walker to 3rd.",
        "launch_speed": 101.5,
        "launch_angle": 16,
        "events": "single",
        "hit_distance_sc": 280
    }
];