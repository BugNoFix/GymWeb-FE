import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
    email!: string;
    password!: string;
    showErrorMessage: boolean = false;
    constructor(private authService: AuthService, private router: Router) {}

    login() {
        const data = {"email":this.email, "password":this.password};
        this.authService.login(data).subscribe(
            suc => {
                localStorage.setItem('jwtToken', suc.jwttoken);
                this.router.navigate(['/homepage']);
            },
            err => {
                this.showErrorMessage=true;
            });
    }

    ngOnInit(): void {
        localStorage.clear();
    }
}
