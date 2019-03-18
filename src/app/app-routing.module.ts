import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './core/guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UsuarioListaComponent} from './components/usuario/usuario-lista/usuario-lista.component';
import {PersonaListaComponent} from './components/persona/persona-lista/persona-lista.component';
import {UsuariosDetaListaComponent} from './components/usuarios-deta/usuarios-deta-lista/usuarios-deta-lista.component';
import {VehiculoListaComponent} from './components/vehiculo/vehiculo-lista/vehiculo-lista.component';
import {TipoIdentificacionListaComponent} from './components/tipo-identificacion/tipo-identificacion-lista/tipo-identificacion-lista.component';
import {EmpresaListaComponent} from './components/empresa/empresa-lista/empresa-lista.component';
import {ItemListaComponent} from './components/item/item-lista/item-lista.component';
import {FormaPagoListaComponent} from './components/forma-pago/forma-pago-lista/forma-pago-lista.component';
import {TipoDocumentoListaComponent} from './components/tipo-documento/tipo-documento-lista/tipo-documento-lista.component';
import {FormaCancelacionListaComponent} from './components/forma-cancelacion/forma-cancelacion-lista/forma-cancelacion-lista.component';
import {ComprobanteListaComponent} from './components/comprobante/comprobante-lista/comprobante-lista.component';
import {CrearComprobanteComponent} from './components/comprobante/crear-comprobante/crear-comprobante.component';
import {ActualizarComprobanteComponent} from './components/comprobante/actualizar-comprobante/actualizar-comprobante.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'session',
        loadChildren: './session/session.module#SessionModule',
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
            },
            {
                path: 'administracion', redirectTo: 'administracion/usuarios'
            },
            {
                path: 'administracion/usuarios', component: UsuarioListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'administracion/personas', component: PersonaListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'administracion/usuarios-deta', component: UsuariosDetaListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion', redirectTo: 'configuracion/vehiculos'
            },
            {
                path: 'configuracion/vehiculos', component: VehiculoListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion/tipos-identificacion', component: TipoIdentificacionListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion/empresas', component: EmpresaListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion/productos', component: ItemListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion/formas-de-pago', component: FormaPagoListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion/tipos-de-documentos', component: TipoDocumentoListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'configuracion/formas-de-cancelacion', component: FormaCancelacionListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'comprobantes', component: ComprobanteListaComponent, canActivate: [AuthGuard]
            },
            {
                path: 'comprobantes/crear', component: CrearComprobanteComponent, canActivate: [AuthGuard]
            },
            {
                path: 'comprobantes/:id/actualizar', component: ActualizarComprobanteComponent, canActivate: [AuthGuard]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {
}
