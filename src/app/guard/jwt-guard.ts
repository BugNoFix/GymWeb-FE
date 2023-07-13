import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtGuard implements CanActivate {

    constructor (private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // Check if token is in localstorage
        if(localStorage.getItem("jwtToken") == null){
            this.router.navigateByUrl('/login');
            return false;
        }
        //Check if token is expired
        let token:any = localStorage.getItem("jwtToken");
        let epoch = this.getDecodedAccessToken(token).exp*1000;
        if(epoch < new Date().getTime()) {
            localStorage.clear();
            this.router.navigateByUrl('/login');
            return false;
        }
        // Token is valid
        return true;
    }

    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch(Error) {
            return null;
        }
    }
}
