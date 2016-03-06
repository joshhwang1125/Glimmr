var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user_store');
var FavoriteStore = require('../../stores/favorite_store');
var PhotoItem = require('../photos/photo_item');

var Favorites = React.createClass({
  getInitialState: function () {
    return { profileUser: UserStore.user() };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);
    // ApiUtil.fetchUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.favoriteListener.remove();
  },

  _onUserChange: function () {
    this.setState({ profileUser: UserStore.user() });
  },

  _onFavoritesChange: function () {
    ApiUtil.fetchUser(this.props.params.userId);
  },


  render: function () {
    var profileUserFavorites;

    if (this.state.profileUser.id === undefined) {
      profileUserFavorites = "loading";
    } else {
      profileUserFavorites = (this.state.profileUser.favorited_photos.map(function(photo){
          return <PhotoItem key={photo.id}
                            photo={photo}
                            size={300}/>}))
    };

    return (
      <div className="profile-feed-grid">
        {profileUserFavorites}
      </div>
    );
  }
});

module.exports = Favorites;