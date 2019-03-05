import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CancelacionService implements OnInit {
  //verificar url
  urlCancelacion = 'http://code.rociosoft.com:8000/api/cancelacion';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getDocumento() {
    return this.http.get<[]>(this.urlCancelacion);
  }
  createDocumento(cancelacion) {
    return this.http.post(this.urlCancelacion, cancelacion);
  }
}
