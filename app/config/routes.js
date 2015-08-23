// Use this to set which view to load against which url
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// Load Main view on url '/''
module.exports = (
	<Route name="app" path="/" handler={Main}>
		// More routes can be added here ...

		// If none of the availble routes match the path
		// show the default route
		<DefaultRoute handler={Home} />
	</Route>
);