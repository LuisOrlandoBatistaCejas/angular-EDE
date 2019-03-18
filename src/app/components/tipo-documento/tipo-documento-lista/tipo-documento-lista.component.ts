import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {DocumentoService} from '../../../service/documento-service';
import {DocumentoEditDialogComponent} from '../../../dialog/documento/documento-edit/documento-edit-dialog';
import {DocumentoCreateDialogComponent} from '../../../dialog/documento/documento-create/documento-create-dialog';

@Component({
    selector: 'ms-tipo-documento-lista',
    templateUrl: './tipo-documento-lista.component.html',
    styleUrls: ['./tipo-documento-lista.component.scss']
})
export class TipoDocumentoListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private tipoDocumentoService: DocumentoService) {
        super(dialog);
        this.resourceService = this.tipoDocumentoService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(tipoDocumento) {
        super.openDialogEdit(DocumentoEditDialogComponent, tipoDocumento);
    }
    onCreate() {
        super.openDialogCreate(DocumentoCreateDialogComponent);
    }

}
