//This file is named test3.js only because it's actually the 4th method I tried using for loading data from
//the json. Rename as desired.

const url = "https://fantasy.premierleague.com/api/bootstrap-static/"; // site that doesn’t send Access-Control-*

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

// // Calc total points
// function sumPoints(team) {
//     var totalPoints = 0
//     for (player in team) {
//         //console.log(arsPlayers[player].total_points);
//         totalPoints += team[player].total_points;
//         //console.log(totalPoints);
//     }
//     return totalPoints;
// }


var json_obj = JSON.parse(Get(url));
console.log("Everything")
console.log(json_obj);

// Break out subtables
var players = json_obj.elements;

defenders = players.filter((player)=>player.element_type === 2)
console.log("defenders")
console.log(defenders);

function populateData(){
    // getData(function() {
    var table = d3.select("tbody");
      for (let i = 0; i < defenders.length; i++){
          var row = table.append("tr");
  
          cell = row.append("td");
          cell.text(defenders[i].first_name);
  
          cell = row.append("td");
          cell.text(defenders[i].second_name);
          
          cell = row.append("td");
          cell.text(defenders[i].total_points);
  
          cell = row.append("td");
          cell.text(defenders[i].points_per_game);
  
          cell = row.append("td");
          cell.text(defenders[i].goals_conceded);
          
          cell = row.append("td");
          cell.text(defenders[i].clean_sheets);
  
          cell = row.append("td");
          cell.text(defenders[i].bonus);

          cell = row.append("td");
          cell.text(defenders[i].form);
          
          cell = row.append("td");
          cell.text(defenders[i].minutes);
          
          cell = row.append("td");
          cell.text((defenders[i].now_cost)/10);
  
    }
 
  };
  populateData()

