import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Usuario } from '../models/usuario';
import { Token } from '../models/token';
import { UsuarioCambio } from '../models/usuario-cambio';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl: string = 'http://localhost:9002/usuario';
  constructor(private _http: HttpClient) {}

  gatAllusuarios(token:Token): Observable<Usuario[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`);
    return this._http.get<Usuario[]>(this.apiUrl, {headers});
  }

  getUsuario(token:Token, id:number|null):Observable<Usuario>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`);
    return this._http.get<Usuario>(this.apiUrl+`/${id}`, {headers});
  }

  cambioPassword(token:Token, usuario:UsuarioCambio):Observable<Token>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`);
    return this._http.post<Token>(this.apiUrl+"/cambio", usuario, {headers});
  }

  cambiarEstado(token:Token, id:number|null):Observable<Token>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`);
    return this._http.post<Token>(this.apiUrl+`/${id}`,null, {headers});
  }
}
