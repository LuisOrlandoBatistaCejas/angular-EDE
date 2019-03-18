import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaCancelacionDatatableComponent } from './forma-cancelacion-datatable.component';

describe('FormaCancelacionDatatableComponent', () => {
  let component: FormaCancelacionDatatableComponent;
  let fixture: ComponentFixture<FormaCancelacionDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaCancelacionDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaCancelacionDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
