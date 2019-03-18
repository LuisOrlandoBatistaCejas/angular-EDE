import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {UsuarioDetaService} from '../../../../../../EDE-Front/src/app/service/usuarioDeta-service';
import {UsuarioService} from '../../../../../../EDE-Front/src/app/service/usuario-service';
import {UsuarioDetaCreateDialogComponent} from '../usuarioDeta-create/usuarioDeta-create-dialog';
import {EmpresaService} from '../../../../../../EDE-Front/src/app/service/empresa-service';
import {DocumentoService} from '../../../../../../EDE-Front/src/app/service/documento-service';

@Component({
  selector: 'app-usuario-deta-edit',
  templateUrl: './usuarioDeta-edit-dialog.html',
  styleUrls: ['./usuarioDeta-edit-dialog.css']
})
export class UsuarioDetaEditDialogComponent {
  @ViewChild('f') form: NgForm;
  empresas: any[] = [];
  usuarios: any[] = [];
  tiposDocumentos: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    const usuario = this.form.value;
    usuario.id = this.data.Codigo;
    this.usuarioDetaService.update(usuario).subscribe(res => {
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
