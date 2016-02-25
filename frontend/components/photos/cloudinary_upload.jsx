var React = require("react");

var CloudinaryUpload = React.createClass({
  uploadPhoto: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY, function (error, photo) {
      if (!error)
        this.props.setPhotoUrl(photo);
    }.bind(this));
  },
  render: function () {
    return (

      <div className="cloudinary">
        <button id="button-blue"
          onClick={this.uploadPhoto}>Upload Image</button>
        <div className="ease"></div>
      </div>

    );
  }
});

module.exports = CloudinaryUpload;