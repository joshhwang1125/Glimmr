var SessionActions = require('../actions/session_actions.js');

var SessionsUtil = {

  logout: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (uselessObject) {
        // SessionActions.logoutCurrentUser();
        window.currentUserId = null;
        window.location.replace("home");
      }
    });
  }
};

module.exports = SessionsUtil;
