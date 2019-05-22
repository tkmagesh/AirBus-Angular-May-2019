import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{

	result : number = 0;
	v1 : number;
	v2 : number;

	onAddClick(){
		this.result = this.v1 + this.v2;
	}

	onSubtractClick(){
		this.result = this.v1 - this.v2;
	}

	onMultiplyClick(){
		this.result = this.v1 * this.v2;
	}

	onDivideClick(){
		this.result = this.v1 / this.v2;
	}
}