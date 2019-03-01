import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../model/empresa-model';

@Injectable()
export class EmpresaService implements OnInit {
  urlEmpresa = 'http://code.rociosoft.com:8000/api/empresa';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getEmpresas() {
    return this.http.get<[]>(this.urlEmpresa);
  }
}
