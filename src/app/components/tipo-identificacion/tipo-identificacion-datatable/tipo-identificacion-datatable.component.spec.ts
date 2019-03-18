import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoIdentificacionDatatableComponent } from './tipo-identificacion-datatable.component';

describe('TipoIdentificacionDatatableComponent', () => {
  let component: TipoIdentificacionDatatableComponent;
  let fixture: ComponentFixture<TipoIdentificacionDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoIdentificacionDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoIdentificacionDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
