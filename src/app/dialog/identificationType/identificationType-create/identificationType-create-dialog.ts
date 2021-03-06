import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {IdentificationTypeService} from '../../../../../../EDE-Front/src/app/service/identificationType-service';

@Component({
  selector: 'app-identification-type-create-dialog',
  templateUrl: './identificationType-create-dialog.html',
  styleUrls: ['./identificationType-create-dialog.css']
})
export class IdentificationTypeCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  identificationType: any;
  constructor(
    private dialogRef: MatDialogRef<IdentificationTypeCreateDialogComponent>,
    private identificationTypeService: IdentificationTypeService
  ) {}
  onSubmit() {
    this.identificationType = this.form.value;
    this.identificationTypeService.create(this.identificationType).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
