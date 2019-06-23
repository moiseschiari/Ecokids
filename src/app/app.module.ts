import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IconsModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { TutoriaComponent } from './component/tutoria/tutoria.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'tutoria', component: TutoriaComponent },



  //{ path: '**', pathMatch:'full', redirectTo: 'dashboard' },

];

export const APP_ROUTING =   RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    PerfilComponent,
    TutoriaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
  ],
   exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
