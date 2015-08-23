var React = require('react');

var Notes = React.createClass({
	render: function(){
		return (
			<div> 
				Username: {this.props.username}
				<br/>
				Bio: {this.props.bio}
			</div>
		);
	}
});

module.exports = Notes;