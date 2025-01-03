import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl: string = 'http://localhost:9000/insolvencias/cliente';

  constructor(private _http: HttpClient) {}

  getAllClientes() : Observable<Cliente[]> {
    return this._http.get<Cliente[]>(this.apiUrl);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this._http.post<Cliente>(this.apiUrl, cliente);
  }

  getCliente(id: number | null): Observable<Cliente> {
    return this._http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this._http.put<Cliente>(this.apiUrl, cliente);
  }

  deleteCliente(id: number | null): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }

}
