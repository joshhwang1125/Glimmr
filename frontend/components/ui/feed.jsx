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

  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchCurrentUser(currentUserId);
  },

  compomentWillUnmount: function () {
    this.photoListener.remove();
  },

  render: function () {
    return (
      <div className="feed-grid">
        <NavTop/>

        <div className="picture-grid">
          { this.state.photos.map(function (photo) {
            return <PhotoItem key={photo.id}
                              photo={photo}
                              size={300}/>
            })
          }
        </div>
      </div>
    );
  }
});

module.exports = Feed;