import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatMealsComponent } from './cheat-meals.component';

describe('CheatMealsComponent', () => {
  let component: CheatMealsComponent;
  let fixture: ComponentFixture<CheatMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
