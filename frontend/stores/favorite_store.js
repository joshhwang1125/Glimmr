var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FavoriteStore = new Store(AppDispatcher),
    FavoriteConstants = require('../constants/favorite_constants');

var _favorites = [];

FavoriteStore.all = function () {
  return _favorites.slice();
};

FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FavoriteConstants.All_FAVORITES_RECEIVED:
      resetFavorites(payload.favorites);
      console.log(payload.favorites);
      FavoriteStore.__emitChange();
      break;
    case FavoriteConstants.NEW_FAVORITE_CREATED:
      addFavorite(payload.favorite);
      FavoriteStore.__emitChange();
      break;
  }
};

var resetFavorites = function (favorites) {
  _favorites = favorites;
};

var addFavorite = function (favorite) {
  _favorites.push(favorite);
}



window.FavoriteStore = FavoriteStore;

module.exports = FavoriteStore;