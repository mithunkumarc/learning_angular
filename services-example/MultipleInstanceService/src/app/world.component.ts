import {Component} from '@angular/core';
import {HelloService} from './hello.service';

@Component({
  selector: 'world',
  template: `<p>world component</p>`,
  providers: [HelloService]
})
export class WorldComponent {
  constructor(hs: HelloService){
    console.log("hello comp :",hs.run());
  }
}