//sankeyGraph.js

//Load the json from https://fantasy.premierleague.com/api/bootstrap-static/
var link="https://fantasy.premierleague.com/api/bootstrap-static/";

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = link
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });
  