import { NgModule } from '@angular/core';
//import { AngularFireModule } from '@angular/fire';
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
import {MatTabsModule} from '@angular/material/tabs';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

import { DashboardComponent } from './main-component/component/dashboard/dashboard.component';
import { FooterComponent } from './main-component/component/footer/footer.component';
import { PerfilComponent } from './main-component/component/perfil/perfil.component';
import { SidebarComponent } from './main-component/component/sidebar/sidebar.component';
import { TutoriaComponent } from './main-component/component/tutoria/tutoria.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CuartoComponent } from './main-component/component/cuarto/cuarto.component';
import { AnimalesComponent } from './main-component/component/cuarto/animales/animales.component';
import { HumanoComponent } from './main-component/component/cuarto/humano/humano.component';
import { EnergiaComponent } from './main-component/component/cuarto/energia/energia.component';
import { AnimalTextComponent } from './main-component/component/cuarto/texto/animal-text/animal-text.component';
import { TextoComponent } from './main-component/component/cuarto/texto/texto.component';
import { QuizComponent } from './main-component/component/cuarto/texto/animal-text/quiz/quiz.component';
import { EnergiaTextComponent } from './main-component/component/cuarto/texto/energia-text/energia-text.component';
import { InvertebradosTextComponent } from './main-component/component/cuarto/texto/invertebrados-text/invertebrados-text.component';
import { VertebradosTextComponent } from './main-component/component/cuarto/texto/vertebrados-text/vertebrados-text.component';
import { ProfesorComponent } from './main-component/component/admin/profesor/profesor.component';


import { ListPostComponent } from './main-component/component/admin/list-post/list-post.component';
import { DasboardPostComponent } from './main-component/component/admin/dasboard-post/dasboard-post.component';
import { DetailPostComponent } from './main-component/component/admin/detail-post/detail-post.component'
import { PostService } from 'src/app/services/post.service'




const routes: Routes = [
  { path: '', redirectTo: '/auth/user', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'main-component', component: MainComponentComponent ,children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin/profesor', component: ProfesorComponent },
    { path: 'admin/list-post', component: ListPostComponent },
    { path: 'admin/dasboard-post', component: DasboardPostComponent },
    { path: 'admin/detail-post:id', component: DetailPostComponent },

    { path: 'perfil', component: PerfilComponent },
    { path: 'tutoria', component: TutoriaComponent },

    { path: 'texto', component: TextoComponent, children:[
      { path: 'animal-text', component: AnimalTextComponent },
      { path: 'invertebrados-text', component: InvertebradosTextComponent },

     ]},
    { path: 'cuarto', component: CuartoComponent, children:[
      { path: 'animales', component: AnimalesComponent },

     ]},

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
    MainComponentComponent,
    CuartoComponent,
    AnimalesComponent,
    HumanoComponent,
    EnergiaComponent,
    AnimalTextComponent,
    TextoComponent,
    QuizComponent,
    EnergiaTextComponent,
    InvertebradosTextComponent,
    VertebradosTextComponent,
    ProfesorComponent,
    ListPostComponent,
    DasboardPostComponent,
    DetailPostComponent,
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
    MatTabsModule,
    ScrollDispatchModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule, 
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule

  ],
   exports: [RouterModule],
   providers: [PostService],
   bootstrap: [AppComponent]
})
export class AppModule { }
