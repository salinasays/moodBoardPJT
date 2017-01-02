import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';

var Login = React.createClass({
	getInitialState: function(){
		return {email: '', password: null}
	},
	handleChange: function(input, event){
		if(input === "email"){
			this.setState({email: event.target.value})
		} else if (input === "password"){
			this.setState({password: event.target.value})
		}
	},
	userLogin: function(event){
		event.preventDefault()
		$.ajax({
			method: 'POST',
			url: '/api/login/',
			data: this.state
		})
		.done((data) => {
			console.log("Received User Data", data);
			browserHistory.push('/account')
		})
	},
	render: function(){
		return(
			<div>
			
				<h2 className="title">_login</h2>
				
				<div className="form">

				<h3>Welcome back!</h3>
				<br />

					<form onSubmit={this.userLogin}>
						<input
						className="input"
						type="text"
						placeholder="email"
						onChange={this.handleChange.bind(this, "email")}
						/>

						<br />

						<input
						className="input"
						type="text"
						placeholder="password"
						onChange={this.handleChange.bind(this, "password")}
						/>

						<br />
						<br />

						<button
						className="button"
						type="submit"
						>Sign In</button>
					</form>
				</div>

				<p className="about">Don't have an account? <Link to={'/signup'}>Sign Up!</Link></p>

			</div>
		)
	}
})

export default Login;