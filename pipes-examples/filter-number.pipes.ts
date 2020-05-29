import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'filterevennumberpipe'})
export class FilterEvenNumberPipe implements PipeTransform {
  transform(numbers: number[], exponent1?: any,exponent2?: any): number[] {
    return numbers.filter(n => n % 2 == 0);
  }
  constructor(){
    console.log("filter number constructor");
  }
}