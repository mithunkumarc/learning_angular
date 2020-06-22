import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  constructor() {
    console.log("hello service constructor");
  }
  run() {
    return "service running";
  }
}