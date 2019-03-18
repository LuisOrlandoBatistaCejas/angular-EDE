import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarComprobanteComponent } from './actualizar-comprobante.component';

describe('ActualizarComprobanteComponent', () => {
  let component: ActualizarComprobanteComponent;
  let fixture: ComponentFixture<ActualizarComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
