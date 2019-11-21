import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaMateriasInscComponent } from './grilla-materias-insc.component';

describe('GrillaMateriasInscComponent', () => {
  let component: GrillaMateriasInscComponent;
  let fixture: ComponentFixture<GrillaMateriasInscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaMateriasInscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaMateriasInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
