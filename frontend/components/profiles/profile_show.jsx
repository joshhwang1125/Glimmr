var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store'),
    SessionStore = require('../../stores/session_store'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoItem = require('../photos/photo_item'),
    CoverPhoto = require('./cover_photo'),
    UserPhotos = require('./user_photos'),
    Favorites = require('./favorites'),
    Info = require('./info'),
    NavEffects = require('../../util/nav_effects.js'),
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
    //TODO: should this check to see if logged in?
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
  handlePhotosClick: function () {
    this.setState({ activeTab: "photos" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/userPhotos");

  },


  handleFavoritesClick: function () {
    this.setState({ activeTab: "favorites" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/favorites");
  },
  handleFollowingClick: function () {
    this.setState({ activeTab: "friends" });
    // hashHistory.push("/users/" + this.state.profileUser.id + "/following");
  },

  handleInfoClick: function () {
    this.setState({ activeTab: "info" });
    hashHistory.push("/users/" + this.state.profileUser.id + "/info");
  },

  //TODO: FIX USER INFO!!



  render: function () {
    var backgroundImage = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_2000,h_500,c_fill/" + this.state.profileUser.cover_photo + "')" };
    var profilePic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_125,h_125,c_fill/" + this.state.profileUser.profile_pic + "')" };
    var createdAtDate;

    if (this.state.profileUser.id === undefined) {
      createdAtDate = "loading";
    } else {
      createdAtDate = this.state.profileUser.created_at.slice(0, 10);
    };

    //TODO: center profile pic by adding a div around user-pic
    //TODO: Info instead of create


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
                    Friends
                  </li>
                  <li data-xcoord="480px" onClick={this.handleInfoClick}>
                    Info
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