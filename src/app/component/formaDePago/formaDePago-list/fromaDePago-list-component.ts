import { Component, OnInit } from '@angular/core';
import {FormaDePagoService} from '../../../service/formaDePago-service';
import {FormaDePagoCreateDialogComponent} from '../../../dialog/formaDePago/formaDePago-create/formaDePago-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {FormDePagoEditDialogComponent} from '../../../dialog/formaDePago/formDePago-edit/formaDePago-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';

@Component({
  selector: 'app-forma-pago-list-component',
  templateUrl: './fromaDePago-list-component.html',
  styleUrls: ['./fromaDePago-list-component.css']
})
export class FormaDePagoListComponent implements OnInit {
  loading = true;
  formaDePagoList: any[];
  formaDePagoDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  formaDePagoDialogEdit: MatDialogRef<FormDePagoEditDialogComponent>;
  formaDePagoDialogCreate: MatDialogRef<FormaDePagoCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private formaDePagoService: FormaDePagoService, public dialog: MatDialog) {}
  ngOnInit() {
    this.formaDePagoService.list().subscribe(
      res => {
        this.formaDePagoList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.formaDePagoDialogCreate = this.dialog.open(FormaDePagoCreateDialogComponent, {
      height: '300px',
      width: '400px',
      disableClose: true
    });
    this.formaDePagoDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(formaDePago => {
        this.formaDePagoList.push(formaDePago);
        this.snackBar.open('Forma de pago creada');
      });
  }
  openDialogEdit(item) {
    this.formaDePagoDialogEdit = this.dialog.open(FormDePagoEditDialogComponent, {
      height: '300px',
      width: '400px',
      data: item
    });

    this.formaDePagoDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(formaDePago => {
        const index = this.formaDePagoList.findIndex(object => object.Id === formaDePago.Id);
        this.formaDePagoList[index] = formaDePago;
      });
  }
  delete(item) {
    this.formaDePagoDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Forma de Pago',
        content: 'Estás seguro de eliminar esta Forma de Pago?'
      }
    });

    this.formaDePagoDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.formaDePagoService.delete(item.Id).subscribe(
          res => {
            const index = this.formaDePagoList.findIndex(object => object.Id === item.Id);
            this.formaDePagoList.splice(index, 1);
          });
      });
  }
}
