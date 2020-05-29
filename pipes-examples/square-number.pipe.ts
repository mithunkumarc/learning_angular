import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'squarenumberpipe'})
export class SquareNumberPipe implements PipeTransform {
  transform(value: number, power: number): number {
    return Math.pow(value, power);
  }
}