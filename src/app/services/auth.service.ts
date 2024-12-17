import { Token } from './../models/token';
import { UsuarioLogin } from './../models/usuario-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:9002/auth';
  constructor(private _http: HttpClient) {}

  login(userLogin: UsuarioLogin): Observable<Token> {
    return this._http.post<Token>( this.apiUrl + "/login", userLogin);
  }

  setToken(token: Token): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): Token {
    return JSON.parse(localStorage.getItem('token')!)// Obtener desde localStorage si es necesario
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  registrarUsuario(usuario:Usuario): Observable<Token> {
    return this._http.post<Token>(this.apiUrl + "/registrer",usuario)
  }
}
