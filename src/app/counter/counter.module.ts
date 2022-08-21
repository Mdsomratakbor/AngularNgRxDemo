import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, FormsModule , RouterModule.forChild(routes)]
})
export class CounterModule{

}