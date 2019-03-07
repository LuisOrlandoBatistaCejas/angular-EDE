import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../service/item-service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {ItemCreateDialogComponent} from '../../../dialog/item/item-create/item-create-dialog';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.html',
  styleUrls: ['./item-list-component.css']
})
export class ItemListComponent implements OnInit {
  loading = true;
  itemList: any[];
  itemDialogEdit: MatDialogRef<ItemCreateDialogComponent>;
  itemDialogCreate: MatDialogRef<ItemCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private itemService: ItemService, public dialog: MatDialog) {}
  ngOnInit() {
    this.itemService.getItems().subscribe(
      res => {
        this.itemList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.itemDialogCreate = this.dialog.open(ItemCreateDialogComponent, {
      height: '450px',
      width: '500px',
      disableClose: true
    });
    this.itemDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(usuarioDeta => {
        this.itemList.push(usuarioDeta);
        this.snackBar.open('Item creado');
      });
  }
}
