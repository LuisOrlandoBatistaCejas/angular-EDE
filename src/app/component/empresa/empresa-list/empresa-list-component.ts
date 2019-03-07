import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { EmpresaService } from '../../../service/empresa-service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {EmpresaCreateDialogComponent} from '../../../dialog/empresa/empresa-create/empresa-create-dialog';

@Component({
  selector: 'app-empresa-list-component',
  templateUrl: './empresa-list-component.html',
  styleUrls: ['./empresa-list-component.css']
})
export class EmpresaListComponent implements OnInit {
  loading = true;
  empresaList: any[];
  empresaDialogEdit: MatDialogRef<EmpresaCreateDialogComponent>;
  empresaDialogCreate: MatDialogRef<EmpresaCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private empresaService: EmpresaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.empresaService.getEmpresas().subscribe(
      res => {
        this.empresaList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.empresaDialogCreate = this.dialog.open(EmpresaCreateDialogComponent, {
      height: '450px',
      width: '650px',
      disableClose: true
    });
    this.empresaDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(empresa => {
        this.empresaList.push(empresa);
        this.snackBar.open('Empresa creada');
      });
  }
}
