import { counterReducer } from "../reducer/counter.reducer";
import { postReducer } from "../reducer/post.reduccer";
import { CounterState } from "./counter.state";
import { PostState } from "./post.state";

export interface AppState{
    counter :CounterState,
    posts:PostState
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}