import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Acreedor } from '../models/acreedor';

@Injectable({
  providedIn: 'root'
})
export class AcreedorService {

  private apiUrl: string = 'http://localhost:9000/insolvencias/acreedor';
  constructor(private _http: HttpClient) { }

  getAllAcreedores(): Observable<Acreedor[]> {
    return this._http.get<Acreedor[]>(this.apiUrl);
  }

  getAcreedor(id: number | null): Observable<Acreedor> {
    return this._http.get<Acreedor>(`${this.apiUrl}/${id}`);
  }

  crearAcreedor(acreedor: Acreedor): Observable<Acreedor> {
    return this._http.post<Acreedor>(this.apiUrl, acreedor);
  }

  updateAcreedor(acreedor: Acreedor): Observable<Acreedor> {
    return this._http.put<Acreedor>(this.apiUrl, acreedor);
  }

  deleteAcreedor(id: number | null): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
