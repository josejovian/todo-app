import React from 'react';

import CheckBox from './CheckBox.js';
import NewToDo from './NewToDo.js';

import './ViewToDo.css';

function ViewToDo(props) {

	function getLi(x) {
		if(x.ID >= 0) {
			return (<CheckBox handleStatus={props.handleStatus} handleDelete={props.handleDelete} currentGroup={props.currentGroup} id={x.ID} text={x.text} status={x.status} key={x.ID}/>)
		} else {
			return (<li class="hidden" key={x.ID}></li>);
		}
	}

	const listToDos = props.masterList.map(getLi);
	
    return (
        <div class="list">
            <NewToDo currentGroup={props.currentGroup} handleSubmit={props.addToDo}/>
            <ul>
                {listToDos}
            </ul>
        </div>
    );

}

export default ViewToDo;
