import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email: string =' ';
  public password: string =' ';


  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
              this.router.navigate(['dashboard']);
              }).catch(err => console.log('err', err.message));

            }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
       this.onLoginRedirect();
       }).catch(err => console.log('err', err.message));
          }

    onLoginGoogle(): void {
        this.authService.loginGoogleUser()
        .then((res) => {
        this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
        }

    onLoginRedirect(): void {
       this.router.navigate(['dashboard']);
        }

}
