import {Component, OnInit, Output} from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';
import {MatDialog} from '@angular/material';
import {PersonaVehiculoDialogComponent} from '../../../dialog/persona/persona-vehiculo-dialog/persona-vehiculo-dialog.component';
import {CancelacionService} from '../../../service/cancelacion-service';
import {IdentificationTypeService} from '../../../service/identificationType-service';

@Component({
    selector: 'ms-persona-datatable',
    templateUrl: './persona-datatable.component.html',
    styleUrls: ['./persona-datatable.component.scss']
})
export class PersonaDatatableComponent extends BaseDatatable implements OnInit {
    constructor(private dialog: MatDialog,
                private tipoIdentificacionService: IdentificationTypeService,
                private tipoCancelacionService: CancelacionService) {
        super();
    }

    ngOnInit() {
        this.data.forEach(persona => {
            this.getTipoIdentificacion(persona);
            this.getFormaCancelacion(persona);
        });
    }

    openPersonaVehiculosDialog(vehiculos) {
        this.dialog.open(PersonaVehiculoDialogComponent, {
            data: vehiculos
        });
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
}
