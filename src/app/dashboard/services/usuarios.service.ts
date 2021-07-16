import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }
  // Token de autorizacion para acceder
  headers = {
    Authorization: 'Token ' + localStorage.getItem('token_binar10'),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
// servicio para obtener usuarios
  usuario(nombre){
    let params = nombre? '?nombre='+nombre : '/'
    return this.httpClient.get(environment.filtrarU+params,{headers: this.headers});
  }
// servicio para obtener detalles de un usuario
  detalleUsuario(id){
    let params = id
    return this.httpClient.get(environment.usuario+params,{headers: this.headers});
  }
//Actualizar usuario
  actualizar(data){
    let params = data.id+'/';
    return this.httpClient.patch(environment.actualizar+params,data,{headers: this.headers});
  }
}
