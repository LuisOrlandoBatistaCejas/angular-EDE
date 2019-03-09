import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {UsuarioDetaService} from '../../../service/usuarioDeta-service';

@Component({
  selector: 'app-usuario-deta-edit',
  templateUrl: './usuarioDeta-edit-dialog.html',
  styleUrls: ['./usuarioDeta-edit-dialog.css']
})
export class UsuarioDetaEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  usuarioDeta: any;
  usuarioDetaEdit: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UsuarioDetaEditDialogComponent>,
    private usuarioDetaService: UsuarioDetaService
  ) {}

  ngOnInit() {
    this.usuarioDeta = this.data;
  }
  onSubmit() {
    this.usuarioDetaEdit = this.form.value;
    this.usuarioDetaService.update(this.usuarioDetaEdit).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
