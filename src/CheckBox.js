import React from 'react';

import Button from './Button.js';


function CheckBox(props) {

	function handleStatus() {
		props.handleStatus(props.id);
	}

	function handleDelete() {
		props.handleDelete(props.id);
	}
	
	if(typeof props.id == undefined) {
		return "Loading...";
	}

	return (
		<li id={props.id} className={(props.status === 'active') ? "todo-row unfinished" : "todo-row complete" }>
			<input type="checkbox" onChange={handleStatus} defaultChecked={(props.status !== 'active') ? true : false}/>
			<label>{props.text}</label>
			<div className={(props.currentGroup === 'complete') ? "" : "hidden"}>
				<Button size="btn-sm" trigger={handleDelete} icon="delete" flair="btn-nodrop" text=""/>
			</div>
		 </li>
		
	);

}

export default CheckBox;