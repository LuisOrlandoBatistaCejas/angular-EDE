import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaModel } from '../model/persona-model';

@Injectable()
export class PersonaService implements OnInit {
  urlPersonas = 'http://code.rociosoft.com:8000/api/persona';
  personaList: [];
  constructor(private http: HttpClient) {}
  ngOnInit() {

  }
  getPersonas() {
    return this.http.get<[]>(this.urlPersonas);
  }
  createPersona(persona) {
    return this.http.post(this.urlPersonas, persona);
  }
}
