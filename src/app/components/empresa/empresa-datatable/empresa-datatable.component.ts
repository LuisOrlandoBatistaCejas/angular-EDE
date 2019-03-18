import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-empresa-datatable',
    templateUrl: './empresa-datatable.component.html',
    styleUrls: ['./empresa-datatable.component.scss']
})
export class EmpresaDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
