import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AcreedoresComponent } from './components/acreedores/acreedores.component';
import { OrientacionComponent } from './components/orientacion/orientacion.component';
import { CausasComponent } from './components/causas/causas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HonorariosComponent } from './components/honorarios/honorarios.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
	{path: 'home', component: HomeComponent },
  {path: 'cliente', component: ClientesComponent},
  {path: 'acreedor', component: AcreedoresComponent},
  {path:'producto',component: ProductosComponent},
  {path: 'causa', component: CausasComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'honorario', component: HonorariosComponent},
  {path: 'orientacion/:id',component:OrientacionComponent},
  {path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
