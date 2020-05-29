import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {
    name: 'filteroddnumberpipe',
    pure: false  //default is true, 
    // if change it to false and click button , u can see data updated
  }
  )
export class FilterOddNumberPipe implements PipeTransform {
  transform(numbers: number[], exponent1?: any,exponent2?: any): number[] {
    return numbers.filter(n => n % 2 == 0);
  }
  constructor(){
    console.log("filter number constructor");
  }
}