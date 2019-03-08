import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { UsuarioService } from '../../../service/usuario-service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {UsuarioCreateDialogComponent} from '../../../dialog/usuario/usuario-create/usuario-create-dialog';

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
  constructor(private snackBar: MatSnackBar, private usuarioService: UsuarioService, public dialog: MatDialog) {}
  ngOnInit() {
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
      height: '450px',
      width: '450px',
      disableClose: true
    });
    this.usuarioDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(usuario => {
        this.usuarioList.push(usuario);
        this.snackBar.open('Usuario creado');
      });
  }
}
