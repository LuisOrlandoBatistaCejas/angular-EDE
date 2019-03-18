import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {ItemService} from '../../../service/item-service';
import {ItemCreateDialogComponent} from '../../../dialog/item/item-create/item-create-dialog';
import {ItemEditDialogComponent} from '../../../dialog/item/item-edit/item-edit-dialog';

@Component({
    selector: 'ms-item-lista',
    templateUrl: './item-lista.component.html',
    styleUrls: ['./item-lista.component.scss']
})
export class ItemListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private itemService: ItemService) {
        super(dialog);
        this.resourceService = this.itemService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(item) {
        super.openDialogEdit(ItemEditDialogComponent, item);
    }
    onCreate() {
        super.openDialogCreate(ItemCreateDialogComponent);
    }

}
