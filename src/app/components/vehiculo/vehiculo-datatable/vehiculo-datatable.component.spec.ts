import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoDatatableComponent } from './vehiculo-datatable.component';

describe('VehiculoDatatableComponent', () => {
  let component: VehiculoDatatableComponent;
  let fixture: ComponentFixture<VehiculoDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
