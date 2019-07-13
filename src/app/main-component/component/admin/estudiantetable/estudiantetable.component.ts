import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { UserInterface } from '../../../../models/user';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-estudiantetable',
  templateUrl: './estudiantetable.component.html',
  styleUrls: ['./estudiantetable.component.scss']
})
export class EstudiantetableComponent implements OnInit {

  private users: UserInterface[];


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute ) 
  { 
   
  }

  ngOnInit() {
    this.getListUser();
  }

  /*getUsers(idUsers: string): void {
    this.authService.getUsers(idUsers).subscribe(usuario => {
      this.users = usuario;
    });
  }*/

  getListUser() {
    this.authService.getAllUser()
      .subscribe(users => {
        this.users = users;
      });
  }

}
