import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService extends ApiService {
  url: string;
  constructor(protected http: HttpService, private httpClient: HttpClient) {
    super(http);
    this.url = 'api/empresa';
  }
}
