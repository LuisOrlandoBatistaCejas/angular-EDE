import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-tipo-documento-datatable',
    templateUrl: './tipo-documento-datatable.component.html',
    styleUrls: ['./tipo-documento-datatable.component.scss']
})
export class TipoDocumentoDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
