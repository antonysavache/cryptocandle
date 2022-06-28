import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAsideComponent } from './rating-aside.component';

describe('RatingAsideComponent', () => {
  let component: RatingAsideComponent;
  let fixture: ComponentFixture<RatingAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
