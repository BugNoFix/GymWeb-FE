import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkoutPlanTableComponent} from './workout-plan-table.component';

describe('WorkoutPlanTableComponent', () => {
  let component: WorkoutPlanTableComponent;
  let fixture: ComponentFixture<WorkoutPlanTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanTableComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
