import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChannelName, customIncrement } from '../store/action/counter.action';
import { getChannelName } from '../store/selector/counter.selector';
import { CounterState } from '../store/state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value:number=0;
  channelnameText:string='';
  channelName: string = '';
  constructor(private store:Store<{counter:CounterState}> ) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(channelName=>{
      console.log('Channel name observable called');
      this.channelName= channelName
    })
  }

    addCount(){
   this.store.dispatch(customIncrement({count:this.value}));
    }
    changeChannelTitle(){
      this.store.dispatch(ChannelName({channelName:this.channelnameText}))
    }
}
