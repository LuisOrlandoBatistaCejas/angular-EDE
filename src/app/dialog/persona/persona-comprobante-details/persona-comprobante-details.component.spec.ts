import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaComprobanteDetailsComponent } from './persona-comprobante-details.component';

describe('PersonaComprobanteDetailsComponent', () => {
  let component: PersonaComprobanteDetailsComponent;
  let fixture: ComponentFixture<PersonaComprobanteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaComprobanteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaComprobanteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
