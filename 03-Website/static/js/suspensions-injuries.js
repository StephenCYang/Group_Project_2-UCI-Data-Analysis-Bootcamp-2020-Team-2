// URL/API FOR THE DATA
const url = "https://fantasy.premierleague.com/api/bootstrap-static/"; // site that doesn’t send Access-Control-*

// SETTING DATA AS JSON
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get(url));
console.log("Everything")
console.log(json_obj);

// BREAKING OUT SUBTABLES FOR MIDFIELDERS
var players = json_obj.elements;

function populateData(){
    var table = d3.select("tbody");
     
      for (let i = 0; i < players.length; i++){
          var x = 0
          if (players[i].chance_of_playing_next_round != null) {
           x = players[i].chance_of_playing_next_round}
          if(((players[i].yellow_cards >0)|| (players[i].red_cards>0)) || ((players[i].chance_of_playing_next_round <100) && (players[i].chance_of_playing_next_round !=0 ))) {
          
          var row = table.append("tr");
  
          cell = row.append("td");
          cell.text(players[i].first_name);
  
          cell = row.append("td");
          cell.text(players[i].second_name);
          
          cell = row.append("td");
          cell.text(x);
  
          cell = row.append("td");
          cell.text(players[i].news);

          cell = row.append("td");
          cell.text(players[i].yellow_cards);

          cell = row.append("td");
          cell.text(players[i].red_cards);
  }

  
         // cell = row.append("td");
          //if (forwards[i].goals_scored === 0 || forwards[i].threat === 0) {
           //   cell.text(0)
            //} else {
           //     threat_per_goal = forwards[i].threat/forwards[i].goals_scored
           //     cell.text(Math.round(threat_per_goal));
      }
  
    };

  populateData()