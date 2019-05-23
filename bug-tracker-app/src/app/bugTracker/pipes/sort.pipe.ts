import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(p1 : any, p2 : any) : number
}

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{

	private getDescendingComparerFor(comparer : Comparer) : Comparer {
		return function(p1: any,  p2: any) : number {
			return comparer(p1, p2) * -1;
	    }
	}
	private getComparer(attrName : string) : Comparer {
		return function(p1 : any, p2 : any) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}
	transform(list : any[], attrName : string, descending : boolean = false){
		if (!list || !list.length || !attrName)
			return list;
		let comparer = this.getComparer(attrName);
		if (descending)
			comparer = this.getDescendingComparerFor(comparer);
		return list.sort(comparer);
	}
}