import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
    constructor(private router: Router) {
        localStorage.removeItem('jwtToken');
        this.router.navigate(['/login']);

    }

}