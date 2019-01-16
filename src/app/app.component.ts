import { Component } from '@angular/core';
import { Workout } from './model/workout.model';
import { Http } from '@angular/http';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workout Tracker';
  workouts: Array<Workout> = []

  constructor(private http: Http, private workoutService: WorkoutService) {

  }

  ngOnInit() {

    this.workoutService.fetchAllCourses()
      .then(data => {
        console.log(data)
        this.workouts = data
      })

  }

}
