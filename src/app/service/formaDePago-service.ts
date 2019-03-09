import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable()
export class FormaDePagoService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/forma-pago';
  }
  update(resource: any): Observable<any> {
    const id = resource.Id;
    resource = this.serialize(resource);
    return this.http.put(`${this.url}/${id}/`, resource);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}/`);
  }
}
