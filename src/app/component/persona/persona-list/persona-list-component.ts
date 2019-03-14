import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { PersonaService } from '../../../service/persona-service';
import {PersonaCreateDialogComponent} from '../../../dialog/persona/persona-create/persona-create-dialog';
import {PersonaEditDialogComponent} from '../../../dialog/persona/persona-edit/persona-edit-dialog';
import {IdentificationTypeService} from '../../../service/identificationType-service';
import {VehiculoService} from '../../../service/vehiculo-service';
import {CancelacionService} from '../../../service/cancelacion-service';
import {PersonaVehiculoDialogComponent} from '../../../dialog/persona/persona-vehiculo-dialog/persona-vehiculo-dialog.component';
import {ConfirmDeleteDialogComponent} from '../../../dialog/confirm-delete/confirm-delete-dialog';
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
  displayedColumns = [
    'tipoIdentificacion', 'identificacion', 'razonSocial', 'nombreComercial', 'email', 'formaCancelacion', 'vehiculos', 'acciones'
  ];
  constructor(private snackBar: MatSnackBar, private personaService: PersonaService,
              public dialog: MatDialog, private tipoIdentificacionService: IdentificationTypeService,
              private tipoCancelacionService: CancelacionService) {}
  ngOnInit() {
   this.getPersonas();
  }
  getPersonas() {
    this.loading = true;
    this.personaService.list().subscribe(res => {
        this.personaList = res;
        this.personaList.forEach(persona => {
          this.getTipoIdentificacion(persona);
          this.getFormaCancelacion(persona);
        });
        this.loading = false;
      },
      error => this.loading = false
    );
  }
  getTipoIdentificacion(persona) {
    this.tipoIdentificacionService.getById(persona.TipoIdenId).subscribe(tipoIdent => {
      persona.tipoIdentificacion = tipoIdent;
    });
  }
  getFormaCancelacion(persona) {
    this.tipoCancelacionService.getById(persona.FormaCancId).subscribe(formaCancelacion => {
      persona.formaCancelacion = formaCancelacion;
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
        this.getPersonas();
        this.snackBar.open('Persona creada satisfactoriamente');
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
        this.getPersonas();
        this.snackBar.open('Persona editada satisfactoriamente');
      });
  }

  delete(item) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        title: 'Eliminar Persona',
        content: 'Estás seguro de eliminar esta Persona?'
      }
    }).afterClosed()
      .pipe(filter(name => name))
      .subscribe(deleted => {
        this.personaService.delete(item.id).subscribe(
          res => {
            this.getPersonas();
            this.snackBar.open('Persona eliminada satisfactoriamente');
          });
      });
  }

  openPersonaVehiculosDialog(vehiculos) {
    this.dialog.open(PersonaVehiculoDialogComponent, {
      data: vehiculos
    });
  }
}
