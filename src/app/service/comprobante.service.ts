import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/factura'; // TODO Cambiar a /comprobante
  }
  getNumero() {
    return this.http.get('api/numero');
  }
}
