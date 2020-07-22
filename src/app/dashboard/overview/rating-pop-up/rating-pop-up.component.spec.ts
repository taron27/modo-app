import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPopUpComponent } from './rating-pop-up.component';

describe('RatingPopUpComponent', () => {
  let component: RatingPopUpComponent;
  let fixture: ComponentFixture<RatingPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
