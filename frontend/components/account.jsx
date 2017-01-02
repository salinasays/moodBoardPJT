import React from 'react';
import $ from 'jquery';

var Account = React.createClass({
	getInitialState: function(){
		return {firstName: "", lastName: "", email: "", boards: null}
	},
	userInfo: function(event){
		event.preventDefault()
		$.ajax({
			
		})
	}
	render: function(){
		return(
			<div>
				<h2 className="title">_your account</h2>
			</div>
		)
	}
})

export default Account;