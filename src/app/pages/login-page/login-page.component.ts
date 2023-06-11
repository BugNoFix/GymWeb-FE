import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    email!: string;
    password!: string;
    showErrorMessage: boolean = false;
    token!:string;
    constructor(private authService: AuthService, private router: Router) {}

    login() {
        const data = {"email":this.email, "password":this.password};
        this.authService.login(data).subscribe(
            suc => {
                localStorage.setItem('jwtToken', suc.jwttoken);
                //this.router.navigate(['/homepage']);
            },
            err => {
                this.showErrorMessage=true;
            });
    }
}
