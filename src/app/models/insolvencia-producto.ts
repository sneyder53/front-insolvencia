import { Producto } from "./producto";

export interface InsolvenciaProducto {
  id: number | null;
  insolvenciaId: number | null;
  productoId: Producto;
  valorDeuda: number;
  diasMora: number;
}
