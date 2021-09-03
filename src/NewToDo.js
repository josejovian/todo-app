import React, { useState } from 'react';

import Button from './Button.js';
import InputBox from './InputBox.js';

import './NewToDo.css';

function NewToDo(props) {
	const [plan, setPlan] = useState(''); 

    function handleSubmit(e) {
		e.preventDefault();
		if(plan !== '') {
			props.handleSubmit(plan);
			setPlan('');
		}
    }

    function handleChange(e) {
        setPlan(e.target.value);
    }

    return (
        <form class={(props.currentGroup !== "complete") ? "new-todo" : "new-todo hidden"} onSubmit={handleSubmit}>
			<InputBox class="new-todo" placeholder="add details" trigger={handleChange} value={plan}/>
			<Button type="submit" size="btn-md" color="btn-blue" text="Add"/>
        </form>
    );
}

export default NewToDo;