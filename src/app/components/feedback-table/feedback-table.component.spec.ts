import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackTableComponent} from './feedback-table.component';

describe('FeedbackTableComponent', () => {
  let component: FeedbackTableComponent;
  let fixture: ComponentFixture<FeedbackTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackTableComponent]
    });
    fixture = TestBed.createComponent(FeedbackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
