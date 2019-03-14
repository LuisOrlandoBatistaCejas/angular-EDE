import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../service/vehiculo-service';
import {VehiculoCreateDialogComponent} from '../../../dialog/vehiculo/vehiculo-create/vehiculo-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {VehiculoEditDialogComponent} from '../../../dialog/vehiculo/vehiculo-edit/vehiculo-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';
import {PersonaVehiculoDialogComponent} from '../../../dialog/persona/persona-vehiculo-dialog/persona-vehiculo-dialog.component';

@Component({
  selector: 'app-vehiculo-list-component',
  templateUrl: './vehiculo-list-component.html',
  styleUrls: ['./vehiculo-list-component.css']
})
export class VehiculoListComponent implements OnInit {
  loading = true;
  vehiculoList: any[];
  vehiculoDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  vehiculoDialogEdit: MatDialogRef<VehiculoEditDialogComponent>;
  vehiculoDialogCreate: MatDialogRef<VehiculoCreateDialogComponent>;
  displayedColumns = ['placa', 'nombre', 'acciones'];
  constructor(private snackBar: MatSnackBar, private vehiculoService: VehiculoService, public dialog: MatDialog) {}
  ngOnInit() {
   this.getVehiculos();
  }
  getVehiculos() {
    this.vehiculoService.list().subscribe(res => {
        this.vehiculoList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
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
        this.getVehiculos();
        this.snackBar.open('Vehículo creado satisfactoriamente');
      });
  }
  openDialogEdit(item) {
    this.vehiculoDialogEdit = this.dialog.open(VehiculoEditDialogComponent, {
      height: '300px',
      width: '450px',
      data: item
    });

    this.vehiculoDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(vehiculo => {
        this.getVehiculos();
        this.snackBar.open('Vehículo editado satisfactoriamente');
      });
  }
  delete(item) {
    this.vehiculoDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Vehículo',
        content: 'Estás seguro de eliminar este Vehículo?'
      }
    });

    this.vehiculoDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.vehiculoService.delete(item.id).subscribe(
          res => {
            this.getVehiculos();
            this.snackBar.open('Vehículo eliminado satisfactoriamente');
          });
      });
  }

}
