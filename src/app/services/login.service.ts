import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders({'Content-Type': 'application/json'})

  login(data){
    return this.httpClient.post(environment.login, data, {headers: this.headers});
  }
}
