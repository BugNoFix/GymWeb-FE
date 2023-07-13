import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserResponseDTO} from "../../dto/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit{

    user!: UserResponseDTO;

    constructor(private userService:UserService, public router:Router) {
        // Get logged user
        userService.user().subscribe(
            res=>{
                this.user = res;
            }
        )

    }

    logout() {
        localStorage.removeItem('jwtToken');
    }

    // Update navbar
    ngOnInit(): void {
        this.userService.getUserUpdates().subscribe(u => {
            if(u)
                this.user = u;
        });
    }
}
