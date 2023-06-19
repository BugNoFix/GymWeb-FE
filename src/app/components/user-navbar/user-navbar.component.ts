import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserResponseDTO} from "../../dto/user";

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

    user!: UserResponseDTO;
    constructor(private userService:UserService) {
        userService.user().subscribe(
            res=>{
                this.user = res;
            }
        )
    }

    logout() {
        localStorage.removeItem('jwtToken');
    }
}
