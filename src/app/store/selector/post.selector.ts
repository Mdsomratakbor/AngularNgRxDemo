import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "../state/post.state";

export const POST_SELECTOR_NAME = 'posts';
const getPostState = createFeatureSelector<PostState>(POST_SELECTOR_NAME);

export const getPosts = createSelector(getPostState, (state)=>{
  return state.posts;
});

export const getPostById = createSelector(getPostState, (state:any, props:any)=>{
  return state.posts.find((post:any)=> post.id == props.id);
})
