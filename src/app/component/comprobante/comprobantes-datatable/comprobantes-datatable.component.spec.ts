import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesDatatableComponent } from './comprobantes-datatable.component';

describe('ComprobantesDatatableComponent', () => {
  let component: ComprobantesDatatableComponent;
  let fixture: ComponentFixture<ComprobantesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobantesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
