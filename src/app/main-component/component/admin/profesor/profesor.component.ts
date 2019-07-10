import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup, FormArray  } from '@angular/forms';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {
  modalFormSubscriptionName = new FormControl('', Validators.required);
  modalFormSubscriptionEmail = new FormControl('', Validators.email);
  userForm : FormGroup;

  constructor() { 

  }

  get name(){
    return this.userForm.get('name');
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      newDoc: new FormArray([])
    });
  }

  f_add_newDoc(){
    (<FormArray> this.userForm.get('newDoc')).push(new FormControl(''));
  }

  f_del_newDoc(index){
    console.log(index,' Index::::');
    (<FormArray> this.userForm.get('newDoc')).removeAt(index);
  }

  

}
