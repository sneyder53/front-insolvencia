import { Component } from '@angular/core';
import { AcreedorService } from 'src/app/services/acreedor.service';
import { Acreedor } from 'src/app/models/acreedor';

@Component({
    selector: 'app-acreedores',
    standalone: false,
    templateUrl: './acreedores.component.html',
    styleUrl: './acreedores.component.css'
})
export class AcreedoresComponent {
  constructor( private _acreedorService: AcreedorService) { }
  acreedores: Acreedor[] = [];
  acreedorNew: Acreedor = new Acreedor(null, '');
  acreedorUpdate: Acreedor = new Acreedor(null, '');
  public showToast = false;
  public success = false;
  public error = false;
  public successMessage: string = "";
  public errorMessage: string = "";

  ngOnInit(): void {
    this.getAllAcreedores();
  }

  getAllAcreedores(): void {
    this._acreedorService.getAllAcreedores().subscribe(data => {
      this.acreedores = data;
    });
  }

  getAcreedor(id: number | null): void {
    this._acreedorService.getAcreedor(id).subscribe(data => {
      this.acreedorUpdate = data;
      console.log(data);
    });
  }

  crearAcreedor(): void {
    this._acreedorService.crearAcreedor(this.acreedorNew).subscribe(
      data => {
        console.log(data);
        this.showToast = true;
        this.success = true;
        this.successMessage = "Acrredor creado correctamente";
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.getAllAcreedores();
        this.acreedorNew = new Acreedor(null, '');
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
      this.acreedorNew = new Acreedor(null, '');
    }
    );
  }

  actualizarAcreedor(): void {
    this._acreedorService.updateAcreedor(this.acreedorUpdate).subscribe(data => {
      console.log(data);
      this.showToast = true;
      this.success = true;
      this.successMessage = "Acreedor actualizado correctamente";
      setTimeout(() => {
        this.showToast = false;
        this.success = false;
      }, 3000);
      this.getAllAcreedores();
      this.acreedorUpdate = new Acreedor(null, '');
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
      this.acreedorUpdate = new Acreedor(null, '');
    }
    );
  }

  deleteAcreedor(): void {
    this._acreedorService.deleteAcreedor(this.acreedorUpdate.id).subscribe(data => {
      console.log(data);
      this.showToast = true;
      this.success = true;
      this.successMessage = "Acreedor eliminado correctamente";
      setTimeout(() => {
        this.showToast = false;
        this.success = false;
      }, 3000);
      this.getAllAcreedores();
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
