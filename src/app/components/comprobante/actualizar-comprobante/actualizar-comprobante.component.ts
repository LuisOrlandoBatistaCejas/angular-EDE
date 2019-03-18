import { Component, OnInit } from '@angular/core';
import {ComprobanteService} from '../../../service/comprobante.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ms-actualizar-comprobante',
  templateUrl: './actualizar-comprobante.component.html',
  styleUrls: ['./actualizar-comprobante.component.scss']
})
export class ActualizarComprobanteComponent implements OnInit {
    id: number;
    comprobante: any;
    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private comprobanteService: ComprobanteService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.getComprobante();
        });
    }
    getComprobante() {
        this.comprobanteService.getById(this.id).subscribe( comprobante => {
            this.comprobante = comprobante;
        });
    }
    updateComprobante(comprobante) {
        this.comprobanteService.update(comprobante).subscribe( () => {
            this.router.navigate(['/comprobantes']);
        });
    }


}
