import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  getData(msg: string) {
    return this.getHelperData(msg);
  }

  getHelperData(msg: string) {
    return msg;
  }

}
