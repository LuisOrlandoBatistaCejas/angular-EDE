import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesListHeaderComponent } from './comprobantes-list-header.component';

describe('ComprobantesListHeaderComponent', () => {
  let component: ComprobantesListHeaderComponent;
  let fixture: ComponentFixture<ComprobantesListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobantesListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
