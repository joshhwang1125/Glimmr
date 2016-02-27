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
      url: "api/photos" + photoId,
      success: function(photo){
        ApiActions.receiveAllPhotos([photo]);
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