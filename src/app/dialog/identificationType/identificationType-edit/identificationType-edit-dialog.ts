import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {IdentificationTypeService} from '../../../../../../EDE-Front/src/app/service/identificationType-service';

@Component({
  selector: 'app-indetification-type-edit',
  templateUrl: './identificationType-edit-dialog.html',
  styleUrls: ['./identificationType-edit-dialog.css']
})
export class IdentificationTypeEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  idenType: any;
  idenTypeEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<IdentificationTypeEditDialogComponent>,
    private identificationTypeService: IdentificationTypeService
  ) {}

  ngOnInit() {
    this.idenType = this.data;
  }
  onSubmit() {
    this.idenTypeEdit = this.form.value;
    this.identificationTypeService.update(this.idenTypeEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
