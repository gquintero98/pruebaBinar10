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


  registro(data,file){
    const fd= new FormData;
    fd.append('imagen',file,file.name);
    fd.append('username',data.username);
    fd.append('password',data.password);
    fd.append('password2',data.password2);
    fd.append('email',data.email);
    fd.append('nombre',data.nombre);
    fd.append('apellido',data.apellido);
    fd.append('cedula',data.cedula);
    fd.append('entidad',data.entidad);

    return this.httpClient.post(environment.registro, fd , {headers: this.headersFiles});
  }
}
