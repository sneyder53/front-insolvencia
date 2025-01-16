export class GastosManutencion {
  constructor(
    public id: number | null,
    public energia: number,
    public aguaalcantarilladoaseo: number,
    public gas: number,
    public telecomunicacion: number,
    public television: number,
    public arriendo: number,
    public administracion: number,
    public salud: number,
    public seguro: number,
    public alimentacion: number,
    public educacion: number,
    public transporte: number,
    public otros: number
  ){}
}
