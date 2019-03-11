import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comprobante} from '../../../model/comprobante.model';
import {TipoDocService} from '../../../service/tipo-doc.service';
import {PersonaService} from '../../../service/persona-service';
import {MatDialog} from '@angular/material';
import {PersonaEditDialogComponent} from '../../../dialog/persona/persona-edit/persona-edit-dialog';
import {FormaDePagoService} from '../../../service/formaDePago-service';
import {UsuarioService} from '../../../service/usuario-service';
import {PersonaComprobanteDetailsComponent} from '../../../dialog/persona/persona-comprobante-details/persona-comprobante-details.component';

@Component({
  selector: 'app-comprobante-formulario',
  templateUrl: './comprobante-formulario.component.html',
  styleUrls: ['./comprobante-formulario.component.css']
})
export class ComprobanteFormularioComponent implements OnInit {
  @Input() comprobante: Comprobante;
  @Output() submitForm: EventEmitter<Comprobante> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  numeroComprobante = '000023000020100001'
  tipoComprobante: '';
  tipos: any[] = [];
  personas: any = [];
  formasPago: any[] = [];
  usuarios: any[] = [];
  isNew = false;
  selectedClient: any = null;
  constructor(private tipoDocService: TipoDocService,
              private personasService: PersonaService,
              private formasPagoService: FormaDePagoService,
              private usuariosService: UsuarioService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getTipos();
    this.getPersonas();
    this.getFormasDePago();
    if (!this.comprobante) {
      this.isNew = true;
      this.comprobante = new Comprobante();
    }
  }
  getTipos() {
    this.tipoDocService.list().subscribe( tipos => {
      this.tipos = tipos;
      console.log(tipos);
    });
  }
  selectTipo(documento) {
    this.tipoComprobante = documento;
  }
  getPersonas() {
    this.personasService.list().subscribe(personas => {
      this.personas = personas;
    });
  }
  selectCliente(client) {
    this.selectedClient = client;
  }
  getFormasDePago() {
    this.formasPagoService.list().subscribe(formasPago => {
      this.formasPago = formasPago;
    });
  }
  getUsuarios() {
    this.usuariosService.list().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  /**
   * emits an event with the value of the form when it is submitted
   */
  onSubmit(comprobante: Comprobante) {
    if (!this.isNew) {
      comprobante.id = this.comprobante.id;
    }
    this.submitForm.emit(comprobante);
  }

  /**
   * Emits cancel event
   */
  onCancel() {
    this.cancel.emit();
  }
  openClientDetailsDialog() {
    if (this.selectedClient) {
      const dialogRef = this.dialog.open(PersonaComprobanteDetailsComponent, {
        data: this.selectedClient
      }).afterClosed().subscribe( res => {
        if (res) {
          this.selectedClient = res;
        }
      });
    }
  }

}
