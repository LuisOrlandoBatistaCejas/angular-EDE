import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {PersonaService} from '../../../service/persona-service';
import {CancelacionService} from '../../../service/cancelacion-service';
import {IdentificationTypeService} from '../../../service/identificationType-service';
import {VehiculoService} from '../../../service/vehiculo-service';

@Component({
  selector: 'app-persona-create-dialog',
  templateUrl: './persona-create-dialog.html',
  styleUrls: ['./persona-create-dialog.css']
})
export class PersonaCreateDialogComponent implements OnInit{
  @ViewChild('f') form: NgForm;
  formasCancelacion: any[] = [];
  tiposIdentificacion: any[] = [];
  cars: any[] = [];
  constructor(
    private idenTypeService: IdentificationTypeService,
    private cancelacionService: CancelacionService,
    private vehiculosService: VehiculoService,
    private dialogRef: MatDialogRef<PersonaCreateDialogComponent>,
    private personaService: PersonaService
  ) {}
  ngOnInit() {
    this.getTiposIdentificacion();
    this.getFormasCancelacion();
    this.getVehiculos();
  }
  getTiposIdentificacion() {
    this.idenTypeService.list().subscribe(
      res => {
        this.tiposIdentificacion = res;
      });
  }
  getFormasCancelacion() {
    this.cancelacionService.list().subscribe(
      res => {
        this.formasCancelacion = res;
      });
  }
  getVehiculos() {
    this.vehiculosService.list().subscribe( vehiculos => {
      this.cars = vehiculos;
    });
  }
  onSubmit() {
    this.personaService.create(this.form.value).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
