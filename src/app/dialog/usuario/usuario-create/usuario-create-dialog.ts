import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {UsuarioService} from '../../../../../../EDE-Front/src/app/service/usuario-service';
import {PersonaService} from '../../../../../../EDE-Front/src/app/service/persona-service';
import {EmpresaService} from '../../../../../../EDE-Front/src/app/service/empresa-service';
import {RolService} from '../../../../../../EDE-Front/src/app/service/rol.service';

@Component({
  selector: 'app-usuario-create-dialog',
  templateUrl: './usuario-create-dialog.html',
  styleUrls: ['./usuario-create-dialog.css']
})
export class UsuarioCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  personas: any[] = [];
  empresas: any[] = [];
  roles: any[] = [];
  constructor(
    private dialogRef: MatDialogRef<UsuarioCreateDialogComponent>,
    private usuarioService: UsuarioService,
    private personasService: PersonaService,
    private empresasService: EmpresaService,
    private rolService: RolService
  ) {
    this.getPersonas();
    this.getEmpresas();
    this.getRoles();
  }
  getPersonas() {
    this.personasService.list().subscribe(personas => {
      this.personas = personas;
    });
  }
  getEmpresas() {
    this.empresasService.list().subscribe(empresas => {
      this.empresas = empresas;
    });
  }
  getRoles() {
    this.rolService.list().subscribe( roles => {
      this.roles = roles;
    });
  }
  onSubmit() {
    this.usuarioService.create(this.form.value).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
