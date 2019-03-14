import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IdentificationTypeListComponent} from './component/identificationType/identificationType-list/identificationType-list-component';
import {PersonaListComponent} from './component/persona/persona-list/persona-list-component';
import {EmpresaListComponent} from './component/empresa/empresa-list/empresa-list-component';
import {UsuarioListComponent} from './component/usuario/usuario-list/usuario-list-component';
import {UsuarioDetaListComponent} from './component/usuarioDeta/usuarioDeta-list/usuarioDeta-list-component';
import {ItemListComponent} from './component/item/item-list/item-list-component';
import {VehiculoListComponent} from './component/vehiculo/vehiculo-list/vehiculo-list-component';
import {FormaDePagoListComponent} from './component/formaDePago/formaDePago-list/fromaDePago-list-component';
import {HomeComponent} from './home/home-component';
import {DocumentoListComponent} from './component/documento/documento-list/documento-list-component';
import {CancelacionListComponent} from './component/cancelacion/cancelacion-list/cancelacion-list-component';
import {ComprobantesListaComponent} from './component/comprobante/comprobantes-lista/comprobantes-lista.component';
import {ComprobantesCreateComponent} from './component/comprobante/comprobantes-create/comprobantes-create.component';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {AuthGuardService} from './authentication/auth-guard/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'identification-types', component: IdentificationTypeListComponent, canActivate: [AuthGuardService]},
  {path: 'personas', component: PersonaListComponent, canActivate: [AuthGuardService]},
  {path: 'empresas', component: EmpresaListComponent, canActivate: [AuthGuardService]},
  {path: 'usuarios', component: UsuarioListComponent, canActivate: [AuthGuardService]},
  {path: 'usuarios-deta', component: UsuarioDetaListComponent, canActivate: [AuthGuardService]},
  {path: 'items', component: ItemListComponent, canActivate: [AuthGuardService]},
  {path: 'vehiculos', component: VehiculoListComponent, canActivate: [AuthGuardService]},
  {path: 'forma-de-pagos', component: FormaDePagoListComponent, canActivate: [AuthGuardService]},
  {path: 'documentos', component: DocumentoListComponent, canActivate: [AuthGuardService]},
  {path: 'formas-cancelacion', component: CancelacionListComponent, canActivate: [AuthGuardService]},
  {path: 'comprobantes', component: ComprobantesListaComponent, canActivate: [AuthGuardService]},
  {path: 'comprobantes/crear', component: ComprobantesCreateComponent, canActivate: [AuthGuardService]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
