import { Acreedor } from "./acreedor";

export class Producto {
  constructor(
    public id: string | null,
    public nombre:String,
    public acreedor: Acreedor,
  ){}
}
