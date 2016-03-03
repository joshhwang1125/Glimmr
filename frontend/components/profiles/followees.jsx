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

  render: function () {
    var profileUsersFollowees;

    if (this.state.profileUser === undefined || this.state.profileUser.followees === undefined){
      profileUsersFollowees = [];
    } else {
      profileUsersFollowees = this.state.profileUser.followees;
      // console.log(profileUsersFollowees);

    };

    return (
      <div className="follow-grid">
        {profileUsersFollowees.map(function (followee) {
          return <FolloweeItem key={followee.id}
                               followee={followee}/>
          })
        }
      </div>
    );
  }
});

module.exports = Followees;