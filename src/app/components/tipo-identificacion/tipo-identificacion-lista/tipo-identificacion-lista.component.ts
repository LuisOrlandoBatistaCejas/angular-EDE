import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {UsuarioService} from '../../../service/usuario-service';
import {UsuarioEditComponent} from '../../../dialog/usuario/usuario-edit/usuario-edit.component';
import {UsuarioCreateDialogComponent} from '../../../dialog/usuario/usuario-create/usuario-create-dialog';
import {IdentificationTypeService} from '../../../service/identificationType-service';
import {IdentificationTypeEditDialogComponent} from '../../../dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import {IdentificationTypeCreateDialogComponent} from '../../../dialog/identificationType/identificationType-create/identificationType-create-dialog';

@Component({
    selector: 'ms-tipo-identificacion-lista',
    templateUrl: './tipo-identificacion-lista.component.html',
    styleUrls: ['./tipo-identificacion-lista.component.scss']
})
export class TipoIdentificacionListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private tipoIdentificacionService: IdentificationTypeService) {
        super(dialog);
        this.resourceService = this.tipoIdentificacionService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(tipoIdentificacion) {
        super.openDialogEdit(IdentificationTypeEditDialogComponent, tipoIdentificacion);
    }
    onCreate() {
        super.openDialogCreate(IdentificationTypeCreateDialogComponent);
    }

}
