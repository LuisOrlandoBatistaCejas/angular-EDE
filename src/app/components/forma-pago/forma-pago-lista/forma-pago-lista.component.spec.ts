import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagoListaComponent } from './forma-pago-lista.component';

describe('FormaPagoListaComponent', () => {
  let component: FormaPagoListaComponent;
  let fixture: ComponentFixture<FormaPagoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaPagoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPagoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
