import { Component, OnInit } from '@angular/core';
import { WorkoutService } from './workout.service';
import { Category } from './model/category.model';
import { Workout } from './model/workout.model';

@Component({
    selector: 'app-createcomponent',
    templateUrl: './createworkout.component.html'
})
export class CreateWorkoutComponent implements OnInit {

    categories: Array<Category> = []

    optionSelected: any;

    workout: Workout = new Workout();
    category: Category = new Category();

    constructor(private workoutService: WorkoutService) { }

    ngOnInit() {

        this.fetchAllCategories();

    }

    fetchAllCategories() {
        this.workoutService.fetchAllCategories()
            .then(data => {
                console.log('fetch all ' + data)
                this.categories = data
            })
    }

    createworkout(title: string, note: string, calories: number) {
        console.log(title, note, calories, this.optionSelected);

        this.workout.id = null;
        this.workout.title = title;
        this.workout.note = note;
        this.workout.calories = calories;

        this.category.id = this.optionSelected;
        this.workout.category = this.category;

        this.workoutService.addWorkout(this.workout)
            .then(data => {
                console.log('Workout ' + data);
            })


    }

    onOptionSelected(event) {
        console.log(event); //option value will be sent as event
        this.optionSelected = event;
    }

}