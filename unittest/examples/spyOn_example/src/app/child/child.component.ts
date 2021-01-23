import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  getData() {
    return this.getHelperData("hello");
  }

  getHelperData(msg: string) {
    return msg+" data";
  }

}
