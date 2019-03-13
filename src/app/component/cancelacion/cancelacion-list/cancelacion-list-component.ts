import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {CancelacionService} from '../../../service/cancelacion-service';
import {CancelacionCreateDialogComponent} from '../../../dialog/cancelacion/cancelacion-create/cancelacion-create-dialog';
import {
  IdentificationTypeEditDialogComponent
} from '../../../dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import {CancelacionEditDialogComponent} from '../../../dialog/cancelacion/cancelacion-edit/cancelacion-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';
import {FormaDePagoService} from '../../../service/formaDePago-service';

@Component({
  selector: 'app-cancelacion-list-component',
  templateUrl: './cancelacion-list-component.html',
  styleUrls: ['./cancelacion-list-component.css']
})
export class CancelacionListComponent implements OnInit {
  loading = true;
  cancelacionList: any[];
  cancelacionDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  cancelacionDialogEdit: MatDialogRef<CancelacionEditDialogComponent>;
  cancelacionDialogCreate: MatDialogRef<CancelacionCreateDialogComponent>;
  displayedColumns = ['nombre', 'plazo', 'unidad', 'formaPago', 'acciones'];
  constructor(private snackBar: MatSnackBar, private cancelacionService: CancelacionService,
              public dialog: MatDialog, private formaPagoService: FormaDePagoService) {}
  ngOnInit() {
    this.getFormasCancelacion();
  }
  getFormasCancelacion() {
    this.cancelacionService.list().subscribe(
      res => {
        this.cancelacionList = res;
        this.loading = false;
        this.cancelacionList.forEach( cancelacion => {
          this.getFormaPago(cancelacion);
        });
      },
      error => this.loading = false
    );
  }
  getFormaPago(formaCancelacion) {
    this.formaPagoService.getById(formaCancelacion.FormaPagoId).subscribe( formaPago => {
      formaCancelacion.formaPago = formaPago;
    });
  }
  openDialogCreate() {
    this.cancelacionDialogCreate = this.dialog.open(CancelacionCreateDialogComponent, {
      height: '400px',
      width: '400px',
      disableClose: true
    });
    this.cancelacionDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(cancelacion => {
        this.getFormasCancelacion()
        this.snackBar.open('Forma de cancelación creada satisfactoriamente');
      });
  }
  openDialogEdit(item) {
    console.log(item);
    this.cancelacionDialogEdit = this.dialog.open(CancelacionEditDialogComponent, {
      height: '400px',
      width: '400px',
      data: item
    });

    this.cancelacionDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(cancelacion => {
        this.getFormasCancelacion();
        this.snackBar.open('Forma de cancelación editada satisfactoriamente');
      });
  }
  delete(item) {
    this.cancelacionDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Forma de Cancelación',
        content: 'Estás seguro de eliminar esta Forma de Cancelación?'
      }
    });

    this.cancelacionDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.cancelacionService.delete(item.id).subscribe(
          res => {
            this.getFormasCancelacion();
            this.snackBar.open('Forma de cancelación eliminada satisfactoriamente');
          });
      });
  }
}
