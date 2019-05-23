import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug {
		let newBugData : Bug = {
			id : null,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		}
		return this.bugStorage.save(newBugData);
	}

	toggle(bugToToggle : Bug) : Bug{
		let toggledBug =  {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugStorage.save(toggledBug);
	}

	getAll() : Bug[] {
		return this.bugStorage.getAll();
	}

	remove(bug : Bug) : void {
		return this.bugStorage.remove(bug);
	}
}