import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  @Input() counter:number=0;

  counter1:number= 0;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      this.counter1 = data.counter;
    })
  }

}
