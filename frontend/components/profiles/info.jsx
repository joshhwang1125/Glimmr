var React = require('react');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user_store');


var Info = React.createClass({
  getInitialState: function () {
    return { profileUser: UserStore.user() };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUsersChange);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _onUsersChange: function () {
    this.setState({ profileUser: UserStore.user() });
  },

  render: function () {

    return (
      <div className="profile-summary-container">
        <div className="profile-summary">
          <div class="centered">
            <h1>Story</h1>
            <div>{this.state.profileUser.summary}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Info;