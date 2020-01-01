import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  arrObj = [
    "First" ,
    "Second" ,
    "Third" ,
    "Fourth" ,
    "Fifth" ,
    "Sixth" ,
  ];

  trackByFn(index: any, item: any) {
   return index;
}
}
