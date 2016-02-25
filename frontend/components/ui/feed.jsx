var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ApiUtil = require('../../util/api_util.js');
var CloudinaryUpload = require('../photos/cloudinary_upload');
var PhotoUploadForm = require('../photos/photo_upload_form');
var PhotoItem = require('../photos/photo_item');

var Feed = React.createClass({
  getInitialState: function () {
    return { photos: PhotoStore.all() };
  },

  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    ApiUtil.fetchAllPhotos();
  },

  compomentWillUnmount: function () {
    this.photoListener.remove();
  },

  render: function () {
    return (
      <div className="feed-grid">

          { this.state.photos.map(function (photo) {
            return <PhotoItem key={photo.id}
                              photo={photo}
                              size={300}/>
            })
          }


      </div>
    );
  }
});

module.exports = Feed;