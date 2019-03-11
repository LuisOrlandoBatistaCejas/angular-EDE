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
  constructor(private snackBar: MatSnackBar, private cancelacionService: CancelacionService, public dialog: MatDialog) {}
  ngOnInit() {
    this.cancelacionService.list().subscribe(
      res => {
        this.cancelacionList = res;
        this.loading = false;
      },
        error => this.loading = false
    );
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
        this.cancelacionList.push(cancelacion);
        this.snackBar.open('Forma de cancelación creada');
      });
  }
  openDialogEdit(item) {
    this.cancelacionDialogEdit = this.dialog.open(CancelacionEditDialogComponent, {
      height: '400px',
      width: '400px',
      data: item
    });

    this.cancelacionDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(cancelacion => {
        const index = this.cancelacionList.findIndex(object => object.id === cancelacion.id);
        this.cancelacionList[index] = cancelacion;
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
            const index = this.cancelacionList.findIndex(object => object.id === item.id);
            this.cancelacionList.splice(index, 1);
          });
      });
  }
}
