import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comprobante} from '../../../model/comprobante.model';
import {TipoDocService} from '../../../service/tipo-doc.service';

@Component({
  selector: 'app-comprobante-formulario',
  templateUrl: './comprobante-formulario.component.html',
  styleUrls: ['./comprobante-formulario.component.css']
})
export class ComprobanteFormularioComponent implements OnInit {
  @Input() comprobante: Comprobante;
  @Output() submitForm: EventEmitter<Comprobante> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  tipoComprobante: '';
  tipos: any[] = [];
  isNew = false;
  constructor(private tipoDocService: TipoDocService) { }

  ngOnInit() {
    this.getTipos();
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

}
