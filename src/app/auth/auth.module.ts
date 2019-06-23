import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import {UserComponent} from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { AuthService } from '../services/auth.service';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IconsModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [RegisterComponent, LoginComponent,UserComponent],
  imports: [
    MDBBootstrapModule.forRoot(),
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IconsModule,
  ],
  providers: [],


})
export class AuthModule { }
