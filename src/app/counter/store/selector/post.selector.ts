import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { PostState } from "../state/post.state";


const getPostState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostState, (state)=>{
  return state.posts;  
})