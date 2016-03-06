var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FollowStore = new Store(AppDispatcher),
    FollowConstants = require('../constants/follow_constants');

var _follows = [];

FollowStore.all = function () {
  return _follows.slice();
};

FollowStore.currentUserFollow = function (followeeId) {
  for (var i = 0; i < _follows.length; i++) {
    if (_follows[i].followee_id === followeeId && _follows[i].follower_id === currentUserId){
      return _follows[i].id;
    }
  }
};


FollowStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FollowConstants.All_FOLLOWS_RECEIVED:
      resetFollows(payload.follows);

      FollowStore.__emitChange();
      break;
    case FollowConstants.NEW_FOLLOW_RECEIVED:

      addFollow(payload.follow);
      FollowStore.__emitChange();
      break;
    case FollowConstants.FOLLOW_DELETED:

      deleteFollow(payload.follow);
      FollowStore.__emitChange();
      break;
  }
};

var resetFollows = function (follows) {
  _follows = follows;
};

var addFollow = function (follow) {
  _follows.push(follow);
};

var deleteFollow = function (follow) {
  for (var i = 0; i < _follows.length; i++) {
    if (_follows[i].id === follow.id){
      _follows.splice(i, 1);
    }
  }
};



// window.FollowStore = FollowStore;

module.exports = FollowStore;