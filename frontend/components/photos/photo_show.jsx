var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoStore = require('../../stores/photo_store'),
    SessionStore = require('../../stores/session_store'),
    hashHistory = require('react-router').hashHistory;

var PhotoShow = React.createClass({

  getInitialState: function () {
    return {
      currentPhoto: {},
      currentUser: SessionStore.user()
    };
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);

    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchCurrentUser(currentUserId);
    //TODO: should this check to see if logged in?
  },

  componentWillUnmount: function () {
    this.photoListener.remove();
    this.sessionListener.remove();
  },

  _onPhotosChange: function () {
    this.setState({ currentPhoto: PhotoStore.find(this.props.params.photoId) });
  },

  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },



  render: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/w_700,h_700,c_fill/";

    return (
      <div >
        <div className="photo-splash">
            <img src={url + this.state.currentPhoto.photo_url}></img>
        </div>
        <div className="photo-info">
          {"Uploader: "}
          <br/>
          {"Title: " + this.state.currentPhoto.title}
          <br/>
          {"Description: " + this.state.currentPhoto.description}
        </div>
      </div>
    );
  }
});

module.exports = PhotoShow;
