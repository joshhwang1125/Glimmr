var React = require('react'),
    hashHistory = require('react-router').hashHistory,
    SessionUtil = require('../../util/session_util.js');

var Logout = React.createClass({
  onClick: function () {
    SessionUtil.logout();
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>Logout</a></li>
    );
  }
});

module.exports = Logout;