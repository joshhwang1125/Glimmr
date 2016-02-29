var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user_store');
var PhotoItem = require('../photos/photo_item');

var UserPhotos = React.createClass({
  getInitialState: function () {
    return { profileUser: {}, userPhotos: [], currentUser: SessionStore.user() };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    ApiUtil.fetchUser(this.props.params.userId);
    ApiUtil.fetchUserPhotos(this.props.params.userId);

  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.photoListener.remove();
    this.sessionListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(newProps.params.userId);
    ApiUtil.fetchUserPhotos(newProps.params.userId);
  },

  _onPhotosChange: function () {
    this.setState({ userPhotos: PhotoStore.all() });
  },

  _onUserChange: function () {
    this.setState({ profileUser: UserStore.user() });
  },

  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },

  render: function () {

    return (
      <div className="profile-feed-grid">
        { this.state.userPhotos.map(function (photo) {
          return <PhotoItem key={photo.id}
                            photo={photo}
                            size={300}/>
          })
        }
      </div>
    );
  }
});

module.exports = UserPhotos;