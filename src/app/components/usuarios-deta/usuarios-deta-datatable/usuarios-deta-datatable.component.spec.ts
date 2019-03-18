import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetaDatatableComponent } from './usuarios-deta-datatable.component';

describe('UsuariosDetaDatatableComponent', () => {
  let component: UsuariosDetaDatatableComponent;
  let fixture: ComponentFixture<UsuariosDetaDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosDetaDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
