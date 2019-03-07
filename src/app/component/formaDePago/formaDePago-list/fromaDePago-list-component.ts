import { Component, OnInit } from '@angular/core';
import {FormaDePagoService} from '../../../service/formaDePago-service';
import {FormaDePagoCreateDialogComponent} from '../../../dialog/formaDePago/formaDePago-create/formaDePago-create-dialog';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-forma-pago-list-component',
  templateUrl: './fromaDePago-list-component.html',
  styleUrls: ['./fromaDePago-list-component.css']
})
export class FormaDePagoListComponent implements OnInit {
  loading = true;
  formaDePagoList: any[];
  formaDePagoDialogEdit: MatDialogRef<FormaDePagoCreateDialogComponent>;
  formaDePagoDialogCreate: MatDialogRef<FormaDePagoCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private formaDePagoService: FormaDePagoService, public dialog: MatDialog) {}
  ngOnInit() {
    this.formaDePagoService.getFormaDePagos().subscribe(
      res => {
        this.formaDePagoList = res;
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  openDialogCreate() {
    this.formaDePagoDialogCreate = this.dialog.open(FormaDePagoCreateDialogComponent, {
      height: '300px',
      width: '400px',
      disableClose: true
    });
    this.formaDePagoDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(formaDePago => {
        this.formaDePagoList.push(formaDePago);
        this.snackBar.open('Forma de pago creada');
      });
  }
}
