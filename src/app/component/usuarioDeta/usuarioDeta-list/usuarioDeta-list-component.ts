import { Component, OnInit } from '@angular/core';
import { UsuarioDetaService } from '../../../service/usuarioDeta-service';
import {UsuarioDetaCreateDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-create/usuarioDeta-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {UsuarioDetaEditDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-edit/usuarioDeta-edit-dialog';
import {IdentificationTypeEditDialogComponent} from '../../../dialog/identificationType/identificationType-edit/identificationType-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';

@Component({
  selector: 'app-usuario-deta-list-component',
  templateUrl: './usuarioDeta-list-component.html',
  styleUrls: ['./usuarioDeta-list-component.css']
})
export class UsuarioDetaListComponent implements OnInit {
  loading = true;
  usuarioDetaList: any[];
  usuarioDetaDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  usuarioDetaDialogEdit: MatDialogRef<UsuarioDetaEditDialogComponent>;
  usuarioDetaDialogCreate: MatDialogRef<UsuarioDetaCreateDialogComponent>;
  displayedColumns = ['codigo', 'nombre', 'identificacion', 'email', 'usuario', 'empresa', 'acciones'];
  constructor(private snackBar: MatSnackBar, private usuarioDetaService: UsuarioDetaService, public dialog: MatDialog) {}
  ngOnInit() {
   this.getUsuarios();
  }
  getUsuarios() {
    this.usuarioDetaService.list().subscribe(res => {
        this.usuarioDetaList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.usuarioDetaDialogCreate = this.dialog.open(UsuarioDetaCreateDialogComponent, {
      height: '450px',
      width: '450px',
      disableClose: true
    });
    this.usuarioDetaDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(usuarioDeta => {
        this.getUsuarios();
        this.snackBar.open('Usuario-Deta creado satisfactoriamente');
      });
  }
  openDialogEdit(item) {
    this.usuarioDetaDialogEdit = this.dialog.open(UsuarioDetaEditDialogComponent, {
      height: '450px',
      width: '450px',
      data: item
    });

    this.usuarioDetaDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(usuarioDeta => {
        this.getUsuarios();
        this.snackBar.open('Usuario-Deta editado satisfactoriamente');
      });
  }
  delete(item) {
    this.usuarioDetaDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar UsuarioDeta',
        content: 'Estás seguro de eliminar este Usuario Deta?'
      }
    });

    this.usuarioDetaDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.usuarioDetaService.delete(item.Codigo).subscribe(
          res => {
            this.getUsuarios();
            this.snackBar.open('Usuario-Deta eliminado satisfactoriamente');
          });
      });
  }
}
