// URL/API FOR THE DATA
const url = "https://fantasy.premierleague.com/api/bootstrap-static/"; // site that doesn’t send Access-Control-*

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

// SETTING DATA AS JSON
var json_obj = JSON.parse(Get(url));
console.log("Everything")
console.log(json_obj);

// BREAKING OUT SUBTABLES FOR MIDFIELDERS
var players = json_obj.elements;
var teams = json_obj.teams;

forwards = players.filter((player)=>player.element_type === 4)
console.log("forwards")
console.log(forwards);

// POPULATING DATA INTO HTML TABLE
function populateData(){
    var table = d3.select("tbody");
      for (let i = 0; i < forwards.length; i++){
          var row = table.append("tr");
  
          cell = row.append("td");
          cell.text(forwards[i].first_name);
  
          cell = row.append("td");
          cell.text(forwards[i].second_name);

          cell = row.append("td");
            var teamcode = forwards[i].team
            for (let j = 0; j < teams.length; j++) {
              if (teamcode === teams[j].id) {
                cell.text(teams[j].name)
              }
            }
          
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
  };
  populateData()