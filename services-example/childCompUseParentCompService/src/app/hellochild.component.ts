import {Component} from '@angular/core';
import { HelloService} from './hello.service';

@Component({
  selector: 'hello-child',
  template: `hello child component`
})
export class HelloChildComponent {
  constructor(hs : HelloService) {
    console.log("hello child : ",hs.run());
  }
}