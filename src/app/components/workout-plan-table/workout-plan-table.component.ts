import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {WorkoutPlanService} from "../../services/workout-plan.service";
import {WorkoutPlanDTO} from "../../dto/workout-plan";
import {FeedbackDTO} from "../../dto/feedback";

@Component({
  selector: 'app-workout-plan-table',
  templateUrl: './workout-plan-table.component.html',
  styleUrls: ['./workout-plan-table.component.css']
})
export class WorkoutPlanTableComponent {
    workoutPlans!: WorkoutPlanDTO[];

    isCustomer: boolean = true;

    constructor(private workoutPlanService:WorkoutPlanService, private userService:UserService) {
        workoutPlanService.workoutPlans(0,20).subscribe(
            res =>{
                this.workoutPlans = res.workoutPlans
            }
        )

        userService.user().subscribe(
            res => {
                if (res.role == "PT")
                    this.isCustomer = false;
            }
        )
    }


    addWorkoutView(workout: WorkoutPlanDTO) {
        this.workoutPlans.unshift(workout);
    }
}
