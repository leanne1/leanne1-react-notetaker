var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			// className because class is a reserved word in ES
			<h2 className="text-center">
				Search by Github Username Above
			</h2>	
		)
	}
});

module.exports = Home;