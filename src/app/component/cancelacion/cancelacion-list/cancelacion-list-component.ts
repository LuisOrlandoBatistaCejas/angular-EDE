import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';
import {CancelacionService} from '../../../service/cancelacion-service';
import {CancelacionCreateDialogComponent} from '../../../dialog/cancelacion/cancelacion-create/cancelacion-create-dialog';

@Component({
  selector: 'app-cancelacion-list-component',
  templateUrl: './cancelacion-list-component.html',
  styleUrls: ['./cancelacion-list-component.css']
})
export class CancelacionListComponent implements OnInit {
  cancelacionList: any[];
  cancelacionDialogEdit: MatDialogRef<CancelacionCreateDialogComponent>;
  cancelacionDialogCreate: MatDialogRef<CancelacionCreateDialogComponent>;
  constructor(private cancelacionService: CancelacionService, public dialog: MatDialog) {}
  ngOnInit() {
    this.cancelacionService.getCancelaciones().subscribe(
      res => {
        this.cancelacionList = res;
      }
    );
  }
  openDialogCreate() {
    this.cancelacionDialogCreate = this.dialog.open(CancelacionCreateDialogComponent, {
      height: '400px',
      width: '400px',
      disableClose: true
    });
    this.cancelacionDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(cancelacion => {
        this.cancelacionList.push(cancelacion);
      });
  }
}
