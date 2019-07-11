import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray  } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../../models/user';



@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})


export class ProfesorComponent implements OnInit {
  modalFormSubscriptionName = new FormControl('', Validators.required);
  modalFormSubscriptionEmail = new FormControl('', Validators.email);
  userForm: FormGroup;
  // authRole: UserInterface;
  public roleprof = false;
  public isAdmin: any = null;
  public userUid: string = null;

  constructor( private authService: AuthService) {

  }

  get name(){
    return this.userForm.get('name');
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      newDoc: new FormArray([])
    });
    this.getCurrentUser();
  }

  f_add_newDoc(){
    (<FormArray> this.userForm.get('newDoc')).push(new FormControl(''));
  }

  f_del_newDoc(index){
    console.log(index,' Index::::');
    (<FormArray> this.userForm.get('newDoc')).removeAt(index);
  }
  
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }
  



}
