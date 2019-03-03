import { Component, OnInit } from '@angular/core';
import { UsuarioDetaService } from '../../../service/usuarioDeta-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {UsuarioDetaCreateDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-create/usuarioDeta-create-dialog';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-deta-list-component',
  templateUrl: './usuarioDeta-list-component.html',
  styleUrls: ['./usuarioDeta-list-component.css']
})
export class UsuarioDetaListComponent implements OnInit {
  usuarioDetaList: any[];
  usuarioDetaDialogEdit: MatDialogRef<UsuarioDetaCreateDialogComponent>;
  usuarioDetaDialogCreate: MatDialogRef<UsuarioDetaCreateDialogComponent>;
  constructor(private usuarioDetaService: UsuarioDetaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.usuarioDetaService.getUsuariosDeta().subscribe(res => {
      this.usuarioDetaList = res;
    });
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
      });
  }
}
