var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store'),
    SessionStore = require('../../stores/session_store'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoItem = require('../photos/photo_item'),
    CoverPhoto = require('./cover_photo'),
    UserPhotos = require('./user_photos'),
    Favorites = require('./favorites'),
    FollowButton = require('./follow_button'),
    Info = require('./info'),
    hashHistory = require('react-router').hashHistory;

var ProfileShow = React.createClass({

  getInitialState: function () {
    return {
      profileUser: {},
      currentUser: SessionStore.user(),
      userPhotos: [],
      activeTab: "photos"

    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);

    this.userListener = UserStore.addListener(this._onUserChange);


    ApiUtil.fetchCurrentUser(currentUserId);
    ApiUtil.fetchUser(this.props.params.userId);

  },

  componentWillUnmount: function () {

    this.sessionListener.remove();
    this.userListener.remove();
  },

  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },

  _onUserChange: function () {

    this.setState({ profileUser: UserStore.user() });
    this.setState({ userPhotos: PhotoStore.findUserPhotos(this.state.profileUser.id) });

  },
  handlePhotosClick: function (e) {
    e.preventDefault();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.setState({ activeTab: "photos" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/userPhotos");

  },


  handleFavoritesClick: function (e) {
    e.preventDefault();
    this.setState({ activeTab: "favorites" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/favorites");
  },
  handleFollowingClick: function (e) {
    e.preventDefault();
    this.setState({ activeTab: "friends" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/followees");
  },

  handleInfoClick: function (e) {
    e.preventDefault();
    this.setState({ activeTab: "info" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/info");
  },




  render: function () {

    var backgroundImage;
    var profilePic;
    var createdAtDate;
    var followButt;

    if (this.state.profileUser.id === undefined) {
      createdAtDate = "loading";
      followButt = (<div className="placeholder"></div>)

    } else {
      createdAtDate = this.state.profileUser.created_at.slice(0, 10);
      backgroundImage = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_2000,h_500,c_fill/" + this.state.profileUser.cover_photo + "')" };
      profilePic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_165,h_165,c_fill/" + this.state.profileUser.profile_pic + "')" };
      followButt = <FollowButton key={this.state.profileUser.id}
                               profileUser={this.state.profileUser}/>;
    };




    return (
        <div>
          <div className="user-cover" style={backgroundImage}>
            <div className="user-info">
              <h1>
                <div className="user-pic" style={profilePic}></div>
                <span className="profile-username">{this.state.profileUser.username}</span>
              </h1>

              Photos {this.state.userPhotos.length}
              <br/>
              Joined {createdAtDate}
              <br/>
              {followButt}
            </div>
          </div>
          <header id="profilenav">
              <nav className='profile-navigation'>
                <ul>
                  <li data-xcoord="0px" onClick={this.handlePhotosClick}>
                    Photos
                  </li>
                  <li data-xcoord="160px" onClick={this.handleFavoritesClick}>
                    Favorites
                  </li>
                  <li data-xcoord="320px" onClick={this.handleFollowingClick}>
                    Following
                  </li>

                </ul>
              </nav>
          </header>
          {this.props.children}
      </div>
    );
  }
});

module.exports = ProfileShow;