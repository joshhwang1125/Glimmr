var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var Logo = React.createClass({
  onClick: function () {
    hashHistory.push("/");
  },

  render: function () {
    return (
      <div className="logo" onClick={this.onClick}>
        <div className="box" >G</div>
        <div className="text"><span className="first">
          Glimmr
          </span></div>
      </div>
    );
  }
});

module.exports = Logo;
