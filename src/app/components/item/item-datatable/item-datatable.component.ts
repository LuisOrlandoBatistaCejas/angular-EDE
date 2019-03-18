import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-item-datatable',
    templateUrl: './item-datatable.component.html',
    styleUrls: ['./item-datatable.component.scss']
})
export class ItemDatatableComponent extends BaseDatatable implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
