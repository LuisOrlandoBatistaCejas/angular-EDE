import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-persona-vehiculo-dialog',
  templateUrl: './persona-vehiculo-dialog.component.html',
  styleUrls: ['./persona-vehiculo-dialog.component.css']
})
export class PersonaVehiculoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  displayedColumns = ['placa', 'nombre'];
  ngOnInit() {
  }

}
