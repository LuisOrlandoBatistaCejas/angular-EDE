import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {PersonaService} from '../../../service/persona-service';

@Component({
  selector: 'app-persona-edit-edit',
  templateUrl: './persona-edit-dialog.html',
  styleUrls: ['./persona-edit-dialog.css']
})
export class PersonaEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  active: boolean;
  persona: any;
  personaEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PersonaEditDialogComponent>,
    private personaService: PersonaService
  ) {}

  ngOnInit() {
    this.persona = this.data;
    this.active = this.data.Activo;
  }
  changeActivo() {
    this.active = !this.active;
  }
  onSubmit() {
    this.personaEdit = this.form.value;
    this.personaEdit.Activo = this.active;
    this.personaEdit.id = this.persona.id;
    if (this.personaEdit.Placa.length === 0) {
      this.personaEdit.Placa = null;
    }
    this.personaService.update(this.personaEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
