import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserBodyDetailsDTO, UserRequestDTO, SearchUserBodyDetailsDTO, UserResponseDTO} from "../dto/user";
import {Observable} from "rxjs";

const httpHeaderOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api/v1/user';
    constructor(private http:HttpClient) { }

    user(): Observable<UserResponseDTO>{
        const url = `${this.apiUrl}`;
        return this.http.get<UserResponseDTO>(url, httpHeaderOptions);
    }

    getBodyDetails(page: number, size: number): Observable<SearchUserBodyDetailsDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}/bodyDetails`;
        return this.http.get<SearchUserBodyDetailsDTO>(url, {params:params});
    }

    setBodyDetails(body:UserBodyDetailsDTO): Observable<UserBodyDetailsDTO>{
        const url = `${this.apiUrl}/bodyDetails`;
        return this.http.post<UserBodyDetailsDTO>(url, body, httpHeaderOptions);
    }

    getBodyDetailsOfUser(page: number, size: number, uuid:string): Observable<SearchUserBodyDetailsDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}/bodyDetails/${uuid}`;
        return this.http.post<SearchUserBodyDetailsDTO>(url,params);
    }
    getPrivacy(privacy:boolean): Observable<UserResponseDTO>{
        const params = {value:privacy};
        const url = `${this.apiUrl}/privacy`;
        return this.http.get<UserResponseDTO>(url,{params:params});
    }

    updateUser(user:UserRequestDTO, uuid:string): Observable<UserResponseDTO>{
        const url =`${this.apiUrl}/update/${uuid}`;
        return this.http.post<UserResponseDTO>(url, user, httpHeaderOptions);
    }

}
