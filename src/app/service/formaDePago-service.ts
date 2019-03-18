import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class FormaDePagoService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/forma-pago';
  }
}
