var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var SessionConstants = require('../constants/session_constants');
var UserConstants = require('../constants/user_constants');
var FavoriteConstants = require('../constants/favorite_constants');
var FollowConstants = require('../constants/follow_constants');

var ApiActions = {
  receiveAllPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.ALL_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  removePhoto: function (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_DELETED,
      photo: photo
    });
  },

  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      user: user
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveAllFavorites: function (favorites) {
    AppDispatcher.dispatch({
      actionType: FavoriteConstants.All_FAVORITES_RECEIVED,
      favorites: favorites
    });
  },

  receiveNewFavorite: function (favorite) {
    AppDispatcher.dispatch({
      actionType: FavoriteConstants.NEW_FAVORITE_RECEIVED,
      favorite: favorite
    });
  },

  removeFavorite: function (favorite) {
    AppDispatcher.dispatch({
      actionType: FavoriteConstants.FAVORITE_DELETED,
      favorite: favorite
    });
  },

  receiveAllFollows: function (follows) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.All_FOLLOWS_RECEIVED,
      follows: follows
    });
  },

  receiveNewFollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.NEW_FOLLOW_RECEIVED,
      follow: follow
    });
  },

  removeFollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_DELETED,
      follow: follow
    });
  }
};

window.ApiActions = ApiActions;
module.exports = ApiActions;