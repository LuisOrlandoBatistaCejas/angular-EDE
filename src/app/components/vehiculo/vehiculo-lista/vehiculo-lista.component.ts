import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {VehiculoService} from '../../../service/vehiculo-service';
import {VehiculoCreateDialogComponent} from '../../../dialog/vehiculo/vehiculo-create/vehiculo-create-dialog';
import {VehiculoEditDialogComponent} from '../../../dialog/vehiculo/vehiculo-edit/vehiculo-edit-dialog';

@Component({
    selector: 'ms-vehiculo-lista',
    templateUrl: './vehiculo-lista.component.html',
    styleUrls: ['./vehiculo-lista.component.scss']
})
export class VehiculoListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private vehiculoService: VehiculoService) {
        super(dialog);
        this.resourceService = this.vehiculoService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(vehiculo) {
        super.openDialogEdit(VehiculoEditDialogComponent, vehiculo);
    }
    onCreate() {
        super.openDialogCreate(VehiculoCreateDialogComponent);
    }

}
