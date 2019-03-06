import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {DocumentoService} from '../../../service/documento-service';

@Component({
  selector: 'app-documento-create-dialog',
  templateUrl: './documento-create-dialog.html',
  styleUrls: ['./documento-create-dialog.css']
})
export class DocumentoCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  empresa: any;
  venta = true;
  compra = true;
  constructor(
    private dialogRef: MatDialogRef<DocumentoCreateDialogComponent>,
    private documentoService: DocumentoService
  ) {}
  onSubmit() {
    this.empresa = this.form.value;
    this.documentoService.createDocumento(this.empresa).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  changeVenta() {
    this.venta = !this.venta;
  }
  changeCompra() {
    this.compra = !this.compra;
  }
  close() {
    this.dialogRef.close();
  }
}
