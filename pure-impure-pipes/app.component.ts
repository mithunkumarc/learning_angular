import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  data = [1,2,3,4,5,6,7,8];
  number = 5;

  changeData() {
    this.data.push(11);
    this.data.push(12);
    console.log('after adding to data : ',this.data);
  }
}
