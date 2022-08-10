import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from 'src/app/counter/store/selector/post.selector';
import { AppState } from 'src/app/counter/store/state/app.state';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 posts: Observable<Post[]> | undefined;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

}
