import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthRoutingModule } from "./auth-routing.module";

import { UserComponent } from "./components/user/user.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconsModule } from "angular-bootstrap-md";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IconsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore]
})
export class AuthModule {}
