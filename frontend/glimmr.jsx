var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app.jsx'),
    IndexRoute = require('react-router').IndexRoute,
    PhotoUploadForm = require('./components/photos/photo_upload_form'),
    PhotoShow = require('./components/photos/photo_show'),
    ProfileShow = require('./components/profiles/profile_show'),
    UserPhotos = require('./components/profiles/user_photos'),
    Favorites = require('./components/profiles/favorites'),
    Followees = require('./components/profiles/followees'),
    Info = require('./components/profiles/info'),
    Feed = require('./components/ui/feed');

window.Dispatcher = require("./dispatcher/dispatcher");


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Feed} />
    <Route path="photos/:photoId" component={PhotoShow} />
    <Route path="upload" component={PhotoUploadForm} />
    <Route path="users/:userId" component={ProfileShow}>
      <Route path="userPhotos" component={UserPhotos} />
      <Route path="favorites" component={Favorites} />
      <Route path="followees" component={Followees} />
      <Route path="info" component={Info} />
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});