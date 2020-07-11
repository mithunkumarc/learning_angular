
app.component.html

          <p>counter value : {{counter}}</p>

          <ng-container [ngSwitch]='counter'>
            <ng-container *ngSwitchCase="1">one</ng-container>
            <ng-container *ngSwitchCase="2">two</ng-container>
            <ng-container *ngSwitchCase="3">three</ng-container>
            <ng-container *ngSwitchCase="counter > 3 && counter < 10 ? counter : -1">4-9</ng-container>     <!-- range -->
            <ng-container *ngSwitchDefault>whatever</ng-container>                                          <!-- default value -->
          </ng-container>

          <br/>
          <button (click)="changeCase()">click</button>


app.component.ts

          import { Component } from '@angular/core';
          @Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: [ './app.component.css' ]
          })
          export class AppComponent  {
            counter = 0;
            changeCase() {
              this.counter++;
            }
          }
