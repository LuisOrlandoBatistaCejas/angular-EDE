import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoIdentificacionListaComponent } from './tipo-identificacion-lista.component';

describe('TipoIdentificacionListaComponent', () => {
  let component: TipoIdentificacionListaComponent;
  let fixture: ComponentFixture<TipoIdentificacionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoIdentificacionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoIdentificacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
