import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

import { DashboardComponent } from './main-component/component/dashboard/dashboard.component';
import { FooterComponent } from './main-component/component/footer/footer.component';
import { PerfilComponent } from './main-component/component/perfil/perfil.component';
import { SidebarComponent } from './main-component/component/sidebar/sidebar.component';
import { TutoriaComponent } from './main-component/component/tutoria/tutoria.component';
import { WelcomeComponent } from './main-component/component/welcome/welcome.component';
import { MainComponentComponent } from './main-component/main-component.component';





const routes: Routes = [
  { path: '', redirectTo: '/auth/user', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'main-component', component: MainComponentComponent ,children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'tutoria', component: TutoriaComponent },
  ]},

  



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
    WelcomeComponent,
    MainComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,


  ],
   exports: [RouterModule],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
