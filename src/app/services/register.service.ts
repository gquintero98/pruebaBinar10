import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders({'Content-Type': 'application/json'})

  headersFiles = new HttpHeaders({
            'Content-Type':'multipart/form-data'      
          })

  // servicio para registro de nuevo usuario
  registro(data){
    return this.httpClient.post(environment.registro, data, {headers: this.headers});
  }
}
