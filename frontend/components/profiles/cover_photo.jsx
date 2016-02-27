var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var hashHistory = require('react-router').hashHistory;

var CoverPhoto = React.createClass({
  getInitialState: function(){
    return {
      profileUser: this.props.user
    };
  },

  render: function() {

    var backgroundImage = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_2000,h_350,c_fill/" + this.state.profileUser.cover_photo + "')" };
    debugger
    return (
      <div className="user-cover" style={backgroundImage}>
          <div className="user-info">
            <h1><span className="profile-username">{this.props.user.username}</span>

            </h1>
            {this.props.user.username} <i className="fa fa-bolt"
                                           id="user-info-bullet"></i><span> </span>

            Joined {this.props.user.created_at}
          </div>
        </div>
    );
  }
});

module.exports = CoverPhoto;

