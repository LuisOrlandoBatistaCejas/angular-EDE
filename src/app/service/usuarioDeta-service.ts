import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDetaModel } from '../model/usuarioDeta-model';

@Injectable()
export class UsuarioDetaService implements OnInit {
  urlUsuarioDeta: 'http://code.rociosoft.com:8000/api/usuario-deta';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getUsuariosDeta() {
    return this.http.get<[]>(this.urlUsuarioDeta);
  }
}
