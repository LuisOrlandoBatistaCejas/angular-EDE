import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {UsuarioDetaService} from '../../../service/usuarioDeta-service';

@Component({
  selector: 'app-usuario-deta-create-dialog',
  templateUrl: './usuarioDeta-create-dialog.html',
  styleUrls: ['./usuarioDeta-create-dialog.css']
})
export class UsuarioDetaCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  usuarioDeta: any;
  constructor(
    private dialogRef: MatDialogRef<UsuarioDetaCreateDialogComponent>,
    private usuarioDetaService: UsuarioDetaService
  ) {}
  onSubmit() {
    this.usuarioDeta = this.form.value;
    this.usuarioDetaService.createUsuarioDeta(this.usuarioDeta).subscribe(res => {
      console.log(res);
      this.dialogRef.close(this.usuarioDeta);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
