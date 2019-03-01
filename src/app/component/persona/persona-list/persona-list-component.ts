import { Component, OnInit } from '@angular/core';
import { PersonaModel } from '../../../model/persona-model';
import { PersonaService } from '../../../service/persona-service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persona-list-component',
  templateUrl: './persona-list-component.html',
  styleUrls: ['./persona-list-component.css']
})
export class PersonaListComponent implements OnInit {
  personaList: [];
  constructor(private personaService: PersonaService) {}
  ngOnInit() {
    this.personaService.getPersonas().subscribe(res => {
      this.personaList = res;
    });
  }
}
