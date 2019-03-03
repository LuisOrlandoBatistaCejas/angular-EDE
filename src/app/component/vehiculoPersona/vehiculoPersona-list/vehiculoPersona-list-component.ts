import { Component, OnInit } from '@angular/core';
import {VehiculoPersonaService} from '../../../service/vehiculoPersona';
import {VehiculoPersonaCreateDialogComponent} from '../../../dialog/vehiculoPersona/vehiculoPersona-create/vehiculoPersona-create-dialog';
import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vehiculo-persona-list-component',
  templateUrl: './vehiculoPersona-list-component.html',
  styleUrls: ['./vehiculoPersona-list-component.css']
})
export class VehiculoPersonaListComponent implements OnInit {
  vehiculoPersonaList: any[];
  vehiculoPersonaDialogEdit: MatDialogRef<VehiculoPersonaCreateDialogComponent>;
  vehiculoPersonaDialogCreate: MatDialogRef<VehiculoPersonaCreateDialogComponent>;
  constructor(private vehiculoPersonaService: VehiculoPersonaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.vehiculoPersonaService.getVehiculoPersona().subscribe(res => {
      this.vehiculoPersonaList = res;
    });
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
      });
  }
}
