var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store'),
    SessionStore = require('../../stores/session_store'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoItem = require('../photos/photo_item'),
    CoverPhoto = require('./cover_photo'),
    hashHistory = require('react-router').hashHistory;

var UserPhotos = React.createClass({

  getInitialState: function () {
    return {
      profileUser: {},
      currentUser: SessionStore.user(),
      userPhotos: []
      // add cover, add props to cover
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    // this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.userListener = UserStore.addListener(this._onUserChange);

    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchCurrentUser(currentUserId);
    ApiUtil.fetchUser(this.props.params.userId);
    //TODO: should this check to see if logged in?
  },

  componentWillUnmount: function () {
    // this.photoListener.remove();
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
                <li data-xcoord="0px" class="active">Photos</li>
                <li data-xcoord="160px">Favorites</li>
                <li data-xcoord="320px">Friends</li>
                <li data-xcoord="480px">Create</li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
});

module.exports = UserPhotos;