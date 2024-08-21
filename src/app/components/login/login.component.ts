import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private _route: ActivatedRoute,
    private _router: Router){

    }
  ngOnInit(): void {

  }
  iniciar(){
    this._router.navigate(["/home"]);
  }
}
