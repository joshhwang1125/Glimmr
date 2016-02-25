var React = require('react');
var Feed = require('./ui/feed');
var ApiUtil = require('../util/api_util.js');

var App = React.createClass({
  componentWillMount: function () {
    ApiUtil.fetchAllPhotos();
  },

  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
