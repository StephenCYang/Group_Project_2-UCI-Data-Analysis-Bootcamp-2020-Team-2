const url = "https://fantasy.premierleague.com/api/bootstrap-static/"; // site that doesn’t send Access-Control-*

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get(url));
console.log("Everything")
console.log(json_obj);

var players = json_obj.elements;
console.log("Players")
console.log(players)

var element_types = json_obj.element_types;
console.log("Element Types")
console.log(element_types)

var teams = json_obj.teams;
console.log("Teams")
console.log(teams)
