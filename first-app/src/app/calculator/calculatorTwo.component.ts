import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-2',
	templateUrl : 'CalculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	model : CalculatorModel = new CalculatorModel();

	/*selectedOperation : string = 'add';

	onCalculateClick(){
		switch (this.selectedOperation) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}

		//this.model[this.selectedOperation]();
	}*/
}