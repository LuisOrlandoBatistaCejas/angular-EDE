import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PersonaEditDialogComponent} from '../../persona/persona-edit/persona-edit-dialog';

@Component({
  selector: 'app-item-comprobante-detalles',
  templateUrl: './item-comprobante-detalles.component.html',
  styleUrls: ['./item-comprobante-detalles.component.css']
})
export class ItemComprobanteDetallesComponent implements OnInit {

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
