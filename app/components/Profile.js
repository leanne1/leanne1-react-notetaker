var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
	mixins: [Router.State, ReactFireMixin],
	getInitialState: function(){
		return {
			notes: [],
			bio: { name: 'Leanne' },
			repos: [1,2,3]
		}
	},
	// When the component mounts this callback is called
	componentDidMount: function(){
		// Binding between the local state of 'notes' and the 
		// database endpoint in the firebase database.
		// When database updates so will the local state of notes
		// because notes is listening for updates from childRef
		this.ref = new Firebase('https://leanne1-react-note.firebaseio.com');
    	var childRef = this.ref.child(this.getParams().username);
    	this.bindAsArray(childRef, 'notes');
	},
	// When the component unmounts this callback is called
	componentWillUnmount: function(){
		// Stop listening to database changes when componeent not mounted
		this.unbind('notes');
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
		        	<Notes username={username} notes={this.state.notes} />
		        </div>
		    </div>
		);
	}
});

module.exports = Profile;