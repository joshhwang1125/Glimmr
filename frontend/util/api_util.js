var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchAllPhotos: function(){
    $.ajax({
      url: "api/photos",
      success: function(photos){
        ApiActions.receiveAllPhotos(photos);
      }
    });
  },
  fetchSinglePhoto: function(photoId){
    $.ajax({
      url: "api/photos/" + photoId,
      success: function(photo){
        ApiActions.receiveAllPhotos([photo]);
      }
    });
  },
  fetchUserPhotos: function(userId){
    $.ajax({
      url: 'api/photos',
      data: { currentUserId: userId },
      success: function(photos){
        ApiActions.receiveAllPhotos(photos);
      }
    });
  },
  fetchAllComments: function(){
    $.ajax({
      url: "api/comments",
      success: function(comments){
        ApiActions.receiveAllComments(comments);
      }
    });
  },
  fetchPhotoComments: function(photoId){
    $.ajax({
      url: 'api/comments',
      data: { photoId: photoId },
      success: function(comments){
        ApiActions.receiveAllComments(comments);
      }
    });
  },
  createComment: function(commentParams){

    $.ajax({
      url: 'api/comments',
      type: 'POST',
      dataType: 'json',
      data: commentParams,
      success: function(comment){
        ApiActions.receiveNewComment(comment);
      }
    });
  },
  deleteComment: function(commentId){
    $.ajax({
      url: 'api/comments/' + commentId,
      type: 'DELETE',
      dataType: 'json',
      success: function(comment){

        ApiActions.removeComment(comment);
      }
    });
  },
  fetchUserFavorites: function(userId){
    $.ajax({
      url: 'api/favorites',
      data: { UserId: userId },
      success: function(favorites){
        ApiActions.receiveAllFavorites(favorites);
      }
    });
  },
  createFavorite: function(favoriteParams){

    $.ajax({
      url: 'api/favorites',
      type: 'POST',
      dataType: 'json',
      data: favoriteParams,
      success: function(favorite){
        ApiActions.receiveNewFavorite(favorite);
      }
    });
  },
  deleteFavorite: function(favoriteId){
    $.ajax({
      url: 'api/favorites/' + favoriteId,
      type: 'DELETE',
      dataType: 'json',
      success: function(favorite){

        ApiActions.removeFavorite(favorite);
      }
    });
  },
  fetchFollows: function(followerId){
    $.ajax({
      url: 'api/follows',
      data: { followerId: followerId },
      success: function(follows){
        ApiActions.receiveAllFollows(follows);
      }
    });
  },
  createFollow: function(followParams){

    $.ajax({
      url: 'api/follows',
      type: 'POST',
      dataType: 'json',
      data: followParams,
      success: function(follow){
        ApiActions.receiveNewFollow(follow);
      }
    });
  },
  deleteFollow: function(followId){
    $.ajax({
      url: 'api/follows/' + followId,
      type: 'DELETE',
      dataType: 'json',
      success: function(follow){

        ApiActions.removeFollow(follow);
      }
    });
  },
  createPhoto: function (photoParams) {
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      dataType: 'json',
      data: photoParams,
      success: function (photo) {
        ApiActions.receiveAllPhotos([photo]);
      }
    });
  },
  editPhoto: function (photoParams) {
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      dataType: 'json',
      data: photoParams,
      success: function (photo) {
        ApiActions.receiveAllPhotos([photo]);
      }
    });
  },
  deletePhoto: function(photoId){

    $.ajax({
      url: 'api/photos/' + photoId,
      type: 'DELETE',
      dataType: 'json',
      success: function(photo){
        ApiActions.removePhoto(photo);
      }
    });
  },
  fetchCurrentUser: function (currentUserId) {
    $.ajax({
      url: 'api/users/' + currentUserId,
      type: 'GET',
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      }
    });
  },
  fetchUser: function (UserId) {
    $.ajax({
      url: 'api/users/' + UserId,
      type: 'GET',
      success: function (user) {
        ApiActions.receiveUser(user);
      }
    });
  },
};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;