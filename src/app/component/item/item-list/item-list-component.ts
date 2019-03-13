import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../service/item-service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import {ItemCreateDialogComponent} from '../../../dialog/item/item-create/item-create-dialog';
import {UsuarioDetaEditDialogComponent} from '../../../dialog/usuarioDeta/usuarioDeta-edit/usuarioDeta-edit-dialog';
import {ItemEditDialogComponent} from '../../../dialog/item/item-edit/item-edit-dialog';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.html',
  styleUrls: ['./item-list-component.css']
})
export class ItemListComponent implements OnInit {
  loading = true;
  itemList: any[];
  itemDialogDelete: MatDialogRef<ConfirmDeleteDialogComponent>;
  itemDialogEdit: MatDialogRef<ItemEditDialogComponent>;
  itemDialogCreate: MatDialogRef<ItemCreateDialogComponent>;
  displayedColumns = ['codigo', 'nombre', 'descripcion', 'precio', 'iva', 'acciones'];
  constructor(private snackBar: MatSnackBar, private itemService: ItemService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.loading = true;
    this.itemService.list().subscribe(
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
        this.getItems();
        this.snackBar.open('Item creado satisfactoriamente');
      });
  }
  openDialogEdit(item) {
    this.itemDialogEdit = this.dialog.open(ItemEditDialogComponent, {
      height: '450px',
      width: '500px',
      data: item
    });

    this.itemDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(res => {
        this.getItems();
        this.snackBar.open('Item editado satisfactoriamente');
      });
  }
  delete(item) {
    this.itemDialogDelete = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Item',
        content: 'Estás seguro de eliminar este Item?'
      }
    });

    this.itemDialogDelete
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.itemService.delete(item.Codigo).subscribe(
          res => {
            this.getItems();
            this.snackBar.open('Item eliminado satisfactoriamente');
          });
      });
  }
}
