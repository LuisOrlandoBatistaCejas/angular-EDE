import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {EmpresaService} from '../../../../../../EDE-Front/src/app/service/empresa-service';

@Component({
  selector: 'app-empresa-create-dialog',
  templateUrl: './empresa-create-dialog.html',
  styleUrls: ['./empresa-create-dialog.css']
})
export class EmpresaCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  activo = true;
  constructor(
    private dialogRef: MatDialogRef<EmpresaCreateDialogComponent>,
    private empresaService: EmpresaService
  ) {}
  onSubmit() {
    this.empresaService.create(this.form.value).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
