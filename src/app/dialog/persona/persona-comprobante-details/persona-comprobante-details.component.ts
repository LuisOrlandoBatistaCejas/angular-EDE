import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PersonaEditDialogComponent} from '../persona-edit/persona-edit-dialog';

@Component({
  selector: 'app-persona-comprobante-details',
  templateUrl: './persona-comprobante-details.component.html',
  styleUrls: ['./persona-comprobante-details.component.css']
})
export class PersonaComprobanteDetailsComponent implements OnInit {

  constructor(  @Inject(MAT_DIALOG_DATA) public data: any = {},
                private dialogRef: MatDialogRef<PersonaEditDialogComponent>) { }

  ngOnInit() {
  }
  onAceptar() {
   this.dialogRef.close(this.data);
  }
  onCancelar() {
    this.dialogRef.close();
  }

}
