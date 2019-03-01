import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VehiculoPersonaService implements OnInit {
  //Verificar url
  urlVehiculoPersona = 'http://code.rociosoft.com:8000/api/vehiculo-persona';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getVehiculoPersona() {
    return this.http.get<[]>(this.urlVehiculoPersona);
  }
}
