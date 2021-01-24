import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-jasmine';
  receiveMessage(event){
    console.log("inside app component : ", event);
  }
}
