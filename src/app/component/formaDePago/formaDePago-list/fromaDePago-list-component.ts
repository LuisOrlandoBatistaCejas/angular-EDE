import { Component, OnInit } from '@angular/core';
import {FormaDePagoService} from '../../../service/formaDePago-service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forma-pago-list-component',
  templateUrl: './fromaDePago-list-component.html',
  styleUrls: ['./fromaDePago-list-component.css']
})
export class FormaDePagoListComponent implements OnInit {
  formaDePagoList: [];
  constructor(private formaDePagoService: FormaDePagoService) {}
  ngOnInit() {
    this.formaDePagoService.getFormaDePagos().subscribe(
      res => {
        this.formaDePagoList = res;
      }
    );
  }
}
