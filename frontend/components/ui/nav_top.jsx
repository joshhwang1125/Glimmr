var React = require('react');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');
var Logo = require('./logo');
var Explore = require('./explore');
var CreateButton = require('./create');
var You = require('./you');
var Logout = require('./logout');
var hashHistory = require('react-router').hashHistory;

var NavTop = React.createClass({
  getInitialState: function(){
    return {
      currentUser: SessionStore.user()
    };
  },

  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.user() });
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onPhotosChange);
    ApiUtil.fetchCurrentUser(currentUserId);
  },

  compomentWillUnmount: function () {
    this.sessionListener.remove();
  },


  render: function() {
    var self = this;
    return (
      <header id="splashnav">
        <div className="inner">
          <Logo/>
          <nav className='navigation'>
            <ul>
              <Explore/>
              <CreateButton/>
              <You/>
              <Logout/>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = NavTop;