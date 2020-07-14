// LOADING DATA
var tableData = data_2;

// ADDING DATA TO TABLE
var table = d3.select("tbody");

function populateData(){
	for (var i = 0; i < tableData.length; i++){
		var row = table.append("tr");

		var cell = row.append("td");
		cell.text(tableData[i].team);

		cell = row.append("td");
		cell.text(tableData[i].first_name);

		cell = row.append("td");
		cell.text(tableData[i].second_name);

		cell = row.append("td");
		cell.text(tableData[i].points_per_game);

		cell = row.append("td");
		cell.text(tableData[i].total_points);
	}
};
populateData(); // displaying the data to the user

// --------------------
// team
// first_name
// second_name
// points_per_game
// total_points