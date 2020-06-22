import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  constructor() {
    console.log("hello service");
  }
  run(): string {
    return "service running";
  }
}