var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ApiUtil = require('../../util/api_util.js');

var Feed = React.createClass({
  getInitialState: function () {
    return { photos: PhotoStore.all() };
  },

  _onChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onChange);
    ApiUtil.fetchAllPhotos();
  },

  compomentWillUnmount: function () {
    this.photoListener.remove();
  },

  render: function () {
    return (
      <div>
        { this.state.photos.map(function (photo) {
          return <div key={photo.id}> {photo.description} </div>
          })
        }
      </div>
    );
  }
});

module.exports = Feed;