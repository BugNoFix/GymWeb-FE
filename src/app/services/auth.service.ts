import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RequestDTO, RegisterResponseDTO, LoginResponseDTO} from '../dto/auth'
import {Observable} from "rxjs";

const httpHeaderOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/v1/auth';
    constructor(private http:HttpClient) { }

    register(body: RequestDTO): Observable<RegisterResponseDTO>{
        const url = `${this.apiUrl}/register`;
        return this.http.post<RegisterResponseDTO>(url, body, httpHeaderOptions);
    }

    login(body: any): Observable<LoginResponseDTO>{
        const url = `${this.apiUrl}/login`;
        return this.http.post<LoginResponseDTO>(url, body, httpHeaderOptions);
    }

    updateRole(body: RequestDTO, uuid :String): Observable<RegisterResponseDTO>{
        const url = `${this.apiUrl}/update/role/${uuid}`;
        return this.http.post<RegisterResponseDTO>(url, body, httpHeaderOptions);
    }

    activeUser(isActive :boolean, uuid: string): Observable<RegisterResponseDTO>{
        let params = new HttpParams().set('isActive', isActive);
        const url = `${this.apiUrl}/activeUser/${uuid}`;
        //const options = {params: params, headers: headers}; // TODO testare la sintassi, vedere se mettere headers:ss
        const options = {params: params};
        return this.http.get<RegisterResponseDTO>(url, options);
    }

    setPassword(body: RequestDTO, uuid :String): Observable<RegisterResponseDTO>{
        const url = `${this.apiUrl}/setPassword/${uuid}`;
        return this.http.post<RegisterResponseDTO>(url, body, httpHeaderOptions);
    }

    setSubscription(body: RequestDTO, uuid :String): Observable<RegisterResponseDTO>{
        const url = `${this.apiUrl}/setSubscription/${uuid}`;
        return this.http.post<RegisterResponseDTO>(url, body, httpHeaderOptions);
    }
}
