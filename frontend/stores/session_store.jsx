var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    SessionStore = new Store(AppDispatcher),
    SessionConstants = require('../constants/session_constants');

var _currentUser = {};

var resetCurrentUser = function (currentUser) {
  _currentUser = currentUser;
};

SessionStore.user = function () {
  return _currentUser;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      resetCurrentUser(payload.user);
      SessionStore.__emitChange();
      break;
  }
};

window.SessionStore = SessionStore;

module.exports = SessionStore;
