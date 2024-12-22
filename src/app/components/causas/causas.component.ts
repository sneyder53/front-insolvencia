import { Component } from '@angular/core';
import { Causa } from 'src/app/models/causa';
import { CausaService } from 'src/app/services/causa.service';

@Component({
    selector: 'app-causas',
    standalone: false,
    templateUrl: './causas.component.html',
    styleUrl: './causas.component.css'
})
export class CausasComponent {

    constructor(private _causaService: CausaService) { }

    causas: Causa[] = [];
    causaNew: Causa = new Causa(null, '');
    causaUpdate: Causa = new Causa(null, '');

    public showToast = false;
  public success = false;
  public error = false;
  public successMessage: string = "";
  public errorMessage: string = "";

    ngOnInit(): void {
        this.getAllCausas();
    }

    getAllCausas(): void {
        this._causaService.getAllCausas().subscribe(
            (causas: Causa[]) => {
                this.causas = causas;
            }
        );
    }

    getCausa(id:number): void {
        this._causaService.getCausa(id).subscribe(
            (response) => {
                this.causaUpdate = response;
            }
        );

    }

    crearCausa(): void {
        this._causaService.crearCausa(this.causaNew).subscribe(
            (response) => {
              this.showToast = true;
              this.success = true;
              this.successMessage = "Causa creada correctamente";
              setTimeout(() => {
                this.showToast = false;
                this.success = false;
              }, 3000);
              this.getAllCausas()
              this.causaNew = new Causa(null, '');
            },
            (error) => {
              this.showToast = true;
              this.error = true;
              this.errorMessage = error.error.message;
              setTimeout(() => {
                this.showToast = false;
                this.error = false;
              }, 3000);
              this.causaNew = new Causa(null, '');
            }
        );
    }

    updateCausa(){
      this._causaService.updateCausa(this.causaUpdate).subscribe(
        (response) => {
          this.showToast = true;
          this.success = true;
          this.successMessage = "Causa actualizada correctamente";
          setTimeout(() => {
            this.showToast = false;
            this.success = false;
          }, 3000);
          this.getAllCausas()
          this.causaUpdate = new Causa(null, '');
        },
        (error) => {
          this.showToast = true;
          this.error = true;
          this.errorMessage = error.error.message;
          setTimeout(() => {
            this.showToast = false;
            this.error = false;
          }, 3000);
          this.causaUpdate = new Causa(null, '');
        }
      );

    }

    deleteCausa(): void {
        this._causaService.deleteCausa(this.causaUpdate.id).subscribe(
            (response) => {
              this.showToast = true;
              this.success = true;
              console.log(response);
              this.successMessage = "Causa eliminada correctamente";
              setTimeout(() => {
                this.showToast = false;
                this.success = false;
              }, 3000);
              this.getAllCausas()
            },
            (error) => {
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
