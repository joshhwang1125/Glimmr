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
      <div>
        <button className="button-blue"
                onClick={this.uploadPhoto}>Upload Image</button>
      </div>
    );
  }
});

module.exports = CloudinaryUpload;