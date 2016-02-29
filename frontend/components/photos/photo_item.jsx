var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    hashHistory = require('react-router').hashHistory,
    FavoriteStore = require('../../stores/favorite_store'),
    SessionStore = require('../../stores/session_store');

var PhotoItem = React.createClass({

  getInitialState: function () {
    return {
      currentUser: SessionStore.user(),
      favoriteId: FavoriteStore.currentUserFavorite(this.props.photo.id)

      // FavoriteStore.currentUserFavorite(this.props.photo.id)
    };
  },
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);
  },
  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.favoriteListener.remove();
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },

  _onFavoritesChange: function () {
    this.setState({ favoriteId: FavoriteStore.currentUserFavorite(this.props.photo.id) });
  },

  handleClick: function() {
    hashHistory.push("/photos/" + this.props.photo.id);
  },

  handleLike: function (e) {
    e.preventDefault();
    e.stopPropagation();

    var favoriteParams = {
      favorite: {
        user_id: currentUserId,
        photo_id: this.props.photo.id
      }
    };

    ApiUtil.createFavorite(favoriteParams);
  },

  handleUnlike: function (e) {
    e.preventDefault();
    e.stopPropagation();

    ApiUtil.deleteFavorite(this.state.favoriteId);
  },

  render: function () {

    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/";
    var photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";
    var favoriteButton = "";

    if (this.state.favoriteId === undefined) {
      favoriteButton = (<span className="fa fa-heart-o fa-fw heart-blank" onClick={this.handleLike}></span>)
    } else {
      favoriteButton = (<span className="fa fa-heart fa-fw heart-red" onClick={this.handleUnlike}></span>)
    };


    return (
      <div className="photo-thumb nd-wrap nd-style-6" onClick={this.handleClick}>
        <img src={url + photoOptions + this.props.photo.photo_url}></img>
        <div className="nd-content">
          <div className="nd-content_inner">
            <div className="nd-content_inner1">
              <h3 className="nd-title"><span>{this.props.photo.title}</span></h3>
              <span className="nd-icon">
                <span className="fa fa-comment-o fa-fw comment-red"></span>
              </span>
              <span className="nd-icon">
                {favoriteButton}
              </span>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PhotoItem;

