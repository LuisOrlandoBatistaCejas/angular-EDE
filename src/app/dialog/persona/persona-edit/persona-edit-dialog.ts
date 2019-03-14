import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {PersonaService} from '../../../service/persona-service';
import {IdentificationTypeService} from '../../../service/identificationType-service';
import {CancelacionService} from '../../../service/cancelacion-service';
import {VehiculoService} from '../../../service/vehiculo-service';

@Component({
  selector: 'app-persona-edit-edit',
  templateUrl: './persona-edit-dialog.html',
  styleUrls: ['./persona-edit-dialog.css']
})
export class PersonaEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  tiposIdentificacion: any[] = [];
  formasCancelacion: any[] = [];
  cars: any[] = [];
 constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PersonaEditDialogComponent>,
    private personaService: PersonaService,
    private tiposIdentificacionService: IdentificationTypeService,
    private formasCancelacionService: CancelacionService,
    private vehiculosService: VehiculoService
  ) {}

  ngOnInit() {
   this.data.Vehiculos = this.data.Vehiculos.map(vehiculo => {
     return vehiculo.id;
   });
   this.getFormasCancelacion();
   this.getTiposIdentificacion();
   this.getVehiculos();
  }
  getVehiculos() {
   this.vehiculosService.list().subscribe(vehiculos => {
     this.cars = vehiculos;
   });
  }
  getTiposIdentificacion() {
   this.tiposIdentificacionService.list().subscribe(tiposIdentificacion => {
     this.tiposIdentificacion = tiposIdentificacion;
   });
  }
  getFormasCancelacion() {
   this.formasCancelacionService.list().subscribe( formasCancelacion => {
     this.formasCancelacion = formasCancelacion;
   });
  }
  onSubmit() {
    const persona = this.form.value;
    persona.id = this.data.id;
    this.personaService.update(persona).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
