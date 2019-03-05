import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import {CancelacionService} from '../../../service/cancelacion-service';

@Component({
  selector: 'app-cancelacion-list-component',
  templateUrl: './cancelacion-list-component.html',
  styleUrls: ['./cancelacion-list-component.css']
})
export class CancelacionListComponent implements OnInit {
  cancelacionList: any[];
  // cancelacionDialogEdit: MatDialogRef<EmpresaCreateDialogComponent>;
  // cancelacionDialogCreate: MatDialogRef<EmpresaCreateDialogComponent>;
  constructor(private cancelacionService: CancelacionService, public dialog: MatDialog) {}
  ngOnInit() {
    this.cancelacionService.getDocumento().subscribe(
      res => {
        this.cancelacionList = res;
      }
    );
  }
}
