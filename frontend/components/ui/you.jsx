var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var You = React.createClass({
  onClick: function () {
    hashHistory.push("users/" + currentUserId + "/userPhotos");
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>Profile</a></li>
    );
  }
});

module.exports = You;