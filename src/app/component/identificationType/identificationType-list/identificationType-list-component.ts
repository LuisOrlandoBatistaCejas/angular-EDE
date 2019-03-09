import { Component, OnInit } from '@angular/core';
import { IdentificationTypeService } from '../../../service/identificationType-service';
import {
  IdentificationTypeCreateDialogComponent
} from '../../../dialog/identificationType/identificationType-create/identificationType-create-dialog';
import {
  IdentificationTypeEditDialogComponent
} from '../../../dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';

@Component({
  selector: 'app-identification-type-list-component',
  templateUrl: './identificationType-list-component.html',
  styleUrls: ['./identificationType-list-component.css']
})
export class IdentificationTypeListComponent implements OnInit {
  loading = true;
  identificationTypeList: any[];
  identTypeDeleteDialogEdit: MatDialogRef<ConfirmDeleteDialogComponent>;
  identificationTypeDialogEdit: MatDialogRef<IdentificationTypeEditDialogComponent>;
  identificationTypeDialogCreate: MatDialogRef<IdentificationTypeCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private idenTypeService: IdentificationTypeService, public dialog: MatDialog) {}
  ngOnInit() {
    this.idenTypeService.list()
      .subscribe(res => {
        this.identificationTypeList = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      });
  }
  openDialogCreate() {
    this.identificationTypeDialogCreate = this.dialog.open(IdentificationTypeCreateDialogComponent, {
      height: '300px',
      width: '400px',
      disableClose: true
    });
    this.identificationTypeDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(identificationType => {
        this.identificationTypeList.push(identificationType);
        this.snackBar.open('Tipo de Identificación Creado');
      });
  }
  openDialogEdit(item) {
    this.identificationTypeDialogEdit = this.dialog.open(IdentificationTypeEditDialogComponent, {
      height: '300px',
      width: '400px',
      data: item
    });

    this.identificationTypeDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(idenType => {
        const index = this.identificationTypeList.findIndex(object => object.Id === idenType.Id);
        this.identificationTypeList[index] = idenType;
      });
  }
  delete(item) {
    this.identTypeDeleteDialogEdit = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Tipo de Identificación',
        content: 'Estás seguro de eliminar este Tipo de Identificación?'
      }
    });

    this.identTypeDeleteDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.idenTypeService.delete(item.Id).subscribe(
          res => {
            const index = this.identificationTypeList.findIndex(object => object.Id === item.Id);
            this.identificationTypeList.splice(index, 1);
          });
      });
  }
}
