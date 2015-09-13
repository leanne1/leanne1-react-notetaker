// Use this to set which view to load against which url path
import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Router, Route, DefaultRoute } from 'react-router';

// Load Main view on url '/''
export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		// If none of the availble routes match the path
		// show the default route
		<DefaultRoute handler={Home} />
	</Route>
);