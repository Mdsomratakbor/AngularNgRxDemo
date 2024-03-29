import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "../action/post.action";
import { initialState } from "../state/post.state";


const _postsReducer = createReducer(
    initialState, 
    on(addPost, (state, action)=>{
    let post ={...action.post};
    post.id= (state.posts.length+1).toString();
    return{
        ...state,
        posts:[...state.posts, post]
    }
}),
on(updatePost, (state, action)=>{

    const updatePosts = state.posts.map(post=>{
        return action.post.id === post.id ? action.post: post;
    });
    return {
        ...state,
        posts: updatePosts
    }
}), on(deletePost, (state,{id})=>{
    const updatePosts = state.posts.filter(post =>{
        return post.id !== id;
    })
    return{
        ...state,
        posts:updatePosts
    }
})

);

export function postReducer(state:any, action:any){
return _postsReducer(state, action);
}