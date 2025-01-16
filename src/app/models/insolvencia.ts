import { BienesInmueble } from "./bienes-inmueble";
import { BienesMueble } from "./bienes-mueble";
import { Causa } from "./causa";
import { Cliente } from "./cliente";
import { GastosManutencion } from "./gastos-manutencion";
import { InsolvenciaProducto } from "./insolvencia-producto";
import { Judicial } from "./judicial";

export class Insolvencia {
  constructor(
    public id: number | null,
    public estado: string,
    public insolvenciaProductos: InsolvenciaProducto[],
    public totalProductos: number,
    public cliente : Cliente,
    public causas : Causa[],
    public gastosManutencion : GastosManutencion,
    public totalGastosManutencion : number,
    public bienesMuebles : BienesMueble[],
    public totalMuebles : number,
    public bienesInmuebles : BienesInmueble[],
    public totalInmuebles : number,
    public judicial: Judicial[],
    public varloCuotaMensual: number,
    public tiempo: number,
  ) {}
}
