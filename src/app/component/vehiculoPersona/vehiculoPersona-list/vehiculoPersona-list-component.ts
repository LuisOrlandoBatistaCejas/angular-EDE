import { Component, OnInit } from '@angular/core';
import {VehiculoPersonaService} from '../../../service/vehiculoPersona';
import {VehiculoPersonaCreateDialogComponent} from '../../../dialog/vehiculoPersona/vehiculoPersona-create/vehiculoPersona-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vehiculo-persona-list-component',
  templateUrl: './vehiculoPersona-list-component.html',
  styleUrls: ['./vehiculoPersona-list-component.css']
})
export class VehiculoPersonaListComponent implements OnInit {
  loading = true;
  vehiculoPersonaList: any[];
  vehiculoPersonaDialogEdit: MatDialogRef<VehiculoPersonaCreateDialogComponent>;
  vehiculoPersonaDialogCreate: MatDialogRef<VehiculoPersonaCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private vehiculoPersonaService: VehiculoPersonaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.vehiculoPersonaService.list().subscribe(res => {
      this.vehiculoPersonaList = res;
      this.loading = false;
    },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.vehiculoPersonaDialogCreate = this.dialog.open(VehiculoPersonaCreateDialogComponent, {
      height: '300px',
      width: '450px',
      disableClose: true
    });
    this.vehiculoPersonaDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(vehiculoPersona => {
        this.vehiculoPersonaList.push(vehiculoPersona);
        this.snackBar.open('Relación vehículo-persona creada');
      });
  }
}
