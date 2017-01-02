import React from 'react';

var Home = React.createClass({
	render: function () {
		return (
			<div>
				
				<h2 className="title">_hello, there!</h2>
				
				<img className="welcome" src={require('../images/home.jpg')} />
			</div>
		)
	}
})

export default Home;