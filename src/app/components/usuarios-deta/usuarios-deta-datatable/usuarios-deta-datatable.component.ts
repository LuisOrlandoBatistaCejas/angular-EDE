import {Component, OnInit, Output} from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
    selector: 'ms-usuarios-deta-datatable',
    templateUrl: './usuarios-deta-datatable.component.html',
    styleUrls: ['./usuarios-deta-datatable.component.scss']
})
export class UsuariosDetaDatatableComponent extends BaseDatatable implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
    }
}
