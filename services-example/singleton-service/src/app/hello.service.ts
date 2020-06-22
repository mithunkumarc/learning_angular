import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//looks like optional
})
export class HelloService {
  constructor() {
    console.log("hello service constructor");
  }
  run() {
    return "service running";
  }
}