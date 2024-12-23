export interface ProductoInterface {
  id: number | null;
  nombre: string;
  acreedor: {
    id: number;
  };
}
