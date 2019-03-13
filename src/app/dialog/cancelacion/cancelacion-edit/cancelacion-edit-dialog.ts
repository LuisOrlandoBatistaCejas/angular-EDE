import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {CancelacionService} from '../../../service/cancelacion-service';
import {FormaDePagoService} from '../../../service/formaDePago-service';

@Component({
  selector: 'app-cancelacion-edit',
  templateUrl: './cancelacion-edit-dialog.html',
  styleUrls: ['./cancelacion-edit-dialog.css']
})
export class CancelacionEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  formasDePago: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formasPagoService: FormaDePagoService,
    private dialogRef: MatDialogRef<CancelacionEditDialogComponent>,
    private cancelacionService: CancelacionService
  ) {}

  ngOnInit() {
    this.getFormasDePago();
  }
  getFormasDePago() {
    this.formasPagoService.list().subscribe(formasDePago => {
      this.formasDePago = formasDePago;
    });
  }
  onSubmit() {
    const cancelacion = this.form.value;
    cancelacion.id = this.data.id;
    this.cancelacionService.update(cancelacion).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
