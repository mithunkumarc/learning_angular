import { Component, OnInit } from '@angular/core';
import { UtilService } from './../service/util.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = "My Calculator";
  color;
  brand = null;
  model = NaN;
  constructor(public utilService: UtilService) { }

  ngOnInit() {
  }

  public add(a: number, b: number): number {
    return a + b;
  }

  public isWorking(): boolean {
    return true;
  }

  public solarCharging(): any{
    throw new Error("battery damaged");
  }

  public getDataFromService() {
    return this.utilService.getData();
  }

}
