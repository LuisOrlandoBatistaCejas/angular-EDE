import { Component, OnInit } from '@angular/core';
import {FormaDePagoService} from '../../../service/formaDePago-service';
import {FormaDePagoCreateDialogComponent} from '../../../dialog/formaDePago/formaDePago-create/formaDePago-create-dialog';
import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-forma-pago-list-component',
  templateUrl: './fromaDePago-list-component.html',
  styleUrls: ['./fromaDePago-list-component.css']
})
export class FormaDePagoListComponent implements OnInit {
  formaDePagoList: any[];
  formaDePagoDialogEdit: MatDialogRef<FormaDePagoCreateDialogComponent>;
  formaDePagoDialogCreate: MatDialogRef<FormaDePagoCreateDialogComponent>;
  constructor(private formaDePagoService: FormaDePagoService, public dialog: MatDialog) {}
  ngOnInit() {
    this.formaDePagoService.getFormaDePagos().subscribe(
      res => {
        this.formaDePagoList = res;
      }
    );
  }
  openDialogCreate() {
    this.formaDePagoDialogCreate = this.dialog.open(FormaDePagoCreateDialogComponent, {
      height: '250px',
      width: '400px',
      disableClose: true
    });
    this.formaDePagoDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(formaDePago => {
        this.formaDePagoList.push(formaDePago);
      });
  }
}
