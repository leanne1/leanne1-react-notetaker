var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

// App entry point / bootstrap
// Root is a placeholder for the view to load
// Whenever the route changes, we pass in the view to this method
// and react will render whichever route [Root] is passed in
Router.run(routes, function(Root){
	React.render(<Root />, document.getElementById('app'));
});