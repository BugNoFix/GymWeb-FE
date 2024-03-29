import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserResponseDTO} from "../../dto/user";

@Component({
  selector: 'app-list-customer-of-pt',
  templateUrl: './list-customer-of-pt.component.html',
  styleUrls: ['./list-customer-of-pt.component.css']
})
export class ListCustomerOfPtComponent {

    me!: UserResponseDTO;

    users!: UserResponseDTO[];

    constructor(private userService: UserService) {
        // Getting all users of the pt logged
        userService.user().subscribe(
            res =>{
                this.me = res;
                userService.getAllUserOfPt(res.uuid).subscribe(
                    res2 =>{
                        this.users = res2.users;
                    }
                );
            }
        )

    }

}
