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
}
