import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';
import {FormaDePagoService} from '../../../service/formaDePago-service';

@Component({
    selector: 'ms-forma-cancelacion-datatable',
    templateUrl: './forma-cancelacion-datatable.component.html',
    styleUrls: ['./forma-cancelacion-datatable.component.scss']
})
export class FormaCancelacionDatatableComponent extends BaseDatatable implements OnInit {

    constructor(private formaPagoService: FormaDePagoService) {
        super();
    }

    ngOnInit() {
        this.data.forEach(formaCancelacion => {
            this.getFormaPago(formaCancelacion);
        });
    }
    getFormaPago(formaCancelacion) {
        this.formaPagoService.getById(formaCancelacion.FormaPagoId).subscribe( formaPago => {
            formaCancelacion.formaPago = formaPago;
        });
    }
}
