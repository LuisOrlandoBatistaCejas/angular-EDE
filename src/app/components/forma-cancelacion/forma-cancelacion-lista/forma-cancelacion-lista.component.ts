import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {CancelacionService} from '../../../service/cancelacion-service';
import {CancelacionEditDialogComponent} from '../../../dialog/cancelacion/cancelacion-edit/cancelacion-edit-dialog';
import {CancelacionCreateDialogComponent} from '../../../dialog/cancelacion/cancelacion-create/cancelacion-create-dialog';

@Component({
    selector: 'ms-forma-cancelacion-lista',
    templateUrl: './forma-cancelacion-lista.component.html',
    styleUrls: ['./forma-cancelacion-lista.component.scss']
})
export class FormaCancelacionListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private formaCancelacionService: CancelacionService) {
        super(dialog);
        this.resourceService = this.formaCancelacionService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(formaCancelacion) {
        super.openDialogEdit(CancelacionEditDialogComponent, formaCancelacion);
    }
    onCreate() {
        super.openDialogCreate(CancelacionCreateDialogComponent);
    }

}
