import React from 'react';
import collection from './collection';

var Create = React.createClass({
	render: function(){
		return (
			<div>
				<hr />
				<h2 className="title">_your moodBoard</h2>
				
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