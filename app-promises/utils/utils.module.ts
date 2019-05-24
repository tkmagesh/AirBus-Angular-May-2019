import { NgModule } from '@angular/core';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

const ALL_PIPES = [
	TrimTextPipe
    , SortPipe
    , ElapsedPipe
];

@NgModule({
	declarations : [
		ALL_PIPES
	],
	imports : [],
	exports : [
		ALL_PIPES
	],
	providers : []
})
export class UtilsModule{

}