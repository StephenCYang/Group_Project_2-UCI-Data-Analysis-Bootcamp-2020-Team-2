
//Create Table
var first_name = []
var second_name = []
var element_type = []
var event_points = []
var form = []
var points_per_game = []
var selected_by_percent = []
var team_code = []
var team = []
var total_points = []
var value_form = []
var value_season = []
var clean_sheets= []
var bonus = []
var saves = []
var bps = []
var assists = []
var goals = []

var team_id = []
var team_code = []
var team_name = []

var position_id = []
var position_name = []
//Load the json from https://fantasy.premierleague.com/api/bootstrap-static/
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "https://fantasy.premierleague.com/api/bootstrap-static/"
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    var elements = data.elements
    for (var i = 0; i < elements.length; i++) {
      first_name.push(data.elements[i].first_name);
      second_name.push(data.elements[i].second_name);
      element_type.push(data.elements[i].element_type);
      event_points.push(data.elements[i].event_points);
      form.push(data.elements[i].form);
      points_per_game.push(data.elements[i].points_per_game);
      selected_by_percent.push(data.elements[i].selected_by_percent);
      team_code.push(data.elements[i].team_code);
      team.push(data.elements[i].team);
      total_points.push(data.elements[i].total_points);
      value_form.push(data.elements[i].value_form);
      value_season.push(data.elements[i].value_season);
      clean_sheets.push(data.elements[i].clean_sheets);
      bonus.push(data.elements[i].bonus);
      saves.push(data.elements[i].saves);
      bps.push(data.elements[i].bps);
      assists.push(data.elements[i].assists);
      goals.push(data.elements[i].goals_scored);
    }

    var teams = data.teams
    for (var i = 0; i < teams.length; i++) {
      team_id.push(data.teams[i].id);
      team_code.push(data.teams[i].code);
      team_name.push(data.teams[i].name);
    }

    var element_types = data.element_types
    for (var i = 0;i <element_types.length; i++){
      position_id.push(data.element_types[i].id);
      position_name.push(data.element_types[i].singular_name)
    }
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });
  console.log(position_name)