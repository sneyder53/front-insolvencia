export class GastosManutencion {
  constructor(
    private id: number | null,
    private energia: number,
    private agua: number,
    private gas: number,
    private telecomunicaciones: number,
    private television: number,
    private arriendo: number,
    private administracion: number,
    private salud: number,
    private seguros: number,
    private alimentacion: number,
    private educacion: number,
    private transporte: number,
    private otros: number
  ){}
}
