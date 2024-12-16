import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Usuario } from '../models/usuario';
import { Token } from '../models/token';
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

}
