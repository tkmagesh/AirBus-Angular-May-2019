import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import axios from 'axios';

console.log(axios);

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	bugSortAttrName : string = 'name';
	bugSortDesc : boolean = false;

	constructor(public bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onNewBugCreated(bug: Bug){
		this.bugs = [...this.bugs, bug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		/*var deletePromises = this.bugs
			.filter(bug => bug.isClosed)
			.map( closedBug => {
				return this.bugOperations.remove(closedBug);
			});

		Promise.all(deletePromises)
			.then( () => {
				this.bugOperations
					.getAll()
					.then(bugs => this.bugs = bugs);		
			});*/
		
		
	}

	
}