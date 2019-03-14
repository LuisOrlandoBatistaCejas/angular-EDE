import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpService} from './http.service';
import {ApiService} from './api.service';

@Injectable()
export class UsuarioService extends ApiService {
  url: string;
  constructor(protected http: HttpService) {
    super(http);
    this.url = 'api/usuario';
  }
  create(resource) {
    return this.http.post(`api/rest-auth/registration/`, this.serialize(resource));
  }
  getPerfil() {
    return this.http.get('api/perfil');
  }
}
