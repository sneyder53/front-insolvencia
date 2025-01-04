import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Producto } from '../models/producto';
import { ProductoInterface } from '../models/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl: string = 'http://localhost:9000/insolvencias/producto';
  constructor(private _http: HttpClient) { }

  getAllProductos(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this.apiUrl);
  }

  getAllProductosByAcreedor(id: number | null): Observable<Producto[]> {
    return this._http.get<Producto[]>(`${this.apiUrl}/acreedor/${id}`);
  }

  getProducto(id: number | null): Observable<Producto> {
    return this._http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  crearProducto(producto: ProductoInterface): Observable<Producto> {
    return this._http.post<Producto>(this.apiUrl, producto);
  }

  updateProducto(producto: ProductoInterface): Observable<Producto> {
    return this._http.put<Producto>(this.apiUrl, producto);
  }

  deleteProducto(id: number | null): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
