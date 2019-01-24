import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../model/category.model';

@Pipe({
  name: 'catsearch'
})
export class CatSearchPipe implements PipeTransform {

  transform(categories: Array<Category>, name: string) {

    return categories.filter(category => category.category.toLowerCase().includes(name.toLowerCase()))
  }

}
