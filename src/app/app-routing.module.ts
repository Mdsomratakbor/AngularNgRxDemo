import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'counter', component:CounterComponent},
  {path:'posts', component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
