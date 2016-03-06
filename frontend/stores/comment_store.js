var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    CommentStore = new Store(AppDispatcher),
    CommentConstants = require('../constants/comment_constants');

var _comments = [];

CommentStore.all = function () {
  return _comments.slice();
};

CommentStore.currentPhotoComments = function (photoId) {
  var photoComments = [];
  for (var i = 0; i < _comments.length; i++) {
    if (_comments[i].photo_id === photoId){
      photoComments.push(_comments[i]);
    }
  }
  return photoComments;
};

CommentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CommentConstants.ALL_COMMENTS_RECEIVED:
      resetComments(payload.comments);

      CommentStore.__emitChange();
      break;
    case CommentConstants.NEW_COMMENT_RECEIVED:

      addComment(payload.comment);
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_DELETED:

      deleteFavorite(payload.comment);
      CommentStore.__emitChange();
      break;
  }
};

var resetComments = function (comments) {
  _comments = comments;
};

var addComment = function (comment) {
  _comments.push(comment);
};

var deleteFavorite = function (comment) {
  for (var i = 0; i < _comments.length; i++) {
    if (_comments[i].id === comment.id){
      _comments.splice(i, 1);
    }
  }
};



// window.CommentStore = CommentStore;

module.exports = CommentStore;