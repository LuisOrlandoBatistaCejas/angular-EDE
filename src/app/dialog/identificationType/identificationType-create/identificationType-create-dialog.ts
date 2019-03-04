import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {IdentificationTypeService} from '../../../service/identificationType-service';

@Component({
  selector: 'app-identification-type-create-dialog',
  templateUrl: './IdentificationType-create-dialog.html',
  styleUrls: ['./IdentificationType-create-dialog.css']
})
export class IdentificationTypeCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  IdentificationType: any;
  constructor(
    private dialogRef: MatDialogRef<IdentificationTypeCreateDialogComponent>,
    private identificationTypeService: IdentificationTypeService
  ) {}
  onSubmit() {
    this.IdentificationType = this.form.value;
    this.identificationTypeService.createIdentificationType(this.IdentificationType).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
