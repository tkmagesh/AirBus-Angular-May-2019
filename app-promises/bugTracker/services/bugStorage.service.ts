import { Bug } from '../models/Bug';
import * as uuid from 'uuid/v4';
import axios from 'axios';

export class BugStorageService{
	private storage = window.localStorage;
	private serviceEndPoint = 'http://localhost:3000/bugs';

	save(bugData : Bug) : Promise<Bug> {
		if (!bugData.id){
			return axios
				.post(this.serviceEndPoint, bugData)
				.then(response => response.data)
		} else {
			return axios
				.put(`${this.serviceEndPoint}/${bugData.id}`, bugData)
				.then(response => response.data)
		}
		
	}

	getAll() : Promise<Bug[]> {
		return axios
			.get(this.serviceEndPoint)
			.then(response => response.data)
	}

	remove(bug : Bug) : Promise<any> {
		return axios
			.delete(`${this.serviceEndPoint}/${bug.id}`)
			.then(response => response.data)
	}
}