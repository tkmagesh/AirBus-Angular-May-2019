import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { Bug } from '../models/Bug';
import { Observable } from 'rxjs';

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
		this.bugOperations
			.createNew(this.newBugName)
			.subscribe(newBug => this.bugCreate.emit(newBug));
		
	}
}