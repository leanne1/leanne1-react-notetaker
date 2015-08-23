var React = require('react'); // webpack?

/* 
Ceates a React component
Takes several properties:

* render: what the UI looks like for this component

*/	
var Main = React.createClass({
	render: function(){
		return (
			// can only return one element
			// but can nest other react components e.g. <Children />
			// these would have their own render method that would get run
			// when <Main /> is rendered
			<div>
				Hello World
			</div>
		)
	}
});

// Where to render UI to
React.render(<Main />, document.getElementById('app'));