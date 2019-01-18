import { Component, OnInit } from '@angular/core';
import { Category } from './model/category.model';
import { WorkoutService } from './workout.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

    cat: Category = new Category();

    constructor(private workoutService: WorkoutService) { }

    ngOnInit() {

    }

    addCategory(categoryStr: string) {
        console.log(categoryStr)
        this.cat.category = categoryStr;
        this.cat.id = null;

        this.workoutService.addCategory(this.cat)
            .then(data => {
                console.log(data)
            })
    }

}