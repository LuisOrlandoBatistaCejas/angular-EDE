import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-tipo-identificacion-datatable',
    templateUrl: './tipo-identificacion-datatable.component.html',
    styleUrls: ['./tipo-identificacion-datatable.component.scss']
})
export class TipoIdentificacionDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
