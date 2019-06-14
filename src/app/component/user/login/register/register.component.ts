import { Component, OnInit } from '@angular/core';
import { ApiService } from  'src/app/services/api.service';
import { Registro } from 'src/app/class/registro.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private cated: ApiService) { }

  ngOnInit() {
  }
  agregar(){
    this.cated.createEst({

      });
  }
}
