var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var FolloweeItem = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    hashHistory.push("/users/" + this.props.followee.id + "/userPhotos");
  },
  render: function () {
    var followeePic;

    followeePic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_145,h_145,c_fill/" + this.props.followee.profile_pic + "')" };
    return (
      <div className="followee-container">
        <h1>
          <div className="followee-pic" style={followeePic} onClick={this.handleClick}>
            <span className="followee-text">{this.props.followee.username}</span>
          </div>


        </h1>
      </div>
    );
  }
});

module.exports = FolloweeItem;

// <ul class="gallery">
//   <li><a href="#"><img src="http://dev.steelehouse.com/codepen/game.jpg"/><span class="name">Rexodus<span class="title">Destruction Expert</span></span></a></li>
