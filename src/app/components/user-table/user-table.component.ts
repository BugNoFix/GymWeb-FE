import { Component } from '@angular/core';
import {WorkoutPlanService} from "../../services/workout-plan.service";
import {UserService} from "../../services/user.service";
import {WorkoutPlanDTO} from "../../dto/workout-plan";
import {AuthService} from "../../services/auth.service";
import {RegisterResponseDTO} from "../../dto/auth";
import {UserResponseDTO} from "../../dto/user";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

    users!: UserResponseDTO[];
    constructor(private userService:UserService) {
        userService.getAllUser(0, 20).subscribe(
            res =>{
                this.users = res.users;
            }
        )
    }


    addUserView(user: UserResponseDTO) {
        this.users.unshift(user);
    }

    reloadPage() {
        window.location.reload();
    }
}
