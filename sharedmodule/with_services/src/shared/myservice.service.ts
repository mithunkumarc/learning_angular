import { Injectable } from "@angular/core";
@Injectable()
export class MyService {
  count = 0;
  constructor() {
    console.log("my service");
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
}
