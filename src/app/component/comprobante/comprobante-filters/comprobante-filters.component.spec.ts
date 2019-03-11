import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteFiltersComponent } from './comprobante-filters.component';

describe('ComprobanteFiltersComponent', () => {
  let component: ComprobanteFiltersComponent;
  let fixture: ComponentFixture<ComprobanteFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
