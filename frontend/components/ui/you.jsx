var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var You = React.createClass({
  onClick: function () {
    hashHistory.push("users/" + currentUserId);
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>You</a></li>
    );
  }
});

module.exports = You;