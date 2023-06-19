import {Component} from '@angular/core';
import {UserResponseDTO} from "../../dto/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-workout-plan-page',
  templateUrl: './workout-plan-page.component.html',
  styleUrls: ['./workout-plan-page.component.css']
})
export class WorkoutPlanPageComponent {
    me!: UserResponseDTO;
    isCustomer: boolean = true;
    constructor(private userService:UserService) {
        userService.user().subscribe(
            res =>{
                this.me = res;
                if (res.role == "PT"){
                    this.isCustomer = false;
                }
                console.log(this.isCustomer);
            }
        );
    }


}
