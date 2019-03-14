import {Component, DoCheck, EventEmitter, Input, IterableDiffers, OnInit, Output} from '@angular/core';
import {Comprobante} from '../../../model/comprobante.model';
import {TipoDocService} from '../../../service/tipo-doc.service';
import {PersonaService} from '../../../service/persona-service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {PersonaEditDialogComponent} from '../../../dialog/persona/persona-edit/persona-edit-dialog';
import {FormaDePagoService} from '../../../service/formaDePago-service';
import {UsuarioService} from '../../../service/usuario-service';
import {
  PersonaComprobanteDetailsComponent
} from '../../../dialog/persona/persona-comprobante-details/persona-comprobante-details.component';
import {UsuarioDetaService} from '../../../service/usuarioDeta-service';
import {ItemService} from '../../../service/item-service';
import {DataSource} from '@angular/cdk/table';
import {Observable, of} from 'rxjs';
import {ComprobanteService} from '../../../service/comprobante.service';
import {ItemComprobanteDetallesComponent} from '../../../dialog/item/item-comprobante-detalles/item-comprobante-detalles.component';

@Component({
  selector: 'app-comprobante-formulario',
  templateUrl: './comprobante-formulario.component.html',
  styleUrls: ['./comprobante-formulario.component.css']
})
export class ComprobanteFormularioComponent implements OnInit, DoCheck {
  @Input() comprobante: any;
  @Output() submitForm: EventEmitter<Comprobante> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  calculos: any = {
    subtotalIva: 0,
    subtotalIva0: 0,
    subtotal: 0,
    descuento: 0,
    total: 0
  };
  detalles: any[] = [];
  detallesDataSource: MatTableDataSource<any>;
  numeroComprobante = '000023000020100002';
  tipoComprobante: '';
  tipos: any[] = [];
  personas: any = [];
  formasPago: any[] = [];
  usuariosDeta: any[] = [];
  items: any[] = [];
  isNew = false;
  selectedClient: any = null;
  displayedColumns = ['item', 'Precio', 'cantidad', 'subtotal', 'descuento', 'descuentoTotal', 'iva', 'total', 'acciones'];

  constructor(private tipoDocService: TipoDocService,
              private itemsService: ItemService,
              private personasService: PersonaService,
              private formasPagoService: FormaDePagoService,
              private usuariosDetaService: UsuarioDetaService,
              private comprobanteService: ComprobanteService,
              private dialog: MatDialog) {
    this.detallesDataSource = new MatTableDataSource<any>(this.detalles);
  }

  ngOnInit() {
    this.getTipos();
    this.getPersonas();
    this.getFormasDePago();
    this.getUsuariosDeta();
    this.getItems();
    this.getNumero();
    if (!this.comprobante) {
      this.isNew = true;
      this.comprobante = new Comprobante();
      this.comprobante.TipoComprobanteId = {};
      this.comprobante.VendedorId = {};
    } else {
      this.selectedClient = {
        Identificacion: this.comprobante.Identificacion,
        Direccion: this.comprobante.Direccion,
        Email: this.comprobante.Email
      };
      this.detalles = this.comprobante.detalles;
    }

  }

  ngDoCheck() {
    this.calculos.descuento = 0;
    this.calculos.subtotalIva = 0;
    this.calculos.subtotalIva0 = 0;
    this.calculos.total = 0;
    this.calculos.subtotal = 0;
    this.detalles.forEach(detalle => {
      detalle.Subtotal = this.round(detalle.Cantidad * detalle.Precio);
      this.calculos.subtotal += detalle.Subtotal;
      detalle.descuentoTotal = this.round(detalle.Subtotal * detalle.Descuento / 100);
      this.calculos.descuento += detalle.descuentoTotal;
      if (detalle.Iva > 0) {
        this.calculos.subtotalIva += detalle.Subtotal + detalle.Subtotal * detalle.Iva / 100;
      } else {
        this.calculos.subtotalIva0 += detalle.Subtotal + detalle.Subtotal * detalle.Iva / 100;
      }
      detalle.Total = this.round(detalle.Subtotal + detalle.Subtotal * detalle.Iva / 100 - detalle.descuentoTotal);
      this.calculos.total += detalle.Total;
    });
    this.detallesDataSource = new MatTableDataSource<any>(this.detalles);
  }

  getNumero() {
    this.comprobanteService.getNumero().subscribe(numero => {
      this.numeroComprobante = numero;
    });
  }

  getTipos() {
    this.tipoDocService.list().subscribe(tipos => {
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

  getUsuariosDeta() {
    this.usuariosDetaService.list().subscribe(usuarios => {
      this.usuariosDeta = usuarios;
    });
  }

  getItems() {
    this.itemsService.list().subscribe(items => {
      this.items = items;
    });
  }

  /**
   * emits an event with the value of the form when it is submitted
   */
  onSubmit(comprobante: Comprobante) {
    if (!this.isNew) {
      comprobante.id = this.comprobante.id;
    }
    comprobante.detalles = this.detalles;
    comprobante.Telefono = this.selectedClient.Telefono;
    comprobante.Email = this.selectedClient.Email;
    comprobante.Direccion = this.selectedClient.Direccion;
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
      }).afterClosed().subscribe(res => {
        if (res) {
          this.selectedClient = res;
        }
      });
    }
  }

  onAgregarDetalle() {
    this.detalles.push({
      ItemId: null,
      Descripcion: null,
      Cantidad: 1,
      Descuento: 0,
      Iva: 0,
      Subtotal: 0,
      Total: 0,
      name: (new Date()).toDateString(),
      Precio: 0,
      descuentoTotal: 0
    });
  }

  removeDetail(i) {
    this.detalles.splice(i, 1);
  }

  selectItem(item, detalle) {
    detalle.Precio = item.Precio;
    detalle.Iva = item.PorcientoIva;
    detalle.Descripcion = item.Descripcion;
    detalle.Marca = 'M';
  }

  round(value) {
    return Math.round(value * 100) / 100;
  }

  openComprobanteItemDetalles(detalle) {
    this.dialog.open(ItemComprobanteDetallesComponent, {
      data: detalle
    }).afterClosed().subscribe(result => {
      if (result) {
        detalle.Descripcion = result.Descripcion;
      }
    });

  }

}
