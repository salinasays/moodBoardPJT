import React from 'react';
import $ from 'jquery';

var Signup = React.createClass({
	getInitialState: function(){
		return {email: '', firstName: '', lastName: '', password: null}
	},
	handleChange: function(input, event){
		if(input === "email"){
			this.setState({email: event.target.value})
		} else if (input === "password"){
			this.setState({password: event.target.value})
		} else if (input === "firstName"){
			this.setState({firstName: event.target.value})
		} else if (input === "lastName"){
			this.setState({lastName: event.target.value})
		}
	},
	acctSignUp: function(event){
		event.preventDefault()
		$.ajax({
			url: '/api/users',
			type: 'POST',
			data: this.state
		})
	},
	render: function(){
		return(
			<div>
				<hr />
				<h2 className="title">_sign up</h2>
				
				<div className="form">

				<h3>Join The Moodboard PJT</h3>
				<br />

					<form onSubmit={this.acctSignUp}>

						<input
						className="input"
						type="text"
						placeholder="first name"
						onChange={this.handleChange.bind(this, "firstName")}
						/>

						<input
						className="input"
						type="text"
						placeholder="last name"
						onChange={this.handleChange.bind(this, "lastName")}
						/>

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
						>Create Account</button>
					</form>
				</div>

			</div>
		)
	}
})

export default Signup;