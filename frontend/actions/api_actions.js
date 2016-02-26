var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var SessionConstants = require('../constants/session_constants');

var ApiActions = {
  receiveAllPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.ALL_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      user: user
    });
  }
};

window.ApiActions = ApiActions;
module.exports = ApiActions;