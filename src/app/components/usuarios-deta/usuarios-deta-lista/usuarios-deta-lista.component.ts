import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {UsuarioDetaEditDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-edit/usuarioDeta-edit-dialog';
import {UsuarioDetaCreateDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-create/usuarioDeta-create-dialog';
import {UsuarioDetaService} from '../../../service/usuarioDeta-service';

@Component({
    selector: 'ms-usuarios-deta-lista',
    templateUrl: './usuarios-deta-lista.component.html',
    styleUrls: ['./usuarios-deta-lista.component.scss']
})
export class UsuariosDetaListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private usuariosDetaService: UsuarioDetaService) {
        super(dialog);
        this.resourceService = this.usuariosDetaService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(usuario) {
        super.openDialogEdit(UsuarioDetaEditDialogComponent, usuario);
    }
    onCreate() {
        super.openDialogCreate(UsuarioDetaCreateDialogComponent);
    }

}
