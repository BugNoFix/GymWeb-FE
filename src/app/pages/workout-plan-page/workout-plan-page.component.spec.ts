import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkoutPlanPageComponent} from './workout-plan-page.component';

describe('WorkoutPlanPageComponent', () => {
  let component: WorkoutPlanPageComponent;
  let fixture: ComponentFixture<WorkoutPlanPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanPageComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
