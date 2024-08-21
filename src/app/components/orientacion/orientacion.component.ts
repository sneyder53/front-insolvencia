import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orientacion',
  standalone: true,
  imports: [],
  templateUrl: './orientacion.component.html',
  styleUrl: './orientacion.component.css'
})
export class OrientacionComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router){

  }

  ngOnInit(): void {

  }

  volver(){
    this._router.navigate(["/cliente"]);
  }

}
