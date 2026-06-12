import { Acreedor } from "./acreedor";
import { CategoriaProducto } from "./categoria-producto.enum";

export class Producto {
  constructor(
    public id: number | null,
    public nombre:string,
    public categoria: CategoriaProducto,
    public acreedor: Acreedor,
  ){}
}
