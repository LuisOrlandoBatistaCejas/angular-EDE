import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comprobante} from '../../../model/comprobante.model';

@Component({
  selector: 'app-comprobantes-datatable',
  templateUrl: './comprobantes-datatable.component.html',
  styleUrls: ['./comprobantes-datatable.component.css']
})
export class ComprobantesDatatableComponent implements OnInit {
  // Resource's data input
  @Input() data: Comprobante[];
  @Output() update: EventEmitter<any> = new EventEmitter();
  // Event for emitting the Delete action
  @Output() delete: EventEmitter<any> = new EventEmitter();
  // The total number of filtered resources in db
  @Input() totalItems: number;
  // Array of name of columns to display
  displayedColumns = ['tipo', 'numero', 'fecha', 'vendedor', 'cliente', 'total', 'acciones'];
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  /**
   * Emits the update event
   */
  onUpdate(id) {
    this.update.emit(id);
  }

  /**
   * Emits the delete event
   */
  onDelete(id) {
    this.delete.emit(id);
  }

}
