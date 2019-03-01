import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../../model/usuario-model';
import { UsuarioService } from '../../../service/usuario-service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-list-component',
  templateUrl: './usuario-list-component.html',
  styleUrls: ['./usuario-list-component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList: [];
  constructor(private usuarioService: UsuarioService) {}
  ngOnInit() {
    this.usuarioService.getUsers().subscribe(
      res => {
        this.usuarioList = res;
      }
    );
  }
}
