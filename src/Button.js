import React from 'react';

import './Button.css';

function Button(props) {

	if(props.flair === "btn-line") {
		return (
			<button type={props.type} id={props.id} className={"btn "+props.size+" "+props.color+" btn-nodrop btn-line"} onClick={props.trigger}>
				<span>{props.text}</span>
				<div className={props.className}></div>
			</button>
		)
	}

	if(props.icon === undefined) {
		return (
			<button type={props.type} id={props.id} className={"btn "+props.size+" "+props.color+" "+props.flair} onClick={props.trigger}>
				<span>{props.text}</span>
			</button>
		)
	}

	return (
		<button type={props.type} id={props.id} className={"btn "+props.size+" "+props.color+" "+props.flair} onClick={props.trigger}>
			<i className="material-icons material-icons-outlined">{props.icon}</i>
			<span>{props.text}</span>
		</button>
	);

}

export default Button;