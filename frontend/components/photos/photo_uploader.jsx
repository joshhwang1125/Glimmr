var React = require('react'),
    FollowStore = require('../../stores/follow_store');

var PhotoUploader = React.createClass({
  getInitialState: function () {
    return {
      followId: FollowStore.currentUserFollow(parseInt(this.props.uploader.id))
    };
  },
  componentDidMount: function () {
    this.followListener = FollowStore.addListener(this._onFollowsChange);
  },
  componentWillUnmount: function () {
    this.followListener.remove();
  },

   _onFollowsChange: function () {
    this.setState({ followId: FollowStore.currentUserFollow(parseInt(this.props.uploader.id)) });
  },

  handleFollow: function (e) {
    e.preventDefault();
    e.stopPropagation();

    var followParams = {
      follow: {
        follower_id: currentUserId,
        followee_id: this.props.uploader.id
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
    uploaderPic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_135,h_135,c_fill/" + this.props.uploader.profile_pic + "')" };
    followBackground = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_155,h_155,c_fill/14578-green-gradient-1280x800-abstract-wallpaper_cdcg3y.jpg')" };

    if (this.props.uploader.id === currentUserId) {
      followButton = (<div className="self-uploader-pic" style={uploaderPic}>

                      </div>)
    } else if (this.state.followId === undefined) {
      followButton = (<div className="uploader-pic" style={uploaderPic} onClick={this.handleFollow}>
                        <span className="uploader-text">FOLLOW</span>
                      </div>)
    } else {
      followButton = (<div className="uploader-pic" style={followBackground} onClick={this.handleUnfollow}>
                        <span className="uploader-text">UNFOLLOW</span>
                      </div>)
    };

    return (
      <div className="uploader-container">

          {followButton}
          <span className="uploader-title">{this.props.photo.title}</span>
          <span className="uploader-username">{"by " + this.props.uploader.username}</span>
          <span className="uploader-description">{this.props.photo.description}</span>

      </div>
    );
  }
});

module.exports = PhotoUploader;
