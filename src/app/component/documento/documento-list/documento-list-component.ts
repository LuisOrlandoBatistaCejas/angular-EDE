import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import {DocumentoService} from '../../../service/documento-service';

@Component({
  selector: 'app-documento-list-component',
  templateUrl: './documento-list-component.html',
  styleUrls: ['./documento-list-component.css']
})
export class DocumentoListComponent implements OnInit {
  documentoList: any[];
  // empresaDialogEdit: MatDialogRef<EmpresaCreateDialogComponent>;
  // empresaDialogCreate: MatDialogRef<EmpresaCreateDialogComponent>;
  constructor(private documentoService: DocumentoService, public dialog: MatDialog) {}
  ngOnInit() {
    this.documentoService.getDocumento().subscribe(
      res => {
        this.documentoList = res;
      }
    );
  }
}
