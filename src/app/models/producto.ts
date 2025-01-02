import { Acreedor } from "./acreedor";

export class Producto {
  constructor(
    public id: number | null,
    public nombre:string,
    public acreedor: Acreedor,
  ){}
}
