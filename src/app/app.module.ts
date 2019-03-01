import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSidenavModule, MatListModule, MatSelectModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
//Components
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

@NgModule({
  declarations: [
    AppComponent,
    IdentificationTypeListComponent,
    PersonaListComponent,
    EmpresaListComponent,
    UsuarioListComponent,
    UsuarioDetaListComponent,
    ItemListComponent,
    VehiculoListComponent,
    VehiculoPersonaListComponent,
    FormaDePagoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Material
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    IdentificationTypeService,
    PersonaService,
    EmpresaService,
    UsuarioService,
    UsuarioDetaService,
    ItemService,
    VehiculoService,
    VehiculoPersonaService,
    FormaDePagoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
