import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {ItemService} from '../../../service/item-service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit-dialog.html',
  styleUrls: ['./item-edit-dialog.css']
})
export class ItemEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ItemEditDialogComponent>,
    private itemService: ItemService
  ) {}

  ngOnInit() {
  }
  onSubmit() {
    const item = this.form.value;
    item.id = this.data.Codigo;
    this.itemService.update(item).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
