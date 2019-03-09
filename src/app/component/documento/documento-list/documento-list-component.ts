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
  constructor(private snackBar: MatSnackBar, private documentoService: DocumentoService, public dialog: MatDialog) {}
  ngOnInit() {
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
        this.documentoList.push(documento);
        this.snackBar.open('Tipo de documento creado');
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
        const index = this.documentoList.findIndex(object => object.Id === idenType.Id);
        this.documentoList[index] = idenType;
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
        this.documentoService.delete(item.Id).subscribe(
          res => {
            const index = this.documentoList.findIndex(object => object.Id === item.Id);
            this.documentoList.splice(index, 1);
          });
      });
  }
}
