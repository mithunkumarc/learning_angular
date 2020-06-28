import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  userData: any;
  observable: Observable<any>;
  constructor(public http: HttpClient) {
    this.observable = this.getObservable()
  }

  ngOnInit() {
    this.observable.subscribe(data => {
      this.userData = data;
    })
  }

  // below code must be in service
  getObservable(): Observable<any> {
  return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
