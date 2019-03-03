import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../model/empresa-model';

@Injectable()
export class ItemService implements OnInit {
  urlItem = 'http://code.rociosoft.com:8000/api/item';
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getItems() {
    return this.http.get<[]>(this.urlItem);
  }
  createItem(item) {
    return this.http.post(this.urlItem, item);
  }
}
