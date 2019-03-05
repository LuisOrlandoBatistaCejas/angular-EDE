import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {PersonaService} from '../../../service/persona-service';

@Component({
  selector: 'app-persona-create-dialog',
  templateUrl: './persona-create-dialog.html',
  styleUrls: ['./persona-create-dialog.css']
})
export class PersonaCreateDialogComponent {
  @ViewChild('f') form: NgForm;
  activo = true;
  persona: any;
  placas: any[];
  placa = '';
  identificacion = 'ident';
  constructor(
    private dialogRef: MatDialogRef<PersonaCreateDialogComponent>,
    private personaService: PersonaService
  ) {}
  onSubmit() {
    this.persona = this.form.value;
    this.persona.Activo = this.activo;
    this.persona.Placa = this.transformPlaca(this.persona.Placa);
    this.personaService.createPersona(this.persona).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
  valueChange() {
    this.activo = !this.activo;
  }
  transformPlaca(text) {
    if (text) {
      const result = [];
      const textSplit = text.split(',');
      for (const item of textSplit) {
        result.push(item.trim());
      }
      return result;
    } else {
      return [];
    }
  }
}
