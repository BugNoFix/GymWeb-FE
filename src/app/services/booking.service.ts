import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoomDTO} from "../dto/room";
import {Observable} from "rxjs";
import {BookingDTO, SearchBookingDTO} from "../dto/booking";
const httpHeaderOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
@Injectable({
  providedIn: 'root'
})
export class BookingService {

    private apiUrl = 'http://localhost:8080/api/v1/booking';
    constructor(private http:HttpClient) { }

    createBooking(body:BookingDTO): Observable<BookingDTO>{
        const url = `${this.apiUrl}`;
        return this.http.post<BookingDTO>(url, body, httpHeaderOptions);
    }

    allPtBookingOfDay(body:BookingDTO): Observable<any>{
        const url = `${this.apiUrl}/pt`;
        return this.http.post<any>(url, body, httpHeaderOptions);
    }

    allCustomersBookingOfDay(body:BookingDTO): Observable<any>{
        const url = `${this.apiUrl}/customers`;
        return this.http.post<any>(url, body, httpHeaderOptions);
    }

    bookingOfCustomer(uuidCustomer:string, body:BookingDTO, page: number, size: number): Observable<SearchBookingDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}/customers`;
        return this.http.post<SearchBookingDTO>(url, body, {params:params , headers: new HttpHeaders({'Content-Type': 'application/json'})});
    }


}
