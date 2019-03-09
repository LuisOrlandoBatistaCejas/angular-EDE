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
  venta: boolean;
  compra: boolean;
  item: any;
  itemEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ItemEditDialogComponent>,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.item = this.data;
    this.compra = this.data.Compra;
    this.venta = this.data.Venta;
  }
  changeVenta() {
    this.venta = !this.venta;
  }
  changeCompra() {
    this.compra = !this.compra;
  }
  onSubmit() {
    this.itemEdit = this.form.value;
    this.itemEdit.Compra = this.compra;
    this.itemEdit.Venta = this.venta;
    this.itemService.update(this.itemEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
