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

forwards = players.filter((player)=>player.element_type === 4)
console.log("forwards")
console.log(forwards);

function populateData(){
    // getData(function() {
    var table = d3.select("tbody");
      for (let i = 0; i < forwards.length; i++){
          var row = table.append("tr");
  
          cell = row.append("td");
          cell.text(forwards[i].first_name);
  
          cell = row.append("td");
          cell.text(forwards[i].second_name);
          
          cell = row.append("td");
          cell.text(forwards[i].total_points);
  
          cell = row.append("td");
          cell.text(forwards[i].points_per_game);
  
          cell = row.append("td");
          cell.text(forwards[i].goals_scored);
          
          cell = row.append("td");
          cell.text(forwards[i].assists);
  
          cell = row.append("td");
          cell.text(forwards[i].bonus);

          cell = row.append("td");
          cell.text(forwards[i].form);
          
          cell = row.append("td");
          cell.text(forwards[i].minutes);
          
          cell = row.append("td");
          cell.text((forwards[i].now_cost)/10);
          
          cell = row.append("td");
          cell.text((forwards[i].threat));
  
          cell = row.append("td");
          if (forwards[i].goals_scored === 0 || forwards[i].threat === 0) {
              cell.text(0)
            } else {
                threat_per_goal = forwards[i].threat/forwards[i].goals_scored
                cell.text(Math.round(threat_per_goal));
      }
  
    }
  // })
  };
  populateData()

