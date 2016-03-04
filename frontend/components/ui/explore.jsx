var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var Explore = React.createClass({
  onClick: function () {
    hashHistory.push("/");
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>Photostream</a></li>
    );
  }
});

module.exports = Explore;
