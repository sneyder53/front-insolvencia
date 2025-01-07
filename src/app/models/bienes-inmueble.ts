export class BienesInmueble {
  constructor(
    public id: number | null,
    public tipo: string,
    public direccion: string,
    public matricula : string,
    public valor: number,
    public afectacion: string,
  ) {}
}

