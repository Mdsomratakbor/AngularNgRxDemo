import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from 'src/app/store/selector/counter.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  @Input() counter:number=0;

  counter1:number= 0;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe(counter=>{
      console.log('Counter observable called');
      this.counter1 = counter;
    })
  }

}
