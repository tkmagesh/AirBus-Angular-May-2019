import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(bugs: Bug[]): number {
		console.log('closedCount pipe triggered');
		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}