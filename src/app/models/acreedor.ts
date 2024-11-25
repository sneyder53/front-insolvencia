import { Producto } from "./producto";

export class Acreedor {
  constructor(
    public id: string | null,
    public nombre: string,
    public productos : Producto[]
  ){}
}
