import { Component, OnInit } from '@angular/core';
import { Category } from './model/category.model';
import { WorkoutService } from './workout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

    cat: Category = new Category();
    categories: Array<Category> = []

    constructor(private workoutService: WorkoutService, private router: Router) { }

    ngOnInit() {

        this.workoutService.fetchAllCategories()
            .then(data => {
                console.log(data)
                this.categories = data
            })

    }

    addCategory(categoryStr: string) {
        console.log(categoryStr)
        this.cat.category = categoryStr;
        this.cat.id = null;

        this.workoutService.addCategory(this.cat)
            .then(data => {
                console.log(data)
            })

        this.router.navigate(['category']);
    }

}