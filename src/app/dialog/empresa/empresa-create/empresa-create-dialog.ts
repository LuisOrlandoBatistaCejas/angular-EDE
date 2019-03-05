import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {EmpresaService} from '../../../service/empresa-service';

@Component({
  selector: 'app-empresa-create-dialog',
  templateUrl: './empresa-create-dialog.html',
  styleUrls: ['./empresa-create-dialog.css']
})
export class EmpresaCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  activo: boolean;
  empresa: any;
  constructor(
    private dialogRef: MatDialogRef<EmpresaCreateDialogComponent>,
    private empresaService: EmpresaService
  ) {
    this.activo = true;
  }
  onSubmit() {
    this.empresa = this.form.value;
    this.empresa.Activo = this.activo;
    this.empresaService.createEmpresa(this.empresa).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  valueChange() {
    this.activo = !this.activo;
  }
  close() {
    this.dialogRef.close();
  }
}
