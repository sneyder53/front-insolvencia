import { CategoriaProducto } from "./categoria-producto.enum";

export interface ProductoInterface {
  id: number | null;
  nombre: string;
  categoria: CategoriaProducto | null;
  acreedor: {
    id: number | null;
    nombre: string;
  };
}
