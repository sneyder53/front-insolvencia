export class Cliente {
  constructor(
    public id: string | null,
    public identificacion: string,
    public nombres: string,
    public apellidos: string,
    public email: string,
    public direccion: string,
    public telefono: string
  ){}
}
