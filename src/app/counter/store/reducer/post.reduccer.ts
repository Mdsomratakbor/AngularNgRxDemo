import { createReducer } from "@ngrx/store";
import { initialState } from "../state/post.state";


const _postsReducer = createReducer(initialState);

export function postReducer(state:any, action:any){
return _postsReducer(state, action);
}