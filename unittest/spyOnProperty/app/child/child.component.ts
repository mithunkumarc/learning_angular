import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  private _name: string;
  
  set name(data: string) {
    this._name = data;
  }
  get name() {
    return this._name;
  }

  getData() {
    return this.name;
  }
}
