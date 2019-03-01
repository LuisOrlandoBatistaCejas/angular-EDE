import { Component, OnInit } from '@angular/core';
import {VehiculoPersonaService} from '../../../service/vehiculoPersona';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-persona-list-component',
  templateUrl: './vehiculoPersona-list-component.html',
  styleUrls: ['./vehiculoPersona-list-component.css']
})
export class VehiculoPersonaListComponent implements OnInit {
  vehiculoPersonaList: [];
  constructor(private vehiculoPersonaService: VehiculoPersonaService) {}
  ngOnInit() {
    this.vehiculoPersonaService.getVehiculoPersona().subscribe(res => {
      this.vehiculoPersonaList = res;
    });
  }
}
