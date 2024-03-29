import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    // Add jwt token
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const jwtToken = localStorage.getItem("jwtToken");
        if (jwtToken) {
            const cloned = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + jwtToken)
            });
            return next.handle(cloned);
        }
        return next.handle(request);

    }
}
