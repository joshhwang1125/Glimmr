var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoStore = require('../../stores/photo_store'),
    SessionStore = require('../../stores/session_store'),
    FavoriteStore = require('../../stores/favorite_store'),
    CommentStore = require('../../stores/comment_store'),
    PhotoUploader = require('./photo_uploader'),
    CommentSection = require('./comment_section'),
    hashHistory = require('react-router').hashHistory;

var PhotoShow = React.createClass({

  getInitialState: function () {
    // TODO make default currentPhoto ?
    return {
      currentPhoto: {},
      currentUser: SessionStore.user(),
      favoriteId: FavoriteStore.currentUserFavorite(parseInt(this.props.params.photoId)),
      currentComments: []
    };
  },

  componentDidMount: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);
    this.commentListener = CommentStore.addListener(this._onCommentsChange);

    ApiUtil.fetchUserFavorites(currentUserId);
    ApiUtil.fetchFollows(currentUserId);
    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchAllComments();
    ApiUtil.fetchCurrentUser(currentUserId);

    //TODO: should this check to see if logged in?
  },

  componentWillUnmount: function () {
    this.photoListener.remove();
    this.sessionListener.remove();
    this.favoriteListener.remove();
    this.commentListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    // ApiUtil.fetchPhotoComments(nextProps.params.photoId);
    this.setState({ currentPhoto: PhotoStore.find(newProps.params.photoId) });
    this.setState({ favoriteId: FavoriteStore.currentUserFavorite(parseInt(newProps.params.photoId)) });
    // this.setState({ favoriteCount: PhotoStore.fetchFavoriteCount(newProps.params.photoId )});
  },

  _onPhotosChange: function () {
    this.setState({ currentPhoto: PhotoStore.find(this.props.params.photoId) });
  },

  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },

  _onFavoritesChange: function () {
    this.setState({ favoriteId: FavoriteStore.currentUserFavorite(parseInt(this.props.params.photoId)) });
  },

  _onCommentsChange: function () {
    this.setState({ currentComments: CommentStore.all() });
  },

  handleBack: function (e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  handleNextClick: function (e) {
    //TODO cannot prevent default
    e.preventDefault();
    var nextPhoto = PhotoStore.next(this.state.currentPhoto);
    hashHistory.push("/photos/" + nextPhoto.id);
  },

  handlePrevClick: function (e) {
    e.preventDefault();
    var prevPhoto = PhotoStore.prev(this.state.currentPhoto);
    hashHistory.push("/photos/" + prevPhoto.id);
  },

  handleDeleteClick: function (e) {
    e.preventDefault();
    var confirmation = confirm("Are you sure you want to delete this photo?");
    if (confirmation === true) {
      ApiUtil.deletePhoto(this.state.currentPhoto.id);
      hashHistory.push("/");
    }
    //TODO: callback to rerender index??
  },

  handleLike: function (e) {

    e.preventDefault();
    e.stopPropagation();

    var favoriteParams = {
      favorite: {
        user_id: currentUserId,
        photo_id: this.props.params.photoId
      }
    };

    ApiUtil.createFavorite(favoriteParams);
  },

  handleUnlike: function (e) {
    e.preventDefault();
    e.stopPropagation();

    ApiUtil.deleteFavorite(this.state.favoriteId);
  },

  handleBack: function (e) {
    e.preventDefault();
    e.stopPropagation();

    hashHistory.push("/");

    //TODO: can i go back to the previous page i was on?
  },



  render: function () {

    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/";
    var backgroundImage;
    var trashcan;
    var favoriteButton;
    var uploader;
    var commentSection;


    //TODO: finish back button
    var backButton = (<span className="like-button fa fa-heart fa-4x heart-blank" onClick={this.handleLike}></span>);

    if (this.state.favoriteId === undefined) {
      favoriteButton = (<span className="like-button fa fa-heart fa-4x heart-blank" onClick={this.handleLike}></span>)
    } else {
      favoriteButton = (<span className="like-button fa fa-heart fa-4x heart-red" onClick={this.handleUnlike}></span>)
    };

    if (this.state.currentPhoto.user_id === currentUserId) {
      trashcan = (<div className="delete-button fa fa-trash fa-4x" onClick={this.handleDeleteClick}></div>)
    } else { trashcan = <div></div>};

    if (this.state.currentPhoto.user_id === undefined) {
      uploader = (<div className="test"></div>);
      commentSection = (<div className="test"></div>)
    } else { uploader = <PhotoUploader key={this.state.currentPhoto.user_id}
                               uploader={this.state.currentPhoto.user}
                               photo = {this.state.currentPhoto}/>;
              backgroundImage = {backgroundImage: "url('" + url + this.state.currentPhoto.photo_url + "')"};
              commentSection = <CommentSection key={this.state.currentPhoto.id + 100}
                               photo={this.state.currentPhoto}/>;
            };


    return (
      <div >
        <div className="photo-splash" style={backgroundImage}>
            <div className="delete-container">
              <span className="back-button fa fa-arrow-left fa-4x" onClick={this.handleBack}></span>
              <label htmlFor="img-5" className="prev-next prev" onClick={this.handlePrevClick}>‹</label>
            </div>
            <div className="delete-container">
              <label htmlFor="img-1" className="prev-next next" onClick={this.handleNextClick}>›</label>

              {favoriteButton}
              {trashcan}
            </div>

        </div>

        <div className="photo-info">
          {uploader}
          {commentSection}
        </div>
      </div>
    );
  }
});

module.exports = PhotoShow;
