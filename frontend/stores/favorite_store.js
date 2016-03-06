var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FavoriteStore = new Store(AppDispatcher),
    FavoriteConstants = require('../constants/favorite_constants');

var _favorites = [];

FavoriteStore.all = function () {
  return _favorites.slice();
};

FavoriteStore.currentUserFavorite = function (photoId) {
  for (var i = 0; i < _favorites.length; i++) {
    if (_favorites[i].photo_id === photoId && _favorites[i].user_id === currentUserId){
      return _favorites[i].id;
    }
  }
};

FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FavoriteConstants.All_FAVORITES_RECEIVED:
      resetFavorites(payload.favorites);

      FavoriteStore.__emitChange();
      break;
    case FavoriteConstants.NEW_FAVORITE_RECEIVED:

      addFavorite(payload.favorite);
      FavoriteStore.__emitChange();
      break;
    case FavoriteConstants.FAVORITE_DELETED:

      deleteFavorite(payload.favorite);
      FavoriteStore.__emitChange();
      break;
  }
};

var resetFavorites = function (favorites) {
  _favorites = favorites;
};

var addFavorite = function (favorite) {
  _favorites.push(favorite);
};

var deleteFavorite = function (favorite) {
  for (var i = 0; i < _favorites.length; i++) {
    if (_favorites[i].id === favorite.id){
      _favorites.splice(i, 1);
    }
  }
};



// window.FavoriteStore = FavoriteStore;

module.exports = FavoriteStore;