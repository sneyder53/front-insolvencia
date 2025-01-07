export class BienesMueble {
  constructor(
    public id: number | null,
    public tipo: string,
    public numero: string,
    public valor: number,
    public afectacion: string,
  ) {}
}
