import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Store } from '@ngrx/store';
import { addPost } from 'src/app/store/action/post.action';
import { AppState } from 'src/app/store/state/app.state';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
postForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
this.postForm = new FormGroup({

  title : new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]),
  description: new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ])
})

  }
  onAddPost(){
    if(!this.postForm.valid)
    return;
      const post:Post={
        id: "0",
        title: this.postForm.value.title,
        description: this.postForm.value.description
      }
      this.store.dispatch(addPost({post}));

  }



}
