export class Usuario {
  constructor(
    public id: number | null,
    public cedula: string,
    public username: string,
    public nombresyapellidos: string,
    public email: string,
    public password: string,
    public estado: boolean,
    public role: string | null
  ){}
}
