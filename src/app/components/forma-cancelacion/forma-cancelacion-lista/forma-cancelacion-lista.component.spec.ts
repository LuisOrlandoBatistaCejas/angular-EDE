import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaCancelacionListaComponent } from './forma-cancelacion-lista.component';

describe('FormaCancelacionListaComponent', () => {
  let component: FormaCancelacionListaComponent;
  let fixture: ComponentFixture<FormaCancelacionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaCancelacionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaCancelacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
