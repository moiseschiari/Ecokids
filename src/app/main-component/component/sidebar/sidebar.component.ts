import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserInterface } from '../../../models/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  clicked: boolean;
  public isLogged: boolean = false;
  public roleprof = false;
  public isAdmin= false;
  public userUid: string = null;
  private users: UserInterface[];


  constructor(private router: Router, private authService: AuthService, private afsAuth: AngularFireAuth) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) 
      {
        console.log('user logged');
        this.isLogged = true;
      } 
      else 
      {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          //this.isAdmin = true;
        })
      }
    })
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  onLogout() {
    this.afsAuth.auth.signOut();
    this.router.navigate(['auth/user']);

  }


}
