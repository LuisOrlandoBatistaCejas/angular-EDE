import {MatDialog} from '@angular/material';
import {filter} from 'rxjs-compat/operator/filter';
import {ConfirmDeleteDialogComponent} from '../dialog/confirm-delete/confirm-delete-dialog';

export class BaseList {
    // Sets When the app is loading the resources data
    loading = true;
    // Resources data
    data: any[];
    // Service for getting the data
    resourceService: any;
    constructor(private dialog: MatDialog) {}
    getData() {
        this.loading = true;
        this.resourceService.list().subscribe(
            res => {
                this.data = res;
                this.loading = false;
            },
            error => this.loading = false
        );
    }
    openDialogCreate(dialog) {
        this.dialog.open(dialog, {
            height: '550px',
            width: '650px',
            disableClose: true
        }).afterClosed()
            .subscribe(() => {
                this.getData();
            });
    }

    openDialogEdit(dialog, item) {
        this.dialog.open(dialog, {
            height: '550px',
            width: '650px',
            data: item
        }).afterClosed()
            .subscribe(() => {
                this.getData();
            });
    }
    delete(id) {
        this.dialog.open(ConfirmDeleteDialogComponent, {
            height: '200px',
            width: '400px',
            data: {
                title: 'Eliminar Recurso',
                content: 'Estás seguro de eliminar este Recurso?'
            }
        }).afterClosed()
            .subscribe(() => {
                this.resourceService.delete(id).subscribe(
                    res => {
                        this.getData();
                    });
            });
    }
}
