import {Component, EventEmitter, Output} from '@angular/core';
import {UserResponseDTO} from "../../dto/user";
import {WorkoutPlanDTO} from "../../dto/workout-plan";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {WorkoutPlanService} from "../../services/workout-plan.service";

@Component({
  selector: 'app-workout-plan-form',
  templateUrl: './workout-plan-form.component.html',
  styleUrls: ['./workout-plan-form.component.css']
})
export class WorkoutPlanFormComponent {
    users!: UserResponseDTO[];
    me!: UserResponseDTO;
    selectedUser!: UserResponseDTO;

    workoutPlan: File | any;

    @Output() addedWorkout: EventEmitter<WorkoutPlanDTO> = new EventEmitter();

    constructor(private modalService: NgbModal, private  userService:UserService, private workoutPlanService:WorkoutPlanService) {
        this.userService.user().subscribe(
            res =>{
                this.me = res;
                if(res.role == "PT"){
                    this.userService.getAllUserOfPt(res.uuid).subscribe(
                        res2 =>{
                            this.users = res2;
                        }
                    )
                }
            }
        )

    }
    open(content: any) {
        this.modalService.open(content, { size: 'md' }).result.then();
    }
    onSubmit() {
        this.workoutPlanService.uploadWorkoutPlan(this.workoutPlan, this.selectedUser.uuid).subscribe(
            res =>{
                this.addedWorkout.emit(res);
            }
        )
    }

    onFileChange(files: any) {
        this.workoutPlan = files.target.files.item(0);
    }

}
