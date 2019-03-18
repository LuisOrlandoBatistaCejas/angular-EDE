import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormaDePagoService} from '../../../../../../EDE-Front/src/app/service/formaDePago-service';

@Component({
  selector: 'app-forma-de-pago-create-dialog',
  templateUrl: './formaDePago-create-dialog.html',
  styleUrls: ['./formaDePago-create-dialog.css']
})
export class FormaDePagoCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  formaDePago: any;
  constructor(
    private dialogRef: MatDialogRef<FormaDePagoCreateDialogComponent>,
    private formaDePagoService: FormaDePagoService
  ) {}
  onSubmit() {
    this.formaDePago = this.form.value;
    this.formaDePagoService.create(this.formaDePago).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
