var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user_store');
var PhotoItem = require('../photos/photo_item');

var UserPhotos = React.createClass({
  getInitialState: function () {
    return { userPhotos: [], currentUser: SessionStore.user() };
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    ApiUtil.fetchUserPhotos(UserStore.user().id);

  },

  componentWillUnmount: function () {
    this.photoListener.remove();
  },

  componentWillReceiveProps: function () {
    ApiUtil.fetchUserPhotos(UserStore.user().id);
  },

  _onPhotosChange: function () {
    this.setState({ userPhotos: PhotoStore.all() });
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