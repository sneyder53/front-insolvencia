import { Component, OnInit } from '@angular/core';
import { Insolvencia } from 'src/app/models/insolvencia';
import { InsolvenciaService } from 'src/app/services/insolvencia.service';
import html2pdf from 'html2pdf.js';
@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  insolvencias : Insolvencia [] = [];
  public insolvenciaUpdate: Insolvencia = new Insolvencia(null, "", [], 0, null, [], null, 0, [], 0, [], 0, [], 0, 0, 0, 0);
  public showToast = false;
  public success = false;
  public error = false;
  public successMessage: string = "";
  public errorMessage: string = "";

  constructor(private _insolvenciaService : InsolvenciaService){}
  ngOnInit(): void {
    this.getAllInsolvencias()
  }

  getAllInsolvencias(){
    this._insolvenciaService.getAllInsolvencias().subscribe(
      response => {
        this.insolvencias = response;
      }
    );
  }

  getInsolvenciaById(id: number) {
    this._insolvenciaService.getInsolvencia(id).subscribe(
      data => {
        this.insolvenciaUpdate = data;
      },
      error => {
        console.log(error);
        this.showToast = true;
        this.error = true;
        this.errorMessage = error.error.message;
        setTimeout(() => {
          this.showToast = false;
          this.error = false;
        }, 3000);
      }
    );
  }



  deleteInsolvencia() {
    this._insolvenciaService.deleteInsolvencia(this.insolvenciaUpdate.id).subscribe(
      data => {
        this.showToast = true;
        this.success = true;
        this.successMessage = "Tarifa eliminada correctamente";
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.getAllInsolvencias();
      },
      error => {
        console.log(error);
        this.showToast = true;
        this.error = true;
        this.errorMessage = error.error.message;
        setTimeout(() => {
          this.showToast = false;
          this.error = false;
        }, 3000);
      }
    );
  }

  printInsolvencia(){
    const element = document.querySelector('#DetalleInsolvencia .modal-body');
    if (element) {
      html2pdf().set({
        margin: 10,
        filename: (this.insolvenciaUpdate.cliente?.nombres || 'detalle') + '-insolvencia.pdf',
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
