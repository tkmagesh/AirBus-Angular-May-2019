import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	constructor(public bugOperations : BugOperationsService){

	}

	onAddNewClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}