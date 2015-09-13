var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
	mixins: [Router.State, ReactFireMixin],
	getInitialState: function(){
		return {
			notes: [],
			bio: {},
			repos: []
		}
	},
	init: function () {
		var childRef = this.ref.child(this.getParams().username);
    	this.bindAsArray(childRef, 'notes');
		// Make http request to Github API for data; Axios uses promise.all and returns 
    	// a promise
    	helpers.getGithubInfo(this.getParams().username)
			.then(function(dataObj){
				this.setState({
					bio: dataObj.bio,
					repos: dataObj.repos,
				});
			}.bind(this));
	},
	// When the component mounts this callback is called
	componentDidMount: function(){
		// Binding between the local state of 'notes' and the 
		// database endpoint in the firebase database.
		// When database updates so will the local state of notes
		// because notes is listening for updates from childRef
		this.ref = new Firebase('https://leanne1-react-note.firebaseio.com');
		this.init();
	},
	componentWillReceiveProps: function() {
		this.unbind('notes');
		this.init();
	},
	// When the component unmounts this callback is called
	componentWillUnmount: function(){
		// Stop listening to database changes when componeent not mounted
		this.unbind('notes');
	},
	handleAddNote: function(newNote){
		this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
	},
	render: function(){
		var username = this.getParams().username;
		return (
			<div className="row">
        		<div className="col-md-4">
          			<UserProfile username={username} bio={this.state.bio}/>
		        </div>
		        <div className="col-md-4">
		        	<Repos username={username} repos={this.state.repos} />
		        </div>
		        <div className="col-md-4">
		        	<Notes 
		        		username={username} 
		        		addNote={this.handleAddNote}
		        		notes={this.state.notes} />
		        </div>
		    </div>
		);
	}
});

module.exports = Profile;