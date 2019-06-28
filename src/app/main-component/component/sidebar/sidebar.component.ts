import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @ViewChild('sidenav') sidenav: ElementRef;
    clicked: boolean;
    public isLogged: boolean = false;


    constructor(private router: Router, private authService: AuthService, private afsAuth: AngularFireAuth) {
      this.clicked = this.clicked === undefined ? false : true;
    }

    ngOnInit()
    {
      this.getCurrentUser();
    }

    getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

    setClicked(val: boolean): void {
      this.clicked = val;
    }

    onLogout() {
    this.afsAuth.auth.signOut();
    this.router.navigate(['auth/user']);

  }


}
