import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaVehiculoDialogComponent } from './persona-vehiculo-dialog.component';

describe('PersonaVehiculoDialogComponent', () => {
  let component: PersonaVehiculoDialogComponent;
  let fixture: ComponentFixture<PersonaVehiculoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaVehiculoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaVehiculoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
