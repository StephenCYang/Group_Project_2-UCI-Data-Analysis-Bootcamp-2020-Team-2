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

goalkeepers = players.filter((player)=>player.element_type === 1)
console.log("forwards")
console.log(goalkeepers);

// POPULATING DATA INTO HTML TABLE
function populateData(){
    var table = d3.select("tbody");
      for (let i = 0; i < goalkeepers.length; i++){
        var row = table.append("tr");

        cell = row.append("td");
        cell.text(goalkeepers[i].first_name);

        cell = row.append("td");
        cell.text(goalkeepers[i].second_name);
        
        cell = row.append("td");
          var teamcode = goalkeepers[i].team
          for (let j = 0; j < teams.length; j++) {
            if (teamcode === teams[j].id) {
              cell.text(teams[j].name)
            }
          }

        cell = row.append("td");
        cell.text(goalkeepers[i].total_points);

        cell = row.append("td");
        cell.text(goalkeepers[i].points_per_game);

        cell = row.append("td");
        cell.text(goalkeepers[i].goals_conceded);
        
        cell = row.append("td");
        cell.text(goalkeepers[i].clean_sheets);

        cell = row.append("td");
        cell.text(goalkeepers[i].penalties_saved);

        cell = row.append("td");
        cell.text(goalkeepers[i].bonus);

        cell = row.append("td");
        cell.text(goalkeepers[i].form);
        
        cell = row.append("td");
        cell.text(goalkeepers[i].minutes);
        
        cell = row.append("td");
        cell.text((goalkeepers[i].now_cost)/10);
  
    }

  };
  populateData()
