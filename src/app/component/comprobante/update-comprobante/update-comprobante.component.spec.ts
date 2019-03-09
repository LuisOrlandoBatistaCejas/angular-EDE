import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComprobanteComponent } from './update-comprobante.component';

describe('UpdateComprobanteComponent', () => {
  let component: UpdateComprobanteComponent;
  let fixture: ComponentFixture<UpdateComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
