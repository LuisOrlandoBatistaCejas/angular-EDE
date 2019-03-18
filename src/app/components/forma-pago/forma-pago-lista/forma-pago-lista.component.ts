import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {FormaDePagoService} from '../../../service/formaDePago-service';
import {FormDePagoEditDialogComponent} from '../../../dialog/formaDePago/formDePago-edit/formaDePago-edit-dialog';
import {FormaDePagoCreateDialogComponent} from '../../../dialog/formaDePago/formaDePago-create/formaDePago-create-dialog';

@Component({
    selector: 'ms-forma-pago-lista',
    templateUrl: './forma-pago-lista.component.html',
    styleUrls: ['./forma-pago-lista.component.scss']
})
export class FormaPagoListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private formaPagoService: FormaDePagoService) {
        super(dialog);
        this.resourceService = this.formaPagoService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(formaPago) {
        super.openDialogEdit(FormDePagoEditDialogComponent, formaPago);
    }
    onCreate() {
        super.openDialogCreate(FormaDePagoCreateDialogComponent);
    }

}
