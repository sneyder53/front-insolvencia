export class Judicial {
  constructor(
    public id: number | null,
    public juzgado: string,
    public radicado: string,
    public demandante: string,
    public tipoProceso: string,
  ) {}
}
