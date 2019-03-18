import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {DocumentoService} from '../../../../../../EDE-Front/src/app/service/documento-service';

@Component({
  selector: 'app-documento-create-dialog',
  templateUrl: './documento-create-dialog.html',
  styleUrls: ['./documento-create-dialog.css']
})
export class DocumentoCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  constructor(
    private dialogRef: MatDialogRef<DocumentoCreateDialogComponent>,
    private documentoService: DocumentoService
  ) {}
  onSubmit() {
    this.documentoService.create(this.form.value).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
