import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesListaComponent } from './comprobantes-lista.component';

describe('ComprobantesListaComponent', () => {
  let component: ComprobantesListaComponent;
  let fixture: ComponentFixture<ComprobantesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobantesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
