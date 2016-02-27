var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    hashHistory = require('react-router').hashHistory,
    FavoriteStore = require('../../stores/favorite_store');

var PhotoItem = React.createClass({

  getInitialState: function () {
    return {
      favorited: false
    };
  },

  handleClick: function() {
    hashHistory.push("/photos/" + this.props.photo.id);
  },

  handleFavoriteClick: function () {

  },

  render: function () {
    var url = "http://res.cloudinary.com/dcqvnxgiy/image/upload/";
    var photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";
    var favoriteButton = "";

    if (this.state.favorited) {
      favoriteButton = (<span className="fa fa-star fa-fw"></span>)
    } else {
      favoriteButton = (<span className="fa fa-star-o fa-fw"></span>)
    };


    return (
      <div className="photo-thumb nd-wrap nd-style-6" onClick={this.handleClick}>
        <img src={url + photoOptions + this.props.photo.photo_url}></img>
        <div className="nd-content">
          <div className="nd-content_inner">
            <div className="nd-content_inner1">
              <h3 className="nd-title"><span>{this.props.photo.title}</span></h3>
              <span className="nd-icon">
                <span className="fa fa-comment fa-fw"></span>
              </span>
              <span className="nd-icon">
                {favoriteButton}
              </span>
              <span className="nd-icon">
                <span className="fa fa-share fa-fw"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PhotoItem;

