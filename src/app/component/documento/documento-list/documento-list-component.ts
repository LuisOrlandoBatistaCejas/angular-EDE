import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {DocumentoService} from '../../../service/documento-service';
import {DocumentoCreateDialogComponent} from '../../../dialog/documento/documento-create/documento-create-dialog';
import {DocumentoEditDialogComponent} from '../../../dialog/documento/documento-edit/documento-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';

@Component({
  selector: 'app-documento-list-component',
  templateUrl: './documento-list-component.html',
  styleUrls: ['./documento-list-component.css']
})
export class DocumentoListComponent implements OnInit {
  loading = true;
  documentoList: any[];
  documentoDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  documentoDialogEdit: MatDialogRef<DocumentoEditDialogComponent>;
  documentoDialogCreate: MatDialogRef<DocumentoCreateDialogComponent>;
  displayedColumns = ['id', 'documento', 'venta', 'compra', 'acciones'];
  constructor(private snackBar: MatSnackBar, private documentoService: DocumentoService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getDocumentos();
  }
  getDocumentos() {
    this.loading = true;
    this.documentoService.list().subscribe(
      res => {
        this.documentoList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.documentoDialogCreate = this.dialog.open(DocumentoCreateDialogComponent, {
      height: '330px',
      width: '400px',
      disableClose: true
    });
    this.documentoDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(documento => {
        this.getDocumentos();
        this.snackBar.open('Tipo de documento creado satisfactoriamente');
      });
  }
  openDialogEdit(item) {
    this.documentoDialogEdit = this.dialog.open(DocumentoEditDialogComponent, {
      height: '330px',
      width: '400px',
      data: item
    });

    this.documentoDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(idenType => {
        this.getDocumentos();
        this.snackBar.open('Documento editado satisfactoriamente');
      });
  }
  delete(item) {
    this.documentoDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Documento',
        content: 'Estás seguro de eliminar este Documento?'
      }
    });

    this.documentoDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.documentoService.delete(item.id).subscribe(
          res => {
            this.getDocumentos();
            this.snackBar.open('Se ha eliminado un documento satisfactoriamente');
          });
      });
  }
}
