import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { UsuarioService } from '../../../service/usuario-service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {UsuarioCreateDialogComponent} from '../../../dialog/usuario/usuario-create/usuario-create-dialog';
import {DocumentoEditDialogComponent} from '../../../dialog/documento/documento-edit/documento-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';
import {UsuarioEditComponent} from '../../../dialog/usuario/usuario-edit/usuario-edit.component';

@Component({
  selector: 'app-usuario-list-component',
  templateUrl: './usuario-list-component.html',
  styleUrls: ['./usuario-list-component.css']
})
export class UsuarioListComponent implements OnInit {
  loading = true;
  usuarioList: any[];
  usuarioDialogEdit: MatDialogRef<UsuarioCreateDialogComponent>;
  usuarioDialogCreate: MatDialogRef<UsuarioCreateDialogComponent>;
  displayedColumns = ['nombre', 'identificacion', 'email', 'usuario', 'empresa', 'rol', 'acciones'];
  constructor(private snackBar: MatSnackBar, private usuarioService: UsuarioService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios() {
    this.usuarioService.list().subscribe(
      res => {
        this.usuarioList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.usuarioDialogCreate = this.dialog.open(UsuarioCreateDialogComponent, {
      height: '550px',
      width: '650px',
      disableClose: true
    });
    this.usuarioDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(usuario => {
        this.getUsuarios();
        this.snackBar.open('Usuario creado satisfactoriamente');
      });
  }

  openDialogEdit(item) {
    this.dialog.open(UsuarioEditComponent, {
      height: '550px',
      width: '650px',
      data: item
    }).afterClosed()
      .pipe(filter(name => name))
      .subscribe(idenType => {
        this.getUsuarios();
        this.snackBar.open('Usuario editado satisfactoriamente');
      });
  }
  delete(item) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Documento',
        content: 'Estás seguro de eliminar este Usuario?'
      }
    }).afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.usuarioService.delete(item.id).subscribe(
          res => {
            this.getUsuarios();
            this.snackBar.open('Se ha eliminado un usuario satisfactoriamente');
          });
      });
  }
}
