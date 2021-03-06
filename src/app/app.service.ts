import { Injectable } from '@angular/core';
import {UsuarioService} from '../../../EDE-Front/src/app/service/usuario-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isLoggedIn = false;
  public user: any;
  constructor(private userService: UsuarioService) { }
  getPerfil() {
    this.userService.getPerfil().subscribe( perfil => {
      this.user = perfil;
    });
  }
}
