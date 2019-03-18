import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDatatableComponent } from './persona-datatable.component';

describe('PersonaDatatableComponent', () => {
  let component: PersonaDatatableComponent;
  let fixture: ComponentFixture<PersonaDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
