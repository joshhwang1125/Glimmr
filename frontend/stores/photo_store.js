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

PhotoStore.next = function (photo) {
  var photoPosition = _photos.indexOf(photo);

  if (photoPosition === (_photos.length - 1)){
    return photo; } else {
      return _photos[photoPosition + 1];
    }
};

PhotoStore.prev = function (photo) {
  var photoPosition = _photos.indexOf(photo);

  if (photoPosition === 0){
    return photo; } else {
      return _photos[photoPosition - 1];
    }
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
    case PhotoConstants.PHOTO_DELETED:
      // console.log(payload.photo);
      deletePhoto(payload.photo);
      PhotoStore.__emitChange();
      break;
  }
};

var deletePhoto = function (photo) {
  for (var i = 0; i < _photos.length; i++) {
    if (_photos[i].id === photo.id){
      _photos.splice(i, 1);
    }
  }
};

var resetPhotos = function (photos) {
  _photos = photos;
};



window.PhotoStore = PhotoStore;

module.exports = PhotoStore;