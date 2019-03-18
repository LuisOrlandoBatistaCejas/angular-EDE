import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {UsuarioService} from '../../../service/usuario-service';
import {UsuarioEditComponent} from '../../../dialog/usuario/usuario-edit/usuario-edit.component';
import {UsuarioCreateDialogComponent} from '../../../dialog/usuario/usuario-create/usuario-create-dialog';

@Component({
  selector: 'ms-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent extends BaseList implements OnInit {

  constructor(dialog: MatDialog, private usuarioService: UsuarioService) {
    super(dialog);
    this.resourceService = this.usuarioService;
  }

  ngOnInit() {
    super.getData();
  }
  onUpdate(usuario) {
    super.openDialogEdit(UsuarioEditComponent, usuario);
  }
  onCreate() {
    super.openDialogCreate(UsuarioCreateDialogComponent);
  }

}
