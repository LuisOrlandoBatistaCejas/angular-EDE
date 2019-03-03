import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {UsuarioService} from '../../../service/usuario-service';

@Component({
  selector: 'app-usuario-create-dialog',
  templateUrl: './usuario-create-dialog.html',
  styleUrls: ['./usuario-create-dialog.css']
})
export class UsuarioCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  // activo: boolean;
  usuario: any;
  constructor(
    private dialogRef: MatDialogRef<UsuarioCreateDialogComponent>,
    private usuarioService: UsuarioService
  ) {
    // this.activo = true;
  }
  onSubmit() {
    this.usuario = this.form.value;
    // this.usuario.Activo = this.activo;
    this.usuarioService.createUsuario(this.usuario).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
