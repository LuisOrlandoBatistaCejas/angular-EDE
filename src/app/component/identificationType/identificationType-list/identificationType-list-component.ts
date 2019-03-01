import { Component, OnInit } from '@angular/core';
import { IdentificationTypeService } from '../../../service/identificationType-service';
import { IdentificationTypeModel } from '../../../model/identificationType-model';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-identification-type-list-component',
  templateUrl: './identificationType-list-component.html',
  styleUrls: ['./identificationType-list-component.css']
})
export class IdentificationTypeListComponent implements OnInit {
  identificationTypeList: [];
  constructor(private idenTypeService: IdentificationTypeService) {}
  ngOnInit() {
    this.idenTypeService.getTipoIdentificacion()
      .subscribe(res => {
        this.identificationTypeList = res;
      });
  }
}
