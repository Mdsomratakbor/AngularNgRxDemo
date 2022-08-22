import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

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
  RouterModule.forChild(routes)]
})
export class AuthModule{

}
