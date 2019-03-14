import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComprobanteService} from '../../../service/comprobante.service';

@Component({
  selector: 'app-update-comprobante',
  templateUrl: './update-comprobante.component.html',
  styleUrls: ['./update-comprobante.component.css']
})
export class UpdateComprobanteComponent implements OnInit {
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
