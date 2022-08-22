import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AUTH_STATE_NAME } from '../store/selector/auth.selector';
import { AuthReducer } from '../store/reducer/auth.reducer';

const routes : Routes =[
{path:'', children:[
  {path:'', redirectTo:'login'},
  {path:'login', component: LoginComponent}
]}
]

@NgModule({
declarations:[
  LoginComponent
],
imports:[
  CommonModule,
  ReactiveFormsModule,
  StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
  RouterModule.forChild(routes)]
})
export class AuthModule{

}
