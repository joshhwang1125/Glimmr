var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var CreateButton = React.createClass({
  onClick: function () {
    window.location.replace("upload");
    hashHistory.push("upload");
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>Upload</a></li>
    );
  }
});

module.exports = CreateButton;
