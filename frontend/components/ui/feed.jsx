var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');
var PhotoItem = require('../photos/photo_item');
var NavTop = require('./nav_top');

var Feed = React.createClass({
  getInitialState: function () {
    return { photos: [], currentUser: SessionStore.user() };
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchCurrentUser(currentUserId); //TODO: remove?
  },

  componentWillUnmount: function () {
    this.photoListener.remove();
  },

  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  render: function () {
    return (
      <div className="feed-grid">
        { this.state.photos.map(function (photo) {
          return <PhotoItem key={photo.id}
                            photo={photo}
                            size={300}/>
          })
        }
      </div>
    );
  }
});

module.exports = Feed;