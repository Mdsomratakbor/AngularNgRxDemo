import { POST_SELECTOR_NAME } from './../store/selector/post.selector';
import { postReducer } from './../store/reducer/post.reduccer';
import { PostComponent } from './post/post.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { StoreModule } from '@ngrx/store';

const routes : Routes=[
  {path: '', component: PostComponent, children:[
    {path: 'add-post', component: AddPostComponent},
    {path:'edit/:id', component: EditPostComponent}
  ]}


  ]
@NgModule({
  declarations:[
    AddPostComponent,
    EditPostComponent,
    PostComponent
  ],
  imports:[
    CommonModule,
     ReactiveFormsModule ,
     StoreModule.forFeature(POST_SELECTOR_NAME, postReducer),
     RouterModule.forChild(routes)
  ]
})
export class PostModule{

}
