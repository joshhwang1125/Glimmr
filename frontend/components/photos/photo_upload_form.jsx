var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    CloudinaryUpload = require('./cloudinary_upload.jsx'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    History = require('react-router').History;

var PhotoUploadForm = React.createClass({
  mixins: [History, LinkedStateMixin],
  getInitialState: function () {
    return {
      title: "",
      description: "",
      photoUrl: "",
      flash: ""
    }
  },
  setPhotoUrl: function (photo) {
    this.setState({ photoUrl: photo[0].path });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var photoParams = {
      photo: {
        user_id: currentUserId,
        title: this.state.title,
        description: this.state.description,
        photo_url: this.state.photoUrl
      }
    };

    ApiUtil.createPhoto(photoParams);
    this.history.push("/");
    //TODO: dont go to root page
  },
  render: function () {
    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/";
    var photoOptions = "w_300,c_scale/";
    var uploadPhotoButton;
    //TODO: make the preview toggled

    if (this.state.photoUrl.length > 1) {
      uploadPhotoButton = (
        <div className="upload-preview">
          <img src={url + photoOptions + this.state.photoUrl}></img>
        </div>
      )
    } else {
      uploadPhotoButton = (
        <CloudinaryUpload setPhotoUrl={this.setPhotoUrl}/>
      )
    };

    return (
      <div className="photo-upload-form">
        <form onSubmit={this.handleSubmit} id="photo-upload-form">

          <div className="photo-title">
            <input type="text"
                   valueLink={this.linkState("title")}
                   placeholder="Title"
                   id="title"
                   className="validate[required,custom[onlyLetter],
                   length[0,100]] feedback-input" />
          </div>

          <br/><br/>

          <div className="photo-description">
            <textarea name="text"
                      placeholder="Description"
                      rows="5"
                      valueLink={this.linkState("description")}
                      placeholder="Description"
                      className="validate[required,length[6,300]] feedback-input" />
          </div>

          <br/><br/>{ uploadPhotoButton }<br/><br/>

          <div class="submit">
            <input type="submit" value="Send" className="button-blue"/>
            <div class="ease"></div>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = PhotoUploadForm;