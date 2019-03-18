import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-vehiculo-datatable',
    templateUrl: './vehiculo-datatable.component.html',
    styleUrls: ['./vehiculo-datatable.component.scss']
})
export class VehiculoDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
