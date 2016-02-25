var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var Logout = React.createClass({
  onClick: function () {

  },
  render: function () {
    return (
      <li><a href="/home" onClick={this.onClick}>Logout</a></li>
    );
  }
});

module.exports = Logout;