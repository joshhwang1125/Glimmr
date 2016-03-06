var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    UserStore = new Store(AppDispatcher),
    UserConstants = require('../constants/user_constants');

var _user = {};

var resetUser = function (user) {
  _user = user;
};

UserStore.user = function () {
  return _user;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);

      UserStore.__emitChange();
      break;
  }
};

// window.UserStore = UserStore;

module.exports = UserStore;
