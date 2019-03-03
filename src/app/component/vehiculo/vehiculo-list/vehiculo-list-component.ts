import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../service/vehiculo-service';
import {VehiculoCreateDialogComponent} from '../../../dialog/vehiculo/vehiculo-create/vehiculo-create-dialog';
import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vehiculo-list-component',
  templateUrl: './vehiculo-list-component.html',
  styleUrls: ['./vehiculo-list-component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculoList: any[];
  vehiculoDialogEdit: MatDialogRef<VehiculoCreateDialogComponent>;
  vehiculoDialogCreate: MatDialogRef<VehiculoCreateDialogComponent>;
  constructor(private vehiculoService: VehiculoService, public dialog: MatDialog) {}
  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe(res => {
      this.vehiculoList = res;
    });
  }
  openDialogCreate() {
    this.vehiculoDialogCreate = this.dialog.open(VehiculoCreateDialogComponent, {
      height: '300px',
      width: '450px',
      disableClose: true
    });
    this.vehiculoDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(vehiculo => {
        this.vehiculoList.push(vehiculo);
      });
  }
}
