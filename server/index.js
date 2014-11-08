// Pull in environment variables
require('node-env-file')('.env');

// Next teach node how to parse JSX
require('node-jsx').install({
  harmony: true
});

var React    = require('react');
var express  = require('express');
var monsters = require('../data/monsters.json');
var app      = express();

require('./config')(app);

var Chart = require('../src/chart.jsx');

function buildChart() {
  return React.createElement(Chart, { data: monsters });
}

app.get('/', function(req, res) {
  // Render a stringified version of the React output, which leaves hooks
  // that help React to "awaken" on page load
  res.render('index', {
    chart: React.renderToString(buildChart())
  });
});

app.get('/chart.svg', function(req, res) {
  // Rendering to static markup cuts React specific hooks
  var payload = React.renderToStaticMarkup(buildChart());

  res.set({
    'Content-Type': 'text/svg+xml'
  });

  res.end(payload);
});

app.listen(process.env.PORT, function() {
  console.log("This example is running on port %s", process.env.PORT);
});
