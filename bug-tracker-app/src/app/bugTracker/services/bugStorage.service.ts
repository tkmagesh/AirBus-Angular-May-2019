import { Bug } from '../models/Bug';
import * as uuid from 'uuid/v4';

export class BugStorageService{
	private storage = window.localStorage;

	save(bugData : Bug) : Bug {
		let newBug = {...bugData, id : bugData.id || uuid() };
		this.storage.setItem(newBug.id.toString(), JSON.stringify(newBug));
		return newBug;
	}

	getAll() : Bug[] {
		let result : Bug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			result.push(bug);
		}
		return result;
	}

	remove(bug : Bug) : void {
		this.storage.removeItem(bug.id);
	}
}