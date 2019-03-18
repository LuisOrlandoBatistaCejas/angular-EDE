import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {CancelacionService} from '../../../../../../EDE-Front/src/app/service/cancelacion-service';
import {FormaDePagoService} from '../../../../../../EDE-Front/src/app/service/formaDePago-service';

@Component({
  selector: 'app-cancelacion-create-dialog',
  templateUrl: './cancelacion-create-dialog.html',
  styleUrls: ['./cancelacion-create-dialog.css']
})
export class CancelacionCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  formasDePago: any[];
  cancelacion: any;
  constructor(
    private dialogRef: MatDialogRef<CancelacionCreateDialogComponent>,
    private cancelacionService: CancelacionService,
    private formasPagoService: FormaDePagoService
  ) {
    this.getFormasDePago();
  }
  onSubmit() {
    this.cancelacion = this.form.value;
    this.cancelacionService.create(this.cancelacion).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  getFormasDePago() {
    this.formasPagoService.list().subscribe(formasDePago => {
      this.formasDePago = formasDePago;
    });
  }
  close() {
    this.dialogRef.close();
  }
}
