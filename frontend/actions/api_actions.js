var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var SessionConstants = require('../constants/session_constants');

var ApiActions = {
  receiveAllPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.ALL_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveCurrentUser: function (user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      user: user
    });
  }
};

window.ApiActions = ApiActions;
module.exports = ApiActions;