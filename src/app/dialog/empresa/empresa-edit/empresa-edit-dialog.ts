import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {IdentificationTypeService} from '../../../service/identificationType-service';
import {EmpresaService} from '../../../service/empresa-service';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit-dialog.html',
  styleUrls: ['./empresa-edit-dialog.css']
})
export class EmpresaEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  contaObligado: boolean;
  activo: boolean;
  empresa: any;
  empresaEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EmpresaEditDialogComponent>,
    private empresaService: EmpresaService
  ) {}

  ngOnInit() {
    this.empresa = this.data;
    this.activo = this.data.Activo;
    this.contaObligado = this.data.ContabilidadObligado;
  }
  changeContaObligado() {
    this.contaObligado = !this.contaObligado;
  }
  changeActivo() {
    this.activo = !this.activo;
  }
  onSubmit() {
    this.empresaEdit = this.form.value;
    this.empresaEdit.ContabilidadObligado = this.contaObligado;
    this.empresaEdit.Activo = this.activo;
    this.empresaService.update(this.empresaEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
