###  search data is entered in input box depending on search data, list is filtered


app.component.ts

          import { Component } from '@angular/core';

          @Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: [ './app.component.css' ]
          })
          export class AppComponent  {
            days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
            filteredDays = this.days; // before user entering search data, filteres is same as days
            search(event) {    
              // when user enters search data, apply filter
              if(event.target.value){
                this.filteredDays = this.days.filter(day => day.includes(event.target.value));
              }else {
                // if searchdata is emtpy, show full list
                this.filteredDays = this.days;
              }
            }
          }

app.component.html

          <div class="container space">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">            
                <input type="text" class="form-control" placeholder="search day" 
                (keyup)="search($event)"/>
                <ul class="list-group" *ngFor="let day of filteredDays">
                  <li class="list-group-item">{{day}}</li>
                </ul>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>

app.component.css

        .space {
          margin-top: 10px;
        }
