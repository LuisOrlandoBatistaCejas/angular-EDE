import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../../../model/empresa-model';
import { EmpresaService } from '../../../service/empresa-service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empresa-list-component',
  templateUrl: './empresa-list-component.html',
  styleUrls: ['./empresa-list-component.css']
})
export class EmpresaListComponent implements OnInit {
  empresaList: [];
  constructor(private empresaService: EmpresaService) {}
  ngOnInit() {
    this.empresaService.getEmpresas().subscribe(
      res => {
        this.empresaList = res;
      }
    );
  }
}
