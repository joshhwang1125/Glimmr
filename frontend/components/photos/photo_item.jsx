var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    History = require('react-router').History;

var PhotoItem = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      favorited: false
    };
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

