import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-usuario',
    standalone: false,
    templateUrl: './usuario.component.html',
    styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] = [];
   constructor(private _authService: AuthService,
    private _userService: UsuarioService
   ){}
  ngOnInit(): void {
    this.getAllusuarios()
  }

  getAllusuarios(){
    const token:Token = this._authService.getToken()
    console.log("token: " +  token.token)

    this._userService.gatAllusuarios(token).subscribe(
      response => {
        this.usuarios = response
        console.log("usuarios: " + this.usuarios)
      }
    );
  }

}
