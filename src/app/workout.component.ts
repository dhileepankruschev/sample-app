import { Component, OnInit, Input } from '@angular/core';
import { Workout } from './model/workout.model';
import { WorkoutService } from './workout.service';
import { Http } from '@angular/http';

@Component({
    selector: 'app-workout',
    template: `
    <div style="width: 50%;border-style: solid; border-color: black; padding: 10px; margin: 10px" class="card">
        <div class="card-body">
            <p class="card-text">{{summary}}</p>
            <button style="margin: 10px" type="button" class="btn btn-danger" (click)="editWorkout()">Edit</button>
            <button style="margin: 10px" type="button" class="btn btn-danger" (click)="deleteWorkout()">Delete</button>
            <button style="margin: 10px" type="button" class="btn btn-danger" (click)="startWorkout()">Start</button>
            <button style="margin: 10px" type="button" class="btn btn-danger" (click)="endWorkout()">End</button>
        </div>
    </div>
    `
})
export class WorkoutComponent implements OnInit {

    @Input("summary") summary: string;

    constructor() { }

    ngOnInit() {

    }

    editWorkout() {
        console.log('Editing Workout')
    }

    deleteWorkout() {
        console.log('Deleting Workout')
    }

    startWorkout() {
        console.log('Starting Workout')
    }

    endWorkout() {
        console.log('Ending Workout')
    }

}