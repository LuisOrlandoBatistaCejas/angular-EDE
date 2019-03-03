import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosModel } from '../model/usuario-model';

@Injectable()
export class UsuarioService implements OnInit {
  urlUser = 'http://code.rociosoft.com:8000/api/usuario';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // this.http.get<UsuariosModel[]>('http://code.rociosoft.com:8000/api/usuario').subscribe(
    //   countries => {
    //     this.usuarioList = countries;
    //     console.log(this.usuarioList);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.message);
    //   }
    // );
  }
  getUsers() {
    return this.http.get<[]>(this.urlUser);
  }
  createUsuario(usuario) {
    return this.http.post(this.urlUser, usuario);
  }
}
