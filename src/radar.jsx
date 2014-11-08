var React = require('react');
var Paths = require('paths-js/radar');

var Radar = React.createClass({

  getDefaultProps() {
    return {
      fill   : "#0D95BC",
      stroke : "#777",
      data   : [],
      max    : 100,
      r      : 100,
      rings  : 5,
      x      : 0,
      y      : 0
    }
  },

  getCurve(curve, i) {
    return (
      <g opacity="0.6" key={ i }>
        <path d={ curve.polygon.path.print() } fill={ this.props.fill } />
      </g>
    );
  },

  getRing(ring, i) {
    return (
      <path key={ i } d={ ring.path.print() } stroke={ this.props.stroke } />
    );
  },

  build() {
    var { data, max, r, rings, x, y } = this.props;

    return Paths({ data, max, r, rings, center: [ x, y ] });
  },

  render() {
    var paths = this.build();

    return (
      <g fill="none" stroke="none">
        { paths.rings.map(this.getRing) }
        { paths.curves.map(this.getCurve) }
      </g>
    );
  }

});

module.exports = Radar;
