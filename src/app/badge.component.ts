import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-badge',
    template: `<button type="button" class="btn btn-primary" (click)="handleClick()">
        Counter <span class="badge badge-light">{{count}}</span>
    </button>`
})
export class BadgeComponent implements OnInit {

    @Input("count") count: number;

    constructor() { }

    ngOnInit() {

    }

    handleClick(){
        this.count ++;
    }

}
