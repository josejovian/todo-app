import React, { useState } from 'react';

import ViewToDo from './ViewToDo.js';
import FilterBar from './Filter.js';
import Button from './Button.js';

import './App.css';

class Plan {
	constructor(ID, text) {
		this.ID = ID;
		this.text = text;
		this.status = 'active';
	}
}

const placehold1 = new Plan (-1, "Placeholder Plan");
const placehold2 = new Plan (-2, "Placeholder Plan");
placehold2.status = 'complete';

var allTimeAdded = 0;
var masterList = [];
var tempList = [];
var currentGroup = 'all';
var initialize = 0;
var quota = 0;

function loadData() {
	masterList = JSON.parse(localStorage.getItem("toDoList"));
	allTimeAdded = localStorage.getItem("allTimeAdded");
}

function saveData() {
	localStorage.setItem("toDoList", JSON.stringify(masterList));
	localStorage.setItem("allTimeAdded", allTimeAdded);
}


function App() {
	var [state, setState] = useState(tempList);

	function prepareList() {

		tempList.splice(0, tempList.length + 1);
		quota = 0;

		for(var i = 0; i < masterList.length; i++) {
			if(currentGroup === 'all' || masterList[i].status === currentGroup) {
				tempList = [...tempList, masterList[i]];
				if(i > 1) quota++;
			}
		}

		setState(tempList);

		return tempList;
	}

	function handleStatus(ID) {

		for(var i = 2; i < masterList.length; i++) {
			if(masterList[i].ID === ID && ID >= 0) {
				masterList[i].status = (masterList[i].status === 'active') ? 'complete' : 'active';
				break;
			}
		}

		saveData();

		prepareList();
	}

	function handleDelete(ID) {

			for(var i = 2; i < masterList.length; i++) {
				if((ID === "all" && masterList[i].status === "complete") || (masterList[i].ID === ID && ID >= 0)) {
					masterList.splice(i, 1);
					if(ID !== "all") {
						break;
					} else {
						i -= 1;
					}
				}
			}
		
		saveData();

		prepareList();
	}

	function setFilter(newFilter) {
		currentGroup = newFilter;
		prepareList();
	}

	function addToDo(toDo) {
		const newEntry = new Plan(allTimeAdded++, toDo);
		masterList = [...masterList, newEntry];
		saveData();
		prepareList();
	}

	if(initialize === 0) {
		var getToDoList = JSON.parse(localStorage.getItem("toDoList"));
		if(getToDoList === null) {
			masterList = [...masterList, placehold1];
			masterList = [...masterList, placehold2];
		} else {
			loadData();
		}

		prepareList()
		setState(tempList);
		
		initialize = 1;
	}

	return (
		<div>
			<header>
				<h1>#todo</h1>
			</header>
			<FilterBar setFilter={setFilter} currentGroup={currentGroup}/>
			<ViewToDo addToDo={addToDo} handleStatus={handleStatus} handleDelete={handleDelete} masterList={tempList} currentGroup={currentGroup}/>
			<div id="delete-all-cont" class={(currentGroup === 'complete') ? ((quota > 0) ? "" : "boosted") : "hidden"}>
				<Button type="button" id="delete-all" color="btn-red" trigger={() => handleDelete("all")} icon="delete" text="delete all"/>
			</div>
			<div class={(quota > 0) ? "hidden" : "empty-sign"}>
				<div>
					
				</div>
				<span>
					Nothing to see here, just an empty to-do list.<br/>
					<a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
				</span>
			</div>
			<footer> 
				Created by&nbsp;<a href="https://github.com/josejovian" title="Jose Jovian">josejovian</a>&nbsp;-&nbsp;<a href="https://devchallenges.io/" title="Dev Challenges">devChallenges.io</a>
			</footer>
		</div>
	);
}

export default App;