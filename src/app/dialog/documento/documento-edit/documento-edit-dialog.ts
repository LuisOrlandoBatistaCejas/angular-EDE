import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import {ItemService} from '../../../../../../EDE-Front/src/app/service/item-service';
import {DocumentoService} from '../../../../../../EDE-Front/src/app/service/documento-service';

@Component({
  selector: 'app-documento-edit',
  templateUrl: './documento-edit-dialog.html',
  styleUrls: ['./documento-edit-dialog.css']
})
export class DocumentoEditDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DocumentoEditDialogComponent>,
    private documentoService: DocumentoService
  ) {}

  ngOnInit() {
  }
  onSubmit() {
    this.documentoService.update(this.form.value).subscribe( res => {
      this.dialogRef.close(res);
    }, (error) => {
      console.log('Error!!', error.message);
    });
  }
}
