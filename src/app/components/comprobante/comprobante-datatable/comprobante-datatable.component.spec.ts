import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteDatatableComponent } from './comprobante-datatable.component';

describe('ComprobanteDatatableComponent', () => {
  let component: ComprobanteDatatableComponent;
  let fixture: ComponentFixture<ComprobanteDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
