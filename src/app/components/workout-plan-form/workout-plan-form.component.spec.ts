import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanFormComponent } from './workout-plan-form.component';

describe('WorkoutPlanFormComponent', () => {
  let component: WorkoutPlanFormComponent;
  let fixture: ComponentFixture<WorkoutPlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanFormComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
