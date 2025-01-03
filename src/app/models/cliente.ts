export class Cliente {
  constructor(
    public id: number | null,
    public identificacion: string,
    public nombres: string,
    public apellidos: string,
    public email: string,
    public direccion: string,
    public telefono: string,
    public profesion: string,
    public camaraComercio: boolean,
    public ingresos: number,
    public descuentos: number,
  ){}
}
