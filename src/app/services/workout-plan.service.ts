import {Injectable} from '@angular/core';
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
        const url = `${this.apiUrl}/all`;
        return this.http.get<SearchWorkoutPlansDTO>(url, {params:params});
    }

    uploadWorkoutPlan(file:File, uuid:string): Observable<WorkoutPlanDTO>{
        const url = `${this.apiUrl}/${uuid}`;
        const formData: FormData = new FormData();
        formData.set("file", file, "");
        return this.http.post<WorkoutPlanDTO>(url, formData, {headers:new HttpHeaders()});
    }

    workoutPlansOfCustomer(uuid:string, page: number, size: number): Observable<SearchWorkoutPlansDTO>{
        const url = `${this.apiUrl}/all/${uuid}`;
        const params = {page:page, size:size};
        return this.http.get<SearchWorkoutPlansDTO>(url, {params:params});
    }
}
