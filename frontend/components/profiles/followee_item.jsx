var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var FolloweeItem = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    hashHistory.push("/users/" + this.props.followee.id + "/userPhotos");
  },
  render: function () {
    var followeePic;

    followeePic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_125,h_125,c_fill/" + this.props.followee.profile_pic + "')" };
    return (
      <div className="followee-container">
        <h1>
          <div className="followee-pic" style={followeePic} onClick={this.handleClick}></div>
          <span className="followee-username">{this.props.followee.username}</span>
        </h1>
      </div>
    );
  }
});

module.exports = FolloweeItem;
