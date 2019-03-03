import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {ItemService} from '../../../service/item-service';

@Component({
  selector: 'app-item-create-dialog',
  templateUrl: './item-create-dialog.html',
  styleUrls: ['./item-create-dialog.css']
})
export class ItemCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  venta: boolean;
  compra: boolean;
  item: any;
  constructor(
    private dialogRef: MatDialogRef<ItemCreateDialogComponent>,
    private itemService: ItemService
  ) {
    this.venta = true;
    this.compra = true;
  }
  onSubmit() {
    this.item = this.form.value;
    this.item.Venta = this.venta;
    this.item.Compra = this.compra;
    this.itemService.createItem(this.item).subscribe(res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log(error.message);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
