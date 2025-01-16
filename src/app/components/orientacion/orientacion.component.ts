import { Judicial } from './../../models/judicial';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acreedor } from 'src/app/models/acreedor';
import { BienesInmueble } from 'src/app/models/bienes-inmueble';
import { BienesMueble } from 'src/app/models/bienes-mueble';
import { Causa } from 'src/app/models/causa';
import { Cliente } from 'src/app/models/cliente';
import { GastosManutencion } from 'src/app/models/gastos-manutencion';
import { Insolvencia } from 'src/app/models/insolvencia';
import { InsolvenciaProducto } from 'src/app/models/insolvencia-producto';
import { Producto } from 'src/app/models/producto';
import { AcreedorService } from 'src/app/services/acreedor.service';
import { CausaService } from 'src/app/services/causa.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { InsolvenciaService } from 'src/app/services/insolvencia.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-orientacion',
  standalone: false,
  templateUrl: './orientacion.component.html',
  styleUrl: './orientacion.component.css'
})
export class OrientacionComponent implements OnInit {
  id: number | null = null;
  cliente: Cliente = new Cliente(null, "", "", "", "", "", "", "", false,false, 0, 0);
  causas: Causa[] = [];
  causasInsolvencia: Causa[] = [];
  acreedores: Acreedor[] = [];
  productosInsolvencia: InsolvenciaProducto[] = [];
  productos: Producto[] = [];
  gastos: GastosManutencion = new GastosManutencion(null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  muebles: BienesMueble[] = [];
  mueble: BienesMueble = new BienesMueble(null, "", "", 0, false);
  inmuebles: BienesInmueble[] = [];
  inmueble: BienesInmueble = new BienesInmueble(null, "", "", "", 0, "");
  judicial: Judicial = new Judicial(null, "", "", "", "");
  judiciales: Judicial[] = [];
  insolvenciaProducto: InsolvenciaProducto = {
    id: null,
    insolvenciaId: null,
    productoId: {
      id: null,
      nombre: '',
      acreedor: {
        id: null,
        nombre: ''
      }
    },
    valorDeuda: 0,
    diasMora: 0
  };

  insolvencia: Insolvencia = new Insolvencia(null, "",this.productosInsolvencia,0, this.cliente, this.causasInsolvencia, this.gastos, 0, this.muebles, 0, this.inmuebles, 0, this.judiciales, 0, 0);

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClienteService,
    private _causaService: CausaService,
    private _productoService: ProductoService,
    private _acreedorService: AcreedorService,
    private _insolvenciaService: InsolvenciaService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCliente();
    this.getAllCausas();
    this.getAllAcreedores();
  }

  getCliente() {
    this._clienteService.getCliente(this.id).subscribe(
      response => {
        this.cliente = response;
        console.log(response)
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllCausas() {
    this._causaService.getAllCausas().subscribe(
      response => {
        this.causas = response;
      },
      error => {
        console.log(error);
      });
  }

  getAllAcreedores() {
    this._acreedorService.getAllAcreedores().subscribe(
      response => {
        this.acreedores = response;
      },
      error => {
        console.log(error);
      });
  }

  onCheckboxChange(event: any): void {
    console.log(event.target.id);
    const causa: Causa = new Causa(event.target.id, event.target.name);
    if (event.target.checked) {
      this.causasInsolvencia.push(causa);
    } else {
      const index = this.causasInsolvencia.findIndex(c => c.id === causa.id);
      if (index !== -1) {
        this.causasInsolvencia.splice(index, 1);
      }
    }

    console.log(this.causasInsolvencia);
  }


  volver() {
    this._router.navigate(["/cliente"]);
  }

  guardarOrientacion() {
    this.insolvencia.cliente = this.cliente;
    this.insolvencia.causas = this.causasInsolvencia;
    this.insolvencia.insolvenciaProductos = this.productosInsolvencia;
    this.insolvencia.bienesMuebles = this.muebles;
    this.insolvencia.bienesInmuebles = this.inmuebles;
    this.insolvencia.judicial = this.judiciales;
    this.insolvencia.gastosManutencion = this.gastos;
    this.insolvencia.estado = "ABIERTA";
    this._insolvenciaService.crearInsolvencia(this.insolvencia).subscribe(
      response => {
        console.log(response);
        this._router.navigate(["/home"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  agregarProducto() {
    this.productos.forEach(producto => {
      if (producto.id == this.insolvenciaProducto.productoId.id) {
        this.insolvenciaProducto.productoId.id = producto.id;
        this.insolvenciaProducto.productoId.nombre = producto.nombre;
      }
    });
    this.productosInsolvencia.push(this.insolvenciaProducto);

    this.insolvencia.totalProductos += Number(this.insolvenciaProducto.valorDeuda);
    this.insolvenciaProducto = {
      id: null,
      insolvenciaId: null,
      productoId: {
        id: null,
        nombre: '',
        acreedor: {
          id: null,
          nombre: ''
        }
      },
      valorDeuda: 0,
      diasMora: 0
    };
  };

  agregarMueble() {
    this.muebles.push(this.mueble);
    this.insolvencia.totalMuebles += Number(this.mueble.valor);
    this.mueble = new BienesMueble(null, "", "", 0, false);
  }

  agregarInmueble() {
    this.inmuebles.push(this.inmueble);
    this.insolvencia.totalInmuebles += Number(this.inmueble.valor);
    this.inmueble = new BienesInmueble(null, "", "", "", 0, "");
  }

  agregarJudicial() {
    this.judiciales.push(this.judicial);
    this.judicial = new Judicial(null, "", "", "", "");
  }

  listProductosByAcreedor(id: number | null) {
    this.acreedores.forEach(acreedor => {
      if (acreedor.id == id) {
        this.insolvenciaProducto.productoId.acreedor = acreedor;
      }
    });
    this._productoService.getAllProductosByAcreedor(id).subscribe(
      response => {
        this.productos = response;
      },
      error => {
        console.log(error);
      });
  }

  calcularTotalGastosManutencion(): void {
    this.insolvencia.totalGastosManutencion = Object.values(this.gastos).reduce((total, valor) => total + (valor || 0), 0);
  }
  elminiarProducto(index: number) {
    this.insolvencia.totalProductos -= this.productosInsolvencia[index].valorDeuda;
    this.productosInsolvencia.splice(index, 1);
  }

  elminiarMueble(index: number) {
    this.insolvencia.totalMuebles -= this.muebles[index].valor;
    this.muebles.splice(index, 1);
  }

  elminiarInmueble(index: number) {
    this.insolvencia.totalInmuebles -= this.inmuebles[index].valor;
    this.inmuebles.splice(index, 1);
  }

  elminiarJudicial(index: number) {
    this.judiciales.splice(index, 1);
  }

}
