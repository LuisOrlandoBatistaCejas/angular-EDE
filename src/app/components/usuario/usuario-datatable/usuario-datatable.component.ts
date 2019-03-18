import { Component, OnInit } from '@angular/core';
import {BaseDatatable} from '../../../prototypes/base-datatable';

@Component({
  selector: 'ms-usuario-datatable',
  templateUrl: './usuario-datatable.component.html',
  styleUrls: ['./usuario-datatable.component.scss']
})
export class UsuarioDatatableComponent extends BaseDatatable implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
