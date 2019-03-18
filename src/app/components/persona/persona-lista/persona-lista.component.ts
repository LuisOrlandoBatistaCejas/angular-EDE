import { Component, OnInit } from '@angular/core';
import {BaseList} from '../../../prototypes/base-list';
import {MatDialog} from '@angular/material';
import {PersonaService} from '../../../service/persona-service';
import {PersonaCreateDialogComponent} from '../../../dialog/persona/persona-create/persona-create-dialog';
import {PersonaEditDialogComponent} from '../../../dialog/persona/persona-edit/persona-edit-dialog';
import {CancelacionService} from '../../../service/cancelacion-service';
import {IdentificationTypeService} from '../../../service/identificationType-service';

@Component({
    selector: 'ms-persona-lista',
    templateUrl: './persona-lista.component.html',
    styleUrls: ['./persona-lista.component.scss']
})
export class PersonaListaComponent extends BaseList implements OnInit {

    constructor(dialog: MatDialog, private personaService: PersonaService) {
        super(dialog);
        this.resourceService = this.personaService;
    }

    ngOnInit() {
        super.getData();
    }
    onUpdate(persona) {
        super.openDialogEdit(PersonaEditDialogComponent, persona);
    }
    onCreate() {
        super.openDialogCreate(PersonaCreateDialogComponent);
    }

}
