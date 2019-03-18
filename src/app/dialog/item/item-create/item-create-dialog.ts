import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {ItemService} from '../../../../../../EDE-Front/src/app/service/item-service';

@Component({
  selector: 'app-item-create-dialog',
  templateUrl: './item-create-dialog.html',
  styleUrls: ['./item-create-dialog.css']
})
export class ItemCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  item: any;
  constructor(
    private dialogRef: MatDialogRef<ItemCreateDialogComponent>,
    private itemService: ItemService
  ) {
  }
  onSubmit() {
    this.itemService.create(this.form.value).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
