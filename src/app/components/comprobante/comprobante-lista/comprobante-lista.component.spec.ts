import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteListaComponent } from './comprobante-lista.component';

describe('ComprobanteListaComponent', () => {
  let component: ComprobanteListaComponent;
  let fixture: ComponentFixture<ComprobanteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
