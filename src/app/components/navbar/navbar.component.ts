import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink} from "@angular/router"
import { AuthService } from "src/app/services/auth.service";
@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private _route: ActivatedRoute,
      private _router: Router,
      private _authService:AuthService){}

  salir(){
    this._authService.logout()
    this._router.navigate(["/"]);
  }

}
