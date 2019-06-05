import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../user/signin/signin.component';
import { SignupComponent } from '../user/signup/signup.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [SigninComponent,SignupComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { 
  constructor(){
    console.log("user  module loading")
  }
}
