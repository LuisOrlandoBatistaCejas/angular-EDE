import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentoService implements OnInit {
  //verificar url
  urlDocumento = 'http://code.rociosoft.com:8000/api/tipo-doc';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getDocumento() {
    return this.http.get<[]>(this.urlDocumento);
  }
  createDocumento(documento) {
    return this.http.post(this.urlDocumento, documento);
  }
}
