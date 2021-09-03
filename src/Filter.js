import React, { useState } from 'react';

import Button from './Button.js';

import './Filter.css';

var newFilter = 'all';

function FilterBar(props) {

	var [state, setState] = useState(newFilter);

	function setFilter(e) {
		e.preventDefault();
		props.setFilter(newFilter);
		setState(newFilter);
	}

	return (
		<form class="label-bar" onSubmit={setFilter}> 
			<Button type="submit" flair="btn-line" class={(newFilter === 'all') ? "active" : "transparent"} trigger={() => newFilter = 'all'} text="All"/>
			<Button type="submit" flair="btn-line" class={(newFilter === 'active') ? "active" : "transparent"} trigger={() => newFilter = 'active'} text="Active"/>
			<Button type="submit" flair="btn-line" class={(newFilter === 'complete') ? "active" : "transparent"} trigger={() => newFilter = 'complete'} text="Completed"/>
		</form>
	);

}

export default FilterBar;