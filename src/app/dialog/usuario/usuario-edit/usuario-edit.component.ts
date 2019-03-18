import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from '../../../../../../EDE-Front/src/app/service/usuario-service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PersonaService} from '../../../../../../EDE-Front/src/app/service/persona-service';
import {UsuarioCreateDialogComponent} from '../usuario-create/usuario-create-dialog';
import {NgForm} from '@angular/forms';
import {EmpresaService} from '../../../../../../EDE-Front/src/app/service/empresa-service';
import {RolService} from '../../../../../../EDE-Front/src/app/service/rol.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent {
  @ViewChild('f') form: NgForm;
  personas: any[] = [];
  empresas: any[] = [];
  roles: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    const usuario = this.form.value;
    usuario.id = this.data.id;
    this.usuarioService.create(usuario).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
