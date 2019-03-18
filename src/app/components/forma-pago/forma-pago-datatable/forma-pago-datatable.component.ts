import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-forma-pago-datatable',
    templateUrl: './forma-pago-datatable.component.html',
    styleUrls: ['./forma-pago-datatable.component.scss']
})
export class FormaPagoDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
