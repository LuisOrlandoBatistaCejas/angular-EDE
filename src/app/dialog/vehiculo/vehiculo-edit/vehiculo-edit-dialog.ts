import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {VehiculoService} from '../../../../../../EDE-Front/src/app/service/vehiculo-service';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit-dialog.html',
  styleUrls: ['./vehiculo-edit-dialog.css']
})
export class VehiculoEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<VehiculoEditDialogComponent>,
    private vehiculoService: VehiculoService
  ) {}

  ngOnInit() {
  }
  onSubmit() {
    const vehiculo = this.form.value;
    vehiculo.id = this.data.id;
    this.vehiculoService.update(vehiculo).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
