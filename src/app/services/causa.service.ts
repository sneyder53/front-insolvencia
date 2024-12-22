import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Causa } from '../models/causa';

@Injectable({
  providedIn: 'root'
})
export class CausaService {

   private apiUrl: string = 'http://localhost:9000/insolvencias/causa';
    constructor(private _http: HttpClient) {}

  getAllCausas() : Observable<Causa[]> {
    return this._http.get<Causa[]>(this.apiUrl);
  }

  crearCausa(causa: Causa): Observable<Causa> {
    return this._http.post<Causa>(this.apiUrl, causa);
  }

  getCausa(id: number | null): Observable<Causa> {
    return this._http.get<Causa>(`${this.apiUrl}/${id}`);
  }

  updateCausa(causa: Causa): Observable<Causa> {
    return this._http.put<Causa>(this.apiUrl, causa);
  }

  deleteCausa(id: number | null): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
