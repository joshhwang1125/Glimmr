var React = require('react');
var Feed = require('./ui/feed');

var App = React.createClass({

  render: function () {
    return (
      <div>
        <Feed />
      </div>
    );
  }
});

module.exports = App;
