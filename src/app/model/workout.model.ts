import { Category } from './category.model';

export class Workout {

    public id: number;
    public title: string;
    public note: string;
    public calories: number;
    public category: Category;

    constructor() {

    }

}