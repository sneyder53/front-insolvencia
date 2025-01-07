export class GastosManutencion {
  constructor(
    public id: number | null,
    public energia: number,
    public agua: number,
    public gas: number,
    public telecomunicaciones: number,
    public television: number,
    public arriendo: number,
    public administracion: number,
    public salud: number,
    public seguros: number,
    public alimentacion: number,
    public educacion: number,
    public transporte: number,
    public otros: number
  ){}
}
