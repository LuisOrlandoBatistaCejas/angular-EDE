import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {ComprobanteService} from '../../../service/comprobante.service';
import {Router} from '@angular/router';

@Component({
    selector: 'ms-comprobante-lista',
    templateUrl: './comprobante-lista.component.html',
    styleUrls: ['./comprobante-lista.component.scss']
})
export class ComprobanteListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private comprobanteService: ComprobanteService,
                private router: Router) {
        super(dialog);
        this.resourceService = this.comprobanteService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(comprobante) {
       this.router.navigate([`/comprobantes/${comprobante.id}/actualizar`])
    }
    onCreate() {
      this.router.navigate([`/comprobantes/crear`]);
    }

}
