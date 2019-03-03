import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {VehiculoPersonaService} from '../../../service/vehiculoPersona';

@Component({
  selector: 'app-vehiculo-persona-create-dialog',
  templateUrl: './vehiculoPersona-create-dialog.html',
  styleUrls: ['./vehiculoPersona-create-dialog.css']
})
export class VehiculoPersonaCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  vehiculoPersona: any;
  constructor(
    private dialogRef: MatDialogRef<VehiculoPersonaCreateDialogComponent>,
    private vehiculoPersonaService: VehiculoPersonaService
  ) {}
  onSubmit() {
    this.vehiculoPersona = this.form.value;
    this.vehiculoPersonaService.createVehiculoPersona(this.vehiculoPersona).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
