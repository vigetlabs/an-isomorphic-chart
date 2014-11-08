var React = require('react');
var Radar = require('./radar.jsx');

var Chart = React.createClass({

  getDefaultProps() {
    return {
      data   : [],
      height : 250,
      width  : 400
    }
  },

  render() {
    var { data, width, height } = this.props;

    var r = Math.min(width, height) / 2;

    return (
      <svg height={ height } width={ width }>
        <title>Stats</title>
        <Radar data={ data } x={ width / 2 } y={ height / 2 } r={ r } />
      </svg>
    );
  }

});

module.exports = Chart;
