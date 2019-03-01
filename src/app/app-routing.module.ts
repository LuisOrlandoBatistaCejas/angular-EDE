import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationTypeListComponent } from './component/identificationType/identificationType-list/identificationType-list-component';
import {PersonaListComponent} from './component/persona/persona-list/persona-list-component';
import {EmpresaListComponent} from './component/empresa/empresa-list/empresa-list-component';
import {UsuarioListComponent} from './component/usuario/usuario-list/usuario-list-component';
import {UsuarioDetaListComponent} from './component/usuarioDeta/usuarioDeta-list/usuarioDeta-list-component';
import {ItemListComponent} from './component/item/item-list/item-list-component';
import {VehiculoListComponent} from './component/vehiculo/vehiculo-list/vehiculo-list-component';
import {VehiculoPersonaListComponent} from './component/vehiculoPersona/vehiculoPersona-list/vehiculoPersona-list-component';
import {FormaDePagoListComponent} from './component/formaDePago/formaDePago-list/fromaDePago-list-component';
import {LoginComponent} from './login/login-component';
import {HomeComponent} from './home/home-component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'app', component: HomeComponent, children: [
      { path: 'identification-types', component: IdentificationTypeListComponent },
      { path: 'personas', component: PersonaListComponent },
      { path: 'empresas', component: EmpresaListComponent },
      { path: 'usuarios', component: UsuarioListComponent },
      { path: 'usuarios-deta', component: UsuarioDetaListComponent },
      { path: 'items', component: ItemListComponent },
      { path: 'vehiculos', component: VehiculoListComponent },
      { path: 'vehiculo-personas', component: VehiculoPersonaListComponent },
      { path: 'forma-de-pagos', component: FormaDePagoListComponent }
    ]
  },
  { path: 'signup', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
