import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {IdentificationTypeService} from '../../../../../../EDE-Front/src/app/service/identificationType-service';
import {EmpresaService} from '../../../../../../EDE-Front/src/app/service/empresa-service';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit-dialog.html',
  styleUrls: ['./empresa-edit-dialog.css']
})
export class EmpresaEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EmpresaEditDialogComponent>,
    private empresaService: EmpresaService
  ) {}

  ngOnInit() {
  }
  onSubmit() {
    const empresa = this.form.value;
    empresa.id = empresa.Ruc;
    this.empresaService.update(empresa).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
