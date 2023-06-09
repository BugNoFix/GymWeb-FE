import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestDTO, RegisterResponseDTO, LoginResponseDTO} from '../dto/auth'
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/v1/auth';
    constructor(private http:HttpClient) { }

    register(body: RequestDTO): Observable<LoginResponseDTO>{
        const url = `${this.apiUrl}/register`;
        return this.http.post<LoginResponseDTO>(url, body, httpOptions);
    }
}
