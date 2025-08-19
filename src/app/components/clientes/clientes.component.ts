import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import html2pdf from 'html2pdf.js';

@Component({
    selector: 'app-clientes',
    standalone: false,
    templateUrl: './clientes.component.html',
    styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];
  public cliente: Cliente = new Cliente(null, "","","","","", "", "", "", "", "", false,false, 0, 0);
  public clienteNew: Cliente = new Cliente(null, "","","","","", "", "", "", "", "", false,false, 0, 0);
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
      this.clienteNew = new Cliente(null, "","","","","", "", "", "", "", "", false, false, 0, 0);
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
      this.clienteNew = new Cliente(null, "","","","", "", "", "", "", "", "", false,false, 0, 0);
    });
  }

  autorizacion(){
      const element = document.querySelector('#AutorizacionModal .modal-body');
      if (element) {
        html2pdf().set({
          margin: 10,
          filename: 'Autorizacion-insolvencia.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
        }).from(element as HTMLElement).save();
      }
    }

  hideToast() {
    this.showToast = false;
    this.error = false;
    this.success = true;
  }

}
