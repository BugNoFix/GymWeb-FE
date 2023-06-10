import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchWorkoutPlansDTO, WorkoutPlanDTO} from "../dto/workout-plan";

const httpHeaderOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanService {

    private apiUrl = 'http://localhost:8080/api/v1/workout';
    constructor(private http:HttpClient) { }

    workoutPlan(): Observable<WorkoutPlanDTO>{
        const url = `${this.apiUrl}`;
        return this.http.get<WorkoutPlanDTO>(url);
    }

    workoutPlans(page: number, size: number): Observable<SearchWorkoutPlansDTO>{
        const params = {page:page, size:size};
        const url = `${this.apiUrl}`;
        return this.http.get<SearchWorkoutPlansDTO>(url, {params:params});
    }

    workoutPlanForCustomer(file:File, uuid:string): Observable<WorkoutPlanDTO>{
        const url = `${this.apiUrl}/${uuid}`;
        return this.http.post<WorkoutPlanDTO>(url, file, httpHeaderOptions);
    }

    workoutPlanOfCustomer(uuid:string, page: number, size: number): Observable<SearchWorkoutPlansDTO>{
        const url = `${this.apiUrl}/all/${uuid}`;
        const params = {page:page, size:size};
        return this.http.get<SearchWorkoutPlansDTO>(url, {params:params});
    }
}
