import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetaListaComponent } from './usuarios-deta-lista.component';

describe('UsuariosDetaListaComponent', () => {
  let component: UsuariosDetaListaComponent;
  let fixture: ComponentFixture<UsuariosDetaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosDetaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
