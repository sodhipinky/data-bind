import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(gender: number): String {
    return gender === 0 ? 'Male' : 'Female';
  }

}
