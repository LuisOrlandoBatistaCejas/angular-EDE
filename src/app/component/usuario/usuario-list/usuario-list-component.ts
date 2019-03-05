import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { UsuarioService } from '../../../service/usuario-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {UsuarioCreateDialogComponent} from '../../../dialog/usuario/usuario-create/usuario-create-dialog';

@Component({
  selector: 'app-usuario-list-component',
  templateUrl: './usuario-list-component.html',
  styleUrls: ['./usuario-list-component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList: any[];
  usuarioDialogEdit: MatDialogRef<UsuarioCreateDialogComponent>;
  usuarioDialogCreate: MatDialogRef<UsuarioCreateDialogComponent>;
  constructor(private usuarioService: UsuarioService, public dialog: MatDialog) {}
  ngOnInit() {
    this.usuarioService.getUsers().subscribe(
      res => {
        this.usuarioList = res;
      }
    );
  }
  openDialogCreate() {
    this.usuarioDialogCreate = this.dialog.open(UsuarioCreateDialogComponent, {
      height: '450px',
      width: '450px',
      disableClose: true
    });
    this.usuarioDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(usuario => {
        this.usuarioList.push(usuario);
      });
  }
}
