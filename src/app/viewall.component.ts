import { Component, OnInit } from '@angular/core';
import { WorkoutService } from './workout.service';
import { Workout } from './model/workout.model';

@Component({
    selector: 'view-all',
    template: `
    <div class="row" style="padding: 10px">
    <div class="input-group mb-3">
      <div style="font-size: 30px;font-weight: bold" class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Search Workout</span>
      </div>
      <input style="width: 50%" type="text" #search (keyup)="0" class="form-control" placeholder="Enter a workout to search" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>

  </div>

  <div class="row">
    <app-workout *ngFor="let workout of workouts | search:search.value" summary={{workout.title}}></app-workout>
  </div>
    `
})
export class ViewWorkoutComponent implements OnInit {

    workouts: Array<Workout> = []

    constructor(private workoutService: WorkoutService) { }

    ngOnInit() {

        this.workoutService.fetchAllCourses()
            .then(data => {
                console.log(data)
                this.workouts = data
            })
    }

}