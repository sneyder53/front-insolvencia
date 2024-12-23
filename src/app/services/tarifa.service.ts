import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Tarifa } from '../models/tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private apiUrl: string = 'http://localhost:9000/insolvencias/tarifa';
  constructor(private _http: HttpClient) {}

  getAllTarifas(): Observable<Tarifa[]> {
    return this._http.get<Tarifa[]>(this.apiUrl);
  }

  crearTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this._http.post<Tarifa>(this.apiUrl, tarifa);
  }

  getTarifa(id: number | null): Observable<Tarifa> {
    return this._http.get<Tarifa>(`${this.apiUrl}/${id}`);
  }

  updateTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this._http.put<Tarifa>(this.apiUrl, tarifa);
  }

  deleteTarifa(id: number | null): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
