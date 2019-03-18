import { Component, OnInit } from '@angular/core';
import {ComprobanteService} from '../../../service/comprobante.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ms-crear-comprobante',
  templateUrl: './crear-comprobante.component.html',
  styleUrls: ['./crear-comprobante.component.scss']
})
export class CrearComprobanteComponent implements OnInit {
    constructor(public comprobanteService: ComprobanteService,
                public router: Router) {
    }

    ngOnInit() {
    }
    onCreate(comprobante) {
        this.comprobanteService.create(comprobante).subscribe( () => {
            this.router.navigate(['/comprobantes']);
        });
    }

}
