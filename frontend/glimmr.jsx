var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app.jsx'),
    IndexRoute = require('react-router').IndexRoute,
    PhotoUploadForm = require('./components/photos/photo_upload_form'),
    Feed = require('./components/ui/feed');

window.Dispatcher = require("./dispatcher/dispatcher");


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Feed} />
    <Route path="upload" component={PhotoUploadForm} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});