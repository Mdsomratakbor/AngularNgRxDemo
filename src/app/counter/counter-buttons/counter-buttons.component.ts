import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/action/counter.action';
import { AppState } from '../store/state/app.state';
import { CounterState } from '../store/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment=new EventEmitter<void>();
  @Output() decrement= new EventEmitter<void>();
  @Output() reset= new EventEmitter<void>();
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  /* Normal process */
  onIncrement(){
    this.increment.emit();
  }
  onDecrement(){
    this.decrement.emit();
  }
  onReset(){
    this.reset.emit();
  }

  /*  NgRx store */
  onIncrement1(){
    this.store.dispatch(increment())
  }
  onDecrement1(){
  this.store.dispatch(decrement())
  }
  onReset1(){
    this.store.dispatch(reset())
  }
}
