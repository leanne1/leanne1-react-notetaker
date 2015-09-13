import React from 'react';

class SearchGithub extends React.Component {
	handleSubmit(){
		var router = this.context.router;
		var username = this.refs.username.getDOMNode().value;
		this.refs.username.getDOMNode().value = '';
		router.transitionTo('profile', {username: username});
	}
	render() {
		return (
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group col-sm-7">
						<input ref="username" type="text" placeholder="Search Github" className="form-control"/>
					</div>	
					<div className="form-group col-sm-5">
						<span className="">
							<button type="submit" className="btn btn-primary btn-block">
								Search Github
							</button>
						</span>
					</div>
				</form>	
			</div>
		);
	}
};

SearchGithub.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default SearchGithub;