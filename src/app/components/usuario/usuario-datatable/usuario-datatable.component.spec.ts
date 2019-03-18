import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDatatableComponent } from './usuario-datatable.component';

describe('UsuarioDatatableComponent', () => {
  let component: UsuarioDatatableComponent;
  let fixture: ComponentFixture<UsuarioDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
