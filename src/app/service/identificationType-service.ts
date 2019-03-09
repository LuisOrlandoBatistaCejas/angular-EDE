import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable()
export class IdentificationTypeService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/tipo-ident';
  }
  update(resource: any) {
    const id = resource.Id;
    // resource.Id = null;
    resource = this.serialize(resource);
    return this.http.put(`${this.url}/${id}`, resource);
  }
}
