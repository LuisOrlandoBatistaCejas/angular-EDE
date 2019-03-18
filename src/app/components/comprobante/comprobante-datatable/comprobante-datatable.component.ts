import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-comprobante-datatable',
    templateUrl: './comprobante-datatable.component.html',
    styleUrls: ['./comprobante-datatable.component.scss']
})
export class ComprobanteDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
