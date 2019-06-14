import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

createEst(body: any){
  let url= 'localhost:3000/api/createEst';
  let headers = new Headers({ 'Content-Type': 'application/json' });


 return this.http.post(url,body).pipe(
   map(respuestaData => {
     console.log('respuestaDataaaa::', respuestaData);
     return respuestaData;
   })
);
}

}
