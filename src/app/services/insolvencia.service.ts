import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Insolvencia } from '../models/insolvencia';

@Injectable({
  providedIn: 'root'
})
export class InsolvenciaService {

  private apiUrl: string = 'http://localhost:9000/insolvencias/insolvencia';

  constructor(private _http: HttpClient) {}

  getAllInsolvencias() : Observable<Insolvencia[]> {
    return this._http.get<Insolvencia[]>(this.apiUrl);
  }

  crearInsolvencia(insolvencia: Insolvencia): Observable<Insolvencia> {
    return this._http.post<Insolvencia>(this.apiUrl, insolvencia);
  }

  getInsolvencia(id: number | null): Observable<Insolvencia> {
    return this._http.get<Insolvencia>(`${this.apiUrl}/${id}`);
  }

 updateEstadoInsolvencia(Insolvencia: Insolvencia): Observable<Insolvencia> {
    return this._http.post<Insolvencia>(`${this.apiUrl}/estado`, Insolvencia);
  }

  deleteInsolvencia(id: number | null): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }

}
