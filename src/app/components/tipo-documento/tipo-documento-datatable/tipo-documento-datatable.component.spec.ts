import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoDatatableComponent } from './tipo-documento-datatable.component';

describe('TipoDocumentoDatatableComponent', () => {
  let component: TipoDocumentoDatatableComponent;
  let fixture: ComponentFixture<TipoDocumentoDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocumentoDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocumentoDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
