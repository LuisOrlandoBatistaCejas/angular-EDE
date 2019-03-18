import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteFormularioComponent } from './comprobante-formulario.component';

describe('ComprobanteFormularioComponent', () => {
  let component: ComprobanteFormularioComponent;
  let fixture: ComponentFixture<ComprobanteFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
