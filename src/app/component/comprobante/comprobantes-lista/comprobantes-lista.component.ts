import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ComprobanteService} from '../../../service/comprobante.service';
import {Comprobante} from '../../../model/comprobante.model';

@Component({
  selector: 'app-comprobantes-lista',
  templateUrl: './comprobantes-lista.component.html',
  styleUrls: ['./comprobantes-lista.component.css']
})
export class ComprobantesListaComponent implements OnInit {
  comprobantes: Comprobante[];
  constructor(private comprobantesService: ComprobanteService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.comprobantesService.list().subscribe(comprobantes => {
      this.comprobantes = comprobantes;
      console.log(this.comprobantes);
    });
  }
  onUpdate() {
  }
  onCreate() {
    this.router.navigate(['/comprobantes/crear']);
  }
}
