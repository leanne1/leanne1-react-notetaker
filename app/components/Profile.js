import React from 'react';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
import Rebase from 're-base';

var base = Rebase.createClass('https://github-note-taker.firebaseio.com/');

class Profile extends React.Component {
	// mixins: [Router.State, ReactFireMixin],
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			bio: {},
			repos: []
		}
	}
	init() {
		// Rebase
		this.ref = base.bindToState(this.router.getCurrentParams().username, {
      		context: this,
      		asArray: true,
      		state: 'notes'
    	});
		// Make http request to Github API for data; Axios uses promise.all and returns 
    	// a promise
    	helpers.getGithubInfo(this.router.getCurrentParams().username)
			.then((dataObj) => {
				this.setState({
					bio: dataObj.bio,
					repos: dataObj.repos,
				});
			});
	}
	componentWillMount() {
		this.router = this.context.router;
	}
	// When the component mounts this callback is called
	componentDidMount() {
		// Binding between the local state of 'notes' and the 
		// database endpoint in the firebase database.
		// When database updates so will the local state of notes
		// because notes is listening for updates from childRef
		this.init();
	}
	componentWillReceiveProps() {
		base.removeBinding(this.ref);
		this.init();
	}
	// When the component unmounts this callback is called
	componentWillUnmount() {
		// Stop listening to database changes when componeent not mounted
		base.removeBinding(this.ref);
	}
	handleAddNote(newNote) {
		base.post(this.router.getCurrentParams().username, {
     		data: this.state.notes.concat([newNote])
    	});
	}
	render() {
		var username = this.router.getCurrentParams().username;
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
		        		addNote={this.handleAddNote.bind(this)}
		        		notes={this.state.notes} />
		        </div>
		    </div>
		);
	}
};

Profile.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default Profile;


