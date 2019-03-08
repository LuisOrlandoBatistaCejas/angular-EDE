import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentificationTypeModel } from '../model/identificationType-model';

@Injectable()
export class IdentificationTypeService implements OnInit {
  urlIdenType = 'http://code.rociosoft.com:8000/api/tipo-ident';
  identificationTypeList: IdentificationTypeModel[] = [];
  constructor(private http: HttpClient) {
    // this.identificationTypeList.push(new IdentificationTypeModel(1, 'Identificacion1'));
    // this.identificationTypeList.push(new IdentificationTypeModel(2, 'Identificacion2'));
    // this.identificationTypeList.push(new IdentificationTypeModel(3, 'Identificacion3'));
    // this.identificationTypeList.push(new IdentificationTypeModel(4, 'Identificacion4'));
  }
  ngOnInit() {

  }
  getTipoIdentificacion() {
    return this.http.get<[]>(this.urlIdenType);
  }
  createIdentificationType(identificationType) {
    return this.http.post(this.urlIdenType, identificationType);
  }
  editIdentificationType(identificationType) {
    return this.http.put(this.urlIdenType, identificationType);
  }
}
