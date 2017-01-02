import React from 'react';
import collection from './collection';
import $ from 'jquery';

var Create = React.createClass({
	getInitialState: function(){
		return {title: ""}
	},
	handleChange: function(input, event){
		if(input === "title"){
		this.setState({title: event.target.value})
		}
	},
	createBoard: function(event){
		event.preventDefault()
		$.ajax({
			url: '/api/boards',
			type: 'POST',
			data: this.state
		})
	},
	render: function(){
		return (
			<div>

				<h2 className="title">_your moodBoard</h2>

				<form onSubmit={this.createBoard}>
					<input
						className="input"
						type="text"
						placeholder="Title of Your Board"
						onChange={this.handleChange.bind(this, "title")}
					/>

					<button
						className="button"
						type="submit"
						>Create</button>
				</form>
				
				<div className="collection-imgs">
					{collection.map(function(imgs, indx) {
						return <img className= "savedImg" key={indx} src={imgs}></img>
					})}
				</div>
			</div>
		)
	}
})

export default Create;