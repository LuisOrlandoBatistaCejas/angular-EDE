import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagoDatatableComponent } from './forma-pago-datatable.component';

describe('FormaPagoDatatableComponent', () => {
  let component: FormaPagoDatatableComponent;
  let fixture: ComponentFixture<FormaPagoDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaPagoDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPagoDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
