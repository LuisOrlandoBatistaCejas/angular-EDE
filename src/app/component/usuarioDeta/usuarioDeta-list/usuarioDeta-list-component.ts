import { Component, OnInit } from '@angular/core';
import { UsuarioDetaService } from '../../../service/usuarioDeta-service';
import { UsuarioDetaModel } from '../../../model/usuarioDeta-model';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-deta-list-component',
  templateUrl: './usuarioDeta-list-component.html',
  styleUrls: ['./usuarioDeta-list-component.css']
})
export class UsuarioDetaListComponent implements OnInit {
  urlUsuarioData: 'http://code.rociosoft.com:8000/api/usuario-deta';
  usuarioDetaList: [];
  constructor(private usuarioDetaService: UsuarioDetaService) {}
  ngOnInit() {
    this.usuarioDetaService.getUsuariosDeta().subscribe(res => {
      this.usuarioDetaList = res;
    });
  }
}
