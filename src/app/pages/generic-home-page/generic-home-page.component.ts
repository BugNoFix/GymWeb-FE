import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-generic-home-page',
  templateUrl: './generic-home-page.component.html',
  styleUrls: ['./generic-home-page.component.css']
})
export class GenericHomePageComponent {

    role!: string;
    constructor(private userService:UserService){
        userService.user().subscribe(
            res =>{
                this.role = res.role;
            }
        )
    }
}
