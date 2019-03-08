import { Component, OnInit } from '@angular/core';
import { UsuarioDetaService } from '../../../service/usuarioDeta-service';
import {UsuarioDetaCreateDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-create/usuarioDeta-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-deta-list-component',
  templateUrl: './usuarioDeta-list-component.html',
  styleUrls: ['./usuarioDeta-list-component.css']
})
export class UsuarioDetaListComponent implements OnInit {
  loading = true;
  usuarioDetaList: any[];
  usuarioDetaDialogEdit: MatDialogRef<UsuarioDetaCreateDialogComponent>;
  usuarioDetaDialogCreate: MatDialogRef<UsuarioDetaCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private usuarioDetaService: UsuarioDetaService, public dialog: MatDialog) {}
  ngOnInit() {
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
        this.usuarioDetaList.push(usuarioDeta);
        this.snackBar.open('Usuario-Deta creado');
      });
  }
}
