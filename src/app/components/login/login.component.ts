import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/models/usuario-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public usuariologin: UsuarioLogin = { username:'', password:''};
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService){

    }
  ngOnInit(): void {

  }
  iniciar(){
    console.log(this.usuariologin)
    this._authService.login(this.usuariologin).subscribe(
      (response)=>{

        localStorage.setItem('token', JSON.stringify(response));
        this._router.navigate(["/home"]);
      },
      (error)=>{
        const errorMessage = error?.error?.message;
          console.error('Error al iniciar sesion:', errorMessage);
      }
    );


  }
}
