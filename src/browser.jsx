var React = require('react');
var Chart = require('./chart');
var data  = require('../data/monsters.json');

React.render(<Chart data={ data } />, document.getElementById('chart'));
