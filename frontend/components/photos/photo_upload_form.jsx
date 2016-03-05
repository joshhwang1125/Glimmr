var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    CloudinaryUpload = require('./cloudinary_upload.jsx'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    hashHistory = require('react-router').hashHistory;

var PhotoUploadForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      title: "",
      description: "",
      photoUrl: "",
      flash: ""
    }
  },
   componentDidMount: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
    hashHistory.push("/");
    //TODO: dont go to root page
  },
  render: function () {
    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/";
    var photoOptions = "w_350,c_scale/";
    var uploadPhotoButton;
    //TODO: make the preview toggled

    if (this.state.photoUrl.length > 1) {
      uploadPhotoButton = (
        <div className="upload-preview">
          <img className="preview-img" src={url + photoOptions + this.state.photoUrl}></img>
        </div>
      )
    } else {
      uploadPhotoButton = (
        <CloudinaryUpload setPhotoUrl={this.setPhotoUrl}/>
      )
    };

    return (
      <div className="form-container">
      <div id="form-main">
        <div id="form-div">
        <form onSubmit={this.handleSubmit} id="photo-upload-form">

          <p className="title">
            <input type="text"
                   valueLink={this.linkState("title")}
                   placeholder="Title"
                   id="title"
                   className="validate[required,custom[onlyLetter],
                   length[0,100]] feedback-input" />
          </p>

          <p className="description">
            <textarea name="text"
                      placeholder="Description"
                      rows="5"
                      valueLink={this.linkState("description")}
                      placeholder="Description"
                      className="validate[required,length[6,300]] feedback-input" />
          </p>

          <br/><br/>{ uploadPhotoButton }<br/><br/>

          <div className="submit">
            <input type="submit" value="Submit" id="button-blue"/>
            <div className="ease"></div>
          </div>

        </form>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = PhotoUploadForm;