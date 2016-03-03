var React = require('react');
var Feed = require('./ui/feed');
var ApiUtil = require('../util/api_util.js');
var NavTop = require('./ui/nav_top');


var App = React.createClass({
  componentWillMount: function () {
    ApiUtil.fetchUserFavorites(currentUserId);
    ApiUtil.fetchFollows(currentUserId);
  },

  render: function () {
    return (
      <div className="app-container">
        <NavTop/>
          <div className="main-grid">
            {this.props.children}
          </div>

      </div>
    );
  }
});

module.exports = App;
