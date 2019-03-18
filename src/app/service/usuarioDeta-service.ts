import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioDetaService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/usuario-deta';
  }
  update(resource: any): Observable<any> {
    const id = resource.Codigo;
    resource = this.serialize(resource);
    return this.http.put(`${this.url}/${id}/`, resource);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}/`);
  }
}
