import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

import { AcreedoresComponent } from './components/acreedores/acreedores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CausasComponent } from './components/causas/causas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { HonorariosComponent } from './components/honorarios/honorarios.component';
import { LoginComponent } from './components/login/login.component';
import { OrientacionComponent } from './components/orientacion/orientacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    AcreedoresComponent,
    NavbarComponent,
    CausasComponent,
    ClientesComponent,
    HomeComponent,
    HonorariosComponent,
    LoginComponent,
    OrientacionComponent,
    ProductosComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterLink,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useValue: {
          tokenGetter: () => {
            return localStorage.getItem('access_token');
          },
          allowedDomains: ["example.com"],
          disallowedRoutes: ["example.com/examplebadroute/"],
        }
      }
    })
  ],
  providers: [
    provideHttpClient(),
    JwtHelperService
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
