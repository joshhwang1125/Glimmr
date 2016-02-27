var React = require('react');
var Feed = require('./ui/feed');
var ApiUtil = require('../util/api_util.js');
var NavTop = require('./ui/nav_top');


var App = React.createClass({
  componentWillMount: function () {
    ApiUtil.fetchAllPhotos();
  },

  render: function () {
    return (
      <div>
        <NavTop/>
          <div className="main-grid">
            {this.props.children}
          </div>

      </div>
    );
  }
});

module.exports = App;
