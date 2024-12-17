import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioCambio } from 'src/app/models/usuario-cambio';
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
  public confimapassword: string = "";
  public usuario: Usuario = new Usuario(null,"","","","","",false,null);
  public usuario1: Usuario = new Usuario(null,"","","","","",false,null);
  public usuarioCambioPassword: UsuarioCambio = {cedula: "",password: "", newPassword: "", confirmPassword: ""}
  public showToast = false;
  public success = false;
  public error = false;
  public successMessage: string = "";
  public errorMessage: string = "";
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

  getUsuario(id:number|null){
    const token:Token = this._authService.getToken()
    console.log("token: " +  token.token)

    this._userService.getUsuario(token,id).subscribe(
      response => {
        this.usuario1 = response
        this.usuarioCambioPassword.cedula = response.cedula
        console.log("usuario: " + this.usuario1)
      }
    );
  }


  crearUsuario(){
    this._authService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log(response);
        this.successMessage = response.message;
        this.showToast = true;
        this.success = true;
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.getAllusuarios()
        this.usuario = new Usuario(null,"","","","","",false,null);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.showToast = true;
        this.error = true;
        setTimeout(() => {
          this.showToast = false;
          this.error = false;
        }, 3000);
        this.usuario = new Usuario(null,"","","","","",false,null);
      }
    );
  }

  cambiarPassoword(){
    const token:Token = this._authService.getToken()
    console.log("token: " +  token.token)
    this._userService.cambioPassword(token, this.usuarioCambioPassword).subscribe(
      response => {
        console.log(response);
        this.successMessage = response.message;
        this.showToast = true;
        this.success = true;
        setTimeout(() => {
          this.showToast = false;
          this.success = false;
        }, 3000);
        this.usuarioCambioPassword = {cedula: "",password: "", newPassword: "", confirmPassword: ""}
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.showToast = true;
        this.error = true;
        setTimeout(() => {
          this.showToast = false;
          this.error = false;
        }, 3000);
        this.usuarioCambioPassword = {cedula: "",password: "", newPassword: "", confirmPassword: ""}
      }
    );
  }

  confirmacionPassword(password:string, confirmpassword:string): boolean {
    return password=== confirmpassword;
  }

  hideToast() {
    this.showToast = false;
    this.error = false;
    this.success = true;
  }

}
