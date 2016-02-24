var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app.jsx'),
    IndexRoute = require('react-router').IndexRoute,
    Feed = require('./components/ui/feed');

window.Dispatcher = require("./dispatcher/Dispatcher");


var routes = (
  <Route path="/" component={App}>
   <Route path="/photos" component={Feed} />

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});