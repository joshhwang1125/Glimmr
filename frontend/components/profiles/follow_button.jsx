var React = require('react'),
    FollowStore = require('../../stores/follow_store');

var FollowButton = React.createClass({
  getInitialState: function () {
    return {
      followId: FollowStore.currentUserFollow(parseInt(this.props.profileUser.id))
    };
  },
  componentDidMount: function () {
    this.followListener = FollowStore.addListener(this._onFollowsChange);
  },
  componentWillUnmount: function () {
    this.followListener.remove();
  },

   _onFollowsChange: function () {
    this.setState({ followId: FollowStore.currentUserFollow(parseInt(this.props.profileUser.id)) });
  },

  handleFollow: function (e) {
    e.preventDefault();
    e.stopPropagation();

    var followParams = {
      follow: {
        follower_id: currentUserId,
        followee_id: this.props.profileUser.id
      }
    };

    ApiUtil.createFollow(followParams);
  },

  handleUnfollow: function (e) {
    e.preventDefault();
    e.stopPropagation();

    ApiUtil.deleteFollow(this.state.followId);
  },
  render: function () {
    var uploaderPic;
    var followBackground;
    var followButton = "";
    uploaderPic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_135,h_135,c_fill/" + this.props.profileUser.profile_pic + "')" };
    followBackground = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_155,h_155,c_fill/14578-green-gradient-1280x800-abstract-wallpaper_cdcg3y.jpg')" };

    if (this.props.profileUser.id === currentUserId) {
      followButton = (<div className="placeholder"></div>)
    } else if (this.state.followId === undefined) {
      followButton = (<a href="#" className="follow-butt go-follow" onClick={this.handleFollow}>FOLLOW</a>)
    } else {
      followButton = (<a href="#" className="follow-butt go-unfollow" onClick={this.handleUnfollow}>UNFOLLOW</a>)
    };

    return (
      <div className="follow-button-container">

          {followButton}

      </div>
    );
  }
});

module.exports = FollowButton;

