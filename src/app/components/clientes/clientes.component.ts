import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  orientacion(id:any){
    this._router.navigate(["/orientacion",id]);
  }

}
