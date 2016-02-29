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

  componentWillReceiveProps: function (newProps) {
    // ApiUtil.fetchPhotoComments(nextProps.params.photoId);
    this.setState({ currentPhoto: PhotoStore.find(newProps.params.photoId) });
    // this.setState({ favorited: FavoriteStore.isFavorited(newProps.params.photoId) });
    // this.setState({ favoriteCount: PhotoStore.fetchFavoriteCount(newProps.params.photoId )});
  },

  _onPhotosChange: function () {
    this.setState({ currentPhoto: PhotoStore.find(this.props.params.photoId) });
  },

  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },

  handleNextClick: function (e) {
    //TODO cannot prevent default
    e.preventDefault();
    var nextPhoto = PhotoStore.next(this.state.currentPhoto)
    hashHistory.push("/photos/" + nextPhoto.id);
  },

  handlePrevClick: function (e) {
    e.preventDefault();
    var prevPhoto = PhotoStore.prev(this.state.currentPhoto)
    hashHistory.push("/photos/" + prevPhoto.id);
  },



  render: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/";
    var backgroundImage = {backgroundImage: "url('" + url + this.state.currentPhoto.photo_url + "')"}

    return (
      <div >
        <div className="photo-splash" style={backgroundImage}>
            <label for="img-5" className="prev-next prev" onClick={this.handleNextClick}>‹</label>

            <label for="img-1" className="prev-next next" onClick={this.handlePrevClick}>›</label>

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
