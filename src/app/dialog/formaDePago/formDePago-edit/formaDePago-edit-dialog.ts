import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {ItemService} from '../../../../../../EDE-Front/src/app/service/item-service';
import {FormaDePagoService} from '../../../../../../EDE-Front/src/app/service/formaDePago-service';

@Component({
  selector: 'app-forma-pago-edit',
  templateUrl: './formaDePago-edit-dialog.html',
  styleUrls: ['./formaDePago-edit-dialog.css']
})
export class FormDePagoEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  formaDePago: any;
  formaDePagoEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDePagoEditDialogComponent>,
    private formaDePagoService: FormaDePagoService
  ) {}

  ngOnInit() {
    this.formaDePago = this.data;
  }
  onSubmit() {
    this.formaDePagoEdit = this.form.value;
    this.formaDePagoService.update(this.formaDePagoEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
