import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PersonaService } from '../../../service/persona-service';
import {PersonaCreateDialogComponent} from '../../../dialog/persona/persona-create/persona-create-dialog';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persona-list-component',
  templateUrl: './persona-list-component.html',
  styleUrls: ['./persona-list-component.css']
})
export class PersonaListComponent implements OnInit {
  personaList: any[];
  personaDialogEdit: MatDialogRef<PersonaCreateDialogComponent>;
  personaDialogCreate: MatDialogRef<PersonaCreateDialogComponent>;
  constructor(private personaService: PersonaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.personaService.getPersonas().subscribe(res => {
      this.personaList = res;
    });
  }
  openDialogCreate() {
    this.personaDialogCreate = this.dialog.open(PersonaCreateDialogComponent, {
      height: '550px',
      width: '650px',
      disableClose: true
    });
    this.personaDialogCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(persona => {
        // comprobante.id = this.asigId();
        this.personaList.push(persona);
      });
  }
  openDialogEdit(item) {
    // this.personaDialogEdit = this.dialog.open(PersonaCreateDialogComponent, {
    //   height: '500px',
    //   width: '600px',
    //   data: item
    // });
    //
    // this.personaDialogEdit
    //   .afterClosed()
    //   .pipe(filter(name => name))
    //   .subscribe(persona => {
    //     const index = this.personaList.findIndex(object => object.Id === persona.Id);
    //     this.personaList[index] = persona;
    //     // this.comprobanteList.push(message);
    //   });
  }
}
