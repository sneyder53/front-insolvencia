export interface InsolvenciaProducto {
  id: number | null;
  nombre: string;
  acreedor: {
    id: number | null;
    nombre: string;
  };
  valorDeuda: number;
  diasMora: number;
}
