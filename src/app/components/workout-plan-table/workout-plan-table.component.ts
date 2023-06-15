import {Component, EventEmitter, HostListener, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {WorkoutPlanService} from "../../services/workout-plan.service";
import {WorkoutPlanDTO} from "../../dto/workout-plan";
import {FeedbackDTO} from "../../dto/feedback";

@Component({
  selector: 'app-workout-plan-table',
  templateUrl: './workout-plan-table.component.html',
  styleUrls: ['./workout-plan-table.component.css']
})
export class WorkoutPlanTableComponent implements OnInit{
    workoutPlans!: WorkoutPlanDTO[];

    isCustomer: boolean = true;

    @Input() uuid!: string | null;
    constructor(private workoutPlanService:WorkoutPlanService, private userService:UserService) {
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

    ngOnInit(): void {
        // Customer page
        if(this.uuid == "" || this.uuid == null) {
            this.workoutPlanService.workoutPlans(0, 20).subscribe(
                res => {
                    this.workoutPlans = res.workoutPlans
                }
            )
        }

        // Pt page
        else{
            this.workoutPlanService.workoutPlansOfCustomer(this.uuid, 0, 20).subscribe(
                res => {
                    this.workoutPlans = res.workoutPlans
                }
            )
        }
    }
}
