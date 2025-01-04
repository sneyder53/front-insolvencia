import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
    selector: 'app-clientes',
    standalone: false,
    templateUrl: './clientes.component.html',
    styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];
  public cliente: Cliente = new Cliente(null, "", "", "", "", "", "", "", false, 0, 0);
  public clienteNew: Cliente = new Cliente(null, "", "", "", "", "", "", "", false, 0, 0);
  public showToast = false;
  public success = false;
  public error = false;
  public successMessage: string = "";
  public errorMessage: string = "";
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _clienteService: ClienteService){
  }

  ngOnInit(): void {
    this.getAllClientes();
  }

  orientacion(id:any){
    this._router.navigate(["/orientacion",id]);
  }

  getAllClientes(){
    this._clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  getCliente(id: number | null){
    this._clienteService.getCliente(id).subscribe(data => {
      this.cliente = data;
    });
  }

  crearCliente(){
    this._clienteService.crearCliente(this.clienteNew).subscribe(data => {
      this.showToast = true;
      this.success = true;
      this.successMessage = "Cliente creado correctamente";
      setTimeout(() => {
        this.showToast = false;
        this.success = false;
      }, 3000);
      this.clienteNew = new Cliente(null, "", "", "", "", "", "", "", false, 0, 0);
      this.getAllClientes();
    },
    error => {
      console.log(error.error);
      this.showToast = true;
      this.error = true;
      this.errorMessage = error.error;
      setTimeout(() => {
        this.showToast = false;
        this.error = false;
      }, 3000);
      this.clienteNew = new Cliente(null, "", "", "", "", "", "", "", false, 0, 0);
    });
  }

  hideToast() {
    this.showToast = false;
    this.error = false;
    this.success = true;
  }

}
