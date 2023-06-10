import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomDTO, SearchRoomDTO} from "../dto/room";

const httpHeaderOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
@Injectable({
  providedIn: 'root'
})
export class RoomService {

    private apiUrl = 'http://localhost:8080/api/v1/workout';
    constructor(private http:HttpClient) { }

    createRoom(body:RoomDTO): Observable<RoomDTO>{
        const url = `${this.apiUrl}`;
        return this.http.post<RoomDTO>(url, body, httpHeaderOptions);
    }

    roomUpdate(body:RoomDTO): Observable<RoomDTO>{
        const url = `${this.apiUrl}`;
        return this.http.post<RoomDTO>(url, body, httpHeaderOptions);
    }

    allRooms(page: number, size: number): Observable<SearchRoomDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}`;
        return this.http.get<SearchRoomDTO>(url, {params:params});
    }

}
