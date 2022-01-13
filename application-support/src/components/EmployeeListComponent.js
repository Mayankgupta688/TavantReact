import EmployeeComponent from "./EmployeeComponent";

export default function EmployeeListComponent() {

    var employeeList = [
        {
          "id": "1",
          "createdAt": "2019-07-10T08:05:39.325Z",
          "name": "Kristian Stoltenberg III",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
        },
        {
          "id": "2",
          "createdAt": "2019-07-10T07:55:42.129Z",
          "name": "Bernita Fadel",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg"
        },
        {
          "id": "3",
          "createdAt": "2019-07-10T06:49:45.160Z",
          "name": "Karlee Klocko",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/donjain/128.jpg"
        },
        {
          "id": "4",
          "createdAt": "2019-07-10T07:04:09.952Z",
          "name": "Brendon Kassulke",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fiterik/128.jpg"
        },
        {
          "id": "5",
          "createdAt": "2019-07-10T06:42:06.119Z",
          "name": "Jailyn Wisoky",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bassamology/128.jpg"
        },
        {
          "id": "6",
          "createdAt": "2019-07-09T16:47:50.882Z",
          "name": "Rozella Barton",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kamal_chaneman/128.jpg"
        },
        {
          "id": "7",
          "createdAt": "2019-07-09T21:38:14.348Z",
          "name": "Ryder Luettgen",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stefanotirloni/128.jpg"
        },
        {
          "id": "8",
          "createdAt": "2019-07-09T17:42:53.371Z",
          "name": "Bettie Kris",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg"
        },
        {
          "id": "9",
          "createdAt": "2019-07-09T11:19:35.327Z",
          "name": "Ms. Tamara Lockman",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/baliomega/128.jpg"
        },
        {
          "id": "10",
          "createdAt": "2019-07-10T00:03:10.902Z",
          "name": "Luis Zulauf DVM",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mhesslow/128.jpg"
        },
        {
          "id": "11",
          "createdAt": "2019-07-09T22:01:03.407Z",
          "name": "Kirstin Gerlach",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/irae/128.jpg"
        },
        {
          "id": "12",
          "createdAt": "2019-07-09T22:10:51.428Z",
          "name": "Winfield West",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/edhenderson/128.jpg"
        },
        {
          "id": "13",
          "createdAt": "2019-07-09T18:43:35.650Z",
          "name": "Reta Zieme",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ZacharyZorbas/128.jpg"
        },
        {
          "id": "14",
          "createdAt": "2019-07-10T06:00:54.418Z",
          "name": "Jayne Schulist",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/buzzusborne/128.jpg"
        },
        {
          "id": "15",
          "createdAt": "2019-07-10T09:52:59.789Z",
          "name": "Emmitt Kerluke",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg"
        },
        {
          "id": "16",
          "createdAt": "2019-07-10T10:09:31.797Z",
          "name": "Michele Wilkinson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/taylorling/128.jpg"
        },
        {
          "id": "17",
          "createdAt": "2019-07-09T15:55:56.899Z",
          "name": "Giovanny Koss",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/justinrob/128.jpg"
        },
        {
          "id": "18",
          "createdAt": "2019-07-10T03:15:23.797Z",
          "name": "Allene Crooks PhD",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/wearesavas/128.jpg"
        },
        {
          "id": "19",
          "createdAt": "2019-07-10T07:06:59.226Z",
          "name": "Mr. Efren Dicki",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg"
        },
        {
          "id": "20",
          "createdAt": "2019-07-09T20:56:11.371Z",
          "name": "Mr. Vella Wuckert",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/heykenneth/128.jpg"
        },
        {
          "id": "21",
          "createdAt": "2019-07-09T14:12:55.724Z",
          "name": "Abbey Kirlin",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vigobronx/128.jpg"
        },
        {
          "id": "22",
          "createdAt": "2019-07-10T04:19:32.060Z",
          "name": "Dr. Theron Legros",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcusgorillius/128.jpg"
        },
        {
          "id": "23",
          "createdAt": "2019-07-10T05:47:38.013Z",
          "name": "Marcelle Weimann",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg"
        },
        {
          "id": "24",
          "createdAt": "2019-07-10T08:05:22.369Z",
          "name": "Mohammed Stark",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ssbb_me/128.jpg"
        },
        {
          "id": "25",
          "createdAt": "2019-07-09T10:37:03.360Z",
          "name": "Aniyah Collier",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
        },
        {
          "id": "26",
          "createdAt": "2019-07-09T18:08:17.841Z",
          "name": "Lyric Metz",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tgerken/128.jpg"
        },
        {
          "id": "27",
          "createdAt": "2019-07-09T22:11:41.463Z",
          "name": "Amani Hilpert",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg"
        },
        {
          "id": "28",
          "createdAt": "2019-07-09T20:32:28.258Z",
          "name": "Efren Windler PhD",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mbilderbach/128.jpg"
        },
        {
          "id": "29",
          "createdAt": "2019-07-10T03:43:08.857Z",
          "name": "Kenya Reichel",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg"
        },
        {
          "id": "30",
          "createdAt": "2019-07-09T18:06:41.721Z",
          "name": "Edmund Fisher",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/seyedhossein1/128.jpg"
        },
        {
          "id": "31",
          "createdAt": "2019-07-09T11:44:07.092Z",
          "name": "Lenora Price",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/incubo82/128.jpg"
        },
        {
          "id": "32",
          "createdAt": "2019-07-09T20:56:58.884Z",
          "name": "Clementina Sanford",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thomasschrijer/128.jpg"
        },
        {
          "id": "33",
          "createdAt": "2019-07-10T07:56:08.182Z",
          "name": "Willow Windler",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg"
        },
        {
          "id": "34",
          "createdAt": "2019-07-09T22:57:09.161Z",
          "name": "Johanna Waters",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nyancecom/128.jpg"
        },
        {
          "id": "35",
          "createdAt": "2019-07-09T20:33:28.329Z",
          "name": "Tara Wilderman",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/teddyzetterlund/128.jpg"
        },
        {
          "id": "36",
          "createdAt": "2019-07-10T06:09:57.184Z",
          "name": "Mrs. Heidi Oberbrunner",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haydn_woods/128.jpg"
        },
        {
          "id": "37",
          "createdAt": "2019-07-10T09:02:27.120Z",
          "name": "Beryl Fadel",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/drewbyreese/128.jpg"
        },
        {
          "id": "38",
          "createdAt": "2019-07-09T18:57:44.201Z",
          "name": "Johnnie Rodriguez",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrxloka/128.jpg"
        },
        {
          "id": "39",
          "createdAt": "2019-07-10T10:25:40.427Z",
          "name": "Regan Casper",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/victorstuber/128.jpg"
        },
        {
          "id": "40",
          "createdAt": "2019-07-09T20:29:38.348Z",
          "name": "Cordie Abshire PhD",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg"
        },
        {
          "id": "41",
          "createdAt": "2019-07-10T08:08:29.386Z",
          "name": "Brennon Dooley Sr.",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/danvierich/128.jpg"
        },
        {
          "id": "42",
          "createdAt": "2019-07-10T06:26:16.637Z",
          "name": "Gus Hegmann",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg"
        },
        {
          "id": "43",
          "createdAt": "2019-07-09T16:43:20.774Z",
          "name": "Carson Klocko",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/imomenui/128.jpg"
        },
        {
          "id": "44",
          "createdAt": "2019-07-09T10:42:09.480Z",
          "name": "Stephanie Lesch",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg"
        },
        {
          "id": "45",
          "createdAt": "2019-07-09T10:39:15.536Z",
          "name": "Jake Ortiz",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/embrcecreations/128.jpg"
        },
        {
          "id": "46",
          "createdAt": "2019-07-09T14:54:55.641Z",
          "name": "Dino Lowe",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/michaelcomiskey/128.jpg"
        },
        {
          "id": "47",
          "createdAt": "2019-07-10T06:34:20.688Z",
          "name": "Jeanette Hoeger",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/deviljho_/128.jpg"
        },
        {
          "id": "48",
          "createdAt": "2019-07-10T00:33:44.497Z",
          "name": "Jean Jacobson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kolsvein/128.jpg"
        },
        {
          "id": "49",
          "createdAt": "2019-07-09T16:11:39.589Z",
          "name": "Bradly Lemke",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/derekebradley/128.jpg"
        },
        {
          "id": "50",
          "createdAt": "2019-07-09T18:16:45.015Z",
          "name": "Waylon Graham",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg"
        },
        {
          "id": "51",
          "createdAt": "2019-07-09T18:15:43.862Z",
          "name": "Kelli Hirthe",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rmlewisuk/128.jpg"
        },
        {
          "id": "52",
          "createdAt": "2019-07-10T02:38:42.997Z",
          "name": "Kailee Terry",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/meln1ks/128.jpg"
        },
        {
          "id": "53",
          "createdAt": "2019-07-09T20:44:45.108Z",
          "name": "Constantin Corkery",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg"
        },
        {
          "id": "54",
          "createdAt": "2019-07-10T09:49:08.891Z",
          "name": "David Hauck",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg"
        },
        {
          "id": "55",
          "createdAt": "2019-07-09T15:41:52.829Z",
          "name": "Earnest Heaney",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adityasutomo/128.jpg"
        },
        {
          "id": "56",
          "createdAt": "2019-07-09T18:45:27.361Z",
          "name": "Alexzander Von",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg"
        },
        {
          "id": "57",
          "createdAt": "2019-07-09T23:38:04.440Z",
          "name": "Darrion Beer",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg"
        },
        {
          "id": "58",
          "createdAt": "2019-07-09T10:54:50.758Z",
          "name": "Rollin Cremin",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mhesslow/128.jpg"
        },
        {
          "id": "59",
          "createdAt": "2019-07-10T01:41:58.771Z",
          "name": "Victoria McLaughlin",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joreira/128.jpg"
        },
        {
          "id": "60",
          "createdAt": "2019-07-10T01:47:34.516Z",
          "name": "Jamie Runolfsdottir",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jennyyo/128.jpg"
        },
        {
          "id": "61",
          "createdAt": "2019-07-09T14:31:58.317Z",
          "name": "Brooks Stanton",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/saschamt/128.jpg"
        },
        {
          "id": "62",
          "createdAt": "2019-07-10T05:57:35.841Z",
          "name": "Zora Quigley DVM",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg"
        },
        {
          "id": "63",
          "createdAt": "2019-07-10T10:02:01.092Z",
          "name": "Dr. Manley Baumbach",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sprayaga/128.jpg"
        },
        {
          "id": "64",
          "createdAt": "2019-07-10T04:37:57.388Z",
          "name": "Kennith Paucek",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/javorszky/128.jpg"
        },
        {
          "id": "65",
          "createdAt": "2019-07-09T20:53:36.145Z",
          "name": "Terrance Larson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/iqonicd/128.jpg"
        },
        {
          "id": "66",
          "createdAt": "2019-07-09T16:07:29.104Z",
          "name": "Ms. Randi Okuneva",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/unterdreht/128.jpg"
        },
        {
          "id": "67",
          "createdAt": "2019-07-10T09:10:00.886Z",
          "name": "Asa Jones V",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/the_purplebunny/128.jpg"
        },
        {
          "id": "68",
          "createdAt": "2019-07-09T15:24:31.455Z",
          "name": "Hester Windler",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/findingjenny/128.jpg"
        },
        {
          "id": "69",
          "createdAt": "2019-07-09T19:11:57.540Z",
          "name": "Yasmine Reinger",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/collegeman/128.jpg"
        },
        {
          "id": "70",
          "createdAt": "2019-07-10T10:24:05.428Z",
          "name": "Dr. Nyah Langosh",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/a_harris88/128.jpg"
        },
        {
          "id": "71",
          "createdAt": "2019-07-09T23:51:10.153Z",
          "name": "Aurore Bogan",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vigobronx/128.jpg"
        },
        {
          "id": "72",
          "createdAt": "2019-07-09T15:09:14.800Z",
          "name": "Lurline Halvorson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bereto/128.jpg"
        },
        {
          "id": "73",
          "createdAt": "2019-07-09T23:57:04.602Z",
          "name": "Felipe Sanford",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg"
        },
        {
          "id": "74",
          "createdAt": "2019-07-10T04:20:56.897Z",
          "name": "Natalie Effertz",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/overra/128.jpg"
        },
        {
          "id": "75",
          "createdAt": "2019-07-10T07:12:44.005Z",
          "name": "Demond Schroeder",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg"
        },
        {
          "id": "76",
          "createdAt": "2019-07-09T18:32:03.106Z",
          "name": "John Dickinson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg"
        },
        {
          "id": "77",
          "createdAt": "2019-07-09T21:15:52.003Z",
          "name": "Anais Hermiston",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cbracco/128.jpg"
        },
        {
          "id": "78",
          "createdAt": "2019-07-10T05:49:18.624Z",
          "name": "Waylon Boyle",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg"
        },
        {
          "id": "79",
          "createdAt": "2019-07-09T22:21:31.166Z",
          "name": "Rebecca Nolan",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marlinjayakody/128.jpg"
        },
        {
          "id": "80",
          "createdAt": "2019-07-10T08:07:10.468Z",
          "name": "Zechariah Muller",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/newbrushes/128.jpg"
        },
        {
          "id": "81",
          "createdAt": "2019-07-09T12:28:11.680Z",
          "name": "Miss Markus Mann",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chris_frees/128.jpg"
        },
        {
          "id": "82",
          "createdAt": "2019-07-10T06:29:48.895Z",
          "name": "Cody Rath",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lepinski/128.jpg"
        },
        {
          "id": "83",
          "createdAt": "2019-07-09T18:01:18.243Z",
          "name": "Cristobal Champlin DVM",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/langate/128.jpg"
        },
        {
          "id": "84",
          "createdAt": "2019-07-10T07:50:52.339Z",
          "name": "Veda Kirlin",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/iamglimy/128.jpg"
        },
        {
          "id": "85",
          "createdAt": "2019-07-10T01:54:11.771Z",
          "name": "Rosemarie Homenick",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg"
        },
        {
          "id": "86",
          "createdAt": "2019-07-09T15:43:08.480Z",
          "name": "Sigurd Medhurst",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg"
        },
        {
          "id": "87",
          "createdAt": "2019-07-09T20:58:06.349Z",
          "name": "Syble Dooley",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brandclay/128.jpg"
        },
        {
          "id": "88",
          "createdAt": "2019-07-10T11:16:36.315Z",
          "name": "Gerson Kuhn",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/the_purplebunny/128.jpg"
        },
        {
          "id": "89",
          "createdAt": "2019-07-09T13:44:06.079Z",
          "name": "Clay Stiedemann",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jonsgotwood/128.jpg"
        },
        {
          "id": "90",
          "createdAt": "2019-07-09T11:59:08.512Z",
          "name": "Troy Conroy DDS",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/switmer777/128.jpg"
        },
        {
          "id": "91",
          "createdAt": "2019-07-09T23:09:52.036Z",
          "name": "Mrs. Donnell Luettgen",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg"
        },
        {
          "id": "92",
          "createdAt": "2019-07-10T00:01:03.371Z",
          "name": "Lucy Lockman",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg"
        },
        {
          "id": "93",
          "createdAt": "2019-07-09T23:31:40.429Z",
          "name": "Miss Rashawn Tromp",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kerihenare/128.jpg"
        },
        {
          "id": "94",
          "createdAt": "2019-07-10T01:48:48.929Z",
          "name": "Franz VonRueden",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lanceguyatt/128.jpg"
        },
        {
          "id": "95",
          "createdAt": "2019-07-10T08:40:18.635Z",
          "name": "Declan Donnelly",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fuck_you_two/128.jpg"
        },
        {
          "createdAt": "2021-11-23T14:09:06.342Z",
          "name": "Glenda Olson",
          "avatar": "https://cdn.fakercloud.com/avatars/keyuri85_128.jpg",
          "id": "96"
        },
        {
          "createdAt": "2021-11-23T23:34:19.392Z",
          "name": "Angelo Weissnat",
          "avatar": "https://cdn.fakercloud.com/avatars/scrapdnb_128.jpg",
          "id": "97"
        },
        {
          "createdAt": "2021-11-23T23:02:53.570Z",
          "name": "Diana Moen Jr.",
          "avatar": "https://cdn.fakercloud.com/avatars/ryankirkman_128.jpg",
          "id": "98"
        },
        {
          "createdAt": "2021-11-23T12:40:21.856Z",
          "name": "Harry King",
          "avatar": "https://cdn.fakercloud.com/avatars/nicklacke_128.jpg",
          "id": "99"
        },
        {
          "createdAt": "2021-11-24T10:19:22.460Z",
          "name": "Martha Predovic",
          "avatar": "https://cdn.fakercloud.com/avatars/mr_shiznit_128.jpg",
          "id": "100"
        }
    ]
      
    function getOddEven(id) {
        if(id % 2 === 0 ) {
            return <h2>This is Even from Function</h2>
        } else {
            return <h2>this is Odd from Function</h2>
        }
    }
    
    return (
        <div>
            <h1>The List of Employees in TechnoFunnel are:</h1><hr/>
            {employeeList.map(function(employee) {
                return (
                    <div>
                        <h2>Next Employee is: {employee.id}</h2><br/>

                        {getOddEven(employee.id)}
                        { (employee.id % 2 === 0 && employee.id % 4 !== 0) && <h3>Id is Even</h3>}
                        { employee.id % 2 === 1 && <h3>Id is Odd</h3>}

                        { employee.id % 2 === 0 ? <h1>This is Even</h1>: <h1>This is Odd</h1> }

                        <EmployeeComponent {...employee}></EmployeeComponent><hr/><hr/>
                    </div>
                )
            })} 
        </div>
    )
}