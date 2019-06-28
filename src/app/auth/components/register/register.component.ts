import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email: string =' ';
  public password: string =' ';


  constructor(private ngZone: NgZone, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then(() => {
              this.router.navigate(['main-component/dashboard']);
              }).catch(err => console.log('err', err.message));

            }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then(() => {
       this.onLoginRedirect();
       }).catch(err => console.log('err', err.message));
          }

    onLoginGoogle(): void {
        this.authService.loginGoogleUser()
        .then(() => {
        this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
        }

    onLoginRedirect(): void {
      this.ngZone.run(() =>this.router.navigate(['main-component/dashboard']));
        }

}
