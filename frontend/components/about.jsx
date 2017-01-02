import React from 'react';

var About = React.createClass({
	render: function(){
		return(
			<div>
				
				<h2 className="title">_about</h2>
				<br />

				<div className="pin">
				<img className="pin" src={require('../images/pushPin.png')} />
				</div>

				<h2 className="heading">_Welcome to The MoodBoard PJT</h2>

				<div className="about">
				<p>
					The intention is to build a simple platform for creatives to utilize as a source of visual inspiration in pursuit of their own design. This project was conceived by Salina Fu. She is based in New York City. Click on the ribbon to find out more.
				</p>

				<p>To contact Salina, please email moodBoard.PJT@gmail.com.</p>
				</div>
				

			</div>
		)
	}
})

export default About;