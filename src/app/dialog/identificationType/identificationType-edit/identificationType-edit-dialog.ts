import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

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
    private dialogRef: MatDialogRef<IdentificationTypeEditDialogComponent>
  ) {}

  ngOnInit() {
    this.idenType = this.data;
  }
  onSubmit() {
    this.idenTypeEdit = this.form.value;
    this.dialogRef.close(this.idenTypeEdit);
  }
}
