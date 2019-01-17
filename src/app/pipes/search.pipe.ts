import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../model/workout.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(workouts: Array<Workout>, name: string) {

    return workouts.filter(workout => workout.title.toLowerCase().includes(name.toLowerCase()))
  }

}
