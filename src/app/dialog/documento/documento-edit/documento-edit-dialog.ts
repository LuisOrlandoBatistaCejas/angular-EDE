import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {ItemService} from '../../../service/item-service';
import {DocumentoService} from '../../../service/documento-service';

@Component({
  selector: 'app-documento-edit',
  templateUrl: './documento-edit-dialog.html',
  styleUrls: ['./documento-edit-dialog.css']
})
export class DocumentoEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  venta: boolean;
  compra: boolean;
  documento: any;
  documentoEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DocumentoEditDialogComponent>,
    private documentoService: DocumentoService
  ) {}

  ngOnInit() {
    this.documento = this.data;
    this.compra = this.data.Compra;
    this.venta = this.data.Venta;
  }
  changeVenta() {
    this.venta = !this.venta;
  }
  changeCompra() {
    this.compra = !this.compra;
  }
  onSubmit() {
    this.documentoEdit = this.form.value;
    this.documentoEdit.Compra = this.compra;
    this.documentoEdit.Venta = this.venta;
    this.documentoService.update(this.documentoEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
