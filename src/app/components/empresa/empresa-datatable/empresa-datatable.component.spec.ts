import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDatatableComponent } from './empresa-datatable.component';

describe('EmpresaDatatableComponent', () => {
  let component: EmpresaDatatableComponent;
  let fixture: ComponentFixture<EmpresaDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
