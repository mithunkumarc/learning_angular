import { Component, Input } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  `,
  styles: [`h1 { font-family: Lato; }`],
  providers: [HelloService]
})
export class HelloComponent  {
  @Input() name: string;
  constructor(hs : HelloService){
    console.log("hello comp : ", hs.run())
  }
}
