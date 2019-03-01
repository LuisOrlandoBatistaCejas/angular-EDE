import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FormaDePagoService implements OnInit {
  //Verificar url
  urlFromaDePago = 'http://code.rociosoft.com:8000/api/forma-de-pago';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getFormaDePagos() {
    return this.http.get<[]>(this.urlFromaDePago);
  }
}
