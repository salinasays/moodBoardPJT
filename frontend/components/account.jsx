import React from 'react';
import $ from 'jquery';

var Account = React.createClass({
	getInitialState: function(){
		return {firstName: "", lastName: "", email: "", boards: null}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/users/id',
			type: 'GET',
			data: this.state
		})
		.then((user) => {
			this.setState({firstName: user.firstName, lastName: user.lastName, email: user.email})

			$.ajax({
				url: '/api/boards',
				type: 'GET',
				data: this.state
			})
			.then((board) => {
				console.log(board)
				this.setState({boards: board})
			})
		})
	},
	render: function(){
		return(
			<div>
				<h2 className="title">_your account</h2>
				<br /> <br />
				<h3 className="boards">Welcome back, {this.state.firstName ? this.state.firstName : null}</h3>

				<p className="about">Name: {this.state.firstName} {this.state.lastName}</p>

				<p className="about">Email: {this.state.email}</p>

				<hr className="divider" />

				<h3 className="boards">Your Boards</h3>

				<center><ul className="list">
					{!this.state.boards? null : this.state.boards.map((val, idx) => {

						let boardTitle=val.title

						return (
							<li key={idx}>{boardTitle}</li>
						)
					})}
				</ul></center>

				<br />
				<br />

				<center><button
				className="logout"
				type="submit"
				>Log Out</button></center>

			</div>
		)
	}
})

export default Account;