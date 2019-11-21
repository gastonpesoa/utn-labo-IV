import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosInscEnMateriaCargoComponent } from './alumnos-insc-en-materia-cargo.component';

describe('AlumnosInscEnMateriaCargoComponent', () => {
  let component: AlumnosInscEnMateriaCargoComponent;
  let fixture: ComponentFixture<AlumnosInscEnMateriaCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosInscEnMateriaCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosInscEnMateriaCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
