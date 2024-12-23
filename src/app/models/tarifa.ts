export class Tarifa {
  constructor(
    public id: number | null,
    public rangoMenor: number,
    public rangoMayor: number,
    public honorarios: number,
    public numeroCuotas: number,
    public porcentaje: number,
  ){}
}
