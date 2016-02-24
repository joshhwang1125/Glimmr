var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    PhotoStore = new Store(AppDispatcher),
    PhotoConstants = require('../constants/photo_constants');

var _photos = [];

PhotoStore.all = function () {
  return _photos.slice();
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