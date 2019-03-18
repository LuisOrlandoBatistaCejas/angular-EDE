import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {EmpresaService} from '../../../service/empresa-service';
import {EmpresaCreateDialogComponent} from '../../../dialog/empresa/empresa-create/empresa-create-dialog';
import {EmpresaEditDialogComponent} from '../../../dialog/empresa/empresa-edit/empresa-edit-dialog';

@Component({
    selector: 'ms-empresa-lista',
    templateUrl: './empresa-lista.component.html',
    styleUrls: ['./empresa-lista.component.scss']
})
export class EmpresaListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private empresaService: EmpresaService) {
        super(dialog);
        this.resourceService = this.empresaService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(empresa) {
        super.openDialogEdit(EmpresaEditDialogComponent, empresa);
    }
    onCreate() {
        super.openDialogCreate(EmpresaCreateDialogComponent);
    }

}
