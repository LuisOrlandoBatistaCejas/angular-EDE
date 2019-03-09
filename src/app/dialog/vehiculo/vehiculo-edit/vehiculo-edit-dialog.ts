import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {VehiculoService} from '../../../service/vehiculo-service';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit-dialog.html',
  styleUrls: ['./vehiculo-edit-dialog.css']
})
export class VehiculoEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  vehiculo: any;
  vehiculoEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<VehiculoEditDialogComponent>,
    private vehiculoService: VehiculoService
  ) {}

  ngOnInit() {
    this.vehiculo = this.data;
  }
  onSubmit() {
    this.vehiculoEdit = this.form.value;
    this.vehiculoService.update(this.vehiculoEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
