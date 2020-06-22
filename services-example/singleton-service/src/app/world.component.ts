import {Component} from '@angular/core';
import {HelloService} from './hello.service';

@Component({
  selector: 'world',
  template: `<p>world component</p>`
})
export class WorldComponent {
  constructor(hs: HelloService){
    console.log("world comp :",hs.run());
  }
}