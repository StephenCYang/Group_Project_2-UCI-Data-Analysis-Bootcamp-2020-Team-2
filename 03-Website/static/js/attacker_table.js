//Create empty arrays to extract data into.
var assists = []
var goals = []
var first_name = []
var last_name = []
var form = []
var points_per_game = []
var selected_by_percent = []
var total_points = []
var value_form = []
var now_cost = []
var minutes = []
var bonus = []
var team = []
var underrated = []
var threat = []
//Load the json from https://fantasy.premierleague.com/api/bootstrap-static/
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "https://fantasy.premierleague.com/api/bootstrap-static/"
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    // var elements = data.elements
    for (var i = 0; i < data.elements.length; i++) {
      if (data.elements[i].element_type === 4) {
        assists.push(data.elements[i].assists);
        goals.push(data.elements[i].goals_scored);
        first_name.push(data.elements[i].first_name);
        last_name.push(data.elements[i].second_name);
        form.push(data.elements[i].form);
        points_per_game.push(data.elements[i].points_per_game);
        selected_by_percent.push(data.elements[i].selected_by_percent);
        total_points.push(data.elements[i].total_points);
        value_form.push(data.elements[i].value_form);
        now_cost.push(data.elements[i].now_cost);
        minutes.push(data.elements[i].minutes);
        bonus.push(data.elements[i].bonus);
        threat.push(data.elements[i].threat)
    }}
    populateData(); // displaying the data to the user
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });

// Populate the data into the table
var table = d3.select("tbody");
function populateData(){

	for (let i = 0; i < total_points.length; i++){
		var row = table.append("tr");

		cell = row.append("td");
		cell.text(first_name[i]);

		cell = row.append("td");
    cell.text(last_name[i]);
    
    cell = row.append("td");
    cell.text(total_points[i]);

		cell = row.append("td");
		cell.text(points_per_game[i]);

		cell = row.append("td");
    cell.text(goals[i]);

    cell = row.append("td");
    cell.text(assists[i]);

    cell = row.append("td");
    cell.text(bonus[i]);

    cell = row.append("td");
    cell.text(form[i]);

    cell = row.append("td");
    cell.text(minutes[i]);

    cell = row.append("td");
    cell.text((now_cost[i])/10);

    cell = row.append("td");
    cell.text((threat[i]));

    cell = row.append("td");
    threat_per_goal = threat[i]/goals[i]
    cell.text(Math.round(threat_per_goal || 0));
  }
 
};
