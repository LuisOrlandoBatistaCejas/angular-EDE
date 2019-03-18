import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDatatableComponent } from './item-datatable.component';

describe('ItemDatatableComponent', () => {
  let component: ItemDatatableComponent;
  let fixture: ComponentFixture<ItemDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
