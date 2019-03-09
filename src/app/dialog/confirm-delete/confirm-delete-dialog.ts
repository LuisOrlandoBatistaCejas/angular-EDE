import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './confirm-delete-dialog.html',
  styleUrls: ['./confirm-delete-dialog.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>
  ) {}

  ngOnInit() {
    // this.data = this.data;
  }
  // onSubmit() {
  //   this.dialogRef.close(this.data);
  // }
}
