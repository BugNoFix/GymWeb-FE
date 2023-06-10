import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoomDTO} from "../dto/room";
import {Observable} from "rxjs";
import {FeedbackDTO, SearchFeedbackDTO} from "../dto/feedback";

const httpHeaderOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

    private apiUrl = 'http://localhost:8080/api/v1/feedback';
    constructor(private http:HttpClient) { }

    createFeedback(body:FeedbackDTO): Observable<FeedbackDTO>{
        const url = `${this.apiUrl}`;
        return this.http.post<FeedbackDTO>(url, body, httpHeaderOptions);
    }

    getFeedbacksPt(uuid:string, page: number, size: number): Observable<SearchFeedbackDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}/${uuid}`;
        return this.http.post<SearchFeedbackDTO>(url, {params:params});
    }


}
