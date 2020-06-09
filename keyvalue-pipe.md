#### Transforms Object or Map into an array of key value pairs.

#### app-component.ts

          import { Component } from '@angular/core';

          @Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: [ './app.component.css' ]
          })
          export class AppComponent  {
            // object
            objectData = {name:'tom',proffesion:'actor'}
            // map
            cities:Map<number,string> = new Map();
            constructor(){
              this.cities.set(1,"bagalkot");
              this.cities.set(2,"chamarajanagar");
              this.cities.set(3,"yadgiri");
            }
          }


#### app-component.html

        <div><b>using keyvalues pipe to read object</b></div>
        <div *ngFor="let k of objectData | keyvalue">
          {{k.key}} <i>{{k.value}}</i>
        </div>

        <div><b>using keyvalues pipe to read map</b></div>

        <div *ngFor="let m of cities | keyvalue">
          {{m.key}} <i>{{m.value}}</i>
        </div>

