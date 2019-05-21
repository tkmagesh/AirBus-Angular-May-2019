import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{

	title = 'first-app';

	onChangeTitleClick(title){
	  	this.title = title;
	}
}