import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector : '[myTest]'
})
export class TestDirective{
	constructor(private ele : ElementRef){
		console.dir(ele);
		ele.nativeElement.style.backgroundColor = 'red';
	}

	@HostListener('click')
	onHostClick(){
		this.ele.nativeElement.innerHTML = 'I have been clicked';
	}
}