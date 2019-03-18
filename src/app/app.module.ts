import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import {PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Ng5BreadcrumbModule, BreadcrumbService} from 'ng5-breadcrumb';
import {DeviceDetectorModule, DeviceDetectorService} from 'ngx-device-detector';
import {TourMatMenuModule} from 'ngx-tour-md-menu';
import {ToastrModule} from 'ngx-toastr';


import {RoutingModule} from './app-routing.module';

import {AuthService} from './service/auth-service/auth.service';
import {PageTitleService} from './core/page-title/page-title.service';
import {D3ChartService} from './core/nvD3/nvD3.service';

import {GeneAppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MenuToggleModule} from './core/menu/menu-toggle.module';
import {MenuItems} from './core/menu/menu-items/menu-items';
import {AuthGuard} from './core/guards/auth.guard';
import {HorizontalMenuItems} from './core/menu/horizontal-menu-items/horizontal-menu-items';

import {MaterialModule} from './custom-modules/material.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HttpInterceptorService} from './service/http-interceptor.service';
import {ConfirmDeleteDialogComponent} from './dialog/confirm-delete/confirm-delete-dialog';
import {PersonaCreateDialogComponent} from './dialog/persona/persona-create/persona-create-dialog';
import {EmpresaCreateDialogComponent} from './dialog/empresa/empresa-create/empresa-create-dialog';
import {UsuarioCreateDialogComponent} from './dialog/usuario/usuario-create/usuario-create-dialog';
import {UsuarioDetaCreateDialogComponent} from './dialog/usuarioDeta/usuarioDeta-create/usuarioDeta-create-dialog';
import {ItemCreateDialogComponent} from './dialog/item/item-create/item-create-dialog';
import {VehiculoCreateDialogComponent} from './dialog/vehiculo/vehiculo-create/vehiculo-create-dialog';
import {FormaDePagoCreateDialogComponent} from './dialog/formaDePago/formaDePago-create/formaDePago-create-dialog';
import {IdentificationTypeCreateDialogComponent} from './dialog/identificationType/identificationType-create/identificationType-create-dialog';
import {DocumentoCreateDialogComponent} from './dialog/documento/documento-create/documento-create-dialog';
import {CancelacionCreateDialogComponent} from './dialog/cancelacion/cancelacion-create/cancelacion-create-dialog';
import {IdentificationTypeEditDialogComponent} from './dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import {PersonaEditDialogComponent} from './dialog/persona/persona-edit/persona-edit-dialog';
import {EmpresaEditDialogComponent} from './dialog/empresa/empresa-edit/empresa-edit-dialog';
import {UsuarioDetaEditDialogComponent} from './dialog/usuarioDeta/usuarioDeta-edit/usuarioDeta-edit-dialog';
import {ItemEditDialogComponent} from './dialog/item/item-edit/item-edit-dialog';
import {VehiculoEditDialogComponent} from './dialog/vehiculo/vehiculo-edit/vehiculo-edit-dialog';
import {FormDePagoEditDialogComponent} from './dialog/formaDePago/formDePago-edit/formaDePago-edit-dialog';
import {UsuarioEditComponent} from './dialog/usuario/usuario-edit/usuario-edit.component';
import {DocumentoEditDialogComponent} from './dialog/documento/documento-edit/documento-edit-dialog';
import {CancelacionEditDialogComponent} from './dialog/cancelacion/cancelacion-edit/cancelacion-edit-dialog';
import {PersonaComprobanteDetailsComponent} from './dialog/persona/persona-comprobante-details/persona-comprobante-details.component';
import {ItemComprobanteDetallesComponent} from './dialog/item/item-comprobante-detalles/item-comprobante-detalles.component';
import {PersonaVehiculoDialogComponent} from './dialog/persona/persona-vehiculo-dialog/persona-vehiculo-dialog.component';
import {CdkTableModule} from '@angular/cdk/table';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';
import { UsuarioDatatableComponent } from './components/usuario/usuario-datatable/usuario-datatable.component';
import { PersonaDatatableComponent } from './components/persona/persona-datatable/persona-datatable.component';
import { PersonaListaComponent } from './components/persona/persona-lista/persona-lista.component';
import { UsuariosDetaListaComponent } from './components/usuarios-deta/usuarios-deta-lista/usuarios-deta-lista.component';
import { UsuariosDetaDatatableComponent } from './components/usuarios-deta/usuarios-deta-datatable/usuarios-deta-datatable.component';
import { VehiculoDatatableComponent } from './components/vehiculo/vehiculo-datatable/vehiculo-datatable.component';
import { VehiculoListaComponent } from './components/vehiculo/vehiculo-lista/vehiculo-lista.component';
import { TipoIdentificacionListaComponent } from './components/tipo-identificacion/tipo-identificacion-lista/tipo-identificacion-lista.component';
import { TipoIdentificacionDatatableComponent } from './components/tipo-identificacion/tipo-identificacion-datatable/tipo-identificacion-datatable.component';
import { EmpresaListaComponent } from './components/empresa/empresa-lista/empresa-lista.component';
import { EmpresaDatatableComponent } from './components/empresa/empresa-datatable/empresa-datatable.component';
import { ItemListaComponent } from './components/item/item-lista/item-lista.component';
import { ItemDatatableComponent } from './components/item/item-datatable/item-datatable.component';
import { FormaPagoListaComponent } from './components/forma-pago/forma-pago-lista/forma-pago-lista.component';
import { FormaPagoDatatableComponent } from './components/forma-pago/forma-pago-datatable/forma-pago-datatable.component';
import { TipoDocumentoListaComponent } from './components/tipo-documento/tipo-documento-lista/tipo-documento-lista.component';
import { TipoDocumentoDatatableComponent } from './components/tipo-documento/tipo-documento-datatable/tipo-documento-datatable.component';
import { FormaCancelacionListaComponent } from './components/forma-cancelacion/forma-cancelacion-lista/forma-cancelacion-lista.component';
import { FormaCancelacionDatatableComponent } from './components/forma-cancelacion/forma-cancelacion-datatable/forma-cancelacion-datatable.component';
import { ComprobanteListaComponent } from './components/comprobante/comprobante-lista/comprobante-lista.component';
import { ComprobanteDatatableComponent } from './components/comprobante/comprobante-datatable/comprobante-datatable.component';
import { ComprobanteFormularioComponent } from './components/comprobante/comprobante-formulario/comprobante-formulario.component';
import { ActualizarComprobanteComponent } from './components/comprobante/actualizar-comprobante/actualizar-comprobante.component';
import { CrearComprobanteComponent } from './components/comprobante/crear-comprobante/crear-comprobante.component';
import {CustomPipesModule} from './custom-pipes/custom-pipes.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DeviceDetectorModule.forRoot(),
        RoutingModule,
        FlexLayoutModule,
        NgbModalModule,
        Ng5BreadcrumbModule.forRoot(),
        TourMatMenuModule.forRoot(),
        PerfectScrollbarModule,
        MenuToggleModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ToastrModule.forRoot(),
        MaterialModule,
        CdkTableModule,
        CustomPipesModule
    ],
    declarations: [
        GeneAppComponent,
        MainComponent,
        DashboardComponent,
        // Generic
        ConfirmDeleteDialogComponent,
        // Persona
        PersonaCreateDialogComponent,
        PersonaEditDialogComponent,
        PersonaVehiculoDialogComponent,
        // Empresa
        EmpresaCreateDialogComponent,
        EmpresaEditDialogComponent,
        // Usuario
        UsuarioCreateDialogComponent,
        UsuarioEditComponent,
        // Usuario Deta
        UsuarioDetaCreateDialogComponent,
        UsuarioDetaEditDialogComponent,
        // Item
        ItemCreateDialogComponent,
        ItemEditDialogComponent,
        // Vehiculo
        VehiculoCreateDialogComponent,
        VehiculoEditDialogComponent,
        // Forma de Pago
        FormaDePagoCreateDialogComponent,
        FormDePagoEditDialogComponent,
        // Tipos de Identificacion
        IdentificationTypeCreateDialogComponent,
        IdentificationTypeEditDialogComponent,
        // Documento
        DocumentoCreateDialogComponent,
        DocumentoEditDialogComponent,
        // Formas de Cancelacion
        CancelacionCreateDialogComponent,
        CancelacionEditDialogComponent,
        // Comprobantes
        PersonaComprobanteDetailsComponent,
        ItemComprobanteDetallesComponent,
        UsuarioListaComponent,
        UsuarioDatatableComponent,
        PersonaDatatableComponent,
        PersonaListaComponent,
        UsuariosDetaListaComponent,
        UsuariosDetaDatatableComponent,
        VehiculoDatatableComponent,
        VehiculoListaComponent,
        TipoIdentificacionListaComponent,
        TipoIdentificacionDatatableComponent,
        EmpresaListaComponent,
        EmpresaDatatableComponent,
        ItemListaComponent,
        ItemDatatableComponent,
        FormaPagoListaComponent,
        FormaPagoDatatableComponent,
        TipoDocumentoListaComponent,
        TipoDocumentoDatatableComponent,
        FormaCancelacionListaComponent,
        FormaCancelacionDatatableComponent,
        ComprobanteListaComponent,
        ComprobanteDatatableComponent,
        ComprobanteFormularioComponent,
        ActualizarComprobanteComponent,
        CrearComprobanteComponent,
    ],
    bootstrap: [GeneAppComponent],
    providers: [
        {
            provide: 'API_URL',
            // useValue: 'http://code.rociosoft.com:8000/'
            useValue: 'http://localhost:8000/'

        },
        D3ChartService,
        MenuItems,
        HorizontalMenuItems,
        BreadcrumbService,
        PageTitleService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        },
        AuthGuard
    ],
    entryComponents: [
        // Generic
        ConfirmDeleteDialogComponent,
        // Persona
        PersonaCreateDialogComponent,
        PersonaEditDialogComponent,
        PersonaVehiculoDialogComponent,
        // Empresa
        EmpresaCreateDialogComponent,
        EmpresaEditDialogComponent,
        // Usuario
        UsuarioCreateDialogComponent,
        UsuarioEditComponent,
        // Usuario Deta
        UsuarioDetaCreateDialogComponent,
        UsuarioDetaEditDialogComponent,
        // Item
        ItemCreateDialogComponent,
        ItemEditDialogComponent,
        // Vehiculo
        VehiculoCreateDialogComponent,
        VehiculoEditDialogComponent,
        // Forma de Pago
        FormaDePagoCreateDialogComponent,
        FormDePagoEditDialogComponent,
        // Tipos de Identificacion
        IdentificationTypeCreateDialogComponent,
        IdentificationTypeEditDialogComponent,
        // Documento
        DocumentoCreateDialogComponent,
        DocumentoEditDialogComponent,
        // Formas de Cancelacion
        CancelacionCreateDialogComponent,
        CancelacionEditDialogComponent,
        // Comprobantes
        PersonaComprobanteDetailsComponent,
        ItemComprobanteDetallesComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeneAppModule {
}
