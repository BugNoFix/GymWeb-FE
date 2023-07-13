import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserResponseDTO} from "../../dto/user";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {
    privacy!: boolean ;
    user!: UserResponseDTO;

    constructor(private userService: UserService) {
        // Get logged user
        this.userService.user().subscribe(
            res => {
                this.user = res;
                this.privacy = res.privacy;
            }
        );
    }

    updatePrivacy() {
        this.privacy = !this.privacy
        this.userService.getPrivacy(this.privacy).subscribe();
    }
}
