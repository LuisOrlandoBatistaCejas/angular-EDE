import { Component, OnInit } from '@angular/core';
import { IdentificationTypeService } from '../../../service/identificationType-service';
import {IdentificationTypeCreateDialogComponent} from '../../../dialog/identificationType/identificationType-create/identificationType-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-identification-type-list-component',
  templateUrl: './identificationType-list-component.html',
  styleUrls: ['./identificationType-list-component.css']
})
export class IdentificationTypeListComponent implements OnInit {
  loading = true;
  identificationTypeList: any[];
  identificationTypeDialogEdit: MatDialogRef<IdentificationTypeCreateDialogComponent>;
  identificationTypeDialogCreate: MatDialogRef<IdentificationTypeCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private idenTypeService: IdentificationTypeService, public dialog: MatDialog) {}
  ngOnInit() {
    this.idenTypeService.getTipoIdentificacion()
      .subscribe(
        res => {
        this.identificationTypeList = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      });
  }
  openDialogCreate() {
    this.identificationTypeDialogCreate = this.dialog.open(IdentificationTypeCreateDialogComponent, {
      height: '250px',
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
}
