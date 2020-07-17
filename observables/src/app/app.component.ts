import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  posts: any;
  constructor(public http: HttpClient) { 
  }

  ngOnInit() {
    //  this.getObservable()
    //  .subscribe(data => {
    //     this.posts = data;
    // },() => this.onError(), () => this.onComplete());
  
    //second way, readable
      this.getObservable().subscribe(
        (data) => {this.posts = data},  // next
        (e) => this.onError(e),
        () => this.onComplete()
      )
  }

  onError(e: any) {
    //if have entered wrong url or if call not successfull
    //enter wrong url to see catching error
    console.log(e.statusText)
  }

  // on web service is complete , you can continue your task
  onComplete() {
    console.log("tasks after web service call")
  }

  getObservable(): Observable<any> {
    // below code must be in service
      return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
