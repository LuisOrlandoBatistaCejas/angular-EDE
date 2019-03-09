import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {CancelacionService} from '../../../service/cancelacion-service';

@Component({
  selector: 'app-cancelacion-edit',
  templateUrl: './cancelacion-edit-dialog.html',
  styleUrls: ['./cancelacion-edit-dialog.css']
})
export class CancelacionEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  cancelacion: any;
  cancelacionEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CancelacionEditDialogComponent>,
    private cancelacionService: CancelacionService
  ) {}

  ngOnInit() {
    this.cancelacion = this.data;
  }
  onSubmit() {
    this.cancelacionEdit = this.form.value;
    this.cancelacionEdit.id = this.cancelacion.id;
    this.cancelacionService.update(this.cancelacionEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
