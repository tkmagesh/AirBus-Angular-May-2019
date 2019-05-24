import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { Bug } from '../models/Bug';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
		   	<label for="">Bug Name :</label>
		   	<input type="text" (keyup)="newBugName=$event.target.value">
		      <span> [ {{newBugName.length}} ] </span>
		   	<input type="button" value="Add New" (click)="onAddNewClick()">
		 </section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	bugCreate : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}

	async onAddNewClick(){
		let newBug : Bug = await this.bugOperations.createNew(this.newBugName);
		this.bugCreate.emit(newBug);
	}
}