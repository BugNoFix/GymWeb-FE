import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {LoginResponseDTO, RegisterResponseDTO, RequestDTO} from '../dto/auth'
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

    login(body: any): Observable<LoginResponseDTO>{
        const url = `${this.apiUrl}/login`;
        return this.http.post<LoginResponseDTO>(url, body, httpHeaderOptions);
    }


}
