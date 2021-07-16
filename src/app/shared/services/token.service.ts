import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token_binar10');
  }

  /**
   * Guardar token en el local storage
   * @param token String del token
   */

  setToken(token) {
    localStorage.setItem('token_binar10', token);
  }
}
