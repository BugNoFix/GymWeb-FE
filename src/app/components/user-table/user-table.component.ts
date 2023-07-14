import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
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

    //Update view
    addUserView(user: UserResponseDTO) {
        this.users.push(user);
    }

    reloadPage() {
        window.location.reload();
    }
}
