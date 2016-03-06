var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var FavoriteStore = require('../../stores/favorite_store');
var FollowStore = require('../../stores/follow_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');
var PhotoItem = require('../photos/photo_item');
var NavTop = require('./nav_top');

var Feed = React.createClass({
  getInitialState: function () {
    return { photos: [], favorites: [], follows: [], currentUser: SessionStore.user() };
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);
    this.followListener = FollowStore.addListener(this._onFollowChange);
    ApiUtil.fetchAllPhotos();
  },

  componentWillUnmount: function () {
    this.photoListener.remove();
    this.favoriteListener.remove();
    this.followListener.remove();
  },

  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  _onFavoritesChange: function () {
    this.setState({ favorites: FavoriteStore.all() });
  },

  _onFollowChange: function () {
    this.setState({ follows: FollowStore.all() });
  },

  render: function () {
    return (
      <div className="feed-grid">
        { this.state.photos.sortBy('created_at').map(function (photo) {
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