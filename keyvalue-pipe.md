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

---

#### keyvalue interface : this interface has two properties key and value of generic type

#### app-comp.ts

          import { Component } from '@angular/core';
          import { KeyValue } from '@angular/common';

          @Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: [ './app.component.css' ]
          })
          export class AppComponent  {
            cities: KeyValue<number, string>[] = [];
            constructor() {
              this.cities.push({key:11,value:"afzalpur"});
              this.cities.push({key:12,value:"ibrahimpur"});
              this.cities.push({key:13,value:"sira"});
              this.cities.push({key:14,value:"bhadravati"});
            }
          }

#### app-comp.html

          <!-- 
            no need of key value pipe in this case 
            since each object is of type KeyValue
          -->
          <div *ngFor="let kv of cities">
            {{kv.key }} {{kv.value | uppercase}} 
          </div>

