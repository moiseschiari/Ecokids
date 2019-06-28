import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);
  loginForm: FormGroup;
  public email: string = '';
  public password: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
      this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
  });
  }
  onLogin(): void {
      this.authService.loginEmailUser(this.email, this.password)
        .then((res) => {
          this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
  onLoginRedirect(): void {
      this.router.navigate(['main-component/dashboard']);
    }





}
