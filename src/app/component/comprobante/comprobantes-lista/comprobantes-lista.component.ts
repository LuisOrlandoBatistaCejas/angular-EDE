import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ComprobanteService} from '../../../service/comprobante.service';
import {Comprobante} from '../../../model/comprobante.model';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';
import {filter} from 'rxjs/operators';

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
  onUpdate(id) {
    this.router.navigate([`/comprobantes/${id}/actualizar`]);
  }
  onCreate() {
    this.router.navigate(['/comprobantes/crear']);
  }
  delete(id) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Comprobante',
        content: 'Estás seguro de eliminar este Comprobante?'
      }
    }).afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.comprobantesService.delete(id).subscribe(
          res => {
            this.getData();
            this.snackBar.open('Forma de cancelación eliminada satisfactoriamente');
          });
      });
  }
}
