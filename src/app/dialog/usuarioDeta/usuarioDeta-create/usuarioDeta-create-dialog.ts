import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {UsuarioDetaService} from '../../../service/usuarioDeta-service';
import {UsuarioService} from '../../../service/usuario-service';
import {EmpresaService} from '../../../service/empresa-service';
import {DocumentoService} from '../../../service/documento-service';

@Component({
  selector: 'app-usuario-deta-create-dialog',
  templateUrl: './usuarioDeta-create-dialog.html',
  styleUrls: ['./usuarioDeta-create-dialog.css']
})
export class UsuarioDetaCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  empresas: any[] = [];
  usuarios: any[] = [];
  tiposDocumentos: any[] = [];
  constructor(
    private dialogRef: MatDialogRef<UsuarioDetaCreateDialogComponent>,
    private usuarioDetaService: UsuarioDetaService,
    private usuariosService: UsuarioService,
    private empresasService: EmpresaService,
    private tipoDocumentoService: DocumentoService
  ) {
    this.getUsuarios();
    this.getEmpresas();
    this.getTiposDocumento();
  }
  onSubmit() {
    this.usuarioDetaService.create(this.form.value).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  getUsuarios() {
    this.usuariosService.list().subscribe( usuarios => {
      this.usuarios = usuarios;
    });
  }
  getEmpresas() {
    this.empresasService.list().subscribe( empresas => {
      this.empresas = empresas;
    });
  }
  getTiposDocumento() {
    this.tipoDocumentoService.list().subscribe( tipos => {
      this.tiposDocumentos = tipos;
    });
  }
  close() {
    this.dialogRef.close();
  }
}
