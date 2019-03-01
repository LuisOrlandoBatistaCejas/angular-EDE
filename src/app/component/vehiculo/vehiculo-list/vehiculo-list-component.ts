import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../service/vehiculo-service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-list-component',
  templateUrl: './vehiculo-list-component.html',
  styleUrls: ['./vehiculo-list-component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculoList: [];
  constructor(private vehiculoService: VehiculoService) {}
  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe(res => {
      this.vehiculoList = res;
    });
  }
}
