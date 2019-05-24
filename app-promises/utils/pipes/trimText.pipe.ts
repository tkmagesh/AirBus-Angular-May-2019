import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(data : string, trimLength : number = 30) : string {
		return data.length >= trimLength ? data.substr(0,trimLength) + '...' : data;
	}
}