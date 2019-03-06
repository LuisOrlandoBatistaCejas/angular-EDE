import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {CancelacionService} from '../../../service/cancelacion-service';

@Component({
  selector: 'app-cancelacion-create-dialog',
  templateUrl: './cancelacion-create-dialog.html',
  styleUrls: ['./cancelacion-create-dialog.css']
})
export class CancelacionCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  cancelacion: any;
  constructor(
    private dialogRef: MatDialogRef<CancelacionCreateDialogComponent>,
    private cancelacionService: CancelacionService
  ) {}
  onSubmit() {
    this.cancelacion = this.form.value;
    this.cancelacionService.createCancelacion(this.cancelacion).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
