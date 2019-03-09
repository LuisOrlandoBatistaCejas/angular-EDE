import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { PersonaService } from '../../../service/persona-service';
import {PersonaCreateDialogComponent} from '../../../dialog/persona/persona-create/persona-create-dialog';
import {PersonaEditDialogComponent} from '../../../dialog/persona/persona-edit/persona-edit-dialog';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persona-list-component',
  templateUrl: './persona-list-component.html',
  styleUrls: ['./persona-list-component.css']
})
export class PersonaListComponent implements OnInit {
  loading = true;
  personaList: any[];
  personaDialogEdit: MatDialogRef<PersonaEditDialogComponent>;
  personaDialogCreate: MatDialogRef<PersonaCreateDialogComponent>;
  constructor(private snackBar: MatSnackBar, private personaService: PersonaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.personaService.list().subscribe(res => {
      this.personaList = res;
      this.loading = false;
    },
      error => this.loading = false
    );
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
        this.personaList.push(persona);
        this.snackBar.open('Persona creada');
      });
  }
  openDialogEdit(item) {
    this.personaDialogEdit = this.dialog.open(PersonaEditDialogComponent, {
      height: '550px',
      width: '650px',
      data: item
    });

    this.personaDialogEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(persona => {
        const index = this.personaList.findIndex(object => object.Id === persona.Id);
        this.personaList[index] = persona;
        // this.comprobanteList.push(message);
      });
  }
}
