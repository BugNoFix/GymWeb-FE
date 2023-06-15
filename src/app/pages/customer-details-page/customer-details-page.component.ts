import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserResponseDTO} from "../../dto/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.css']
})
export class CustomerDetailsPageComponent {
    uuid: string| null;

    customer!: UserResponseDTO;
    constructor(private route: ActivatedRoute, userService:UserService) {
        this.uuid = this.route.snapshot.paramMap.get('uuid');
    }
}
