#### if operator applied to observable , it will be reflected in all subscriber
#### if many subscriber need same functionality , then apply operator to observable instead on subscribers

#### app.component.ts

        import { Component, OnInit } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { Observable, of } from 'rxjs';
        import { map } from 'rxjs/operators';

        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent implements OnInit{
          userObservable: Observable<any>;
          users: any;
          constructor(public httpclient: HttpClient) {
            this.userObservable  = this.getData();
          }
          ngOnInit() {
            // applying map operator on observalbe or u can say before subscriber
            map(users => this.sayhi(users))(this.userObservable).subscribe(
              data => {this.users = data},
              err => {},
              () => {}
              )
          }
          getData() {
            return this.httpclient.get("https://jsonplaceholder.typicode.com/users");
          }

          sayhi(u: any) {
          u.forEach(user => user.name = "hi, "+user.name);
          return u;
        }
        }

#### app.component.html

        <ng-container *ngFor="let u of users">
          <div>{{u.name}}</div>
        </ng-container>

#### app.module.ts

        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { HttpClientModule } from '@angular/common/http';

        @NgModule({
          imports:      [ BrowserModule, HttpClientModule ],
          declarations: [ AppComponent ],
          bootstrap:    [ AppComponent ]
        })
        export class AppModule { }
