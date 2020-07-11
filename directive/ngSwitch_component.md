app.component.html

            <p>{{view}}</p>

            <ng-container [ngSwitch]='view'>
              <ng-container *ngSwitchCase="'first'">
                <first></first>
              </ng-container>
              <ng-container *ngSwitchCase="'second'">
                <second></second>
              </ng-container>
            </ng-container>

            <br/>
            <button (click)="changeCase('first')">first</button>
            <button (click)="changeCase('second')">second</button>


app.component.ts

              import { Component } from '@angular/core';

              @Component({
                selector: 'my-app',
                templateUrl: './app.component.html',
                styleUrls: [ './app.component.css' ]
              })
              export class AppComponent  {
                //toggle = true;
                view = "first"
                changeCase(view: string) {
                  this.view = view;
                }
              }
