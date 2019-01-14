import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: Http) {
    
  }

  /*public getJSON(): Observable<any> {
    return this.http.get("/assets/workouts.json")
  }*/

  getJSON(): Promise<any>{
        return this.http.get("/assets/workouts.json")
        .toPromise()
        .then(res=> res.json())
    }
}
