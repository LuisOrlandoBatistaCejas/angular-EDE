import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TipoDocService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/tipo-doc';
  }
}
