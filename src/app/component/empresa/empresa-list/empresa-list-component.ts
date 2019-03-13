import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { EmpresaService } from '../../../service/empresa-service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {EmpresaCreateDialogComponent} from '../../../dialog/empresa/empresa-create/empresa-create-dialog';
import {IdentificationTypeEditDialogComponent} from '../../../dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import {EmpresaEditDialogComponent} from '../../../dialog/empresa/empresa-edit/empresa-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';

@Component({
  selector: 'app-empresa-list-component',
  templateUrl: './empresa-list-component.html',
  styleUrls: ['./empresa-list-component.css']
})
export class EmpresaListComponent implements OnInit {
  loading = true;
  empresaList: any[];
  empresaDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  empresaDialogEdit: MatDialogRef<EmpresaEditDialogComponent>;
  empresaDialogCreate: MatDialogRef<EmpresaCreateDialogComponent>;
  displayedColumns = ['ruc', 'razonSocial', 'nombreComercial', 'telefono', 'email', 'activo', 'acciones'];
  constructor(private snackBar: MatSnackBar, private empresaService: EmpresaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getEmpresas();
  }
  getEmpresas() {
    this.loading = true;
    this.empresaService.list().subscribe(
      res => {
        this.empresaList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.empresaDialogCreate = this.dialog.open(EmpresaCreateDialogComponent, {
      height: '450px',
      width: '650px',
      disableClose: true
    });
    this.empresaDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(empresa => {
        this.getEmpresas();
        this.snackBar.open('Empresa creada satisfactoriamente');
      });
  }
  openDialogEdit(item) {
    this.empresaDialogEdit = this.dialog.open(EmpresaEditDialogComponent, {
      height: '450px',
      width: '650px',
      data: item
    });

    this.empresaDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(idenType => {
        this.getEmpresas();
        this.snackBar.open('Se ha editado la empresa satisfactoriamente');
      });
  }
  delete(item) {
    this.empresaDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Empresa',
        content: 'Estás seguro de eliminar esta Empresa?'
      }
    });

    this.empresaDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.empresaService.delete(item.Ruc).subscribe(
          res => {
            this.getEmpresas();
            this.snackBar.open('Empresa eliminada satisfactoriamente');
          });
      });
  }
}
