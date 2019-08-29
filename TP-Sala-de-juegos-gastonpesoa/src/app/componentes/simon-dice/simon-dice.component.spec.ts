import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonDiceComponent } from './simon-dice.component';

describe('SimonDiceComponent', () => {
  let component: SimonDiceComponent;
  let fixture: ComponentFixture<SimonDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
