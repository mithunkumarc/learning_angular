import { Component } from '@angular/core';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  observable: Observable<any>;
  constructor(public http: HttpClient) {
    this.observable = this.getObservable()
  }
  getObservable(): Observable<any> {
  return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
