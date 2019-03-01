import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VehiculoService implements OnInit {
  urlVehiculos = 'http://code.rociosoft.com:8000/api/vehiculo';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getVehiculos() {
    return this.http.get<[]>(this.urlVehiculos);
  }
}
