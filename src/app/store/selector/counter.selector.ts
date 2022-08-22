
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../state/counter.state";

export const COUNTER_SELECTOR_NAME = 'counter';
const getCounterSelector = createFeatureSelector<CounterState>(COUNTER_SELECTOR_NAME);

export const getCounter = createSelector(getCounterSelector, state=>{
return state.counter;
});
export const getChannelName = createSelector(getCounterSelector, state=>{
return state.channelName;
});

