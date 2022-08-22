import { COUNTER_SELECTOR_NAME } from './store/selector/counter.selector';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { CommonModule } from '@angular/common';
import { counterReducer } from './store/reducer/counter.reducer';
import { StoreModule } from '@ngrx/store';

const routes : Routes=[
{path: '', component: CounterComponent}
]
@NgModule({
  declarations:[
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule ,
    StoreModule.forFeature(COUNTER_SELECTOR_NAME, counterReducer),
    RouterModule.forChild(routes)]
})
export class CounterModule{

}
