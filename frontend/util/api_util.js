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
};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;