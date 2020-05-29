import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'multiplespipe'})
export class MultiplesPipe implements PipeTransform {
  transform(value: number, start: number, end: number): number[] {
    let multiples = [];
    for( let i = start ; i <= end; i++){
      multiples.push(value * i);
    }
    return multiples as number[];
  }
}