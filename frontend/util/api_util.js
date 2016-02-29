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
  createPhoto: function (photoParams) {
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      dataType: 'json',
      data: photoParams,
      success: function (photo) {
        ApiActions.receiveAllPhotos([photo]);
      }
    })
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
    })
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
    })
  },
  fetchUser: function (UserId) {
    $.ajax({
      url: 'api/users/' + UserId,
      type: 'GET',
      success: function (user) {
        ApiActions.receiveUser(user);
      }
    })
  },
};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;