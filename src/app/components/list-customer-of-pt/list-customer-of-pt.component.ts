import { Component } from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
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
        userService.user().subscribe(
            res =>{
                this.me = res;
                userService.getAllUserOfPt(res.uuid).subscribe(
                    res2 =>{
                        this.users = res2;
                    }
                );
            }
        )

    }

}
