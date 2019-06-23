import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

/*  onRegister(form): void {
   this.authService.register(form.value).subscribe(res => {
     this.router.navigateByUrl('/auth');
     console.log("enviado");
   });
 }*/

}
