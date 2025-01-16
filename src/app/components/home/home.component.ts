import { Component, OnInit } from '@angular/core';
import { Insolvencia } from 'src/app/models/insolvencia';
import { InsolvenciaService } from 'src/app/services/insolvencia.service';

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  insolvencias : Insolvencia [] = [];

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



}
