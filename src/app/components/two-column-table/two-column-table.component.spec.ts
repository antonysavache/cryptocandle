import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTableComponent } from './two-column-table.component';

describe('TwoColumnTableComponent', () => {
  let component: TwoColumnTableComponent;
  let fixture: ComponentFixture<TwoColumnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
