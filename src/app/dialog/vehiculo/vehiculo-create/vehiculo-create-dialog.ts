import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {VehiculoService} from '../../../service/vehiculo-service';

@Component({
  selector: 'app-vehiculo-create-dialog',
  templateUrl: './vehiculo-create-dialog.html',
  styleUrls: ['./vehiculo-create-dialog.css']
})
export class VehiculoCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  vehiculo: any;
  constructor(
    private dialogRef: MatDialogRef<VehiculoCreateDialogComponent>,
    private vehiculoService: VehiculoService
  ) {}
  onSubmit() {
    this.vehiculo = this.form.value;
    this.vehiculoService.create(this.vehiculo).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
