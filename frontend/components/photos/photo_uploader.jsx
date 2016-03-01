var React = require('react');

var PhotoUploader = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
  },
  render: function () {
    var followeePic;

    uploaderPic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_155,h_155,c_fill/" + this.props.uploader.profile_pic + "')" };
    return (
      <div className="uploader-container">

          <div className="uploader-pic" style={uploaderPic} onClick={this.handleClick}></div>
          <span className="uploader-username">{this.props.uploader.username}</span>
          <span className="uploader-title">{this.props.photo.title}</span>
          <span className="uploader-description">{this.props.photo.description}</span>

      </div>
    );
  }
});

module.exports = PhotoUploader;
