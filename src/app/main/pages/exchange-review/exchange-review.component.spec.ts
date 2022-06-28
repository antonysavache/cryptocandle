import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeReviewComponent } from './exchange-review.component';

describe('ExchangeReviewComponent', () => {
  let component: ExchangeReviewComponent;
  let fixture: ComponentFixture<ExchangeReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
