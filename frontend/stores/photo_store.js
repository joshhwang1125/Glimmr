var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    PhotoStore = new Store(AppDispatcher),
    PhotoConstants = require('../constants/photo_constants');

var _photos = [];

PhotoStore.all = function () {
  return _photos.slice();
};

PhotoStore.find = function (id) {
  return _photos.slice().filter(function (photo) {
    return photo.id === parseInt(id);
  })[0];
};

PhotoStore.findUserPhotos = function (user_id) {
  return _photos.slice().filter(function (photo) {
    return photo.user_id === parseInt(user_id);
  });
};

PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PhotoConstants.ALL_PHOTOS_RECEIVED:
      resetPhotos(payload.photos);
      PhotoStore.__emitChange();
      break;
  }
};

var resetPhotos = function (photos) {
  _photos = photos;
};



window.PhotoStore = PhotoStore;

module.exports = PhotoStore;