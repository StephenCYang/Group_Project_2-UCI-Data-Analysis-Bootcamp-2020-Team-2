//This file is named test3.js only because it's actually the 4th method I tried using for loading data from
//the json. Rename as desired.

const url = "https://fantasy.premierleague.com/api/bootstrap-static/"; // site that doesn’t send Access-Control-*

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

// Calc total points
function sumPoints(team) {
    var totalPoints = 0
    for (player in team) {
        //console.log(arsPlayers[player].total_points);
        totalPoints += team[player].total_points;
        //console.log(totalPoints);
    }
    return totalPoints;
}


var json_obj = JSON.parse(Get(url));
console.log("Everything")
console.log(json_obj);

// Break out subtables
var players = json_obj.elements;
console.log("Players")
console.log(players)

var element_types = json_obj.element_types;
console.log("Element Types")
console.log(element_types)

var teams = json_obj.teams;
console.log("Teams")
console.log(teams)

// Everything below is just for the graph. Reuse as needed.

// Break out teams and calc total points

//Arsenal is team_code 3
var arsPlayers = players.filter((player)=>player.team_code === 3);
console.log("Arsenal");
console.log(arsPlayers);
var arsTotal = sumPoints(arsPlayers);
console.log("total points for ARS:" + sumPoints(arsPlayers));

//Aston Villa is team_code 7
avlPlayers = players.filter((player)=>player.team_code === 7);
console.log("Aston Villa");
console.log(avlPlayers);
var avlTotal = sumPoints(avlPlayers);
console.log("total points for AVL:" + sumPoints(avlPlayers));

//Bournemouth is team_code 91
bouPlayers = players.filter((player)=>player.team_code === 91);
console.log("Bournemouth");
console.log(bouPlayers);
var bouTotal = sumPoints(bouPlayers);
console.log("total points for BOU:" + sumPoints(bouPlayers));

//Brighton is team_code 36
bhaPlayers = players.filter((player)=>player.team_code === 36);
console.log("Brighton");
console.log(bhaPlayers);
var bhaTotal = sumPoints(bhaPlayers);
console.log("total points for BHA:" + sumPoints(bhaPlayers));

//Burnley is team_code 90
burPlayers = players.filter((player)=>player.team_code === 90);
console.log("Burnley");
console.log(burPlayers);
var burTotal = sumPoints(burPlayers);
console.log("total points for BUR:" + sumPoints(burPlayers));

//Chelsea is team_code 8
chePlayers = players.filter((player)=>player.team_code === 8);
console.log("Chelsea");
console.log(chePlayers);
var cheTotal = sumPoints(chePlayers);
console.log("total points for CHE:" + sumPoints(chePlayers));

//Crystal Palace is team_code 31
cryPlayers = players.filter((player)=>player.team_code === 31);
console.log("Crystal Palace");
console.log(cryPlayers);
var cryTotal = sumPoints(cryPlayers);
console.log("total points for CRY:" + sumPoints(cryPlayers));

//Everton is team_code 11
evePlayers = players.filter((player)=>player.team_code === 11);
console.log("Everton");
console.log(evePlayers);
var eveTotal = sumPoints(evePlayers);
console.log("total points for EVE:" + sumPoints(evePlayers));

//Leicester is team_code 13
leiPlayers = players.filter((player)=>player.team_code === 13);
console.log("Leicester");
console.log(leiPlayers);
var leiTotal = sumPoints(leiPlayers);
console.log("total points for LEI:" + sumPoints(leiPlayers));

//Liverpool is team_code 14
livPlayers = players.filter((player)=>player.team_code === 14);
console.log("Liverpool");
console.log(livPlayers);
var livTotal = sumPoints(livPlayers);
console.log("total points for LIV:" + sumPoints(livPlayers));

//Man City is team_code 43
mciPlayers = players.filter((player)=>player.team_code === 43);
console.log("Man City");
console.log(mciPlayers);
var mciTotal = sumPoints(mciPlayers);
console.log("total points for MCI:" + sumPoints(mciPlayers));

//Man Utd is team_code 1
munPlayers = players.filter((player)=>player.team_code === 1);
console.log("Man Utd");
console.log(munPlayers);
var munTotal = sumPoints(munPlayers);
console.log("total points for MUN:" + sumPoints(munPlayers));

//Newcastle is team_code 4
newPlayers = players.filter((player)=>player.team_code === 4);
console.log("Newcastle");
console.log(newPlayers);
var newTotal = sumPoints(newPlayers);
console.log("total points for NEW:" + sumPoints(newPlayers));

//Norwich is team_code 45
norPlayers = players.filter((player)=>player.team_code === 45);
console.log("Norwich");
console.log(norPlayers);
var norTotal = sumPoints(norPlayers);
console.log("total points for NOR:" + sumPoints(norPlayers));

//Sheffield Utd is team_code 49
shuPlayers = players.filter((player)=>player.team_code === 49);
console.log("Sheffield Utd");
console.log(shuPlayers);
var shuTotal = sumPoints(shuPlayers);
console.log("total points for SHU:" + sumPoints(shuPlayers));

//Southhampton is team_code 20
souPlayers = players.filter((player)=>player.team_code === 20);
console.log("Southhampton");
console.log(souPlayers);
var souTotal = sumPoints(souPlayers);
console.log("total points for SOU:" + sumPoints(souPlayers));

//Spurs is team_code 6
totPlayers = players.filter((player)=>player.team_code === 6);
console.log("Spurs");
console.log(totPlayers); //Why is the short_name "tot"???
var totTotal = sumPoints(totPlayers);
console.log("total points for TOT:" + sumPoints(totPlayers));

//Watford is team_code 57
watPlayers = players.filter((player)=>player.team_code === 57);
console.log("Watford");
console.log(watPlayers);
var watTotal = sumPoints(watPlayers);
console.log("total points for WAT:" + sumPoints(watPlayers));

//West Ham is team_code 21
whuPlayers = players.filter((player)=>player.team_code === 21);
console.log("West Ham");
console.log(whuPlayers);
var whuTotal = sumPoints(whuPlayers);
console.log("total points for WHU:" + sumPoints(whuPlayers));

//Wolves is team_code 39
wolPlayers = players.filter((player)=>player.team_code === 39);
console.log("Wolves");
console.log(wolPlayers);
var wolTotal = sumPoints(wolPlayers);
console.log("total points for WOL:" + sumPoints(wolPlayers));


// Break out a team's players by element_type
arsForwards = arsPlayers.filter((player)=>player.element_type === 4)
console.log("forwards")
console.log(arsForwards);

arsMidfielders = arsPlayers.filter((player)=>player.element_type === 3)
console.log("midfielders")
console.log(arsMidfielders);

arsDefenders = arsPlayers.filter((player)=>player.element_type === 2)
console.log("defenders")
console.log(arsDefenders);

arsGoalkeepers = arsPlayers.filter((player)=>player.element_type === 1)
console.log("goalkeepers")
console.log(arsGoalkeepers);