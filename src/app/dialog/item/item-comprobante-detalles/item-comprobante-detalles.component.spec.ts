import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComprobanteDetallesComponent } from './item-comprobante-detalles.component';

describe('ItemComprobanteDetallesComponent', () => {
  let component: ItemComprobanteDetallesComponent;
  let fixture: ComponentFixture<ItemComprobanteDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComprobanteDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComprobanteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
