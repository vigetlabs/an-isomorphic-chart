require('node-jsx').install({
  harmony: true
});

var express = require('express');
var swig    = require('swig');
var path    = require('path');
var React  = require('react');
var monsters = require('./data/monsters.json');
var assetsPath = path.resolve(__dirname, 'assets');
var viewsPath = path.resolve(__dirname, 'views');

var app = express();

app.use(express.static(assetsPath));

app.engine('html', swig.renderFile);

app.set('views', viewsPath);
app.set('view engine', 'html');

var Chart = require('./src/chart.jsx');

function buildChart() {
  return React.createElement(Chart, { data: monsters });
}

app.get('/', function(req, res) {
  var src = React.renderToString(buildChart());

  res.render('index', {
    chart: src
  });
});

app.get('/chart.svg', function(req, res) {
  var src = React.renderToString(buildChart());

  res.set({
    'Content-Type': 'text/svg+xml'
  });

  res.end(src);
});

app.listen(3000);
