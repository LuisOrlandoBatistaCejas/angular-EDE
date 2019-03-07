import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {PersonaService} from '../../../service/persona-service';
import {CancelacionService} from '../../../service/cancelacion-service';
import {IdentificationTypeService} from '../../../service/identificationType-service';

@Component({
  selector: 'app-persona-create-dialog',
  templateUrl: './persona-create-dialog.html',
  styleUrls: ['./persona-create-dialog.css']
})
export class PersonaCreateDialogComponent implements OnInit{
  @ViewChild('f') form: NgForm;
  cancelacionIds: any[];
  idenTypeIds: any[];
  loadingCancelacionIds = true;
  loadingIdenTypeIds = true;
  activo = true;
  persona: any;
  placas: any[];
  placa = '';
  identificacion = 'ident';
  constructor(
    private idenTypeService: IdentificationTypeService,
    private cancelacionService: CancelacionService,
    private dialogRef: MatDialogRef<PersonaCreateDialogComponent>,
    private personaService: PersonaService
  ) {}
  ngOnInit() {
    this.cancelacionService.getCancelaciones().subscribe(
      res => {
        // for (const it of res) {
        //   this.cancelacionIds.push(it.id);
        // }
        this.cancelacionIds = res;
        this.loadingCancelacionIds = false;
      });
    this.idenTypeService.getTipoIdentificacion().subscribe(
      res => {
        this.idenTypeIds = res;
        this.loadingIdenTypeIds = false;
      });
  }
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
