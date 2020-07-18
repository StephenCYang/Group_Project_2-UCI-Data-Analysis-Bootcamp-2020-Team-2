//Create empty arrays to extract data into.
var total_points = []
var first_name = []
var last_name = []
//var red_cards = []
//var yellow_cards = []
//var minutes = []
var chance_of_playing = []
var news = []
//Load the json from https://fantasy.premierleague.com/api/bootstrap-static/
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "https://fantasy.premierleague.com/api/bootstrap-static/"
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    // var elements = data.elements
    for (var i = 0; i < data.elements.length; i++) {
        if ((data.elements[i].chance_of_playing_next_round != null) && (data.elements[i].chance_of_playing_next_round < 100)) {
        first_name.push(data.elements[i].first_name);
        last_name.push(data.elements[i].second_name);
        //red_cards.push(data.elements[i].red_cards)
        //yellow_cards.push(data.elements[i].yellow_cards)
        total_points.push(data.elements[i].total_points);
        //minutes.push(data.elements[i].minutes);
        chance_of_playing.push(data.elements[i].chance_of_playing_next_round)
        news.push(data.elements[i].news);
    }}

    populateData(); // displaying the data to the user
    return data;

    })

  .catch(e => {
    console.log(e);
    return e;
  });
//(data.elements[i].chance_of_playing_next_round < 100) && (data.elements[i].chance_of_playing_next_round >=0)// Populate the data into the table
var table = d3.select("tbody");
function populateData(){

    for (let i = 0; i < total_points.length; i++){
        var row = table.append("tr");

        cell = row.append("td");
        cell.text(first_name[i]);

        cell = row.append("td");
        cell.text(last_name[i]);
    
        //cell = row.append("td");
        //cell.text(red_cards[i]);

        //cell = row.append("td");
        //cell.text(yellow_cards[i]);

        //cell = row.append("td");
        //cell.text(total_points[i]);

        //cell = row.append("td");
        //cell.text(minutes[i]);

        cell = row.append("td");
        cell.text(chance_of_playing[i]);

        cell = row.append("td");
        cell.text(news[i]);
    //cell = row.append("td");
    //cell.text(threat[i]/goals[i]);
  }
 
};
