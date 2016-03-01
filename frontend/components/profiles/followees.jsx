var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session_store');
var UserStore = require('../../stores/user_store');
var FollowStore = require('../../stores/follow_store');
var FolloweeItem = require('./followee_item');
var hashHistory = require('react-router').hashHistory;


var Followees = React.createClass({
 getInitialState: function () {
    return { profileUser: UserStore.user(),
    };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUsersChange);
    ApiUtil.fetchUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },


  _onUsersChange: function () {
    this.setState({ profileUser: UserStore.user() });
  },

  handleClick: function (e) {
    e.preventDefault();
    hashHistory.push("/users/1/userPhotos");
    // TODO: set this to actually go to user page
  },

  render: function () {
    var profileUsersFollowees;

    if (this.state.profileUser === undefined){
      profileUsersFollowees = "loading";
    } else {

      profileUsersFollowees = this.state.profileUser.followees;
      console.log(profileUsersFollowees);
      // followeePic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_125,h_125,c_fill/" + this.state.profileUser.profile_pic + "')" };
    };

    return (
      <div className="follow-grid">
        {profileUsersFollowees.map(function (followee) {
          return followee.id
          })
        }
      </div>
    );
  }
});

module.exports = Followees;