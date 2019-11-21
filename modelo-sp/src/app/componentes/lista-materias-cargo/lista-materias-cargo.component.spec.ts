import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMateriasCargoComponent } from './lista-materias-cargo.component';

describe('ListaMateriasCargoComponent', () => {
  let component: ListaMateriasCargoComponent;
  let fixture: ComponentFixture<ListaMateriasCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMateriasCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMateriasCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
