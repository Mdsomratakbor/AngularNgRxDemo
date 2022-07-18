
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../state/counter.state";

const getCounterSelector = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterSelector, state=>{
return state.counter;
});
export const getChannelName = createSelector(getCounterSelector, state=>{
return state.channelName;
});

