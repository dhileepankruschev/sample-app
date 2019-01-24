import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Category } from './model/category.model';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {



  constructor(private http: Http) {

  }

  /*public getJSON(): Observable<any> {
    return this.http.get("/assets/workouts.json")
  }*/

  /*getJSON(): Promise<any>{
        return this.http.get("/assets/workouts.json")
        .toPromise()
        .then(res=> res.json())
    }*/

  fetchAllCourses(): Promise<any> {
    return this.http.get("http://localhost:8080/workout/fetchall")
      .toPromise()
      .then(res => res.json())
  }

  addCategory(category: Category): Promise<any> {
    console.log('addCategory cat' + category.category)
    console.log('addCategory id' + category.id)
    return this.http.post("http://localhost:8080/category/save", category)
      .toPromise()
      .then(res => "Category " + category.category + " added successfully")
  }

  fetchAllCategories(): Promise<any> {
    return this.http.get("http://localhost:8080/category/fetchall")
      .toPromise()
      .then(res => res.json())
  }

}
