import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

// App entry point / bootstrap
// Root is a placeholder for the view to load
// Whenever the route changes, we pass in the view to this method
// and react will render whichever route [Root] is passed in
Router.run(routes, (Root, state) => {
	React.render(<Root {...state} />, document.getElementById('app'));
});