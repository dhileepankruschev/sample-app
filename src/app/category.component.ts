import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category',
    template: `
      <h3 style="padding-top: 10px; padding-left: 10px">
        Add Category
      </h3>
    <div>
        <input style="width: 50%; margin: 10px" type="text" #category (keyup)="0" class="form-control" placeholder="Enter a category to add" aria-label="Category"
            aria-describedby="basic-addon1">
        <input type="button" value="Add" style="margin: 10px">
    </div>
    `
})
export class CategoryComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}