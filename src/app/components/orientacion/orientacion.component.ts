import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acreedor } from 'src/app/models/acreedor';
import { BienesInmueble } from 'src/app/models/bienes-inmueble';
import { BienesMueble } from 'src/app/models/bienes-mueble';
import { Causa } from 'src/app/models/causa';
import { Cliente } from 'src/app/models/cliente';
import { GastosManutencion } from 'src/app/models/gastos-manutencion';
import { InsolvenciaProducto } from 'src/app/models/insolvencia-producto';
import { Producto } from 'src/app/models/producto';
import { AcreedorService } from 'src/app/services/acreedor.service';
import { CausaService } from 'src/app/services/causa.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-orientacion',
    standalone: false,
    templateUrl: './orientacion.component.html',
    styleUrl: './orientacion.component.css'
})
export class OrientacionComponent implements OnInit {
  id: number | null = null;
  cliente : Cliente = new Cliente(null,"","","","","","","",false,0,0);
  causas : Causa[] = [];
  causasInsolvencia : Causa[] = [];
  acreedores : Acreedor[] = [];
  productosInsolvencia : InsolvenciaProducto[] = [];
  productos: Producto[] = [];
  gastos:GastosManutencion = new GastosManutencion(null,0,0,0,0,0,0,0,0,0,0,0,0,0);
  muebles: BienesMueble[] = [];
  mueble : BienesMueble = new BienesMueble(null,"","",0,"");
  inmuebles: BienesInmueble[] = [];
  inmueble : BienesInmueble = new BienesInmueble(null,"","","",0,"");
  insolvenciaProducto: InsolvenciaProducto = {
    id: null,
    nombre: '',
    acreedor: {
      id: null,
      nombre: ''
    },
    valorDeuda: 0,
    diasMora: 0
  };

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClienteService,
    private _causaService: CausaService,
    private _productoService: ProductoService,
    private _acreedorService: AcreedorService) {}

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


  volver(){
    this._router.navigate(["/cliente"]);
  }

  generar(){
    this._router.navigate(["/cliente"]);
  }

  agregarProducto(){
    this.productos.forEach(producto => {
      if(producto.id == this.insolvenciaProducto.id){
        this.insolvenciaProducto.id = producto.id;
        this.insolvenciaProducto.nombre = producto.nombre;
      }
    });
    this.productosInsolvencia.push(this.insolvenciaProducto);

    this.insolvenciaProducto = {
      id: null,
      nombre: '',
      acreedor: {
        id: null,
        nombre: ''
      },
      valorDeuda: 0,
      diasMora: 0
    };
  };

  listProductosByAcreedor(id: number | null){
    this.acreedores.forEach(acreedor => {
      if(acreedor.id == id){
        this.insolvenciaProducto.acreedor = acreedor;
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

  elminiarProducto(index: number){
    this.productosInsolvencia.splice(index, 1);
  }

}
