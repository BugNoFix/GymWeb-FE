import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
    SearchUserBodyDetailsDTO,
    SearchUsersDTO,
    UserBodyDetailsDTO,
    UserRequestDTO,
    UserResponseDTO
} from "../dto/user";
import {BehaviorSubject, Observable, tap} from "rxjs";

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

    currentUserSubject = new BehaviorSubject<UserResponseDTO | null>(null);
    constructor(private http:HttpClient) { }

    getUserUpdates(){
       return this.currentUserSubject.asObservable();
    }

    setUserUpdates(user: UserResponseDTO){
        this.currentUserSubject.next(user);
    }

    user(): Observable<UserResponseDTO>{
        const url = `${this.apiUrl}`;
        return this.http.get<UserResponseDTO>(url, httpHeaderOptions).pipe(tap(u => this.setUserUpdates(u)));

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
        return this.http.get<SearchUserBodyDetailsDTO>(url, {params:params});
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

    createUser(user:UserRequestDTO): Observable<UserResponseDTO>{
        const url =`${this.apiUrl}/create`;
        return this.http.post<UserResponseDTO>(url, user, httpHeaderOptions);
    }

    getAllUserOfPt(uuidPt:string): Observable<SearchUsersDTO>{
        const url = `${this.apiUrl}/all/${uuidPt}`;
        return this.http.get<SearchUsersDTO>(url);
    }

    getAllUser(page: number, size: number): Observable<SearchUsersDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}/all`;
        return this.http.get<SearchUsersDTO>(url, {params:params});
    }

    getAllPt(page: number, size: number): Observable<SearchUsersDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}/allPt`;
        return this.http.get<SearchUsersDTO>(url, {params:params});
    }
}
