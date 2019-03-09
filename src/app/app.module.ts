import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import {MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';
import { MaterialModule } from './app.material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
// Components
import {IdentificationTypeListComponent} from './component/identificationType/identificationType-list/identificationType-list-component';
import {PersonaListComponent} from './component/persona/persona-list/persona-list-component';
import {EmpresaListComponent} from './component/empresa/empresa-list/empresa-list-component';

import {IdentificationTypeService} from './service/identificationType-service';
import {PersonaService} from './service/persona-service';
import {EmpresaService} from './service/empresa-service';
import {UsuarioService} from './service/usuario-service';
import {UsuarioDetaService} from './service/usuarioDeta-service';
import {UsuarioListComponent} from './component/usuario/usuario-list/usuario-list-component';
import {UsuarioDetaListComponent} from './component/usuarioDeta/usuarioDeta-list/usuarioDeta-list-component';
import {ItemListComponent} from './component/item/item-list/item-list-component';
import {ItemService} from './service/item-service';
import {VehiculoListComponent} from './component/vehiculo/vehiculo-list/vehiculo-list-component';
import {VehiculoService} from './service/vehiculo-service';
import {VehiculoPersonaService} from './service/vehiculoPersona';
import {VehiculoPersonaListComponent} from './component/vehiculoPersona/vehiculoPersona-list/vehiculoPersona-list-component';
import {FormaDePagoListComponent} from './component/formaDePago/formaDePago-list/fromaDePago-list-component';
import {FormaDePagoService} from './service/formaDePago-service';
import {LoginComponent} from './login/login-component';
import {HomeComponent} from './home/home-component';

import {PersonaCreateDialogComponent} from './dialog/persona/persona-create/persona-create-dialog';
import {EmpresaCreateDialogComponent} from './dialog/empresa/empresa-create/empresa-create-dialog';
import {UsuarioCreateDialogComponent} from './dialog/usuario/usuario-create/usuario-create-dialog';
import {UsuarioDetaCreateDialogComponent} from './dialog/usuarioDeta/usuarioDeta-create/usuarioDeta-create-dialog';
import {ItemCreateDialogComponent} from './dialog/item/item-create/item-create-dialog';
import {VehiculoCreateDialogComponent} from './dialog/vehiculo/vehiculo-create/vehiculo-create-dialog';
import {VehiculoPersonaCreateDialogComponent} from './dialog/vehiculoPersona/vehiculoPersona-create/vehiculoPersona-create-dialog';
import {FormaDePagoCreateDialogComponent} from './dialog/formaDePago/formaDePago-create/formaDePago-create-dialog';
import {
  IdentificationTypeCreateDialogComponent
} from './dialog/identificationType/identificationType-create/identificationType-create-dialog';
import {DocumentoListComponent} from './component/documento/documento-list/documento-list-component';
import {DocumentoService} from './service/documento-service';
import {CancelacionListComponent} from './component/cancelacion/cancelacion-list/cancelacion-list-component';
import {CancelacionService} from './service/cancelacion-service';
import {DocumentoCreateDialogComponent} from './dialog/documento/documento-create/documento-create-dialog';
import {CancelacionCreateDialogComponent} from './dialog/cancelacion/cancelacion-create/cancelacion-create-dialog';
import {IdentificationTypeEditDialogComponent} from './dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import {PersonaEditDialogComponent} from './dialog/persona/persona-edit/persona-edit-dialog';
import {EmpresaEditDialogComponent} from './dialog/empresa/empresa-edit/empresa-edit-dialog';
import {ConfirmDeleteDialogComponent} from './dialog/confirm-delete/confirm-delete-dialog';
import {UsuarioDetaEditDialogComponent} from './dialog/usuarioDeta/usuarioDeta-edit/usuarioDeta-edit-dialog';
import {ItemEditDialogComponent} from './dialog/item/item-edit/item-edit-dialog';
import {VehiculoEditDialogComponent} from './dialog/vehiculo/vehiculo-edit/vehiculo-edit-dialog';
import {FormDePagoEditDialogComponent} from './dialog/formaDePago/formDePago-edit/formaDePago-edit-dialog';
import {DocumentoEditDialogComponent} from './dialog/documento/documento-edit/documento-edit-dialog';
import {CancelacionEditDialogComponent} from './dialog/cancelacion/cancelacion-edit/cancelacion-edit-dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IdentificationTypeListComponent,
    PersonaListComponent,
    EmpresaListComponent,
    UsuarioListComponent,
    UsuarioDetaListComponent,
    ItemListComponent,
    VehiculoListComponent,
    VehiculoPersonaListComponent,
    FormaDePagoListComponent,
    DocumentoListComponent,
    CancelacionListComponent,
    // dialogs
    ConfirmDeleteDialogComponent,
    PersonaCreateDialogComponent,
    EmpresaCreateDialogComponent,
    UsuarioCreateDialogComponent,
    UsuarioDetaCreateDialogComponent,
    ItemCreateDialogComponent,
    VehiculoCreateDialogComponent,
    VehiculoPersonaCreateDialogComponent,
    FormaDePagoCreateDialogComponent,
    IdentificationTypeCreateDialogComponent,
    DocumentoCreateDialogComponent,
    CancelacionCreateDialogComponent,
    // Edit
    IdentificationTypeEditDialogComponent,
    PersonaEditDialogComponent,
    EmpresaEditDialogComponent,
    UsuarioDetaEditDialogComponent,
    ItemEditDialogComponent,
    VehiculoEditDialogComponent,
    FormDePagoEditDialogComponent,
    DocumentoEditDialogComponent,
    CancelacionEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Material
    MaterialModule
  ],
  entryComponents: [
    //Generic
    ConfirmDeleteDialogComponent,
    //Resource
    PersonaCreateDialogComponent,
    EmpresaCreateDialogComponent,
    UsuarioCreateDialogComponent,
    UsuarioDetaCreateDialogComponent,
    ItemCreateDialogComponent,
    VehiculoCreateDialogComponent,
    VehiculoPersonaCreateDialogComponent,
    FormaDePagoCreateDialogComponent,
    IdentificationTypeCreateDialogComponent,
    DocumentoCreateDialogComponent,
    CancelacionCreateDialogComponent,
    // Edit
    IdentificationTypeEditDialogComponent,
    PersonaEditDialogComponent,
    EmpresaEditDialogComponent,
    UsuarioDetaEditDialogComponent,
    ItemEditDialogComponent,
    VehiculoEditDialogComponent,
    FormDePagoEditDialogComponent,
    DocumentoEditDialogComponent,
    CancelacionEditDialogComponent
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    }},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {
      provide: 'API_URL',
      useValue: 'http://code.rociosoft.com:8000/'
    },
    IdentificationTypeService,
    PersonaService,
    EmpresaService,
    UsuarioService,
    UsuarioDetaService,
    ItemService,
    VehiculoService,
    VehiculoPersonaService,
    FormaDePagoService,
    DocumentoService,
    CancelacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
