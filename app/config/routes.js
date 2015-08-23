// Use this to set which view to load against which url path
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route; 

// Load Main view on url '/''
module.exports = (
	<Route name="app" path="/" handler={Main}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		// If none of the availble routes match the path
		// show the default route
		<DefaultRoute handler={Home} />
	</Route>
);