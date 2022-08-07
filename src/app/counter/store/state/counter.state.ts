export interface CounterState{
    counter:number;
    channelName:string;
}

export const initalState:CounterState = {
    counter: 0,
    channelName: 'DE channel'
}