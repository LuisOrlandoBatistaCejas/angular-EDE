import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {DocumentoService} from '../../../service/documento-service';
import {DocumentoCreateDialogComponent} from '../../../dialog/documento/documento-create/documento-create-dialog';

@Component({
  selector: 'app-documento-list-component',
  templateUrl: './documento-list-component.html',
  styleUrls: ['./documento-list-component.css']
})
export class DocumentoListComponent implements OnInit {
  loading = true;
  documentoList: any[];
  empresaDialogEdit: MatDialogRef<DocumentoCreateDialogComponent>;
  empresaDialogCreate: MatDialogRef<DocumentoCreateDialogComponent>;
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
    this.empresaDialogCreate = this.dialog.open(DocumentoCreateDialogComponent, {
      height: '330px',
      width: '400px',
      disableClose: true
    });
    this.empresaDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(documento => {
        this.documentoList.push(documento);
        this.snackBar.open('Tipo de documento creado');
      });
  }
}
