import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComprobanteService} from '../../../service/comprobante.service';

@Component({
  selector: 'app-comprobantes-create',
  templateUrl: './comprobantes-create.component.html',
  styleUrls: ['./comprobantes-create.component.css']
})
export class ComprobantesCreateComponent implements OnInit {
  constructor(public comprobanteService: ComprobanteService,
              public route: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit() {
  }
  onCreate(comprobante) {
    console.log(comprobante);
    this.comprobanteService.create(comprobante).subscribe( () => {
      this.router.navigate(['/comprobantes']);
    });
  }

}
