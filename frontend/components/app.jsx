var React = require('react');
var Feed = require('./ui/feed');
var ApiUtil = require('../util/api_util.js');

var App = React.createClass({
  componentWillMount: function () {

  },

  render: function () {
    return (
      <div>
        <Feed />
      </div>
    );
  }
});

module.exports = App;
