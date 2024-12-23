import { Component } from '@angular/core';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
    selector: 'app-honorarios',
    standalone: false,
    templateUrl: './honorarios.component.html',
    styleUrl: './honorarios.component.css'
})
export class HonorariosComponent {

  public tarifas: Tarifa[] = [];
  public tarifanew: Tarifa = new Tarifa(null,0,0,0,0,0);
  public tarifupdate: Tarifa = new Tarifa(null,0,0,0,0,0);
  public showToast = false;
  public success = false;
  public error = false;
  public successMessage: string = "";
  public errorMessage: string = "";
  constructor(private _tarifaService : TarifaService) { }

  ngOnInit() {
    this.getHonorarios();
  }

  getHonorarios() {
        this._tarifaService.getAllTarifas().subscribe(
            data => {
                this.tarifas = data;
            },
            error => {
                console.log(error);
            }
        );
  }

  getTarifa(id: number) {
    this._tarifaService.getTarifa(id).subscribe(
      data => {
        this.tarifupdate = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  crearHonorario() {
    this._tarifaService.crearTarifa(this.tarifanew).subscribe(
      data => {
        this.showToast = true;
        this.success = true;
        this.successMessage = "Tarifa creada correctamente";
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.tarifanew = new Tarifa(null,0,0,0,0,0);
        this.getHonorarios();
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
        this.tarifanew = new Tarifa(null,0,0,0,0,0);
      }
    );
  }

  updateTarifa() {
    this._tarifaService.updateTarifa(this.tarifupdate).subscribe(
      data => {
        this.showToast = true;
        this.success = true;
        this.successMessage = "Tarifa actualizada correctamente";
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.getHonorarios();
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

  deleteTarifa() {
    this._tarifaService.deleteTarifa(this.tarifupdate.id).subscribe(
      data => {
        this.showToast = true;
        this.success = true;
        this.successMessage = "Tarifa eliminada correctamente";
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.getHonorarios();
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

  hideToast() {
    this.showToast = false;
    this.error = false;
    this.success = true;
  }
}
